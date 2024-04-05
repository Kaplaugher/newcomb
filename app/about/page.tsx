"use client";
import { Typography, Button } from "@material-tailwind/react";

export function ContentSection() {
  return (
    <section className="py-10 px-8 min-h-screen grid">
      <div className="grid max-w-7xl mx-auto my-auto items-center place-items-center lg:grid-cols-2 gap-10">
        <div className="lg:max-w-md">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-6 lg:text-3xl !text-2xl !leading-snug lg:max-w-sm"
          >
            So what does the new record for the lowest level of winter ice
            actually mean
          </Typography>
          <Typography className="text-base !font-normal mb-12 !text-gray-500">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there&apos;s huge variety of the state of
            the ice.
            <br />
            <br />
            For a start, it does not automatically follow that a record amount
            of ice will melt this summer. More important for determining the
            size of the annual thaw is the state of the weather as the midnight
            sun approaches and temperatures rise. But over the more than 30
            years of satellite records, scientists have observed a clear pattern
            of decline, decade-by-decade.
          </Typography>
          <Typography className="text-base !font-normal !text-gray-500">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there&apos;s huge variety of the state of
            the ice.
          </Typography>
        </div>
        <div>
          <img
            src={`https://www.material-tailwind.com/img/blog6.jpg`}
            alt="team work"
            className="mb-6 h-full lg:h-[370px] w-full shadow-lg rounded-xl object-cover object-center"
          />
          <img
            src={`https://www.material-tailwind.com/img/content3.jpg`}
            alt="team work"
            className="h-full lg:h-[370px] w-full shadow-lg rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
