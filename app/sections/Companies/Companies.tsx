"use client";

import { useEffect, useState } from "react";
import Container from "@/app/components/Container/Container";
import { Company } from "@/app/types";

export default function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await fetch("/api/homepage");
        const data = await res.json();
        setCompanies(data.companies);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <section id="companies" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Trusted Partners
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Trusted by Leading Companies
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Empowering organizations with world-class learning experiences and
            helping businesses build future-ready teams.
          </p>
        </div>

        {loading ? (
          <p className="mt-10 text-center text-slate-500">
            Loading companies...
          </p>
        ) : (
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group flex h-28 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}