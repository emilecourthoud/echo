export function AnimatedPictogram() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Moving beam of light */}
      <div
        className="w-32 h-32 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, transparent 88%, #22c55e 90%, #ffffff 91%, #22c55e 92%, transparent 94%, transparent 100%)',
          animation: 'beam-rotate 2s linear infinite',
          filter: 'drop-shadow(0 0 15px #22c55e)',
          mask: 'radial-gradient(circle, transparent 50px, black 54px, black 60px, transparent 64px)',
          WebkitMask: 'radial-gradient(circle, transparent 50px, black 54px, black 60px, transparent 64px)',
        }}
      />

      <style jsx>{`
        @keyframes beam-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
