import Container from "@/app/components/Container/Container";
import {
  FaSearch,
  FaClipboardCheck,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-teal-600" />,
    title: "Identify Skill Gaps",
    description:
      "Analyze your organization's learning requirements and workforce capabilities.",
  },
  {
    icon: <FaClipboardCheck className="text-3xl text-teal-600" />,
    title: "Create Learning Plan",
    description:
      "Build customized learning paths aligned with your business objectives.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-teal-600" />,
    title: "Deliver Training",
    description:
      "Provide engaging instructor-led sessions, projects, and assessments.",
  },
  {
    icon: <FaChartLine className="text-3xl text-teal-600" />,
    title: "Track Progress",
    description:
      "Measure outcomes with dashboards, analytics, and performance reports.",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Learning Framework
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            How Our Learning Process Works
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A structured four-step framework that helps organizations
            identify learning needs, deliver impactful training,
            and measure business outcomes.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                {step.icon}
              </div>

              <span className="rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                STEP {index + 1}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}