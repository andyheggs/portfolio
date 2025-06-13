import { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// List of skills categories and their respective skills
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
  // State for keeping track of selected skills category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered categories based on selection, shows all if "All" is selected
  const visibleCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((cat) => cat.name === selectedCategory);

  // Dynamic container class for possible filtered state styling
  const containerClasses = [
    "skills-container",
    selectedCategory !== "All" ? "is-filtered" : "",
  ].join(" ");

  return (
    <div id="skills" className={containerClasses.trim()}>
      {/* Title */}
      <h1 className="skills-title">Technical Skills</h1>

      {/* Skills Category Selector Buttons */}
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

      {/* Orbit Layout for Skills (Desktop/Tablet) */}
        <div className="skills-orbit">
          {visibleCategories.map((category, i) => {
          // Calculate rotation angle to orbit the category cards
            const angle = (360 / visibleCategories.length) * i;
            return (
              <div
                key={category.name}
                className="skills-orbit-category"
                style={{
                // Position the category card in orbit layout using CSS transforms
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-270px) rotate(-${angle}deg)`,
                }}
              >
              {/* Category Title */}
                <p className="skills-orbit-category-title">{category.name}</p>
              {/* Pills for Skills */}
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

      {/* Stacked Skills Layout for Mobile */}
        <div className="skills-mobile">
          {visibleCategories.map((category) => (
            <div key={category.name} className="skills-mobile-category">
            {/* Category Title */}
              <p className="skills-mobile-category-title">{category.name}</p>
            {/* Skills as Pills */}
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
