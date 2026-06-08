'use client';
import SectionTitle from '@/components/SectionTitle';
import { HIGHLIGHTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Highlights = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Entrance animation
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 60%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.highlight-item', {
                y: 50,
                opacity: 0,
                stagger: 0.2,
            });
        },
        { scope: containerRef },
    );

    // Exit animation
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="highlights">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Selected Highlights" />

                {/* Grid separated by 1px border colour — no gap, just dividers */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
                    {HIGHLIGHTS.map((item) => (
                        <div
                            key={item.label}
                            className="highlight-item border-b border-r border-border p-7 md:p-8 hover:bg-background-light/30 transition-colors duration-300 group"
                        >
                            <p className="text-4xl sm:text-5xl font-anton text-primary mb-2 group-hover:scale-105 transition-transform duration-300 origin-left inline-block">
                                {item.value}
                            </p>
                            <p className="text-base font-medium mb-1.5">
                                {item.label}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
