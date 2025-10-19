
'use client'
import React from 'react'
import { motion } from 'motion/react';
import { ReactNode } from 'react';


interface SlideUpAnimationProps {
    children?: ReactNode;
    className?: string;
}

export default function SlideUpAnimation({ children, className }: SlideUpAnimationProps) {
    return (

        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 12, duration: 0.6 }}
            className={className}
            viewport={{ once: false, amount: 0.5 }}
        >
            {children}
        </motion.div>

    )
}
