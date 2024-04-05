"use client";
import React from "react";
import { Typography, Button } from "@material-tailwind/react";

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
          src={`https://www.newcombspring.com/img/index/resized-map.webp`}
          alt="background image"
          className="h-full lg:min-h-[550px] w-full rounded-xl object-contain"
        />
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            Custom Metal Form and Spring Manufacturer
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal !text-gray-500"
          >
            Newcomb Spring is one of North America’s largest and most
            experienced custom spring and wire form manufacturers. We pride
            ourselves in producing quality parts that are strictly compliant to
            your specifications and can produce any size orders from samples to
            large production volumes. We always strive to be at the forefront of
            innovation and First In Forming.
            <br />
            <br />
            <p className="text-blue-700 font-bold">
              First in Forming® For Over 100 Years
            </p>
          </Typography>
          <Button size="lg" color="white">
            More about us
          </Button>
        </div>
      </div>
      <div className="container mx-auto gap-10 grid place-items-start lg:grid-cols-2">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl"
          >
            United States Leading Metal Form & Spring Manufacturer
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal !text-gray-500"
          >
            Precision Manufacturing of Custom Springs, Wire Forms & Stampings
            <br />
            <br />
            As one of the country’s largest metal form and custom spring
            manufacturers and suppliers, our diverse capabilities lead the
            industry. From design assistance when your order is first placed, to
            specialty packaging when we ship your order, Newcomb Spring
            processes are designed for precision and efficiency.
          </Typography>
          <Button size="lg" color="white">
            More about us
          </Button>
        </div>
        <div className="row-start-1 lg:row-auto">
          <img
            src={`https://lesjoforssprings.com/wp-content/uploads/2021/09/LESJOFORS_HERR_170607-0680-LR-1.jpg`}
            alt="background image"
            className="h-full lg:min-h-[550px] w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
