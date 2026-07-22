"use client";

import { useEffect, useState } from "react";
import Container from "@/app/components/Container/Container";
import { FaStar } from "react-icons/fa";
import { Testimonial } from "@/app/types";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/homepage");
        const data = await res.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Organizations trust our learning solutions to build skilled,
            confident, and future-ready teams.
          </p>
        </div>

        {loading ? (
          <p className="mt-10 text-center text-slate-500">
            Loading testimonials...
          </p>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Rating */}
                <div className="mb-5 flex text-yellow-400">
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} className="mr-1" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="leading-7 italic text-slate-600">
                  "{item.feedback}"
                </p>

                {/* User */}
                <div className="mt-8 flex items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white">
                    {item.name.charAt(0)}
                  </div>

                  <div className="ml-4">
                    <h3 className="font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.role}
                    </p>

                    <p className="text-sm font-semibold text-teal-600">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}