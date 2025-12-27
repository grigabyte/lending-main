'use client';

import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
    active?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", active = true }) => {
    const [isGlitching, setIsGlitching] = useState(active);

    useEffect(() => {
        if (!active) {
            const interval = setInterval(() => {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
            }, 5000 + Math.random() * 5000);
            return () => clearInterval(interval);
        }
    }, [active]);

    return (
        <span
            className={`glitch-text ${isGlitching ? 'glitch-active' : ''} ${className}`}
            data-text={text}
        >
            {text}
        </span>
    );
};

export default GlitchText;
