"use client";
import React from "react";
import { Button, Card } from "@material-tailwind/react";

import { Features } from "./components/Features";
import StatsSection from "./components/Stats";
import Posts from "./components/Posts";

export default function HeroSection() {
  return (
    <div className="flex flex-col">
      {/** Hero Section */}
      <section className="!flex h-[90vh] w-full items-center justify-between px-10">
        <img
          src="https://images.unsplash.com/photo-1520031559723-e38a5ab03c79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeSUyMG1hY2hpbmV8ZW58MHwxfDB8fHww"
          alt="bg-img"
          className="absolute inset-0 ml-auto lg:h-full rounded-bl-[100px] object-cover object-center"
        />
        <div className="container mx-auto lg:mt-0 ">
          <div className="grid grid-cols-12">
            <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 px-6 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
              <div
                color="blue-gray"
                className="text-3xl !leading-snug lg:text-5xl"
              >
                Newcomb Spring <br /> Choose the best
              </div>
              <div className="mb-10 mt-2 !text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium eius asperiores quaerat in, vitae molestiae iusto
                minus libero voluptas sapiente!
              </div>
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
    </div>
  );
}
