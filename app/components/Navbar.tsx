"use client";
import React from "react";
import {
  Button,
  Typography,
  Collapse,
  Navbar,
  IconButton,
} from "@material-tailwind/react";
import {
  CalculatorIcon,
  EnvelopeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NavbarSection() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <div className="relative mx-10">
      <div className="container mx-auto">
        <Navbar blurred color="white" className="relative z-50 mt-6 border-0">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <div className="flex gap-4">
                <img src="/newcomb.webp" alt="logo" className="h-10" />
                <img src="/joey.webp" alt="" />
              </div>
            </Link>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              <Link href="/about">
                <div className="flex gap-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="paragraph"
                    color="gray"
                    className="flex items-center gap-2 font-medium text-gray-900"
                  >
                    About
                  </Typography>
                </div>
              </Link>
              <Link href="/spring-calculator">
                <div className="flex gap-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="paragraph"
                    color="gray"
                    className="flex items-center gap-2 font-medium text-gray-900"
                  >
                    Spring Calculator
                  </Typography>
                </div>
              </Link>
              <Link href="/contact">
                <div className="flex gap-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="paragraph"
                    color="gray"
                    className="flex items-center gap-2 font-medium text-gray-900"
                  >
                    Contact
                  </Typography>
                </div>
              </Link>
            </ul>
            <div className="hidden items-center gap-4 lg:flex">
              <Button variant="text">Log in</Button>
              <Button color="gray">sign in</Button>
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                <Link href="/about">
                  <div>
                    <Typography
                      variant="paragraph"
                      color="gray"
                      className="flex items-center gap-2 font-medium text-gray-900"
                    >
                      About
                    </Typography>
                  </div>
                </Link>
                <Link href="/spring-calculator">
                  <div>
                    <Typography
                      variant="paragraph"
                      color="gray"
                      className="flex items-center gap-2 font-medium text-gray-900"
                    >
                      Spring Calculator
                    </Typography>
                  </div>
                </Link>
                <Link href="/contact">
                  <div>
                    <Typography
                      variant="paragraph"
                      color="gray"
                      className="flex items-center gap-2 font-medium text-gray-900"
                    >
                      Contact
                    </Typography>
                  </div>
                </Link>
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button variant="text">Log in</Button>
                <Button color="gray">sign in</Button>
              </div>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarSection;
