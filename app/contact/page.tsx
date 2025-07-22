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
    <div className="my-4 border-t border-secondary px-4 py-4">
      <SectionHeading delay={0.2} className="mb-6">
        Get in touch
      </SectionHeading>
      <Subheading className="-p-2">
        I'm open to freelancing offers. Reach out to me to inquire more about my
        work.
      </Subheading>

      {/* Email action button */}
      <div className="mt-2">
        <Link href="mailto:deepjyotisarmah37@gmail.com" passHref legacyBehavior>
          <motion.a href="#" style={{ textDecoration: "none" }}>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="flex items-center bg-foreground text-primary-foreground px-6 py-3 rounded-md shadow"
            >
              <span className="mr-2">Send a message</span>
              <motion.span
                variants={iconVariants}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                <IconSend2 size={20} />
              </motion.span>
            </motion.button>
          </motion.a>
        </Link>
      </div>
    </div>
  );
}
