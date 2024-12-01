  import React, { useState, useEffect } from "react";

  const Filter = ({ onCategoryChange, onCardTypeChange, onLayoutChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCardType, setSelectedCardType] = useState('normal');
    const [activeLayout, setActiveLayout] = useState(1);

    // Überwacht die Änderungen bei Category und CardType
    useEffect(() => {
      onCategoryChange(selectedCategory);
    }, [selectedCategory, onCategoryChange]);

    useEffect(() => {
      onCardTypeChange(selectedCardType);
    }, [selectedCardType, onCardTypeChange]);

    useEffect(() => {
      onLayoutChange(activeLayout);
    }, [activeLayout, onLayoutChange]);

    // Layouts ändern
    const changeGridLayout = (layout) => {
      setActiveLayout(layout);
    };

    return (
      <div id="filter-section">
        {/* Layout-Buttons */}
        <div id="grid-wrapper">
          <div id="view-section" className="grid-section">
            <button
              type="button"
              className={`example-button short ${activeLayout === 1 ? 'active' : ''}`}
              onClick={() => changeGridLayout(1)}
            >
              <img src="/src/assets/icons/reduced_img/_grid_icon1.png" alt="Grid 1" />
            </button>
            <button
              type="button"
              className={`example-button short ${activeLayout === 2 ? 'active' : ''}`}
              onClick={() => changeGridLayout(2)}
            >
              <img src="/src/assets/icons/reduced_img/_grid_icon2.png" alt="Grid 2" />
            </button>
            <button
              type="button"
              className={`example-button short ${activeLayout === 3 ? 'active' : ''}`}
              onClick={() => changeGridLayout(3)}
            >
              <img src="/src/assets/icons/reduced_img/_grid_icon3.png" alt="Grid 3" />
            </button>
          </div>
        </div>

        {/* Filter für Kategorie */}
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

        <div id="filter-section">
      {/* Filter für Kartentyp */}
      <div className="PNL_options">
        <label htmlFor="rarity-filter">Change All Rarities</label>
        <select
          id="rarity-filter"
          onChange={(e) => onCardTypeChange(e.target.value)} // Rarity-Wert an die Funktion übergeben
        >
          <option value="normal">Normal</option>
          <option value="rare ultra">Rare Ultra</option>
          <option value="ShineBlitz">ShineBlitz</option>
          <option value="radiant">Radiant</option>
          <option value="rare holo">Rare Holo</option>
          <option value="rare holo vmax">Rare Holo VMAX</option>
          <option value="rare rainbow">Rare Rainbow</option>
          <option value="rare secret">Rare Secret</option>
          <option value="rare holo v1">Rare Holo V1</option>
          <option value="rare holo vstar">Rare Holo VStar</option>
        </select>
      </div>
    </div>
      </div>
    );
  };

  export default Filter;
