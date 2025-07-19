import { Container } from "@/components/container";
import { ContactForm } from "@/components/content-form";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/sub-heading";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-[80px]  px-8 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <Subheading>
          I'm open to freelancing offers. Reach out to me to inquire more about
          my work.
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
