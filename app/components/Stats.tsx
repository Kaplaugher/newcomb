import { Typography, Card } from "@material-tailwind/react";

interface StatsCardPropsType {
  count: string;
  title: string;
}

function StatsCard({ count, title }: StatsCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="text-left">
      <Typography variant="h1" color="white" className="mb-4 text-6xl">
        {count}
      </Typography>
      <Typography variant="h5" color="white" className="mb-2">
        {title}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "1,200+",
    title: "Projects",
  },
  {
    count: "1,000+",
    title: "Components",
  },
  {
    count: "500+",
    title: "Sections",
  },
  {
    count: "24/7",
    title: "Support",
  },
];

export function StatsSection() {
  return (
    <section className=" bg-gray-900 px-8 py-10 lg:py-28">
      <div className="container mx-auto text-center">
        <Typography color="white" className="mb-4 font-medium">
          Our Activity
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl lg:text-5xl"
        >
          Your life will be much easier
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mx-auto mb-20 max-w-2xl opacity-70"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
        <div className="grid gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {stats.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
