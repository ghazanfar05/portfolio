"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import Link from "next/link";

interface PinContainerProps {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
}

export const PinContainer: React.FC<PinContainerProps> = ({
    children,
    title,
    href,
    className,
    containerClassName,
}) => {
    const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

    const onMouseEnter = () => {
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };

    const onMouseLeave = () => {
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };

    return (
        <Link
            className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            href={href || "/"}
        >
            <div
                style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
            >
                <div
                    style={{ transform }}
                    className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start w-[300px] h-[400px] rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-slate-900 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
                >
                    <div className={cn("relative z-50", className)}>{children}</div>
                </div>
            </div>
            <PinPerspective title={title} href={href} />
        </Link>
    );
};

interface PinPerspectiveProps {
    title?: string;
    href?: string;
}

const PinPerspective: React.FC<PinPerspectiveProps> = ({ title, href }) => {
    return (
        <motion.div className="pointer-events-none w-full min-h-screen flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
            <div className="w-full h-full -mt-7 flex-none inset-0">
                <div className="absolute top-0 inset-x-0 flex justify-center">
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex space-x-2 items-center z-10 rounded-full w-[20px] bg-black py-0.5 px-4 ring-1 ring-white/10"
                    >
                        <span className="relative z-20 text-white text-xs font-bold inline-block">
                            {title}
                        </span>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                    </a>
                </div>

                <div
                    style={{
                        perspective: "1000px",
                        transform: "rotateX(50deg) translateZ(0)",
                    }}
                    className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
                >
                    {[0, 2, 4].map((delay, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
                            animate={{
                                opacity: [0, 1, 0.5, 0],
                                scale: 1,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay,
                            }}
                            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-white/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
                        />
                    ))}
                </div>

                <div className="absolute right-1/2 bottom-1/2">
                    <motion.div className="bg-gradient-to-b from-transparent to-white w-px h-20 group-hover/pin:h-40 blur-[2px] translate-y-[14px]" />
                    <motion.div className="bg-gradient-to-b from-transparent to-white w-px h-20 group-hover/pin:h-40 translate-y-[14px]" />
                    <motion.div className="bg-white w-[4px] h-[4px] rounded-full z-40 translate-x-[1.5px] translate-y-[14px]" />
                    <motion.div className="bg-white w-[2px] h-[2px] rounded-full z-40 translate-x-[0.5px] translate-y-[14px]" />
                </div>
            </div>
        </motion.div>
    );
};
