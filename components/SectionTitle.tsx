'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { SectionFlower } from './icons';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [displayText, setDisplayText] = useState(title);

    useGSAP(() => {
        if (!titleRef.current) return;

        let interval: NodeJS.Timeout;
        
        ScrollTrigger.create({
            trigger: titleRef.current,
            start: "top 85%",
            onEnter: () => {
                let iteration = 0;
                clearInterval(interval);
                
                interval = setInterval(() => {
                    setDisplayText(() => 
                        title.split("")
                            .map((letter, index) => {
                                if (index < iteration) return title[index];
                                return CHARS[Math.floor(Math.random() * CHARS.length)];
                            })
                            .join("")
                    );
                    
                    if (iteration >= title.length) {
                        clearInterval(interval);
                    }
                    iteration += 1 / 3;
                }, 30);
            }
        });

        return () => clearInterval(interval);
    }, [title]);

    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <SectionFlower
                    width={25}
                    className={cn(
                        'animate-spin duration-7000',
                        classNames?.icon,
                    )}
                />
            )}
            <h2
                ref={titleRef}
                className={cn(
                    'text-xl uppercase leading-none font-mono tracking-widest',
                    classNames?.title,
                )}
            >
                {displayText}
            </h2>
        </div>
    );
};

export default SectionTitle;
