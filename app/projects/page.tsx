import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/sub-heading";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-[80px]  px-8 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <Subheading>
          A selection of projects focusing on concurrent backend engines, networking protocols, in-memory databases, and advanced AI agent workflows.
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
