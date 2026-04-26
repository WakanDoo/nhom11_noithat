import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactInfoSection } from "@/components/sections/contact-info-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { ShowroomSection } from "@/components/sections/showroom-section";

export default function HomePage() {
  return (
    <div className="w-full flex justify-center bg-white">
      <main className="w-full max-w-container mx-auto flex flex-col">
        <Header />
        <ContactInfoSection />
        <GallerySection />
        <ContactFormSection />
        <ShowroomSection />
        <Footer />
      </main>
    </div>
  );
}

