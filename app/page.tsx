"use client";
import React from "react";
import {
  Button,
  Typography,
  Collapse,
  Card,
  Navbar,
  IconButton,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Features } from "./components/Features";
import StatsSection from "./components/Stats";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}
export function HeroSection6() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <div className="flex flex-col">
      <section className="relative mx-10">
        <div className="container mx-auto">
          <Navbar blurred color="white" className="relative z-50 mt-6 border-0">
            <div className="container mx-auto flex items-center justify-between">
              <Typography color="blue-gray" className="text-lg font-bold">
                Material Tailwind
              </Typography>
              <ul className="ml-10 hidden items-center gap-8 lg:flex">
                <NavItem>
                  <RectangleStackIcon className="h-5 w-5" />
                  Pages
                </NavItem>
                <NavItem>
                  <UserCircleIcon className="h-5 w-5" />
                  Account
                </NavItem>
                <NavItem>
                  <Squares2X2Icon className="h-5 w-5" />
                  Blocks
                </NavItem>
                <NavItem>
                  <CommandLineIcon className="h-5 w-5" />
                  Docs
                </NavItem>
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
                  <NavItem>
                    <RectangleStackIcon className="h-5 w-5" />
                    Pages
                  </NavItem>
                  <NavItem>
                    <UserCircleIcon className="h-5 w-5" />
                    Account
                  </NavItem>
                  <NavItem>
                    <Squares2X2Icon className="h-5 w-5" />
                    Blocks
                  </NavItem>
                  <NavItem>
                    <CommandLineIcon className="h-5 w-5" />
                    Docs
                  </NavItem>
                </ul>
                <div className="mt-6 mb-4 flex items-center gap-4">
                  <Button variant="text">Log in</Button>
                  <Button color="gray">sign in</Button>
                </div>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </section>

      {/** Hero Section */}
      <section className="!flex h-[90vh] w-full items-center justify-between px-10">
        <img
          src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt="bg-img"
          className="absolute inset-0 ml-auto lg:h-full rounded-bl-[100px] object-cover object-center"
        />
        <div className="container mx-auto lg:mt-0 ">
          <div className="grid grid-cols-12">
            <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 px-6 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
              <Typography
                variant="h1"
                color="blue-gray"
                className="text-3xl !leading-snug lg:text-5xl"
              >
                Material Tailwind. <br /> Choose the best
              </Typography>
              <Typography variant="lead" className="mb-10 mt-2 !text-gray-900">
                Find the story of Material Tailwind&apos;s most complex design
                system and all the work that make this design available.
              </Typography>
              <div className="mb-8 flex justify-center gap-4 lg:justify-start md:justify-start">
                <Button className="lg:w-32 md:w-32 w-full" color="gray">
                  contact us
                </Button>
                <Button
                  className="lg:w-32 md:w-32 w-full"
                  color="gray"
                  variant="outlined"
                >
                  read more
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 gap-y-0 lg:justify-start">
                <img
                  src="https://www.material-tailwind.com/img/logos/logo-pinterest.svg"
                  alt="pinterest"
                  className="w-32 opacity-80 grayscale"
                />
                <img
                  src="https://www.material-tailwind.com/img/logos/logo-netflix1.svg"
                  alt="netflix"
                  className="w-32 grayscale"
                />
                <img
                  src="https://www.material-tailwind.com/img/logos/logo-coinbase.svg"
                  alt="spotify"
                  className="w-32 opacity-80 grayscale"
                />
                <img
                  src="https://www.material-tailwind.com/img/logos/logo-nasa.svg"
                  alt="amazaon"
                  className="w-32 grayscale"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <Features />
      <StatsSection />
      <Posts />
      <Footer />
    </div>
  );
}

export default HeroSection6;
