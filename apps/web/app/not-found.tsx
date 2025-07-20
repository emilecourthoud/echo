'use client';

import { Footer } from '@/ui/pages/website/footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Background } from '@/ui/pages/website/hero/background';

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (countdown === 0) {
      router.push('/');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="flex relative flex-col min-h-screen overflow-hidden">
      <div className="z-10 flex-1 flex flex-col items-center justify-center text-center px-4 gap-6">
        <img src="/pictogram.svg" alt="SecondBrain" className="size-24" />
        <h1 className="text-4xl font-bold">Oops, this page is not found!</h1>
        <p className="text-xl mb-3 font-medium text-text-secondary">Navigating back to home in {countdown}...</p>
      </div>
      <Background variant="blue" />

      <Footer />
    </div>
  );
}
