import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    companies: [
  {
    id: 1,
    name: "Google",
    logo: "/images/google.png",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/images/microsoft.png",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "/images/amazon.png",
  },
  {
    id: 4,
    name: "Adobe",
    logo: "/images/adobe.png",
  },
  {
    id: 5,
    name: "Infosys",
    logo: "/images/infosys.png",
  },
  {
    id: 6,
    name: "TCS",
    logo: "/images/tcs.png",
  },
],

    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "HR Manager",
        company: "TechNova",
        rating: 5,
        feedback:
          "Elevate transformed our employee training process.",
      },
      {
        id: 2,
        name: "Rahul Sharma",
        role: "Engineering Lead",
        company: "CloudSync",
        rating: 5,
        feedback:
          "Hands-on projects helped our team learn much faster.",
      },
      {
        id: 3,
        name: "Emily Chen",
        role: "Learning Head",
        company: "FutureTech",
        rating: 5,
        feedback:
          "Excellent mentors and industry-focused curriculum.",
      },
    ],

    faqs: [
      {
        id: 1,
        question: "Do you provide certificates?",
        answer:
          "Yes. Every learner receives an industry-recognized certificate after successful completion.",
      },
      {
        id: 2,
        question: "Is corporate training available?",
        answer:
          "Yes. We provide customized enterprise learning programs for organizations of all sizes.",
      },
      {
        id: 3,
        question: "Are the programs online?",
        answer:
          "Yes. All programs are delivered through a flexible online learning platform.",
      },
    ],
  });
}