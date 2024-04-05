"use client";
import {
  Button,
  Typography,
  Card,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";

export default function ContactPage() {
  return (
    <section className="min-h-[100vh] p-4">
      <img
        src="https://www.sauerusa.com/wp-content/uploads/spring-cleaning-your-compressed-air-system/AdobeStock_323692077-scaled.jpeg"
        alt="bg-img"
        className="absolute right-0 top-0 h-[40%] w-full object-cover object-center lg:h-full lg:w-1/2"
      />
      <div className="container mx-auto grid h-full min-h-[100vh] grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3 my-auto">
          <Card className="col-span-12 rounded-xl border border-white bg-white/90 lg:py-20 py-8 px-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-6">
            <div className="mx-auto lg:max-w-xl lg:text-left text-center">
              <Typography
                variant="h1"
                color="blue-gray"
                className="mb-4 lg:text-5xl text-3xl"
              >
                Contact us
              </Typography>
              <Typography variant="lead" className="mb-16 !text-gray-500">
                Whether you have questions or you would just like to say hello,
                contact us.
              </Typography>
              <form action="#">
                <div className="mb-4 grid gap-4 grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    label="First Name"
                    name="first-name"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    label="Last Name"
                    name="last-name"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <div className="mb-4">
                  <Input
                    color="gray"
                    type="email"
                    size="lg"
                    label="Email"
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    color="gray"
                    size="lg"
                    label="Phone Number"
                    name="phone"
                  />
                </div>
                <div className="mb-4 h-max">
                  <Textarea
                    color="gray"
                    size="lg"
                    label="Message"
                    name="message"
                  />
                </div>
                <Checkbox
                  color="gray"
                  label={
                    (
                      <Typography className="font-normal !text-gray-500">
                        You agree to your friendly{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-700 hover:text-gray-900"
                        >
                          Privacy Policy
                        </a>
                        .
                      </Typography>
                    ) as any
                  }
                  containerProps={{
                    className: "-ml-2.5",
                  }}
                />
                <Button size="lg" color="gray" className="mt-6" fullWidth>
                  send message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
