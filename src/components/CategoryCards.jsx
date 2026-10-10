import { memo } from "react";

const categoryDetails = {
    Greetings: { icon: "✳", label: "Greetings", description: "Start a conversation" },
    CommonPhrases: { icon: "☷", label: "Common phrases", description: "Everyday essentials" },
    Directions: { icon: "⌖", label: "Directions", description: "Find your way" },
    FoodAndDrink: { icon: "◒", label: "Food & drink", description: "Order with ease" },
    Emergency: { icon: "＋", label: "Emergency", description: "Get help quickly" },
};

const CategoryCards = memo(({ categories, selectedCategory, onSelectCategory }) => (
    <nav className="category-list" aria-label="Phrase categories">
        {categories.map((category) => {
            const details = categoryDetails[category] ?? {
                icon: "•",
                label: category.replace(/([A-Z])/g, " $1").trim(),
                description: "Explore phrases",
            };
            const isSelected = selectedCategory === category;

            return (
                <button
                    className={`category-option${isSelected ? " is-selected" : ""}`}
                    key={category}
                    type="button"
                    onClick={() => onSelectCategory(category)}
                    aria-current={isSelected ? "page" : undefined}
                >
                    <span className="category-icon" aria-hidden="true">{details.icon}</span>
                    <span className="category-copy">
                        <strong>{details.label}</strong>
                        <small>{details.description}</small>
                    </span>
                    <span className="category-arrow" aria-hidden="true">›</span>
                </button>
            );
        })}
    </nav>
));

CategoryCards.displayName = "CategoryCards";

export default CategoryCards;
