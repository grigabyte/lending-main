'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isClient, setIsClient] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 800, damping: 35 });
    const mouseY = useSpring(0, { stiffness: 800, damping: 35 });

    useEffect(() => {
        setIsClient(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('interactive')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (!isClient) return null;

    return (
        <motion.div
            className="cursor-follower"
            style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '12px',
                height: '12px',
                pointerEvents: 'none',
                zIndex: 10000,
                mixBlendMode: 'difference',
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 2 : 1,
                    rotate: isHovering ? 45 : 0
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div style={{ width: '2px', height: '2px', background: '#fff' }} />
            </motion.div>
        </motion.div>
    );
};

export default CustomCursor;
