import BlogCardContent from './BlogCardContent';
import './BlogCard.css';

export default function BlogCard({ article }) {
  const { thumbnail, ...contentAndMeta } = article;
  return (
    <div className="blog-card w-[340px] flex flex-col bg-white rounded-lg mt-[120px] overflow-hidden">
      <img
        src={thumbnail.filename}
        alt={thumbnail.altText}
        className="blog-card--image h-72 object-cover"
      />
      <BlogCardContent contentAndMeta={contentAndMeta} />
    </div>
  );
}
