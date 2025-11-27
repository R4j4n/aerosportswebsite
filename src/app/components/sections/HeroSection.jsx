import MotionImage from "@/components/MotionImage";
import { Button } from "@/components/ui/button";

const HeroSection = ({ headerImage, waiverLink, locationData }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden  pt-[200px]">
      {/* Background Motion Image */}

      <MotionImage
        pageData={headerImage}
        waiverLink={waiverLink}
        locationData={locationData}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/60 flex items-center justify-center px-6 pt-[200px] z-20">
        <div className="max-w-7xl text-center animate-[fadeInUp_1s_ease-out]">
          {/* Badge */}
          <div className="inline-block border-2 border-[#39FF14] text-[#39FF14] px-7 py-3 rounded-full text-[0.85rem] font-bold tracking-wide uppercase mb-10 animate-[scaleIn_0.8s_ease-out]">
            Experience Pure Adrenaline
          </div>

          {/* Heading */}
          <h1 className="text-white font-black uppercase leading-tight mb-6 tracking-[2px] text-[clamp(2.8rem,8vw,4.5rem)] animate-[fadeInUp_1s_ease-out_0.2s_backwards]">
            Jump Into The Fun at{" "}
            <span className="text-[#39FF14]">
              AeroSports {locationData?.[0]?.location || "Oakville"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed mb-10 animate-[fadeInUp_1s_ease-out_0.4s_backwards]">
            The ultimate indoor trampoline park with 130+ trampolines, 27,000 sq
            ft of pure excitement, and 8+ epic attractions waiting for you.
          </p>

          {/* Stats */}
          <div className="flex justify-center flex-wrap gap-6 mb-10 animate-[fadeInUp_1s_ease-out_0.6s_backwards]">
            <div className="text-center">
              <div className="text-[#39FF14] text-4xl font-black">27,000+</div>
              <p className="text-white opacity-90">Sq Ft of Fun</p>
            </div>

            <div className="text-center">
              <div className="text-pink-500 text-4xl font-black">8+</div>
              <p className="text-white opacity-90">Attractions</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-[#39FF14] to-pink-500 text-transparent bg-clip-text text-4xl font-black">
                All Ages
              </div>
              <p className="text-white opacity-90">Welcome</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 animate-[fadeInUp_1s_ease-out_0.8s_backwards]">
            <Button variant="primary">🎪 Start Jumping</Button>
            <Button variant="secondary">📅 Book a Party</Button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
				@keyframes fadeInUp {
					from { opacity: 0; transform: translateY(30px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes scaleIn {
					0% { transform: scale(0.8); opacity: 0; }
					100% { transform: scale(1); opacity: 1; }
				}
			`}</style>
    </section>
  );
};

export default HeroSection;
