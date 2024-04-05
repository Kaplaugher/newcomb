"use client";
import { Typography, Button } from "@material-tailwind/react";

export default function ContentSection() {
  return (
    <section className="py-10 px-8 min-h-screen grid">
      <div className="grid max-w-7xl mx-auto my-auto items-center place-items-center lg:grid-cols-2 gap-10">
        <div className="lg:max-w-md">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-6 lg:text-3xl !text-2xl !leading-snug lg:max-w-sm"
          >
            Newcomb Spring Corp.
          </Typography>
          <Typography className="text-base !font-normal mb-12 !text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
            quae vero enim expedita nihil, quo sunt quos consectetur atque
            tempora illum! Cumque voluptas voluptatem quibusdam laborum magnam
            laudantium rem a, assumenda reiciendis quia cupiditate et illum
            possimus ipsum deleniti architecto doloribus unde voluptatum non
            suscipit!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            accusantium quod aut quibusdam ullam optio modi? Voluptatum omnis
            optio tempora sit doloremque! Natus ipsa nihil id! Perspiciatis
            accusantium quidem nesciunt, illo assumenda quasi laboriosam
            pariatur maiores, quae doloribus sed natus eum? In natus ipsum
            adipisci!
          </Typography>
          <Typography className="text-base !font-normal !text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse,
            reprehenderit asperiores illum saepe quaerat velit exercitationem,
            adipisci ab officia maxime cupiditate assumenda dolorum natus. Ullam
            tempore voluptates quasi voluptas harum id? Modi unde at, sapiente
            dolorem ex quia distinctio nisi quas incidunt! Qui, similique?
          </Typography>
        </div>
        <div>
          <img
            src={`https://images.unsplash.com/photo-1669136048337-5daa3adef7b2?q=80&w=2484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt="team work"
            className="mb-6 h-full lg:h-[370px] w-full shadow-lg rounded-xl object-cover object-center"
          />
          <img
            src={`https://plus.unsplash.com/premium_photo-1682144591991-585764d2a651?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGZhY3RvcnklMjBtYWNoaW5lfGVufDB8fDB8fHww`}
            alt="team work"
            className="h-full lg:h-[370px] w-full shadow-lg rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
