'use client';
import { cn } from '@/lib/utils';
import { IArchitectureDiagram } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

interface Props {
    diagram: IArchitectureDiagram;
}

const variantClasses: Record<string, string> = {
    primary: 'border-primary/40 bg-primary/5',
    secondary: 'border-secondary/40 bg-secondary/5',
    default: 'border-border bg-background-light/60',
};

const ArchitectureDiagram = ({ diagram }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Animate nodes + connectors every time the panel opens
    useGSAP(
        () => {
            if (!isOpen) return;

            gsap.fromTo(
                '.arch-node',
                { opacity: 0, y: 16 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.35,
                    ease: 'power2.out',
                },
            );

            gsap.fromTo(
                '.arch-connector',
                { scaleY: 0, opacity: 0 },
                {
                    scaleY: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.25,
                    ease: 'power2.out',
                    delay: 0.05,
                    transformOrigin: 'top center',
                },
            );
        },
        { scope: containerRef, dependencies: [isOpen] },
    );

    return (
        <div ref={containerRef} className="mt-8 border border-border">
            {/* Toggle button */}
            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-background-light/40 transition-colors group"
            >
                <span className="font-anton text-lg uppercase tracking-widest group-hover:text-primary transition-colors duration-200">
                    Architecture
                </span>
                <ChevronDown
                    size={18}
                    className={cn(
                        'text-muted-foreground transition-transform duration-300',
                        { 'rotate-180 text-primary': isOpen },
                    )}
                />
            </button>

            {/* Collapsible diagram */}
            <div
                className={cn(
                    'overflow-hidden transition-[max-height] duration-500 ease-in-out',
                    isOpen ? 'max-h-[2000px]' : 'max-h-0',
                )}
            >
                <div className="px-6 pb-8 pt-2">
                    {/* Flow diagram — vertically centred, max-width kept readable */}
                    <div className="flex flex-col items-center py-4 mx-auto w-full max-w-[320px]">
                        {diagram.layers.map((layer, idx) => (
                            <div
                                key={layer.id}
                                className="flex flex-col items-center w-full"
                            >
                                {/* Node */}
                                <div
                                    className={cn(
                                        'arch-node w-full px-4 py-3 border text-center',
                                        variantClasses[
                                            layer.variant ?? 'default'
                                        ],
                                    )}
                                >
                                    <p className="text-sm font-medium">
                                        {layer.icon && (
                                            <span
                                                className="mr-1.5"
                                                aria-hidden="true"
                                            >
                                                {layer.icon}
                                            </span>
                                        )}
                                        {layer.label}
                                    </p>
                                    {layer.sublabel && (
                                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                                            {layer.sublabel}
                                        </p>
                                    )}
                                </div>

                                {/* Connector arrow between nodes */}
                                {idx < diagram.layers.length - 1 && (
                                    <div className="arch-connector flex flex-col items-center">
                                        {/* Vertical stem */}
                                        <div className="w-px h-5 bg-primary/35" />
                                        {/* Arrowhead (CSS triangle) */}
                                        <div
                                            className="w-0 h-0"
                                            style={{
                                                borderLeft:
                                                    '5px solid transparent',
                                                borderRight:
                                                    '5px solid transparent',
                                                borderTop:
                                                    '7px solid hsl(140 100% 47% / 0.35)',
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureDiagram;
