"use client";

import { useEffect, useState } from "react";
import Container from "@/app/components/Container/Container";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FAQItem } from "@/app/types";

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const res = await fetch("/api/homepage");
        const data = await res.json();
        setFaqs(data.faqs);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            FAQs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Find answers to common questions about our enterprise learning
            platform and training solutions.
          </p>
        </div>

        {loading ? (
          <p className="mt-10 text-center text-slate-500">
            Loading FAQs...
          </p>
        ) : (
          <div className="mx-auto mt-16 max-w-4xl space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <FaChevronUp className="text-teal-600 transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-slate-500 transition-transform duration-300" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="border-t border-slate-200 px-6 pb-6 pt-4 leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}