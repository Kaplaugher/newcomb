"use client";
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid px-0">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    title: "323",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    title: "500+",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "24/7",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "70",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function FeatureSection() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto grid place-items-center gap-y-12 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 col-span-full">
          <img
            src="https://www.material-tailwind.com/img/Iphone.png"
            className="w-full h-full object-cover object-center"
            alt="iphone-photo"
          />
        </div>
        <div className="col-span-2 mx-auto max-w-xl">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl font-bold lg:!text-3xl"
          ></Typography>
          <Typography variant="lead" className="mb-10 !text-gray-500">
            Precision Manufacturing of Custom Springs, Wire Forms & Stampings
          </Typography>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
            {features.map(({ title, description }) => (
              <FeatureCard key={title} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeatureSection;
