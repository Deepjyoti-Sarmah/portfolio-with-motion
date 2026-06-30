"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/sub-heading";
import { Publications } from "@/components/publications";
import WorkTimeline from "@/components/work-timeline";
import ContactPage from "./contact/page";
import { projects } from "@/constants/projects";
import Link from "next/link";
import { IconFileText } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Home() {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
  };
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 15 },
  };

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-[80px] px-4 md:px-6 md:pt-20 md:pb-10 ">
        <Heading>Deepjyoti Sarmah</Heading>
        <Subheading>
          I'm a software engineer focused on building high-performance backend systems, concurrent distributed architectures, and AI-driven workflows.
        </Subheading>
        <div className="mt-4 px-4 flex gap-4">
          <Link
            href="https://drive.google.com/file/d/1TAp_cI_jtQtIMxSirWhg4Nlx3xTk2p7-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <span>View Resume</span>
              <motion.span
                className="inline-block"
                variants={iconVariants}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <IconFileText size={16} />
              </motion.span>
            </motion.div>
          </Link>
        </div>
        <Projects projects={projects.slice(0, 3)} />
        <WorkTimeline />
        <Publications />
        <ContactPage />
      </Container>
    </div>
  );
}
