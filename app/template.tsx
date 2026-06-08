'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        if (!lenis) return;

        // Only skip scroll-to-top when ALL three conditions are true:
        // 1. We're mounting on the home route
        // 2. The flag was set by ProjectList when the user left home
        // 3. There is an actual non-zero position to restore
        //
        // For every other route (project pages, etc.) we always scroll to top,
        // even if restoreScroll happens to be stale in sessionStorage.
        const isHome = pathname === '/';
        const shouldRestore =
            sessionStorage.getItem('restoreScroll') === 'true';
        const savedY = parseFloat(
            sessionStorage.getItem('homeScrollY') || '0',
        );

        if (isHome && shouldRestore && savedY > 0) {
            // ProjectList's restore effect will handle the actual scroll.
            return;
        }

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
