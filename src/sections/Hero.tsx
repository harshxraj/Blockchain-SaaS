import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is here
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
          Blockforge is pioneering smart contract integrity with cutting-edge data solutions
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>

        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute left-[200px] -top-[900px]">
                <img src="/assets/images/cube.png" alt="Cube image" className="size-[140px]" />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute left-[200px] top-[270px]">
                <img src="/assets/images/cuboid.png" alt="Cuboid image" className="size-[140px]" />
              </div>
            </div>
            <img
              src="/assets/images/icosahedron.png"
              alt="3D"
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
            />
            <img src="/assets/images/icosahedron.png" alt="3D image" className="w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
