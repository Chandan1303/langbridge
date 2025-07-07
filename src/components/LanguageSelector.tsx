
import{FC , memo} from 'react';
import {translations} from "../data/translations";

interface LanguageSelectorProps {
    selectedLanguage: string;
    onSelectLanguage: (language: string) => void;
}

const languages = Object.keys(translations);

const LanguageSelector : FC<LanguageSelectorProps> = memo(({ selectedLanguage, onSelectLanguage }) => {
    return(
        <div className ="flex gap-2 flex-wrap justify-center p-4">
            {languages.map((lang) => (
                <button
                    key={lang}
                    className ={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ease-in-out
                        ${selectedLanguage === lang ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-blue-700'}`
                    }
                    onClick={() => onSelectLanguage(lang)}
                    aria-pressed={selectedLanguage === lang}
                    > {lang}</button>
            ))
            }


        
        
         </div>
    );
});
LanguageSelector.displayName = "LanguageSelector";
export default LanguageSelector;