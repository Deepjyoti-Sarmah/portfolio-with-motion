"use client";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/sub-heading";
import { IconSend2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export default function ContactPage() {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
  };
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: -20 },
  };

  return (
    <div className="my-6 border-t border-secondary px-4 py-4">
      <SectionHeading delay={0.2} className="mb-4">
        Get in touch
      </SectionHeading>
      <Subheading className="mb-4 -ml-4">
        I'm open to freelancing offers. Reach out to me to inquire more about my
        work.
      </Subheading>

      <div className="mt-4 flex justify-center md:justify-start">
        <Link href="mailto:deepjyotisarmah37@gmail.com">
          <motion.div
            className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={buttonVariants}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <span>Send a message</span>
            <motion.span
              className="inline-block"
              variants={iconVariants}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <IconSend2 size={16} />
            </motion.span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
