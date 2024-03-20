"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <BackgroundGradient>
        <Menu setActive={setActive}>
          <div>
            <Link href={"/"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </Link>
          </div>
          <div className="px-5">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <Link href="/about/my-self" className="text-white">
                  My-Self
                </Link>
                <Link href="/about/skills" className="text-white">
                  Skills
                </Link>
                <Link href="/about/projects" className="text-white">
                  Projects
                </Link>
              </div>
            </MenuItem>
          </div>
          <div>
            <Link href={"/contact"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact"
              ></MenuItem>
            </Link>
          </div>
        </Menu>
      </BackgroundGradient>
    </div>
  );
};

export default Navbar;
