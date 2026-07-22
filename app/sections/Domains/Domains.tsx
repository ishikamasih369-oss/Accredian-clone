import Container from "@/app/components/Container/Container";
import {
  FaRobot,
  FaCode,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

const domains = [
  {
    title: "Artificial Intelligence",
    description: "Master AI, ML and Generative AI with real-world projects.",
    icon: <FaRobot className="text-3xl text-teal-600" />,
  },
  {
    title: "Full Stack Development",
    description: "Frontend, backend and deployment using modern technologies.",
    icon: <FaCode className="text-3xl text-teal-600" />,
  },
  {
    title: "Cloud Computing",
    description: "AWS, Azure and Google Cloud for enterprise applications.",
    icon: <FaCloud className="text-3xl text-teal-600" />,
  },
  {
    title: "Data Analytics",
    description: "Transform business data into actionable insights.",
    icon: <FaDatabase className="text-3xl text-teal-600" />,
  },
  {
    title: "Cyber Security",
    description: "Protect organizations from modern cyber threats.",
    icon: <FaShieldAlt className="text-3xl text-teal-600" />,
  },
  {
    title: "Mobile Development",
    description: "Build Android and iOS applications using modern frameworks.",
    icon: <FaMobileAlt className="text-3xl text-teal-600" />,
  },
];

export default function Domains() {
  return (
    <section id="domains" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Learning Domains
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Explore In-Demand Technologies
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Choose from industry-focused programs designed to equip learners
            with practical skills in today's fastest-growing technology domains.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                {domain.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {domain.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {domain.description}
              </p>

              <button className="mt-8 rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-800">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}