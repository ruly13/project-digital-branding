
export default function SocialImpactSection() {
  return (

    <section className="py-24 bg-white scroll-mt-24" id="social-impact">
      <div className="container mx-auto px-6 max-w-7xl">
         <div className="bg-[#f0f2f4] rounded-2xl p-8 md:p-12 border border-[#e5e7eb]">
            <div className="text-center mb-10">
              <h2 className="text-[#111318] text-3xl font-bold leading-tight tracking-[-0.015em]">Social Impact & Community Engagement</h2>
              <p className="text-[#616f89] mt-2 max-w-2xl mx-auto">
                Committed to making quality English education accessible through community initiatives and volunteer work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:auto-rows-[240px]">
                {/* Large Main Item */}
               <div className="group relative overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2 h-64 md:h-auto bg-gray-200">
                  <div 
                    aria-label="Teaching in rural area" 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    role="img"
                    style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj-Fs7NoYd9K1RJrsE48vPR1Tgb1yUcFSdUZDhauuvh3VLj1EZbIPTFYivm3JXR1HDF53UwHjxyFUQxKZv97-GwWLKjgPsD56dQG62sfu2KERVP4yyUcoXnV-oZsJvm_SOkRjHt3sPjwzr85i1FSYCrITF9uFU_4qXzzD-RZcpc5QWVDPfy-R5Q98bkv82Vfee3Xpo53xymE7KOZKZXCa0RWRG28uwGUQtofMJ9LiZlj7SkAcMtP6HvRBF8jvUL_w6jvBJmwSHyKo")`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-orange-500 rounded-full">Volunteer</span>
                     <p className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Rural Education Initiative - 2023</p>
                  </div>
               </div>

                {/* Small Item 1 */}
               <div className="group relative overflow-hidden rounded-xl h-64 md:h-auto bg-gray-200">
                   <div 
                    aria-label="Volunteer Workshop"
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    role="img"
                    style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxuezMv39eF3LadBio0Q86CMbb12wJUlvRrMwhB4k6gSK4kwbwWQdqE7mLneNdLfTJGDhpeDyoGxZXYP98CfWwm3OHSiFkx0sAMqs0yiocejDFPPOja6iT839JPGCcUSg7HK8MyotxJfWaYb_otbllRwTK7kU92UKHM664iv8weOJiwWmEz4tL_B1_tDOmad67RXjc6xIzmbF1y3gutNF5J-rolIx3-eTDMJ41zg5na4Y7paCgHhDgoFkhzjFVhL-Ed50h3kzu498")`
                    }}
                   ></div>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                   <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Volunteer Workshop - Jakarta</p>
                   </div>
               </div>

                {/* Small Item 2 */}
               <div className="group relative overflow-hidden rounded-xl h-64 md:h-auto bg-gray-200">
                   <div 
                    aria-label="Exchange Program"
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    role="img"
                    style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuiCOIyE8mz7w1PzrpZThSfs5isiECVL6-vDIUE5V1ZCxewXN3O_9l1XPz_Fz4mnia1udosW8iwv-giQLh9J_R0LSY2f2JdsumiZUzJ_hdIcuqcz1yoQajV8_RofO3vhY-3JtmcM6AA7ej-yGXXV_9sm5KX9_lBCxum6uZacCIyJIG7_LnQQOU1QjSjDrQ-zskKnSI_M6NZGx-ct1SokoCUsbcT1AInFJs7TyEvh37BhGQPkej3CH-uhWjawUzBWh7dZTrtko14no")`
                    }}
                   ></div>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                   <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cultural Exchange - Tokyo</p>
                   </div>
               </div>

                {/* Wide Item */}
               <div className="group relative overflow-hidden rounded-xl lg:col-span-2 h-64 md:h-auto bg-gray-200">
                   <div 
                    aria-label="Community Event"
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    role="img"
                     style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6CQK46iR09F3oEhM17aPQEgvgwpAI4QVIiojC8BiGhGXW92_7kmsyAZae7m4dfgQhnlACPKVRWjMWFnOWPcNe9-7KgZTXbKCPRhJKQN0u3QkKpGmUUbsNHPZhFPXTU5CfWTcuslEaVIEV2ZbvlNO6QZZXeHgUfN-1mfdBej7WDC5P-3TYmz7DlSXZjJNuRUUnq6yTamnVtBu3Rzat7a5Yr9eKuUIEOd8CgyvCwQHEu0aRFgc6qV5tCzcEz2GXo8KBr_W3YqZ7jUk")`
                    }}
                   ></div>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                   <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-blue-600 rounded-full">Community</span>
                      <p className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Global Citizenship Seminar</p>
                   </div>
               </div>

            </div>
         </div>
      </div>
    </section>
  );
}
