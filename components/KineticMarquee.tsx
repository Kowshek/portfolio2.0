'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
    text: string;
}

const KineticMarquee = ({ text }: Props) => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!textRef.current || !marqueeRef.current) return;
            
            // Duplicate text for infinite scrolling effect
            const texts = textRef.current.children;
            const singleItemWidth = texts[0].clientWidth;

            gsap.set(textRef.current, {
                x: 0,
            });

            // Basic infinite animation
            const tween = gsap.to(textRef.current, {
                x: -singleItemWidth,
                ease: 'none',
                repeat: -1,
                duration: 5, // Base speed
            });

            // Fast, optimized setter for timeScale
            const timeScaleTo = gsap.quickTo(tween, "timeScale", { duration: 0.2, ease: "power2.out" });

            // Tie speed to scroll velocity
            ScrollTrigger.create({
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    const velocity = self.getVelocity();
                    // increase timeScale based on velocity. Max timescale 8.
                    let targetTimeScale = 1 + Math.abs(velocity / 150);
                    targetTimeScale = Math.min(targetTimeScale, 8); // clamp
                    
                    timeScaleTo(targetTimeScale);
                }
            });
        },
        { scope: marqueeRef }
    );

    return (
        <div 
            ref={marqueeRef} 
            className="w-full overflow-hidden border-y border-border py-4 bg-background-light/30 flex pointer-events-none"
        >
            <div ref={textRef} className="flex whitespace-nowrap will-change-transform">
                {/* 10 instances to ensure it spans the screen and loops smoothly */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 px-4 shrink-0">
                        <span className="font-anton text-xl lg:text-2xl text-primary/80 tracking-wider">
                            {text}
                        </span>
                        <span className="font-anton text-xl lg:text-2xl text-muted-foreground/30">
                            •
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KineticMarquee;
