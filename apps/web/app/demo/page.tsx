import { Button } from '@/ui/components';
import { Link } from 'lucide-react';
import { Demo } from '@/ui/pages/demo';

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-primary">
      <div className="flex flex-col items-center justify-center w-full">
        <Button>
          <Link href="/">Back</Link>
        </Button>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <Demo />
      </div>
    </div>
  );
}
