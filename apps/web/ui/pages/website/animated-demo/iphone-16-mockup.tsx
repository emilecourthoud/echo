import { cn } from '@/lib/utils';

interface Iphone18MockupProps {
  children?: React.ReactNode;
  background: 'home' | 'call' | 'secondBrain';
  className?: string;
}

export function Iphone18Mockup({ children, background, className }: Iphone18MockupProps) {
  return (
    <div
      className={cn(
        'mt-8 relative w-[280px] h-[580px] bg-bg-secondary rounded-[45px] border-4 border-border-primary  shadow-lg',
        className,
      )}
    >
      {/* Status Bar */}
      <div className="absolute top-3 left-0 right-0 px-6 flex justify-between items-center z-20 text-white">
        {/* Left: Time */}
        <div className="pl-1.5 text-xs font-medium">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>

        {/* Center: Dynamic Island */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[84px] h-[24px] bg-black rounded-[20px] flex items-center justify-center">
          <div className="absolute right-[18px] w-[8px] h-[8px] rounded-full bg-gray-700" /> {/* Camera */}
        </div>

        {/* Right: Connection, WiFi, Battery */}
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <div className="h-3 relative flex items-end gap-[0.8px]">
            <div className="h-1 w-0.5 bg-white rounded-sm"></div>
            <div className="h-1.5 w-0.5 bg-white rounded-sm"></div>
            <div className="h-2 w-0.5 bg-white rounded-sm"></div>
            <div className="h-2.5 w-0.5 bg-white rounded-sm"></div>
          </div>
          {/* 5G  */}
          <div className="text-xs font-medium ">5G</div>

          {/* Battery */}
          <div className="w-5 h-3 border border-white rounded-[3px] relative flex items-center">
            <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-[1px] h-1.5 bg-white rounded-r-sm"></div>
            <div className="h-1.5 w-3 bg-white ml-0.5 rounded-[1px]"></div>
          </div>
        </div>
      </div>

      {/* Power button */}
      <div className="absolute top-32 -right-1.5 w-1.5 h-16 bg-border-primary rounded-r-md" />

      {/* Action button */}
      <div className="absolute top-24 -left-1.5 w-1.5 h-8 bg-border-primary rounded-l-md" />

      {/* Volume buttons */}
      <div className="absolute top-40 -left-1.5 w-1.5 h-10 bg-border-primary rounded-l-md" />
      <div className="absolute top-52 -left-1.5 w-1.5 h-10 bg-border-primary rounded-l-md" />

      {/* Wallpaper */}
      {background === 'call' ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-blue-600 rounded-[40px]" />
      ) : background === 'secondBrain' ? (
        <div className="absolute top-0 left-0 w-full h-full bg-bg-brand rounded-[40px]" />
      ) : (
        <img
          src="/assets/images/iphone-wallpaper.jpg"
          alt="iphone-wallpaper"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[40px]"
        />
      )}

      {/* Screen content */}
      <div className={`relative w-full h-full pt-12 px-2 pb-4 flex flex-col overflow-hidden rounded-[40px] z-100`}>{children}</div>
    </div>
  );
}
