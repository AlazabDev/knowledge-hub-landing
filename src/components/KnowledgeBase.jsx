// src/components/KnowledgeBase.jsx
import { useState, useEffect } from 'react';
import kbData from '../content/kb/alazab_kb.json';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [data, setData] = useState(kbData);

  // فلترة المحتوى
  const filteredArticles = () => {
    let articles = [];
    
    if (selectedCategory === 'all') {
      data.categories.forEach(cat => {
        articles.push(...cat.articles);
      });
    } else {
      const category = data.categories.find(cat => cat.name === selectedCategory);
      articles = category ? category.articles : [];
    }

    if (searchTerm) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return articles;
  };

  return (
    <div className="kb-container" dir="rtl">
      <h1>{data.title}</h1>
      <p className="version">الإصدار: {data.version}</p>

      {/* شريط البحث */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 ابحث في قاعدة المعرفة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* فلتر التصنيفات */}
      <div className="categories-filter">
        <button 
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          الكل
        </button>
        {data.categories.map((cat, idx) => (
          <button
            key={idx}
            className={selectedCategory === cat.name ? 'active' : ''}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* عرض المقالات */}
      <div className="articles-grid">
        {filteredArticles().map((article, idx) => (
          <div key={idx} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.content.substring(0, 150)}...</p>
            <button className="read-more">اقرأ المزيد</button>
          </div>
        ))}
      </div>

      {filteredArticles().length === 0 && (
        <p className="no-results">لا توجد نتائج مطابقة للبحث</p>
      )}
    </div>
  );
};

export default KnowledgeBase;
