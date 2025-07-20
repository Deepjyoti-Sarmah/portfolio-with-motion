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
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    // {
    //   title: "Contact",
    //   href: "/contact",
    // },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["62%", "50%"]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      <Container>
        <motion.nav
          style={{
            boxShadow: scrolled ? "var(--shadow-secondary)" : "none",
            width,
            y,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          className="fixed inset-x-0 top-1 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full px-3 py-2 backdrop-blur-sm shadow shadow-primary border-b border-muted"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              className="h-10 w-10 rounded-full"
              src="/avatar.jpg"
              height={100}
              width={100}
              alt="Avatar"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="ml-auto block md:hidden p-2 text-secondary-foreground"
          >
            {isOpen ? <IconCancel size={20} /> : <IconMenu size={20} />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
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
            ))}
          </div>
        </motion.nav>

        {/* Mobile nav items */}
        {isOpen && (
          <div className="fixed top-[4.5rem] left-0 z-40 w-full bg-background border-t border-muted md:hidden">
            <div className="flex flex-col px-6 py-4 space-y-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-base text-secondary-foreground py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};
