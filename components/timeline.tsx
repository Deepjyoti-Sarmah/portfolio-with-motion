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
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Launched PingPanda",
          description:
            "Shipped an AI support tool with guest login and demo mode.",
        },
        {
          title: "More open source",
          description: "Published cool side projects with AI. Great feedback!",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Dived into Solana & DePIN",
          description:
            "Built staking tools using BonkSOL. Attended Solana Summit.",
        },
        {
          title: "Built real-time apps",
          description:
            "Used Golang, PostgreSQL, Redis. Focused on speed & scale.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Interned at Hyperledger",
          description: "Built a design system and shipped production features.",
        },
        {
          title: "Won hackathons",
          description: "Built AI + canvas tools at Devfolio events.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Leveled up frontend skills",
          description: "Learned React, Tailwind, and started serious dev work.",
        },
        {
          title: "Typed everything",
          description: "Used TypeScript across backend & frontend.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Started coding",
          description: "Built mini apps with JavaScript and loved it.",
        },
        {
          title: "First GitHub push",
          description: "Uploaded my first public repo!",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="shadow-primary my-4 border-t border-secondary px-4 py-4"
    >
      <SectionHeading delay={0.2} className="mb-4 text-center sm:text-left">
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
                    className="pt-1 pl-6 text-sm text-muted-foreground"
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
      <IconCircleCheckFilled className="mt-1 size-4 text-muted-foreground" />
      {children}
    </motion.div>
  );
};
