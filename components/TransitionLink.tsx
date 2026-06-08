'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Link> {
    back?: boolean;
}

gsap.registerPlugin(useGSAP);

const TransitionLink = ({
    href,
    onClick,
    children,
    back = false,
    ...rest
}: Props) => {
    const router = useRouter();

    const { contextSafe } = useGSAP(() => {});

    const handleLinkClick = contextSafe(
        async (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            gsap.set('.page-transition', { yPercent: 100 });
            gsap.set('.page-transition--inner', { yPercent: 100 });

            const tl = gsap.timeline();

            tl.to('.page-transition', {
                yPercent: 0,
                duration: 0.3,
            });

            tl.then(() => {
                if (back) {
                    // Signal home page to restore its saved scroll position.
                    sessionStorage.setItem('restoreScroll', 'true');
                    router.back();
                } else if (href) {
                    // Capture scroll position NOW — before router.push triggers
                    // Next.js's internal scroll reset. By the time React unmounts
                    // the old page, window.scrollY is already 0, so we can't
                    // rely on cleanup effects to save an accurate value.
                    if (window.location.pathname === '/') {
                        sessionStorage.setItem(
                            'homeScrollY',
                            String(Math.round(window.scrollY)),
                        );
                        sessionStorage.setItem('restoreScroll', 'true');
                    }
                    router.push(href.toString());
                } else if (onClick) {
                    onClick(e);
                }
            });
        },
    );

    return (
        <Link href={href} {...rest} onClick={handleLinkClick}>
            {children}
        </Link>
    );
};

export default TransitionLink;
