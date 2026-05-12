
import Image from 'next/image';

const Footer: React.FC = () => {
  // Array of 9 placeholder images for the center grid
  const instaGrid = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    src: `/api/placeholder/150/150`, // Replace with actual gallery/insta images
  }));

  return (
    <footer className="w-full bg-[#111111] text-stone-300 py-16 md:py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start">
          
          {/* Column 1: Branding & Navigation */}
          <div className="flex flex-row items-start gap-12">
            {/* Logo Logo */}
            <div className="w-[90px] h-[40px] relative">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col gap-3 border-l border-stone-800 pl-12 py-2">
              {['Home', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              
              {/* Social Icons Placeholder */}
              <div className="flex gap-4 mt-6 pt-6 border-t border-stone-800/50">
                <div className="w-3 h-3 rounded-full bg-stone-700 hover:bg-stone-500 cursor-pointer transition-colors" />
                <div className="w-3 h-3 rounded-full bg-stone-700 hover:bg-stone-500 cursor-pointer transition-colors" />
                <div className="w-3 h-3 rounded-full bg-stone-700 hover:bg-stone-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Column 2: Photo Grid */}
          <div className="flex justify-center lg:justify-start">
            <div className="grid grid-cols-3 gap-2 max-w-[320px]">
              {instaGrid.map((img) => (
                <div key={img.id} className="aspect-square w-24 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={img.src} 
                    alt="Social feed" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Bio & CTA */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-stone-200 tracking-wide">
                House of Heaven
              </h3>
              <p className="max-w-[300px] text-[11px] leading-relaxed text-stone-500 font-light tracking-wider">
                Capturing artful, real moments with a timeless 
                editorial style. Based in the heart of the city, 
                serving couples worldwide.
              </p>
            </div>

            <button className="px-10 py-4 border border-stone-800 text-[10px] uppercase tracking-[0.3em] text-stone-300 hover:bg-stone-200 hover:text-black transition-all">
              Inquire Today
            </button>
          </div>
        </div>

        {/* Bottom Bar: Legal & Credits */}
        <div className="mt-24 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-600">
            © 2026 HOUSE OF HEAVEN PHOTOGRAPHY
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-[0.2em] text-stone-600">
            <a href="#" className="hover:text-stone-400">Terms + Privacy</a>
            <span className="text-stone-800">|</span>
            <a href="#" className="hover:text-stone-400">Site Credit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;