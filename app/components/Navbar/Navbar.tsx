export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-slate-900"
        >
          Accredian
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Home", "#home"],
            ["Programs", "#programs"],
            ["Enterprise", "#companies"],
            ["Testimonials", "#testimonials"],
            ["FAQ", "#faq"],
            ["Contact", "#contact"],
          ].map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="font-medium text-slate-600 transition hover:text-teal-600"
            >
              {name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-blue-900 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-800"
        >
          Request Demo
        </a>

      </div>
    </header>
  );
}