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
        <Link href="mailto:deepjyotisarmah37@gmail.com" passHref>
          <motion.div
            className="inline-block"
            initial="initial"
            whileHover="hover"
            variants={buttonVariants}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.button className="flex items-center bg-foreground text-primary-foreground px-6 py-3 rounded-md shadow">
              <span className="mr-2">Send a message</span>
              <motion.span
                className="inline-block"
                variants={iconVariants}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <IconSend2 size={20} />
              </motion.span>
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
