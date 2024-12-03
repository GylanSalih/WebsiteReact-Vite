import React, { useState, useEffect } from "react";

const Filter = ({ onCategoryChange, onCardTypeChange, onLayoutChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRarity, setSelectedRarity] = useState("normal");
  const [activeLayout, setActiveLayout] = useState(1);

  useEffect(() => {
    onCategoryChange(selectedCategory);
  }, [selectedCategory, onCategoryChange]);

  useEffect(() => {
    onLayoutChange(activeLayout);
  }, [activeLayout, onLayoutChange]);

  useEffect(() => {
    onCardTypeChange(selectedRarity); // Setzt die Rarität für alle Karten
  }, [selectedRarity, onCardTypeChange]);

  const rarities = [
    "normal",
    "rare ultra",
    "ShineBlitz",
    "radiant",
    "rare holo",
    "rare holo vmax",
    "rare rainbow",
    "rare secret",
    "rare holo v1",
    "rare holo vstar",
  ];

  return (
    <div id="filter-section">
      <div className="filter-container">
        {/* Kategorie-Filter */}
        <div className="filtering">
          <label htmlFor="category-filter">Sort By</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Show All</option>
            <option value="Design">Design</option>
            <option value="Coding">Coding</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Grid-Layout-Buttons */}
        <div id="grid-wrapper">
          <div id="view-section" className="grid-section">
            {[1, 2, 3].map((layout) => (
              <button
                key={layout}
                type="button"
                className={`example-button short ${
                  activeLayout === layout ? "active" : ""
                }`}
                onClick={() => setActiveLayout(layout)}
              >
                <img
                  src={`/src/assets/icons/reduced_img/_grid_icon${layout}.png`}
                  alt={`Grid ${layout}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Rarity-Filter */}
        <div className="PNL_options">
          <label htmlFor="rarity-filter">Change All Rarities</label>
          <select
            id="rarity-filter"
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
          >
            {rarities.map((rarity) => (
              <option key={rarity} value={rarity}>
                {rarity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
