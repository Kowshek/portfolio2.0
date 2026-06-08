'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
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
    const lenis = useLenis();

    const { contextSafe } = useGSAP(() => {});

    const handleLinkClick = contextSafe(
        async (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            // Save scroll position NOW before anything can reset it
            if (!back && href && window.location.pathname === '/') {
                const scrollY = lenis?.scroll ?? window.scrollY;
                sessionStorage.setItem(
                    'homeScrollY',
                    String(Math.round(scrollY)),
                );
            }

            gsap.set('.page-transition', { yPercent: 100 });
            gsap.set('.page-transition--inner', { yPercent: 100 });

            const tl = gsap.timeline();

            tl.to('.page-transition', {
                yPercent: 0,
                duration: 0.3,
            });

            tl.then(() => {
                if (back) {
                    router.back();
                } else if (href) {
                    // scroll: false prevents Next.js from calling scrollTo(0,0)
                    router.push(href.toString(), { scroll: false });
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
