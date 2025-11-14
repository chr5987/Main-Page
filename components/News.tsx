import React from 'react';
import { NewsArticle } from '../types';

const newsData: NewsArticle[] = [
  {
    id: 1,
    date: 'August 15, 2024',
    title: 'New E-Commerce Platform is Live!',
    content: 'So excited to share that the e-commerce project is finally live! It was a lot of work, but I\'m super proud of how it turned out. Go check it out in the projects section.',
  },
  {
    id: 2,
    date: 'July 22, 2024',
    title: 'Playing with the Gemini API',
    content: 'Been diving into Google\'s Gemini API lately and it is seriously cool. The potential for AI in web apps is huge, and my brain is buzzing with ideas.',
  },
  {
    id: 3,
    date: 'June 05, 2024',
    title: 'New Blog Post is Up',
    content: 'Wrote a new post about my top 5 tips for keeping React code clean and simple. Hopefully, it can help some other devs out there!',
  },
];


const NewsItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-teal-500 transition-colors duration-300">
    <p className="text-sm text-neutral-400 mb-2">{article.date}</p>
    <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
    <p className="text-neutral-300">{article.content}</p>
  </div>
);

const News: React.FC = () => {
  return (
    <section id="news">
      <h2 className="text-3xl font-bold text-center text-white mb-10">What's New?</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {newsData.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default News;