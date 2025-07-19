"use client";

import { Card as _Card, CardContent, CardTitle } from "@/components/ui/card";
import { Project, projects as defaultProjects } from "@/constants/projects";
import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { motion } from "motion/react";

const MotionCard = motion.create(_Card, {
  forwardMotionProps: true,
});

export function Projects({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) {
  return (
    <div className="my-4 border-t border-secondary px-4 py-4">
      <SectionHeading delay={0.2} className="mb-4">
        A lifetime in projects
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 ">
        {projects.map((project, idx) => (
          <MotionCard
            key={idx}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group flex flex-col overflow-hidden rounded-xl bg-card dark:bg-card shadow hover:shadow-md transition-shadow hover:scale-[1.01] duration-300 ease-in-out p-3"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                width={400}
                height={240}
                className="h-auto w-full object-cover transition-transform duration-300 rounded-xl group-hover:scale-[1.01] ease-in-out"
              />
            </div>

            <CardContent className="space-y-2 p-2">
              <CardTitle className="text-lg text-foreground font-semibold leading-tight">
                {project.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
