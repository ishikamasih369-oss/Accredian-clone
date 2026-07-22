import Container from "@/app/components/Container/Container";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa";

const programs = [
  {
    title: "Enterprise Upskilling",
    description:
      "Customized learning journeys that help organizations build future-ready teams with industry-aligned skills.",
    icon: <FaUsers className="text-3xl text-teal-600" />,
  },
  {
    title: "Leadership Development",
    description:
      "Develop confident leaders through structured management, communication, and strategic thinking programs.",
    icon: <FaChalkboardTeacher className="text-3xl text-teal-600" />,
  },
  {
    title: "Technical Excellence",
    description:
      "Hands-on learning in Full Stack Development, AI, Cloud Computing, and Cyber Security for modern enterprises.",
    icon: <FaLaptopCode className="text-3xl text-teal-600" />,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            Enterprise Learning Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Build Skills That Drive Business Growth
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Empower your workforce with flexible learning programs designed
            to improve productivity, leadership, and technical expertise.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                {program.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {program.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {program.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-800"
              >
                Request Demo
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}