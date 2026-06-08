'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Entrance animation — matches the same pattern used site-wide
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    // Exit animation — fades the whole section up as user scrolls past
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
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="relative">
                    {/* Vertical timeline line — desktop only */}
                    <div className="hidden md:block absolute left-3 top-2 bottom-2 w-px bg-border" />

                    <div className="space-y-16">
                        {MY_EXPERIENCE.map((item) => (
                            <div
                                key={item.title}
                                className="experience-item md:pl-14 relative"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex absolute left-0 top-3 size-7 items-center justify-center z-[1]">
                                    <div className="size-3 rounded-full bg-primary ring-4 ring-background" />
                                </div>

                                {/* Card */}
                                <div className="border border-border bg-background-light/20 p-6 md:p-8">
                                    {/* ── Header ── */}
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6">
                                        <div>
                                            <p className="text-primary text-xs uppercase tracking-widest mb-2">
                                                {item.company}
                                                {item.companyFull && (
                                                    <span className="text-muted-foreground ml-1.5 normal-case">
                                                        ({item.companyFull})
                                                    </span>
                                                )}
                                            </p>
                                            <h3 className="text-3xl md:text-4xl font-anton leading-none">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-col gap-1.5 shrink-0 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={13} />
                                                {item.duration}
                                            </span>
                                            {item.location && (
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={13} />
                                                    {item.location}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* ── Technologies ── */}
                                    <div className="mb-7">
                                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                                            Technologies
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* ── Responsibilities + Achievements ── */}
                                    <div className="grid sm:grid-cols-2 gap-6 mb-7">
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                                                Responsibilities
                                            </p>
                                            <ul className="space-y-2.5">
                                                {item.responsibilities.map(
                                                    (r) => (
                                                        <li
                                                            key={r}
                                                            className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                                                        >
                                                            <span className="text-primary mt-0.5 shrink-0 leading-none">
                                                                →
                                                            </span>
                                                            {r}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                                                Achievements
                                            </p>
                                            <ul className="space-y-2.5">
                                                {item.achievements.map((a) => (
                                                    <li
                                                        key={a}
                                                        className="flex gap-2.5 text-sm leading-relaxed"
                                                    >
                                                        <span className="text-primary mt-0.5 shrink-0 leading-none">
                                                            ✓
                                                        </span>
                                                        {a}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* ── Impact ── */}
                                    <div className="border-t border-border pt-5">
                                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                                            Impact
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
