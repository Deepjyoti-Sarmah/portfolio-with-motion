"use client";
import { workExperiences } from "@/constants/works";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "./section-heading";

export default function WorkTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="my-4 border-t border-secondary px-4 py-4">
      <SectionHeading delay={0.2} className="mb-6">
        Work Experience
      </SectionHeading>
      <div className="flex flex-col gap-6">
        {workExperiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeInOut" }}
            className="flex justify-between gap-4"
          >
            {/* Left: Role, Company, Description */}
            <div className="flex flex-col gap-1 max-w-[75%]">
              <div className="text-lg font-medium">
                {exp.role} @ {exp.company}
              </div>
              <div className="text-sm text-muted-foreground">
                {exp.description}
              </div>
            </div>

            {/* Right: Period */}
            <div className="text-sm text-secondary-foreground whitespace-nowrap min-w-[100px] text-right">
              {exp.period}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
