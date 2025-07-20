import { Background } from './constants';

export function IphoneBackground({ background }: { background: Background }) {
  if (background === 'record') {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm rounded-[40px] overflow-hidden">
        <div className="absolute -top-[100px] -left-[200px] flex items-start justify-end">
          <div className="w-[500px] h-[500px] bg-radial from-brand-600 via-transparent to-transparent rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-bg-primary blur-sm opacity-40" />
        </div>
      </div>
    );
  } else if (background === 'home') {
    // TODO: Add correct background
    return <div className="absolute top-0 left-0 w-full h-full bg-bg-brand rounded-[40px]" />;
  }
}
