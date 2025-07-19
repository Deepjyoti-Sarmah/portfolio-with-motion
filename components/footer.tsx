import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-secondary px-10 py-3">
      <p className="text-sm text-muted-foreground">
        Built by Deepjyoti Sarmah with patience and love
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://x.com/Deepjyo79836591">
          <IconBrandX className="size-4 text-muted-foreground hover:text-neutral-800" />
        </Link>
        <Link href="https://www.linkedin.com/in/deepjyoti-sarmah-539b96202">
          <IconBrandLinkedin className="size-4 text-muted-foreground hover:text-neutral-800" />
        </Link>
        <Link href="https://github.com/Deepjyoti-Sarmah">
          <IconBrandGithub className="size-4 text-muted-foreground hover:text-neutral-800" />
        </Link>
      </div>
    </Container>
  );
};
