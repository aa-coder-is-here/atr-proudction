// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="relative bg-[#022143] text-white pt-36 pb-10 px-4 mt-32">
      {/* Floating Card */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-3/4 bg-white text-[#022143] rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 z-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Assess your business potential and find <br className="hidden sm:block" />
            <span className="text-blue-800">opportunities for bigger success</span>
          </h2>
        </div>
        <div>
          <button className="bg-[#3B6EC9] hover:bg-[#2e5cb5] transition text-white px-6 py-3 rounded-md shadow-lg">
            Let's Talk
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-2">
              <div className="bg-white w-6 h-6" />
              <span className="text-2xl font-semibold">ATR Production</span>
            </div>
            <p className="max-w-md text-sm font-light leading-relaxed text-center md:text-left">
              We focus on being honest, practical, and straight to the point. The result comes first not
              technology, budget or accepted practice.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/30" />

        {/* Copyright */}
        <p className="text-sm text-center">
          Copyright © {new Date().getFullYear()} by ATR Production | All rights reserved
        </p>
      </div>
    </footer>
  );
}
