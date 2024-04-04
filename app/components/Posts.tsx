"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface BlogPostCardPropsType {
  img: string;
  tag: string;
  title: string;
  desc: string;
}

function BlogPostCard({ img, tag, title, desc }: BlogPostCardPropsType) {
  return (
    <Card>
      <CardHeader className="h-52">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal !text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <Typography
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case"
        >
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button variant="outlined">from /night</Button>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "https://www.material-tailwind.com/image/blog-13.png",
    tag: "Entire Apartment • 3 Guests • 2 Beds",
    title: "Lovely and cozy apartment",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-14.png",
    tag: "Private Room • 1 Guests • 1 Sofa",
    title: "Single room in the center of city",
    desc: "As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-15.png",
    tag: "Entire Apartment • 4 Guests • 2 Beds",
    title: "Independent house bedroom",
    desc: "Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-16.jpeg",
    tag: "Entire Apartment • 2 Guests • 1 Bed",
    title: "Zen Gateway with pool and garden",
    desc: "Fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-17.jpeg",
    tag: "Entire Flat • 8 Guests • 3 Rooms",
    title: "Cheapest hotels for a luxury vacation",
    desc: "Today, the company announced it will be combining its rides-on-demand business and UberEATS.",
  },
  {
    img: "https://www.material-tailwind.com/image/blog-18.jpeg",
    tag: "Entire Apartment • 4 Guests • 2 Beds",
    title: "Cozy Double Room Near Station",
    desc: "Different people have different taste, and various types of music have many ways of leaving an impact on someone.",
  },
];

export function Posts() {
  return (
    <section className="py-10 px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-2 !text-3xl lg:!text-4xl"
        >
          Book your next trip
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-xl !text-gray-500">
          An arrangement you make to have a hotel room, tickets, etc. at a
          particular time in the future.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
        {posts.map(({ img, tag, title, desc }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Posts;
