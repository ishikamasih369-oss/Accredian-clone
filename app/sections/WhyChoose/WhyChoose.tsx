import Container from "@/app/components/Container/Container";
import {
  FaChalkboardTeacher,
  FaCertificate,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-3xl text-teal-600" />,
    title: "Expert-Led Learning",
    description:
      "Learn from experienced industry professionals delivering practical, business-focused training.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-teal-600" />,
    title: "Hands-on Learning",
    description:
      "Real-world projects and case studies help teams apply new skills with confidence.",
  },
  {
    icon: <FaCertificate className="text-3xl text-teal-600" />,
    title: "Industry Certifications",
    description:
      "Recognized certifications that validate employee learning and professional growth.",
  },
  {
    icon: <FaUsers className="text-3xl text-teal-600" />,
    title: "Enterprise Solutions",
    description:
      "Flexible learning programs designed to meet the goals of modern organizations.",
  },
];

export default function WhyChoose() {
  return (
    <section id="whychoose" className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Why Organizations Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Learning That Delivers Real Business Impact
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our enterprise learning solutions are designed to help businesses
            upskill teams, improve productivity, and prepare employees for the
            future of work.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}