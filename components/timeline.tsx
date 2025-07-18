"use client";

import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import { SectionHeading } from "./section-heading";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export default function TimeLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20K MRR with my VSCOde fork.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20K MRR with my VSCOde fork.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20K MRR with my VSCOde fork.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20K MRR with my VSCOde fork.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20K MRR with my VSCOde fork.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20K MRR with my VSCOde fork.",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="shadow-primary my-4 border-t border-secondary px-4 py-4"
    >
      <SectionHeading delay={0.2} className="mb-4">
        Here's a timeline of my life achievements.
      </SectionHeading>
      {data.map((year, index) => (
        <div key={year.title} className="mb-4">
          <motion.h2
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
            className=" mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-muted-foreground"
          >
            {year.title}
          </motion.h2>

          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-secondary-foreground"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-600"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 size-4 text-secondary-foreground" />
      {children}
    </motion.div>
  );
};
