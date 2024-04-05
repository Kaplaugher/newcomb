"use client";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";

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
          <div
            variant="small"
            color="blue"
            className="mb-2 font-normal !text-gray-500"
          >
            {tag}
          </div>
        </div>
        <div
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case"
        >
          {title}
        </div>
        <div className="mb-6 font-normal !text-gray-500">{desc}</div>
        <Button variant="outlined">Learn More</Button>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "https://www.stalderspring.com/assets/images/buckets/bucket-torsion.jpg",
    tag: "Tag 1",
    title: "Compression Springs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/ext/thumb-extension.webp",
    tag: "tag 2",
    title: "Extension Springs",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/tor/thumb-torsion.webp",
    tag: "tag 3",
    title: "Torsion Springs",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/wb/thumb-wirebending.webp",
    tag: "tag 4",
    title: "Large Wire Bending",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/flat/thumb-flatspring.webp",
    tag: "tag 5",
    title: "Flat Springs & Stampings",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/batt/thumb-battery.webp",
    tag: "tag 6",
    title: "Battery Contacts",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/ring/thumb-ring.webp",
    tag: "tag 7",
    title: "Shaped Rings",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
  {
    img: "https://www.newcombspring.com/img/products/hook/thumb-hook.webp",
    tag: "tag 8",
    title: "Hooks & Paint Hooks",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc.",
  },
];

export function Posts() {
  return (
    <section className="py-10 px-8">
      <div className="container mx-auto mb-24 text-center">
        <div color="blue-gray" className="mb-2 !text-3xl lg:!text-4xl">
          Our Services
        </div>
        <div className="mx-auto max-w-xl !text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut tempore
          impedit laboriosam nisi fuga. Voluptate?
        </div>
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
