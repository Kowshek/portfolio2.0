'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';

const INITIAL_CARDS = [
    { id: 1, title: '5+', subtitle: 'Projects Shipped', bg: 'bg-[#111]' },
    { id: 2, title: '1', subtitle: 'Live AI Product', bg: 'bg-[#1a1a1a]' },
    { id: 4, title: 'Hire Me', subtitle: 'Let\'s build together', bg: 'bg-primary', text: 'text-black' },
    { id: 5, title: 'That\'s it bro.', subtitle: 'Keep scrolling ↓', bg: 'bg-[#0a0a0a]', text: 'text-white' },
];

export default function MobileSwipeCards() {
    const [cards, setCards] = useState(INITIAL_CARDS);
    const cardRef = useRef<HTMLDivElement>(null);
    const startPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const isDragging = useRef(false);

    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        isDragging.current = true;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        startPos.current = { x: clientX, y: clientY };
        currentPos.current = { x: 0, y: 0 };
        
        if (cardRef.current) {
            gsap.killTweensOf(cardRef.current);
        }
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging.current || !cardRef.current) return;
        
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        
        const deltaX = clientX - startPos.current.x;
        const deltaY = clientY - startPos.current.y;
        currentPos.current = { x: deltaX, y: deltaY };

        // Rotate based on drag distance
        const rotation = deltaX * 0.1;

        gsap.set(cardRef.current, {
            x: deltaX,
            y: deltaY,
            rotation: rotation,
        });
    };

    const handleTouchEnd = () => {
        if (!isDragging.current || !cardRef.current) return;
        isDragging.current = false;

        const threshold = window.innerWidth * 0.25; // 25% of screen width to swipe

        if (Math.abs(currentPos.current.x) > threshold) {
            // Swipe away!
            const direction = currentPos.current.x > 0 ? 1 : -1;
            gsap.to(cardRef.current, {
                x: window.innerWidth * direction,
                y: currentPos.current.y + (direction * 50),
                rotation: currentPos.current.x * 0.2,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    setCards(prev => {
                        const newCards = [...prev];
                        const removed = newCards.shift();
                        if (removed) {
                            newCards.push(removed);
                        }
                        return newCards;
                    });
                    // Removed gsap.set to prevent the 'blip' race condition with React rendering
                }
            });
        } else {
            // Snap back
            gsap.to(cardRef.current, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.4,
                ease: "elastic.out(1, 0.7)",
            });
        }
    };

    if (cards.length === 0) return null;

    return (
        <div className="w-full h-[160px] mt-10 md:hidden relative flex items-center justify-center slide-up-and-fade touch-none">
            <div className="absolute top-0 text-[10px] text-muted-foreground font-mono tracking-[0.2em] animate-pulse">
                [ SWIPE CARDS TO EXPLORE ]
            </div>
            
            <div className="relative w-full max-w-[280px] h-[100px] mt-4 perspective-[1000px]">
                {/* We map through the cards and render the top 2. 
                    Using 'key' ensures React tracks the DOM nodes properly, 
                    preventing the flash/blip when they swap. */}
                {[...cards].slice(0, 2).reverse().map((card, idx, arr) => {
                    // Since we sliced 2 and reversed, if arr.length == 2:
                    // idx 0 is the NEXT card (was index 1).
                    // idx 1 is the TOP card (was index 0).
                    const isTop = arr.length === 1 ? true : idx === 1;

                    return (
                        <div 
                            key={card.id}
                            ref={isTop ? cardRef : null}
                            className={`absolute inset-0 rounded-2xl border flex flex-col items-center justify-center transition-all duration-300 ease-out ${card.bg} ${
                                isTop 
                                    ? 'z-10 shadow-2xl cursor-grab active:cursor-grabbing border-white/10 transform-none opacity-100' 
                                    : 'z-0 shadow-xl border-white/5 scale-95 translate-y-2 opacity-50 pointer-events-none'
                            }`}
                            onMouseDown={isTop ? handleTouchStart : undefined}
                            onMouseMove={isTop ? handleTouchMove : undefined}
                            onMouseUp={isTop ? handleTouchEnd : undefined}
                            onMouseLeave={isTop ? handleTouchEnd : undefined}
                            onTouchStart={isTop ? handleTouchStart : undefined}
                            onTouchMove={isTop ? handleTouchMove : undefined}
                            onTouchEnd={isTop ? handleTouchEnd : undefined}
                        >
                            <h3 className={`text-4xl font-anton tracking-wide mb-1 ${card.text || (isTop ? 'text-primary' : 'text-white')}`}>{card.title}</h3>
                            <p className={`text-xs font-mono tracking-widest ${card.text || 'text-muted-foreground'}`}>{card.subtitle}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
