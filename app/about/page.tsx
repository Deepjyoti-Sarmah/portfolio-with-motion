import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/sub-heading";
import TimeLine from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <Subheading>
          I'm a curious developer who loves building clean, functional tools
          with modern stacks. I enjoy learning by doing. I care about good
          design, thoughtful architecture, and keeping things as simple as
          possible (but no simpler).
        </Subheading>

        <SectionHeading delay={0.2}>
          Here's a timeline of my life achievements.
        </SectionHeading>
        <TimeLine />
      </Container>
    </div>
  );
}
