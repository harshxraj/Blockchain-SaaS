import { CutCornerButton } from "../components/CutCornerButton";
import TextButton from "../components/TextButton";

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain.
              </h2>
              <p className="text-xl text-zinc-400 mt-8 lg:text-2xl">
                Discover the limitless potential of decentralized technology with our suite of innovative
                tools designed to enhance security, speed, and scalability. Join the blockchain revolution
                today and build with confidence.
              </p>

              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li className="flex items-center gap-3" key={item}>
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full ">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <img src="/assets/images/torus-knot.png" alt="torus" className="size-96 max-w-none" />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere"
                  className="absolute size-96 top-3/4 max-w-none -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative hidden md:block">
              <div className="absolute right-0  z-0">
                <img src="/assets/images/cone.png" alt="cone" className="size-96 max-w-none rotate-12" />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="hemisphere"
                  className="absolute top-3/4 -z-10"
                />
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way.
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  Blockforge is dedicated to revolutionizing blockchain technology by providing cutting-edge
                  solutions that are secure, scalable, and designed to empower businesses to harness the full
                  potential of decentralization.
                </p>
                <p>
                  Blockforge champtions Web3 for everyone. As a decentralized blockchain scaling platform,
                  Blockforge enables developers to create scalable, user-friendly dApps with low transaction
                  costs, all while ensuring robust security.
                </p>
              </div>

              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
