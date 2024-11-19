import React from 'react';
// import './Research.css'; // Optional for styling

// Sample data for research categories
const researchCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Explore the latest advancements in AI and ML, from algorithms to real-world applications.',
    link: '/research/ai-machine-learning',
  },
  {
    title: 'Sustainable Energy',
    description: 'Research on renewable energy, sustainability, and technologies driving green energy solutions.',
    link: '/research/sustainable-energy',
  },
  {
    title: 'Medical Innovations',
    description: 'Cutting-edge medical research, including drug development, treatments, and healthcare technologies.',
    link: '/research/medical-innovations',
  },
  {
    title: 'Space Exploration',
    description: 'Explore research on space missions, technologies, and the future of space exploration.',
    link: '/research/space-exploration',
  },
];

const Research = () => {
  return (
    <div className="research-container">
      <h1>Research Categories</h1>
      <p>Explore various fields of research from across the world.</p>

      <div className="research-list">
        {researchCategories.map((category, index) => (
          <div key={index} className="research-card">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <a href={category.link} className="view-more-link">View More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
