import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/sub-heading";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen  px-8 md:pt-20 md:pb-10">
        <Heading>Deepjyoti Sarmah</Heading>
        <Subheading>
          I'm a software engineer with a passion for building scalable and
          efficient systems.
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
