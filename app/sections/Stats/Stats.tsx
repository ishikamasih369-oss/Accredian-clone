import Container from "@/app/components/Container/Container";

const stats = [
  {
    number: "500+",
    label: "Enterprise Clients",
  },
  {
    number: "50K+",
    label: "Professionals Trained",
  },
  {
    number: "120+",
    label: "Expert Mentors",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-blue-900 py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Trusted by Organizations Across Industries
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            We help businesses transform their workforce through
            enterprise-focused learning and measurable outcomes.
          </p>
        </div>

        <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <h3 className="text-5xl font-bold text-teal-400">
                {item.number}
              </h3>

              <p className="mt-4 text-lg font-medium text-slate-200">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}