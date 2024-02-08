"use client";
import React, { useEffect, useState } from "react";

function About() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className={`grid gap-4 text-center justify-center ${
          scrolling ? "grid-cols-1" : "grid-cols-4" // Aplicamos la clase dinámicamente
        }`}
        style={{
          transition: "grid-template-columns 0.5s ease-in-out", // Aplicar transición a grid-template-columns
        }}
      >
        <div className="bg-teal-500">01</div>
        <div className="bg-teal-500">02</div>
        <div className="bg-teal-500">03</div>
        <div className="bg-teal-500">04</div>
        <div className="bg-teal-500">05</div>
        <div className="bg-teal-500">06</div>
        <div className="bg-teal-500">07</div>
        <div className="bg-teal-500">08</div>
        <div className="bg-teal-500">09</div>
      </div>
      <div className="mt-96">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae
          iste minus ullam sapiente ab necessitatibus quia. In possimus tenetur
          maiores, explicabo laborum eos suscipit esse quam veritatis optio
          ipsum. Dolor voluptatem, nam corporis quam veniam ad nesciunt,
          sapiente nemo at pariatur consectetur iure sequi, similique minus enim
          molestiae unde. Doloremque cumque eum id, facere molestias numquam ea.
          Blanditiis a incidunt ipsum perspiciatis? Deserunt asperiores a ipsam
          neque quod delectus itaque aspernatur nobis quis totam debitis iusto,
          velit cum odit odio officiis! Amet quas consectetur praesentium
          dolore. Perferendis, eaque veritatis! Quae adipisci sapiente ut ipsam
          illum eaque, impedit incidunt itaque!
        </p>
      </div>
      <div className="mt-96">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae
          iste minus ullam sapiente ab necessitatibus quia. In possimus tenetur
          maiores, explicabo laborum eos suscipit esse quam veritatis optio
          ipsum. Dolor voluptatem, nam corporis quam veniam ad nesciunt,
          sapiente nemo at pariatur consectetur iure sequi, similique minus enim
          molestiae unde. Doloremque cumque eum id, facere molestias numquam ea.
          Blanditiis a incidunt ipsum perspiciatis? Deserunt asperiores a ipsam
          neque quod delectus itaque aspernatur nobis quis totam debitis iusto,
          velit cum odit odio officiis! Amet quas consectetur praesentium
          dolore. Perferendis, eaque veritatis! Quae adipisci sapiente ut ipsam
          illum eaque, impedit incidunt itaque!
        </p>
      </div>
      <div className="mt-96">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae
          iste minus ullam sapiente ab necessitatibus quia. In possimus tenetur
          maiores, explicabo laborum eos suscipit esse quam veritatis optio
          ipsum. Dolor voluptatem, nam corporis quam veniam ad nesciunt,
          sapiente nemo at pariatur consectetur iure sequi, similique minus enim
          molestiae unde. Doloremque cumque eum id, facere molestias numquam ea.
          Blanditiis a incidunt ipsum perspiciatis? Deserunt asperiores a ipsam
          neque quod delectus itaque aspernatur nobis quis totam debitis iusto,
          velit cum odit odio officiis! Amet quas consectetur praesentium
          dolore. Perferendis, eaque veritatis! Quae adipisci sapiente ut ipsam
          illum eaque, impedit incidunt itaque!
        </p>
      </div>
    </div>
  );
}

export default About;
