"use client";

import { useState } from "react";
import Container from "@/app/components/Container/Container";
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setMessage(data.message);

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          company: "",
        });
      }
    } catch {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}

          <div>
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
              Get In Touch
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Let's Build Your Team's Future Together
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Discover how Accredian Enterprise can help your organization
              upskill employees through industry-focused learning programs,
              expert mentorship, and measurable business outcomes.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-teal-100 p-4">
                  <FaEnvelope className="text-xl text-teal-600" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Email
                  </p>

                  <p className="text-slate-600">
                    enterprise@accredian.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-teal-100 p-4">
                  <FaPhoneAlt className="text-xl text-teal-600" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Phone
                  </p>

                  <p className="text-slate-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-teal-100 p-4">
                  <FaClock className="text-xl text-teal-600" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    Office Hours
                  </p>

                  <p className="text-slate-600">
                    Mon - Fri • 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="mb-5 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="mb-5 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="mb-5 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Request Demo"}
            </button>

            {message && (
              <p className="mt-5 text-center font-medium text-green-600">
                {message}
              </p>
            )}
          </form>

        </div>
      </Container>
    </section>
  );
}