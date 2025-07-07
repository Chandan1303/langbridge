import {FC, memo} from 'react';
import {translations , TranslationCategory} from "../data/translations";

interface CategoryCardsProps {
    selectedLanguage:string;
    onSelectCategory:(category:string) => void;
}


const CategoryCards: FC<CategoryCardsProps> = memo(({ selectedLanguage, onSelectCategory }) => {
   const categories: string[]=translations[selectedLanguage] ?
       Object.keys(translations[selectedLanguage]) :
       [];



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {categories.length >0 ?(
                categories.map((cat) => (
                    <button
                        key={cat}
                        className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white text-gray-800 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer text-center font-medium transition-all duration-200 ease-in-out "
                       
                       
                        onClick={() => onSelectCategory(cat)} >{cat}</button>
                ))
            ) : (
                <p className ="col-span-full text-center text-gray-500">
                    No categories available for the selected language.
                </p>

            )}
        </div>
    );

    
});

CategoryCards.displayName = 'CategoryCards';
export default CategoryCards;