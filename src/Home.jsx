import React from "react";
import girl from "./assets/girl.webp";

function Home() {
  return (
<header className="relative h-screen w-full flex flex-col justify-between bg-gradient-to-br from-[#0e0d0c] to-[#3b3e50] overflow-hidden">
  <div className="flex items-center justify-between px-4 sm:px-8 pt-8 z-10">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        src="https://ext.same-assets.com/1012731771/3263737750.webp"
        alt="Lit Vibes logo"
        className="w-28 sm:w-36 h-6 sm:h-8"
      />
    </div>
  </div>

  <div className="flex flex-1 flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 z-10">
    {/* Hero Content */}
    <div className="max-w-xl mt-8 md:mt-0 w-full md:w-auto flex flex-col items-center md:items-start">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 sm:mb-8 leading-tight text-center md:text-left">
        Discover trends that make you
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ed3d5b] to-[#f1d8d1] ml-2">Stylish</span>
      </h1>
      <div className="w-full flex justify-center md:justify-start">
        <a
          href="https://app.litvibes.club/5bkS/hct7qstc"
          className="inline-flex items-center justify-center px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-semibold text-white text-base sm:text-lg shadow-lg transition-colors mt-3 bg-gradient-to-r from-pink-500 to-orange-400"
        >
          Download Now
          <span className="ml-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="#ed3d5b"/><path d="M10 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
      </div>
    </div>

    {/* Girl Image Container - positioning at bottom on all screens */}
    <div className="relative flex justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0 self-end">
  <img
    src={girl}
    alt="Girl holding phone"
    className="w-64 sm:w-80 md:w-72 lg:w-96 xl:w-120 object-contain z-20"
    style={{ 
      objectPosition: 'bottom',
      maxHeight: '70vh',
      height: 'auto',
      width: 'auto',
      maxWidth: '100%',
      transition: 'width 0.3s ease-in-out',
      objectFit: 'contain',
      minHeight: '0',
      transform: 'scale(1)',
      transformOrigin: 'bottom center'
    }}
  />
</div>
  </div>

  {/* Background grid */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://ext.same-assets.com/1012731771/2199817236.webp"
      alt="Hero background collage"
      className="w-full h-full object-cover opacity-40"
    />
  </div>

  <div className="absolute bottom-0 left-0 w-full text-center bg-gradient-to-t from-black via-transparent to-transparent pb-4" />
</header>
  );
}

export default Home;