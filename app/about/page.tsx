import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/sub-heading";
import TimeLine from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-[80px]  px-8 md:pt-20 md:pb-10  ">
        <Heading>About Me</Heading>
        <Subheading>
          I am a software engineer focused on building high-performance backend systems, concurrent distributed architectures, and AI engineering (RAG systems, autonomous agents, and multimodal pipelines). I enjoy diving deep into raw network protocols, deterministic transaction engines, and building scalable developer tools.
        </Subheading>
        <TimeLine />
      </Container>
    </div>
  );
}
