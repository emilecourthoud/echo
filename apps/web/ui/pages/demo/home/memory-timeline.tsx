import { Memory } from '../contants';
import { MEMORIES } from '../mock-data';

export function MemoryTimeline() {
  const memories = MEMORIES;

  return (
    <div className="flex flex-col gap-2 h-full w-full mt-4">
      <span className="text-xl font-medium">Timeline</span>
      {memories.map((memory) => (
        <MemoryItem key={memory.id} memory={memory} />
      ))}
    </div>
  );
}

function MemoryItem({ memory }: { memory: Memory }) {
  return (
    <div className="flex flex-row gap-2 h-full w-full px-2">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-300">
          {memory.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </span>
        {/* Bullet points with summary */}
        <div className="flex flex-col gap-2">
          {memory.summary.map((summary, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <div className="size-1 bg-gray-200 rounded-full flex-shrink-0"></div>
              <span className="text-xs text-gray-200">{summary}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
