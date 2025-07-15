import BlogCard from './BlogCard';

const blogArticles = [
  {
    thumbnail: {
      filename: 'spacejoy-YqFz7UMm8qE-unsplash.jpg',
      altText: 'An earthy living room',
    },
    category: 'Interior',
    title: 'Top 5 Living Room Inspirations',
    excerpt: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
  },
];

function App() {
  return (
    <div className="blog-cards-container lg:min-h-[768px] md:min-h-[1024px] min-h-[812px] bg-linear-to-b from-bg-gradient-stop-0 to-bg-gradient-stop-1 w-full flex justify-center items-start leading-6">
      {blogArticles.map((article) => (
        <BlogCard article={article} />
      ))}
    </div>
  );
}

export default App;
