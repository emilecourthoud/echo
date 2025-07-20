import { Hero } from '@/ui/pages/website/hero';
import { Navbar } from '@/ui/pages/website/navbar';
import { Footer } from '@/ui/pages/website/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
