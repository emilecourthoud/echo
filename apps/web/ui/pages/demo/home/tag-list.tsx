import { TAGS } from '../mock-data';
import { Tag } from '../contants';

export function TagList({ selectedTagIdx }: { selectedTagIdx: number }) {
  const tags = [{ id: 0, name: 'All' }, ...TAGS] as Tag[];

  return (
    <div className="flex flex-row gap-2 w-full overflow-x-auto scrollbar-hide">
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </div>
  );
}

const TagItem = ({ tag }: { tag: Tag }) => {
  const handleClick = () => {
    // Empty click handler
  };

  return (
    <button
      onClick={handleClick}
      className="flex-shrink-0 px-2 py-1 text-[10px] border border-gray-300 rounded-lg hover:border-gray-400 transition-colors whitespace-nowrap flex justify-center items-center"
    >
      {tag.name}
    </button>
  );
};
