import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../Components/Filter/Filter";
import HolographicCard from "../../Components/HolographicCard/HolographicCard";

const Portfolio = () => {
  const [category, setCategory] = useState("all"); // Zustand für Kategorie
  const [cardType, setCardType] = useState("normal"); // Zustand für Karten-Typ
  const [activeLayout, setActiveLayout] = useState(1); // Zustand für Grid-Layout

  // Beispielhafte Kartendaten
  const cardsData = [
    { imgSrc: "/src/assets/img/reduced_images/New3.jpeg", link: "/page1", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/src/assets/gifs/RedSamurai.gif", link: "/page2", category: "Coding", rarity: "rare holo vmax" },
    { imgSrc: "/src/assets/gifs/Dragon.gif", link: "/page3", category: "Design", rarity: "rare holo" },
    { imgSrc: "/src/assets/gifs/natureworld.gif", link: "/page4", category: "Coding", rarity: "rare holo v1" },
    { imgSrc: "/src/assets/img/reduced_images/New5.jpeg", link: "/page5", category: "Design", rarity: "radiant" },
    { imgSrc: "/src/assets/img/reduced_images/New6.jpeg", link: "/page6", category: "Marketing", rarity: "ShineBlitz" },
  ];

  // Dynamische Kartenfilterung basierend auf Kategorie und Rarität
  const filteredCards = cardsData
    .filter((card) => {
      const matchesCategory = category === "all" || card.category === category;
      return matchesCategory;
    })
    .map((card) => {
      // Überschreibe Rarität, wenn `cardType` ausgewählt ist
      return {
        ...card,
        rarity: cardType !== "normal" ? cardType : card.rarity,
      };
    });

  return (
    <div>
      {/* Filter-Komponente */}
      <Filter
        onCategoryChange={setCategory}
        onCardTypeChange={setCardType}
        onLayoutChange={setActiveLayout}
      />

      {/* Dynamisches Karten-Grid */}
      <div className={`card-grid layout-${activeLayout}`}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div key={index} className="holographic__section">
              <Link to={card.link}>
                <HolographicCard
                  imgSrc={card.imgSrc}
                  category={card.category}
                  rarity={card.rarity} // Neue Rarität anwenden
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No cards found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
