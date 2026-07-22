import Container from "@/app/components/Container/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <Container>
        <div className="flex flex-col-reverse items-center justify-between gap-16 py-24 lg:flex-row">

          {/* Left Content */}
          <div className="max-w-2xl">

            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
              Trusted by Leading Enterprises
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Empower Your Workforce with{" "}
              <span className="text-blue-900">
                Industry-Focused Learning
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Equip your teams with future-ready skills through
              enterprise learning solutions, expert-led training,
              and measurable business outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-800"
              >
                Request Demo
              </a>

              <a
                href="#programs"
                className="rounded-xl border-2 border-blue-900 bg-white px-8 py-4 font-semibold text-blue-900 transition duration-300 hover:bg-blue-50"
              >
                Explore Programs
              </a>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  500+
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Enterprise Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-600">
                  95%
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Success Rate
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-900">
                  50K+
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Professionals Trained
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-teal-100 blur-3xl"></div>

            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-blue-100 blur-3xl"></div>

            <Image
              src="/hero.png"
              alt="Enterprise Learning"
              width={560}
              height={460}
              priority
              className="relative rounded-3xl border border-slate-200 shadow-2xl"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}