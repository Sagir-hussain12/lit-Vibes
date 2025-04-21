import React from "react";
import Home from "./Home";

function App() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col font-sans">
      {/* NAV + HERO SECTION */}
<Home/>

      {/* FEATURE SECTION */}
      <section className="relative py-8 text-center text-white min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center mt-10 mb-8 "
        style={{
          backgroundImage: `url(https://cdn.prod.website-files.com/65c79e3fddb7ddfd8d7413fc/67e67c8d74f09620685387f4_blurrer.webp)`,
          filter: "blur(8px)",
          transform: "scale(1.1)", 
          zIndex: 0,
          width: "95%",
        
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2331] to-black opacity-80 z-0 "></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8">Seamless Style in Every Second</h2>
        <img 
          src="https://cdn.prod.website-files.com/65c79e3fddb7ddfd8d7413fc/67e67bf1b8ad01a2ba5a98bb_thromb.webp" 
          alt="Style" 
          className="mx-auto w-4/5 max-w-4xl " 
        />
        <h2 className="text-3xl font-extrabold mb-5 mt-5">
          Effortless Trends,
          <span className="text-pink-400"> No Distractions</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 mt-8">
          <div className="flex items-center bg-[#23202a] px-6 py-4 rounded-full shadow-lg">
            <img src="https://ext.same-assets.com/1012731771/3134457230.webp" alt="No Ads" className="w-7 h-7 mr-2" />
            <span className="font-semibold text-lg">No Ads</span>
          </div>
          <div className="flex items-center bg-[#23202a] px-6 py-4 rounded-full shadow-lg">
            <img src="https://ext.same-assets.com/1012731771/555257020.webp" alt="Videos" className="w-7 h-7 mr-2" />
            <span className="font-semibold text-lg">10,000+ Videos in 30+ Categories</span>
          </div>
          <div className="flex items-center bg-[#23202a] px-6 py-4 rounded-full shadow-lg">
            <img src="https://ext.same-assets.com/1012731771/1326499487.webp" alt="New Videos" className="w-7 h-7 mr-2" />
            <span className="font-semibold text-lg">New Videos Everyday</span>
          </div>
        </div>
        <a
          href="https://app.litvibes.club/5bkS/hct7qstc"
          className="inline-flex items-center justify-center px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-semibold text-white text-base sm:text-lg shadow-lg transition-colors mt-3 bg-gradient-to-r from-pink-500 to-orange-400"        >
          Download Now
          <span className="ml-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" fill="#ed3d5b"/><path d="M10 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
      </div>
    </section>
     

      {/* TESTIMONIALS */}
      <section className="py-16 bg-black bg-opacity-80">
        <h2 className="text-3xl font-extrabold mb-10 text-center">User Love</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-[#23202a] rounded-xl p-7 shadow-lg flex flex-col gap-4">
            <p className="italic text-gray-200 mb-4">"Lit Vibes is my go-to platform for quick style tips and educational content. The videos are short, engaging, and relatable to my everyday life. It's like having a personal style coach in my pocket!"</p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://ext.same-assets.com/1012731771/433995782.webp" alt="Priya Sharma" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="font-semibold">Priya Sharma</div>
                <div className="text-xs text-gray-400">Jaipur</div>
              </div>
            </div>
          </div>
          <div className="bg-[#23202a] rounded-xl p-7 shadow-lg flex flex-col gap-4">
            <p className="italic text-gray-200 mb-4">"I never thought learning about trends and personal development could be so fun and easy. Lit Vibes has helped me upgrade my style and confidence in just a few minutes a day!"</p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://ext.same-assets.com/1012731771/121463984.webp" alt="Ayesha Khan" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="font-semibold">Ayesha Khan</div>
                <div className="text-xs text-gray-400">Lucknow</div>
              </div>
            </div>
          </div>
          <div className="bg-[#23202a] rounded-xl p-7 shadow-lg flex flex-col gap-4">
            <p className="italic text-gray-200 mb-4">"What I love about Lit Vibes is how it understands the needs of women like me. The videos are empowering, educational, and perfect for my busy schedule. It's truly inspiring!"</p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://ext.same-assets.com/1012731771/1373103266.webp" alt="Meera Patel" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <div className="font-semibold">Meera Patel</div>
                <div className="text-xs text-gray-400">Surat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#ed3d5b] via-[#f1d8d1] to-[#ed3d5b] text-center">
        <h2 className="text-3xl font-extrabold text-black mb-7">Join Lit Vibes Now</h2>
        <a
          href="https://app.litvibes.club/5bkS/hct7qstc"
          className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-pink-600 text-lg font-bold border-2 border-pink-500 shadow-xl transition-colors hover:bg-gray-50"
        >
          Download Now
          <span className="ml-2">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#ed3d5b" strokeWidth="2" fill="#ed3d5b"/><path d="M10 8l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white text-[#3b3e50]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-7 px-4">
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://ext.same-assets.com/1012731771/3263737750.webp" alt="Lit Vibes logo"  className="w-36 h-8" />
              
            </div>
            <p className="text-sm">Discover trends that make you stylish in 60 secs.</p>
            <p className="text-sm">3rd And 4th Floor, Building 1084, 14th Main, 17th Cross Road, Sector 3, Hsr Layout, Bengaluru, Karnataka 560102</p>
            <p className="text-sm">Ph: +91 93555 66240</p>
          </div>
          <div className="flex-1 md:text-right space-y-3 mt-6 md:mt-0">
            <div className="font-bold mb-2">Download App</div>
            <a
              href="https://app.litvibes.club/5bkS/hct7qstc"
              className="inline-flex items-center px-5 py-3 rounded-lg bg-black text-white font-semibold border-2 border-pink-500 hover:bg-[#40302c] shadow"
            >
              <svg width="18" height="18" fill="currentColor" className="mr-2" viewBox="0 0 24 24"><path d="M7.707 13.293a1 1 0 011.414 0L12 16.172l2.879-2.879a1 1 0 111.414 1.414l-3.586 3.586a1 1 0 01-1.414 0l-3.586-3.586a1 1 0 010-1.414z"/></svg>
              Play Store
            </a>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex gap-4 mb-2 md:mb-0">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cancellation Policy</a>
          </div>
          <div>2024 LitVibes © All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
