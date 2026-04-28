import Image from "next/image";
import Link from "next/link";

function HeaderBar() {
  return (
    <header className="absolute left-0 top-0 w-full h-[118px] bg-white">
      <div className="absolute left-0 top-0 w-full h-[118px]" />

      <div className="absolute left-[17.79px] top-[76px] w-[18.78px] h-[12px] flex flex-col justify-between">
        <div className="h-[2px] bg-black/90" />
        <div className="h-[2.5px] bg-black/90" />
        <div className="h-[2.5px] bg-black/90" />
      </div>
      <Link 
      href="/">
      <div className="absolute z-50 left-[500px] top-[22px] w-[635.35px] h-[96px] flex items-center ">
        
        <div className="text-[#0A0A0A] [font-family:var(--font-cormorant),_serif] font-medium tracking-[0.08em] text-[64px] leading-[55px]">
          OWLHOME
        </div>
      </div>
      </Link>

      <nav className="absolute left-0 top-0 w-full h-full">
        <a
          href="/menu"
          className="absolute left-[40.53px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          MENU
        </a>
        <a
          href="/#about"
          className="absolute left-[113px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          ABOUT
        </a>

        <Link href="/search" className="flex items-center">
          <svg
            className="absolute left-[195px] top-[71px] w-[24px] h-[24px] text-black"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M16.5 16.5 21 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute left-[221px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]">
            SEARCH
          </div>
        </Link>

        <a
          href="/products"
          className="absolute left-[970px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          PRODUCTS
        </a>
        <Link
          href="/construction"
          className="absolute left-[1098px] top-[72px] text-[20px] leading-[23px] font-medium tracking-[0.08em] text-[#0A0A0A] [font-family:var(--font-roboto),_system-ui]"
        >
          CONSTRUCTION
        </Link> 

        <div className="absolute left-[1181px] top-[18px] w-[35px] h-[35px] text-black">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full" fill="none">
            <path
              d="M7.5 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M17 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M3.5 4.5h2l2.1 10.5h10.1l2.3-7.5H7.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute left-[1221px] top-[23px] w-[26px] h-[26px] text-black">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-full h-full" fill="none">
            <path
              d="M12 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 12 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4.5 21c1.7-4.3 13.3-4.3 15 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

function FooterBar() {
  return (
    <footer className="absolute left-0 top-[2200px] w-[1288px] h-[153px]">
      <div className="absolute left-[8px] top-[10px] w-[1280px] h-[127px] bg-black" />

      <div className="absolute left-[29px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
        <Link href="/contact" className="text-white hover:opacity-80">CONTACT</Link>
      </div>
      <div className="absolute left-[152px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
        ALL STORES
      </div>
      <div className="absolute left-[304px] top-[33px] text-[20px] font-light tracking-[0.05em] text-white [font-family:var(--font-inter),_system-ui]">
        PRIVACY AND DATA PROTEPROTECTION POLICY
      </div>
      <div className="absolute left-[140px] top-[37px] w-[2px] h-[16px] bg-white" />
      <div className="absolute left-[292px] top-[37px] w-[2px] h-[16px] bg-white" />

      <div className="absolute left-[980px] top-[62px] text-[14px] font-normal text-white [font-family:var(--font-inter),_system-ui]">
        Follow us on:
      </div>

      <div className="absolute left-[1077px] top-[9px] w-[83px] h-[117px]">
        <Image src="/figma/home/footer-ig.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute left-[1136px] top-[22px] w-[63px] h-[90px]">
        <Image
          src="/figma/home/footer-facebook.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute left-[1172px] top-0 w-[95px] h-[135px]">
        <Image src="/figma/home/footer-gmail.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute left-0 top-[38px] w-[81px] h-[115px]">
        <Image src="/figma/home/footer-extra.png" alt="" fill className="object-cover" />
      </div>

      <div className="absolute left-[64px] top-[86px] text-[16px] font-medium text-white [font-family:var(--font-inter),_system-ui]">
        owlhome@gmail.com
      </div>
    </footer>
  );
}
export default function Construction() {
    return (
      <div className="flex flex-col flex-1 bg-white">
        <main className="w-full flex justify-center">
          {/* Container chính */}
          <div className="relative w-[1280px] min-h-[1457px] bg-white">
            <HeaderBar />
  
            {/* Content frame */}
            <div className="absolute left-0 top-[153px] w-[1280px] px-2">
              {/* Lines trang trí */}
              <div className="w-full h-[2px] bg-black mb-12" />
              
              <div className="text-center py-12">
                 <h1 className="text-[64px] font-medium text-black [font-family:var(--font-roboto),_system-ui] uppercase tracking-wider">
                  CONSTRUCTION
                 </h1>
              </div>
  
              <div className="w-full h-[2px] bg-black mb-8" />
  
              <div className="max-w-7xl mx-auto px-5 pt-5 pb-10 space-y-15">

                {/* Item 1 */}
                <Link href="/construction/the-empire">
                  <div className="grid grid-cols-2 gap-6 items-center cursor-pointer hover:opacity-80 transition">
                    
                    <div className="h-[500px] relative">
                      <Image 
                        src="/figma/construction/construction-card-1-2d8bcc.png" 
                        alt="" 
                        fill 
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-4">THE EMPIRE PENTHOUSE</h2>
                      <p className="text-gray-500 leading-relaxed">
                        Imagine a living space that feels open and free-spirited, infused with luxury and modern elegance, where every detail reflects the refinement and passion of a young couple. This penthouse is not merely a place to live, but a statement of lifestyle and personal identity
                      </p>
                    </div>

                  </div>
                </Link>

                {/* Item 2 */}
                <Link href="/construction/the-glamorous">
                  <div className="grid grid-cols-2 gap-6 items-center cursor-pointer hover:opacity-80 transition">
                    
                    <div className="h-[500px] relative">
                      <Image 
                        src="/figma/construction/construction-card-2-4e2a73.png" 
                        alt="" 
                        fill 
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-4">THE GLAMOROUS BLACK APARTMENT</h2>
                      <p className="text-gray-500 leading-relaxed">
                        The villa carries the essence of a rustic village, blended with a classic style. Its architectural details may appear simple at first glance, yet they embody sophistication and elegance, from the design to the choice of materials
                      </p>
                    </div>

                  </div>
                </Link>
                {/* Item 3 */}
                <Link href="/construction/the-zeit">
                  <div className="grid grid-cols-2 gap-6 items-center cursor-pointer hover:opacity-80 transition">
                    
                    <div className="h-[500px] relative">
                      <Image 
                        src="/figma/construction/construction-card-3.png" 
                        alt="" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-4">THE ZEIT PENTHOUSE</h2>
                      <p className="text-gray-500 leading-relaxed">
                        Interior design is not merely about decorating a home; it is a reflection of a lifestyle and the values that both the designer and the client believe in. The choice of space, colors, materials, as well as the arrangement, all contribute to a unique identity, bringing emotion and a sense of connection between people and their living environment
                      </p>
                    </div>
                  </div>
                </Link>

                </div> {/* Đóng Grid */}
  
              <FooterBar />
            </div> {/* Đóng absolute content frame */}
          </div> {/* Đóng relative container */}
        </main>
      </div> 
    );
  }