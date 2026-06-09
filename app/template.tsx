'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Template({ children }: { children: React.ReactNode }) {
    const lenis = useLenis();
    const pathname = usePathname();
    const hasHandledScroll = useRef(false);

    // Prevent browser from doing its own scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        if (!lenis) return;
        if (hasHandledScroll.current) return;
        hasHandledScroll.current = true;

        if (pathname === '/') {
            const savedY = parseFloat(
                sessionStorage.getItem('homeScrollY') || '0',
            );
            if (savedY > 0) {
                // The page height might be too small initially (e.g. 1000px), causing Lenis
                // to clip the scroll. As components and images load, the DOM expands.
                // We repeatedly enforce the scroll position for 500ms while the GSAP overlay
                // is still covering the screen.
                let attempts = 0;
                const interval = setInterval(() => {
                    window.scrollTo(0, savedY);
                    if (lenis) lenis.scrollTo(savedY, { immediate: true });
                    ScrollTrigger.refresh();
                    
                    attempts++;
                    // Stop after ~500ms or if we successfully reached the exact scroll position
                    if (attempts > 10) {
                        clearInterval(interval);
                    }
                }, 50);

                sessionStorage.removeItem('homeScrollY');
                return;
            }
        }

        // Every other page (or home with no saved position) → top
        lenis.scrollTo(0, { immediate: true });
    }, [lenis, pathname]);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.2,
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.2,
            })
            .to('.page-transition', {
                yPercent: -100,
                onComplete: () => {
                    gsap.set('.page-transition', { display: 'none' });
                }
            });
    });

    return (
        <div>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
            </div>

            {children}
        </div>
    );
}
