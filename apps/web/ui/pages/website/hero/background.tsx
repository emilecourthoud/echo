export function Background({ variant = 'green' }: { variant?: 'blue' | 'green' }) {
  const gradients = {
    blue: {
      first: 'from-[#000045] to-[#1A2970]',
      second: 'from-[#000040] to-[#0B4580]',
      third: 'from-[#0D0D38] to-[#1B4165]',
    },
    green: {
      first: 'from-[#002800] to-[#0B5D1E]',
      second: 'from-[#003311] to-[#0D6B24]',
      third: 'from-[#013B14] to-[#0F7829]',
    },
  };

  const selectedGradients = gradients[variant];

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0">
      <div className="relative w-full h-full">
        <div
          className={`absolute top-1/4 left-1/4 w-[60rem] h-[60rem] rounded-full bg-gradient-to-br ${selectedGradients.first} blur-3xl opacity-40 animate-[pulse_8s_ease-in-out_infinite]`}
        />
        <div
          className={`absolute top-1/3 right-1/4 w-[55rem] h-[55rem] rounded-full bg-gradient-to-r ${selectedGradients.second} blur-3xl opacity-35 animate-[pulse_10s_ease-in-out_infinite]`}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={`absolute bottom-1/4 left-1/3 w-[58rem] h-[58rem] rounded-full bg-gradient-to-tl ${selectedGradients.third} blur-3xl opacity-30 animate-[pulse_12s_ease-in-out_infinite]`}
          style={{ animationDelay: '4s' }}
        />
      </div>
    </div>
  );
}
