import { TAGS } from '../mock-data';
import { Tag } from '../contants';
import { cn } from '@/lib/utils';

export function TagList({ selectedTagIdx }: { selectedTagIdx: number }) {
  const tags = [{ id: 0, name: 'All' }, ...TAGS] as Tag[];

  return (
    <div className="flex flex-row gap-2 w-full overflow-x-auto scrollbar-hide h-5 cursor-pointer">
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} isSelected={selectedTagIdx === tag.id} />
      ))}
    </div>
  );
}

const TagItem = ({ tag, isSelected }: { tag: Tag; isSelected: boolean }) => {
  const handleClick = () => {
    // Empty click handler
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex-shrink-0 px-2 py-1 text-[10px] border border-gray-300 rounded-lg hover:border-gray-400 transition-colors whitespace-nowrap flex justify-center items-center cursor-pointer',
        isSelected && 'bg-gray-100 border-gray-400 text-brand-700',
      )}
    >
      {tag.name}
    </button>
  );
};
