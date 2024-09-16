import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: " Blockforge's tools have made blockchain accessible and efficient for us. Our developers love working with it, and the results speak for themselves. ",
    name: "Erica Wyatt",
    title: "Product Manager - Blockchain",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Blockforge has simplified blockchain for our team. The tools are user-friendly, and our developers enjoy using them. The results are outstanding.",
    name: "Michael Yates",
    title: "CTO - Fintech Innovators",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "We were able to scale our blockchain applications seamlessly with Blockforge’s advanced API. A must-have for any serious developer.",
    name: "Sophia Carter",
    title: "Lead Engineer - DApp Solutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map(({ text, name, title, avatarImage }, testimonialIndex) => (
            <motion.blockquote
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: testimonialIndex * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              key={testimonialIndex}
              className={twMerge(testimonialIndex === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">&ldquo; {text} &rdquo;</p>

              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${avatarImage})` }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">{name}</div>
                    <div className="text-zinc-400 not-italic">{title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
