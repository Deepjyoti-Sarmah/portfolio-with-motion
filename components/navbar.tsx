"use client";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { Container } from "./container";
import Link from "next/link";
import { IconCancel, IconMenu } from "@tabler/icons-react";

export const Navbar = () => {
  const navItems = [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Resume",
      href: "https://drive.google.com/file/d/1TAp_cI_jtQtIMxSirWhg4Nlx3xTk2p7-/view?usp=sharing",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      <div className="fixed inset-x-0 top-1 z-50">
        <Container>
          <motion.nav
            style={{
              boxShadow: scrolled ? "var(--shadow-secondary)" : "none",
              y,
            }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
            className="mx-auto flex w-full items-center justify-between rounded-full border-b border-muted px-3 py-2 backdrop-blur-sm shadow shadow-primary"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                className="h-10 w-10 rounded-full transform -scale-x-100"
                src="/test12.png"
                height={90}
                width={90}
                alt="Avatar"
              />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="ml-auto block p-2 text-secondary-foreground md:hidden"
            >
              {isOpen ? <IconCancel size={20} /> : <IconMenu size={20} />}
            </button>

            {/* Desktop nav */}
            <div className="hidden items-center md:flex">
              {navItems.map((item, idx) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="relative px-3 py-1 text-sm"
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {hovered === idx && (
                      <motion.span
                        layoutId="hovered-span"
                        className="absolute inset-0 h-full w-full rounded-md bg-muted"
                      />
                    )}
                    <span className="relative z-10 text-secondary-foreground">
                      {item.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.nav>

          {/* Mobile nav items */}
          {isOpen && (
            <div className="mt-2 w-full border-t border-muted bg-background md:hidden">
              <div className="flex flex-col space-y-2 px-6 py-4">
                {navItems.map((item, idx) => {
                  const isExternal = item.href.startsWith("http");
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="py-2 text-base text-secondary-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};
