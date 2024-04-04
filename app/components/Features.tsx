"use client";
import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { RectangleGroupIcon, FingerPrintIcon } from "@heroicons/react/24/solid";

interface IconPropsType {
  children: React.ReactNode;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function Features() {
  return (
    <section className="p-8">
      <div className="container mx-auto mb-20 gap-10 grid place-items-start lg:grid-cols-2">
        <img
          src={`https://www.material-tailwind.com/img/features3.jpg`}
          alt="background image"
          className="h-full lg:min-h-[550px] w-full rounded-xl object-cover"
        />
        <div>
          <Icon>
            <RectangleGroupIcon className="h-6 w-6" strokeWidth={2} />
          </Icon>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            Refreshing workspace atmosphere
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal !text-gray-500"
          >
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            <br />
            <br />
            If you have the opportunity to play this game of life you need to
            appreciate every moment. A lot of people don&apos;t appreciate the
            moment until it&apos;s passed.
          </Typography>
          <Button size="lg" color="white">
            More about us
          </Button>
        </div>
      </div>
      <div className="container mx-auto gap-10 grid place-items-start lg:grid-cols-2">
        <div>
          <Icon>
            <FingerPrintIcon className="h-6 w-6" strokeWidth={2} />
          </Icon>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            Stand up for every move
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal !text-gray-500"
          >
            Society has put up so many boundaries, so many limitations on
            what&apos;s right and wrong that it&apos;s almost impossible to get
            a pure thought out.It&apos;s like a little kid, a little boy,
            looking at colors.
            <br />
            <br />
            Before somebody tells you you shouldn&apos;t like pink because
            that&apos;s for girls, or you&apos;d instantly become a gay
            two-year-old. Why would anyone pick blue over pink? Pink is
            obviously a better color.
          </Typography>
          <Button size="lg" color="white">
            More about us
          </Button>
        </div>
        <div className="row-start-1 lg:row-auto">
          <img
            src={`https://www.material-tailwind.com/img/features4.jpg`}
            alt="background image"
            className="h-full lg:min-h-[550px] w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
