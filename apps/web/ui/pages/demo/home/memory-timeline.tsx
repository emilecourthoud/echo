import { Memory } from '../contants';
import { MEMORIES } from '../mock-data';

export function MemoryTimeline({ selectedTagId }: { selectedTagId: number }) {
  // Filter memories based on selected tag
  const filteredMemories =
    selectedTagId === 0
      ? MEMORIES // Show all memories when "All" (id: 0) is selected
      : MEMORIES.filter((memory) => memory.tags.includes(selectedTagId.toString()));

  const memories = [...filteredMemories].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="flex flex-col gap-1 w-full h-full mt-4">
      <span className="text-lg font-medium">Timeline</span>
      <div className="overflow-y-auto pb-6 flex flex-col gap-2">
        {memories.map((memory) => (
          <MemoryItem key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
}

function MemoryItem({ memory }: { memory: Memory }) {
  return (
    <div className="flex flex-col gap-1  bg-black-transparent w-full px-2 py-1.5 rounded-md">
      <span className="text-[10px] text-gray-500 italic">
        {memory.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </span>
      {/* Bullet points with summary */}
      <div className="flex flex-col gap-1">
        {memory.summary.map((summary, index) => (
          <div key={index} className="flex flex-row items-center gap-1.5">
            <div className="size-1 bg-gray-200 rounded-full flex-shrink-0"></div>
            <span className="text-[10px] text-gray-200">{summary}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
