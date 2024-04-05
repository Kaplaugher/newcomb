import { Typography, Card } from "@material-tailwind/react";

interface StatsCardPropsType {
  count: string;
  title: string;
}

function StatsCard({ count, title }: StatsCardPropsType) {
  return (
    <Card color="transparent" shadow={false} className="text-left">
      <h1 color="white" className="mb-4 text-6xl">
        {count}
      </h1>
      <h5 color="white" className="mb-2">
        {title}
      </h5>
    </Card>
  );
}

const stats = [
  {
    count: "10M+",
    title: "Orders Completed",
  },
  {
    count: "3B+",
    title: "Springs Manufactured",
  },
  {
    count: "5000+",
    title: "Satisfied Clients",
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
          Join the best
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mx-auto mb-20 max-w-2xl opacity-70"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          nostrum, eaque hic provident quibusdam consequuntur?
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
