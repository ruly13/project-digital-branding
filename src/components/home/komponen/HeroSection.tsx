
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 @[480px]:gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#111318] text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] mb-6">
                        Master English for a <span className="text-primary">Global World</span>
                    </h1>
                    <h2 className="text-[#616f89] text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                        Tailored English instruction for professionals and students worldwide. Unlock your potential with personalized coaching.
                    </h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link href="#courses" className="flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md">
                        View Courses
                    </Link>
                    <Link href="#about" className="flex items-center justify-center px-8 py-3 bg-white text-[#111318] border border-[#dbdfe6] font-bold rounded-lg hover:bg-[#f0f2f4] transition-colors">
                        About Me
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="aspect-[4/3] w-full relative">
                         <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmPVycOZITtjeyZNO8UcIDcjRDqW87FJkfAPFCCC0bDewZ83CBdr-Z6JAHZj3Fqyr_Yxgzs3egrkHrdqxEngqXiit3Vc01404tQVEo2NY2ejQBoOJ19lospmlGGnBVETcWd-LeGsKb-cUqlyqpXTRDljs_LTHF86195sDlEyc2CRSOh9DpzHB-wDWCLNpqWxOQipzuYw917HdhnG1DngLHdlONIzliSaqUTNCsm--kFP_AyTQnrzj9WVg4Fitbfu0smBnXDzsGJ54")`
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
