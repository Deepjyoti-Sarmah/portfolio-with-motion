"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const Subheading = ({
  as: Tag = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blue(10px)",
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2,
      }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-secondary-foreground max-w-lg px-4 pt-4 text-sm md:text-sm",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
