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

export default function Home() {
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
            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>View Resume</span>
            <IconFileText size={16} />
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
