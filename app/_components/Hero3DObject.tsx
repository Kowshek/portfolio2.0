'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Edges } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedObject = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Base continuous rotation
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.x = t * 0.15;
            meshRef.current.rotation.y = t * 0.2;
        }

        if (groupRef.current) {
            // Smoothly interpolate the group rotation towards the mouse position
            // state.pointer is normalized between -1 and 1
            const targetX = (state.pointer.y * Math.PI) / 6;
            const targetY = (state.pointer.x * Math.PI) / 6;

            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                targetX,
                0.05,
            );
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                targetY,
                0.05,
            );
        }
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setIsMobile(window.innerWidth < 768);
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    
    return (
        <group ref={groupRef} position={[isMobile ? 0 : 2.5, 0, 0]}>
            <Float
                speed={2} // Animation speed
                rotationIntensity={0.5} // XYZ rotation intensity
                floatIntensity={2} // Up/down float intensity
            >
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[2.5, 1]} />
                    {/* A material to obscure lines behind it, matching background */}
                    <meshBasicMaterial color="hsl(0, 0%, 13%)" />
                    <Edges
                        linewidth={2}
                        threshold={15}
                        color="hsl(140, 100%, 47%)"
                    />
                </mesh>
            </Float>
        </group>
    );
};

export default function Hero3DObject() {
    return (
        <div className="hidden md:block absolute inset-0 w-full h-full -z-0 pointer-events-none opacity-80 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <AnimatedObject />
            </Canvas>
        </div>
    );
}
