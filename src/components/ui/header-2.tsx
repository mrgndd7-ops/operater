'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'About', href: '#about' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Pricing', href: '#pricing' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto w-full max-w-[100rem] border-b border-transparent md:rounded-[2rem] md:border md:transition-all md:ease-out max-md:bg-black',
                {
                    'bg-black/80 supports-[backdrop-filter]:bg-black/60 border-white/10 backdrop-blur-lg md:top-4 md:max-w-7xl md:shadow':
                        scrolled && !open,
                    'bg-black/90': open,
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
                    { 'md:px-2': scrolled },
                )}
            >
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <span
                        className="text-lg font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-garet), sans-serif' }}
                    >
                        operater
                    </span>
                </a>

                {/* Desktop — links centered, CTA right */}
                <div className="hidden items-center gap-2 md:flex absolute left-1/2 -translate-x-1/2">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            className="px-6 py-2 text-sm text-[#D9D9D9] whitespace-nowrap"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex">
                    <Button className="bg-white hover:bg-white text-black border-0 text-sm rounded-full px-5">
                        Join Waitlist
                    </Button>
                </div>

                {/* Mobile toggle */}
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setOpen(!open)}
                    className="md:hidden border-white/20 bg-transparent text-white hover:bg-transparent"
                >
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>

            {/* Mobile menu */}
            <div
                className={cn(
                    'bg-black/95 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/10 md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div
                    data-slot={open ? 'open' : 'closed'}
                    className={cn(
                        'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
                        'flex h-full w-full flex-col justify-between gap-y-2 p-4',
                    )}
                >
                    <div className="grid gap-y-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className="px-4 py-2 text-sm text-[#D9D9D9]"
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <Button className="w-full bg-white hover:bg-white text-black border-0">
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </header>
    );
}
