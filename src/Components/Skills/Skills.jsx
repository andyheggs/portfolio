import { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const categories = [
  {
    name: "Languages & Query",
    skills: ["Python", "Java Script", "SQL"],
  },
  {
    name: "Frameworks & APIs",
    skills: ["Django", "FastAPI", "React (Vite)", "Express", "Node", "REST", "JWT", "OAuth2"],
  },
  {
    name: "MLOps & DevOps",
    skills: ["Docker", "GitHub Actions", "CI/CD", "GCP", "Compute Engine"],
  },
  {
    name: "Datastores",
    skills: ["Postgre-SQL", "Mongo DB", "SQLite", "Big-Query"],
  },
  {
    name: "Tooling",
    skills: ["Git", "Jupyter", "Colab", "Streamlit", "Netlify", "Heroku"],
  },
  {
    name: "Data & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Tensor-Flow", "Keras", "Seaborn", "Matplotlib", "Hugging Face"],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Skills to display
  const visibleCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((cat) => cat.name === selectedCategory);


  const containerClasses = [
    "skills-container",
    selectedCategory !== "All" ? "is-filtered" : "",
  ].join(" ");

  return (
    <div id="skills" className={containerClasses.trim()}>
      <h1 className="skills-title">Technical Skills</h1>

      {/* Category Selector */}
      <div className="skills-category-selector">
        {["All", ...categories.map((c) => c.name)].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`skills-category-btn${
              selectedCategory === cat ? " selected" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Conditional Layout */}
        <div className="skills-orbit">
          {visibleCategories.map((category, i) => {
            const angle = (360 / visibleCategories.length) * i;
            return (
              <div
                key={category.name}
                className="skills-orbit-category"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-270px) rotate(-${angle}deg)`,
                }}
              >
                <p className="skills-orbit-category-title">{category.name}</p>
                <div className="skills-orbit-skills">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="skills-pill"
                      whileHover={{ scale: 1.2 }}
                      title={skill}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-mobile">
          {visibleCategories.map((category) => (
            <div key={category.name} className="skills-mobile-category">
              <p className="skills-mobile-category-title">{category.name}</p>
              <div className="skills-mobile-skills">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="skills-pill"
                    whileHover={{ scale: 1.1 }}
                    title={skill}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
