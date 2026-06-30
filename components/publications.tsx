"use client";
import React from "react";
import { SectionHeading } from "./section-heading";
import { CardTitle } from "@/components/ui/card";
import { IconFileText, IconExternalLink } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

export const Publications = () => {
  return (
    <div className="my-4 border-t border-secondary px-4 py-4">
      <SectionHeading className="mb-4" delay={0.8}>
        Publications
      </SectionHeading>
      <div className="py-2">
        <Link
          href="https://www.cys.cic.ipn.mx/index.php/CyS/article/view/5147"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline block"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
            className="group flex flex-col md:flex-row gap-6 rounded-xl border border-secondary p-6 shadow-sm hover:shadow-md transition-shadow hover:scale-[1.005] duration-300 ease-in-out bg-card"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
              <IconFileText size={28} />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <CardTitle className="text-lg text-foreground font-semibold leading-snug transition-colors flex flex-wrap items-center gap-1.5">
                  Drone Based Face Recognition System using MTCNN and FaceNet in ArduPilot Software Platform
                  <IconExternalLink size={16} className="inline-block opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                </CardTitle>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground whitespace-nowrap">
                  Journal Article
                </span>
              </div>
              <p className="text-sm font-medium text-secondary-foreground">
                Published in <span className="italic">Computación y Sistemas</span>, Vol. 30, No. 1
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1.5 mt-2">
                <li>Designed and implemented a UAV-based real-time facial recognition pipeline leveraging MTCNN for detection and FaceNet for feature extraction.</li>
                <li>Built a fully integrated autonomous flight and computer vision workflow incorporating ArduPilot, DroneKit, MAVProxy, and Mission Planner.</li>
              </ul>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};
