'use client';
import SectionTitle from '@/components/SectionTitle';
import { CERTIFICATIONS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
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

            tl.from('.cert-item', {
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
        <section className="py-section" id="certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certifications" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CERTIFICATIONS.map((cert) => (
                        <div
                            key={cert.title}
                            className="cert-item flex flex-col border border-border bg-background-light/20 p-6 hover:border-primary/40 transition-colors duration-300 group"
                        >
                            {/* Provider row */}
                            <div className="flex items-center gap-2.5 mb-5">
                                {cert.providerLogo && (
                                    <Image
                                        src={cert.providerLogo}
                                        alt={cert.provider}
                                        width={20}
                                        height={20}
                                        className="opacity-60 group-hover:opacity-90 transition-opacity"
                                    />
                                )}
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                    {cert.provider}
                                </span>
                            </div>

                            {/* Title + date */}
                            <h3 className="text-xl font-anton leading-tight mb-1 group-hover:text-primary transition-colors duration-200">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-5">
                                {cert.date}
                            </p>

                            {/* Skill tags */}
                            <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-0.5 text-xs border border-primary/20 text-primary bg-primary/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            {cert.credentialUrl ? (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                >
                                    <ExternalLink size={13} />
                                    View Certificate
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/40 select-none">
                                    <ExternalLink size={13} />
                                    Certificate on file
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
