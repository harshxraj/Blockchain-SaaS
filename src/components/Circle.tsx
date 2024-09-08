import type { ComponentPropsWithoutRef } from "react";

export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;
  return (
    <div className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute left-[200px] top-[270px]">
      <img src="/assets/images/cuboid.png" alt="Cuboid image" className="size-[140px]" />
    </div>
  );
};
