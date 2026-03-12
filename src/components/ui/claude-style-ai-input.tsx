"use client";

import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Plus,
  SlidersHorizontal,
  ArrowUp,
  X,
  FileText,
  ImageIcon,
  Video,
  Music,
  Archive,
  ChevronDown,
  Check,
  Loader2,
  AlertCircle,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FileWithPreview {
  id: string;
  file: File;
  preview?: string;
  type: string;
  uploadStatus: "pending" | "uploading" | "complete" | "error";
  uploadProgress?: number;
  abortController?: AbortController;
  textContent?: string;
}

export interface PastedContent {
  id: string;
  content: string;
  timestamp: Date;
  wordCount: number;
}

export interface ModelOption {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

interface ChatInputProps {
  onSendMessage?: (message: string, files: FileWithPreview[], pastedContent: PastedContent[]) => void;
  disabled?: boolean;
  placeholder?: string;
  maxFiles?: number;
  maxFileSize?: number;
  acceptedFileTypes?: string[];
  models?: ModelOption[];
  defaultModel?: string;
  onModelChange?: (modelId: string) => void;
}

const MAX_FILES = 10;
const MAX_FILE_SIZE = 50 * 1024 * 1024;
const PASTE_THRESHOLD = 200;
const DEFAULT_MODELS_INTERNAL: ModelOption[] = [
  { id: "claude-sonnet-4", name: "Claude Sonnet 4", description: "Balanced model", badge: "Latest" },
  { id: "claude-opus-3.5", name: "Claude Opus 3.5", description: "Highest intelligence" },
  { id: "claude-haiku-3", name: "Claude Haiku 3", description: "Fastest responses" },
];

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const getFileTypeLabel = (type: string): string => {
  const parts = type.split("/");
  let label = parts[parts.length - 1].toUpperCase();
  if (label.length > 7 && label.includes("-")) label = label.substring(0, label.indexOf("-"));
  if (label.length > 10) label = label.substring(0, 10) + "...";
  return label;
};

const isTextualFile = (file: File): boolean => {
  const textualTypes = ["text/", "application/json", "application/xml", "application/javascript", "application/typescript"];
  const textualExtensions = ["txt","md","py","js","ts","jsx","tsx","html","htm","css","json","xml","yaml","yml","csv","sql","sh","php","rb","go","java","c","cpp","rs","swift","vue","svelte","config","ini","toml","log","gitignore","dockerfile","makefile","readme"];
  const isTextualMimeType = textualTypes.some((type) => file.type.toLowerCase().startsWith(type));
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  const isTextualExtension = textualExtensions.includes(extension) || file.name.toLowerCase().includes("readme") || file.name.toLowerCase().includes("dockerfile");
  return isTextualMimeType || isTextualExtension;
};

const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve((e.target?.result as string) || "");
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
};

const getFileExtension = (filename: string): string => {
  const extension = filename.split(".").pop()?.toUpperCase() || "FILE";
  return extension.length > 8 ? extension.substring(0, 8) + "..." : extension;
};

const ModelSelectorDropdown: React.FC<{ models: ModelOption[]; selectedModel: string; onModelChange: (modelId: string) => void }> = ({ models, selectedModel, onModelChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedModelData = models.find((m) => m.id === selectedModel) || models[0];
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <Button variant="ghost" size="sm" className="h-9 px-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-700" onClick={() => setIsOpen(!isOpen)}>
        <span className="truncate max-w-[150px] sm:max-w-[200px]">{selectedModelData.name}</span>
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-72 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-20 p-2">
          {models.map((model) => (
            <button key={model.id} className={cn("w-full text-left p-2.5 rounded-md hover:bg-zinc-700 transition-colors flex items-center justify-between", model.id === selectedModel && "bg-zinc-700")} onClick={() => { onModelChange(model.id); setIsOpen(false); }}>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-100">{model.name}</span>
                  {model.badge && <span className="px-1.5 py-0.5 text-xs bg-blue-500/20 text-blue-300 rounded">{model.badge}</span>}
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">{model.description}</p>
              </div>
              {model.id === selectedModel && <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const ClaudeChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = "How can I help you today?",
  maxFiles = MAX_FILES,
  maxFileSize = MAX_FILE_SIZE,
  acceptedFileTypes,
  models = DEFAULT_MODELS_INTERNAL,
  defaultModel,
  onModelChange,
}) => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [pastedContent, setPastedContent] = useState<PastedContent[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedModel, setSelectedModel] = useState(defaultModel || models[0]?.id || "");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const maxHeight = Number.parseInt(getComputedStyle(textareaRef.current).maxHeight, 10) || 120;
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`;
    }
  }, [message]);

  const handleFileSelect = useCallback((selectedFiles: FileList | null) => {
    if (!selectedFiles) return;
    const availableSlots = maxFiles - files.length;
    if (availableSlots <= 0) return;
    const filesToAdd = Array.from(selectedFiles).slice(0, availableSlots);
    const newFiles = filesToAdd.filter((file) => file.size <= maxFileSize).map((file) => ({
      id: String(Math.random()),
      file,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
      type: file.type || "application/octet-stream",
      uploadStatus: "pending" as const,
      uploadProgress: 0,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    newFiles.forEach((fileToUpload) => {
      if (isTextualFile(fileToUpload.file)) {
        readFileAsText(fileToUpload.file).then((textContent) => {
          setFiles((prev) => prev.map((f) => f.id === fileToUpload.id ? { ...f, textContent } : f));
        });
      }
      setFiles((prev) => prev.map((f) => f.id === fileToUpload.id ? { ...f, uploadStatus: "uploading" } : f));
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 20 + 5;
        if (progress >= 100) {
          clearInterval(interval);
          setFiles((prev) => prev.map((f) => f.id === fileToUpload.id ? { ...f, uploadStatus: "complete", uploadProgress: 100 } : f));
        } else {
          setFiles((prev) => prev.map((f) => f.id === fileToUpload.id ? { ...f, uploadProgress: progress } : f));
        }
      }, 150);
    });
  }, [files.length, maxFiles, maxFileSize]);

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove?.preview) URL.revokeObjectURL(fileToRemove.preview);
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const handleSend = useCallback(() => {
    if (disabled || (!message.trim() && files.length === 0 && pastedContent.length === 0)) return;
    onSendMessage?.(message, files, pastedContent);
    setMessage("");
    files.forEach((file) => { if (file.preview) URL.revokeObjectURL(file.preview); });
    setFiles([]);
    setPastedContent([]);
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }, [message, files, pastedContent, disabled, onSendMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); handleSend(); }
  }, [handleSend]);

  const hasContent = message.trim() || files.length > 0 || pastedContent.length > 0;
  const canSend = hasContent && !disabled && !files.some((f) => f.uploadStatus === "uploading");

  return (
    <div className="relative w-full max-w-2xl mx-auto" onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }} onDrop={(e) => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files) handleFileSelect(e.dataTransfer.files); }}>
      <div className="bg-[#30302E] border border-zinc-700 rounded-xl shadow-lg items-end gap-2 min-h-[150px] flex flex-col">
        <textarea ref={textareaRef} value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} placeholder={placeholder} disabled={disabled} className="flex-1 min-h-[100px] w-full p-4 focus:outline-none border-none outline-none max-h-[120px] resize-none bg-transparent text-zinc-100 focus-visible:ring-0 placeholder:text-zinc-500 text-sm sm:text-base" rows={1} />
        <div className="flex items-center gap-2 justify-between w-full px-3 pb-1.5">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="h-9 w-9 p-0 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700" onClick={() => fileInputRef.current?.click()} disabled={disabled || files.length >= maxFiles}>
              <Plus className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 p-0 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700" disabled={disabled}>
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            {models && models.length > 0 && <ModelSelectorDropdown models={models} selectedModel={selectedModel} onModelChange={(id) => { setSelectedModel(id); onModelChange?.(id); }} />}
            <Button size="icon" className={cn("h-9 w-9 p-0 flex-shrink-0 rounded-md transition-colors", canSend ? "bg-amber-600 hover:bg-amber-700 text-white" : "bg-zinc-700 text-zinc-500 cursor-not-allowed")} onClick={handleSend} disabled={!canSend}>
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <input ref={fileInputRef} type="file" multiple className="hidden" accept={acceptedFileTypes?.join(",")} onChange={(e) => { handleFileSelect(e.target.files); if (e.target) e.target.value = ""; }} />
    </div>
  );
};
