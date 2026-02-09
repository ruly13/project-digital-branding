
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 @[480px]:gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#111318] text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] mb-6">
                        Senior Educator & Branch Manager  <span className="text-primary">with 20+ Years of Experience</span>
                    </h1>
                    <h2 className="text-[#616f89] text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                        Empowering students through English literacy and community leadership in Madiun and Magetan.
                    </h2>
                </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="aspect-[4/3] w-full relative">
                         <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url("/img/foto utama 4/fotoutama.jpeg")`
                            }}
                         >
                         </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
