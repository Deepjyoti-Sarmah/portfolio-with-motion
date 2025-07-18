import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/sub-heading";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <Subheading>
          I'm a curious developer who loves building clean, functional tools
          with modern stacks. I enjoy learning by doing. I care about good
          design, thoughtful architecture, and keeping things as simple as
          possible (but no simpler).
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
      </Container>
    </div>
  );
}
