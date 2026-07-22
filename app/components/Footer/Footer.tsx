import Container from "../Container/Container";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">

          {/* Company */}

          <div>
            <h2 className="text-2xl font-bold">
              Accredian Enterprise
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Empowering organizations through innovative enterprise learning,
              workforce upskilling, and industry-focused training programs that
              drive measurable business growth.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="#home" className="transition hover:text-teal-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#programs" className="transition hover:text-teal-400">
                  Programs
                </Link>
              </li>

              <li>
                <Link href="#companies" className="transition hover:text-teal-400">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="#testimonials" className="transition hover:text-teal-400">
                  Testimonials
                </Link>
              </li>

              <li>
                <Link href="#faq" className="transition hover:text-teal-400">
                  FAQ
                </Link>
              </li>

              <li>
                <Link href="#contact" className="transition hover:text-teal-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Connect With Us
            </h3>

            <div className="flex gap-4">

              <div className="rounded-xl bg-slate-800 p-3 transition hover:bg-teal-600">
                <FaLinkedin className="text-xl" />
              </div>

              <div className="rounded-xl bg-slate-800 p-3 transition hover:bg-teal-600">
                <FaGithub className="text-xl" />
              </div>

              <div className="rounded-xl bg-slate-800 p-3 transition hover:bg-teal-600">
                <FaFacebook className="text-xl" />
              </div>

              <div className="rounded-xl bg-slate-800 p-3 transition hover:bg-teal-600">
                <FaInstagram className="text-xl" />
              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Follow us for the latest updates on enterprise learning,
              technology, and workforce transformation.
            </p>
          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © 2026 Accredian Enterprise Clone. Built with Next.js & Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}