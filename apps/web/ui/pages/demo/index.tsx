'use client';

import { Iphone18Mockup } from '@/ui/pages/website/animated-demo/iphone-16-mockup';
import { useDemoStore } from '@/lib/hooks/demo-store';

export function Demo() {
  const demoPage = useDemoStore((state) => state.getDemoPage());

  return (
    <Iphone18Mockup background={demoPage}>
      <div>
        <DemoHeader />
        <DemoBody />
        <DemoFooter />
      </div>
    </Iphone18Mockup>
  );
}

function DemoHeader() {
  return <div>DemoHeader</div>;
}

function DemoBody() {
  return <div>DemoBody</div>;
}

function DemoFooter() {
  return <div>DemoFooter</div>;
}
