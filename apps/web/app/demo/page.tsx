import { Link } from '@/ui/components';
import { ChevronLeft } from 'lucide-react';
import { Demo } from '@/ui/pages/demo';

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-primary">
      <div className="flex flex-col  w-full py-2 px-3">
        <Link href="/" className="w-fit flex flex-row gap-2 items-center justify-center px-2 py-1 text-text-secondary cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Home</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <Demo />
      </div>
    </div>
  );
}
