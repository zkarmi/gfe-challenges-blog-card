import { RiArrowRightLine } from 'react-icons/ri';

export default function BlogCardContent({ contentAndMeta }) {
  const { category, title, excerpt } = contentAndMeta;
  return (
    <div className="flex flex-col px-4 py-6">
      {/* maybe category pills are supposed to be different colors, but not including that now */}
      <div className="article-category flex items-center">
        <span
          className="
          article-category-pill
          rounded-full
          mb-2 px-2 py-0.5
          border border-solid border-green-200
          bg-green-50
          text-sm text-center text-green-700
        "
        >
          {category}
        </span>
      </div>
      <p className="font-semibold text-lg/7 mb-3">{title}</p>
      <p className="font-medium mb-6">{excerpt}</p>
      <button className="btn-read-more self-start text-indigo-700 flex items-center gap-2 font-medium cursor-pointer">
        Read more <RiArrowRightLine className="w-5 h-5" />
      </button>
    </div>
  );
}
