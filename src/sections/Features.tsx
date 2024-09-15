import { twMerge } from "tailwind-merge";
import TextButton from "../components/TextButton";
import { Card } from "../components/Card";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with a cutting-edge API designed for seamless connectivity",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Ironclad Security Layer",
    description:
      "Protect your blockchain applications with multi-layered encryption and real-time threat detection for ultimate peace of mind.",
    color: "cyan",
  },
  {
    image: "/assets/images/cone.png",
    title: "Lightning-Fast Transactions",
    description:
      "Achieve unprecedented speeds in transaction processing with optimized smart contracts, ensuring minimal latency.",
    color: "lime",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Advanced Analytics Dashboard",
    description:
      "Track, monitor, and gain insights into your blockchain usage through a comprehensive, real-time analytics dashboard.",
    color: "violet",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of blockchain with Blockchain
        </h2>
        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }) => (
              <Card key={title} color={color} className="max-w-xs md:max-w-md">
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative ">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    <img
                      src={image}
                      alt="pill"
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
                <p className="text-lg text-zinc-400 mt-4">{description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, i) => (
              <div key={title} className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
