"use client";

import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import { SectionHeading } from "./section-heading";
import Link from "next/link";

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
      title: "2026",
      content: [
        {
          title: "Built Coding RAG System",
          description: (
            <span>
              Developed a repository-level retrieval-augmented generation system for source code understanding.{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/coding-RAG-system"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View GitHub
              </Link>
            </span>
          ),
        },
        {
          title: "Engineered Perpetual Futures Exchange",
          description: (
            <span>
              Designed a high-throughput matching engine supporting margin allocation and event-sourced state replication.{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/perpatual-futures-exchange"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View GitHub
              </Link>
            </span>
          ),
        },
        {
          title: "Published UAV Research Paper",
          description: (
            <span>
              Published drone-based facial recognition research utilizing MTCNN and FaceNet in Computación y Sistemas journal.{" "}
              <Link
                href="https://drive.google.com/file/d/1eow0EpzG3l9OTUVk8RVpsBrLYuyJzsb0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                Read Publication
              </Link>
            </span>
          ),
        },
      ],
    },
    {
      title: "2025",
      content: [
        {
          title: "Launched VibeCode & Orangutan Agent",
          description: (
            <span>
              Built VibeCode, an LLM-powered full-stack generation app in sandboxed E2B containers, and Orangutan, a Go-based autonomous agent harness.{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/VibeCode"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View VibeCode
              </Link>{" "}
              /{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/Orangutan-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View Orangutan
              </Link>
            </span>
          ),
        },
        {
          title: "Developed Multimodal Sentiment Pipelines",
          description: (
            <span>
              Created video emotion sentiment models using deep facial recognition and Transformers.{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/video-emotion-sentiment-model-project"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View GitHub
              </Link>
            </span>
          ),
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Completed LFX Mentorship",
          description: (
            <span>
              Successfully finalized the Fabric Private Chaincode Client SDK integration with the Fabric Gateway API under the Hyperledger Foundation.{" "}
              <Link
                href="https://github.com/hyperledger-labs/fabric-private-chaincode"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View Hyperledger
              </Link>
            </span>
          ),
        },
        {
          title: "Systems Programming Focus",
          description: (
            <span>
              Dived deep into concurrent systems, TCP/IP network socket protocols, and built custom web servers from scratch in Go.{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/HTTP-from-TCP"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View TCP Server
              </Link>
            </span>
          ),
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Selected for Hyperledger Mentorship",
          description:
            "Selected as SDK Developer for Hyperledger LFX, building Go client SDKs and securing execution environments.",
        },
        {
          title: "Concurrent Systems & Cryptography",
          description: (
            <span>
              Explored Go goroutine models, mutex synchronization, and built secure deterministic address derivation systems.{" "}
              <Link
                href="https://github.com/Deepjyoti-Sarmah/bitcoin-burner-wallet-go"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View Bitcoin Project
              </Link>
            </span>
          ),
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Began Programming Journey",
          description:
            "Started coding, focused on backend and protocol fundamentals, and made my first GitHub contributions.",
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
        Here&apos;s a timeline of my life achievements.
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
