import { FC, memo } from "react";
import { translations, TranslationPhrase } from "../data/translations"; 
import { useTTS } from "../hooks/useTTS";

interface TranslatorBoxProps {
  language: string;
  category: string;
}

const TranslatorBox: FC<TranslatorBoxProps> = memo(({ language, category }) => {
  const speak = useTTS(language);
  const phrases: TranslationPhrase[] =
    translations[language]?.[category] || [];

  return (
    <div className="p-4 space-y-4">
      {phrases.length > 0 ? (
        phrases.map((phrase, idx) => (
          <div
            key={idx} 
            className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm space-y-2
                       flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="md:flex-1 md:pr-4">
              <div className="text-sm text-gray-500">English:</div>
              <div className="font-bold text-lg text-gray-900">{phrase.english}</div>
              <div className="mt-2 text-sm text-gray-500">Translation:</div>
              <div className="text-blue-700 text-xl font-semibold">{phrase.translation}</div>
              <div className="mt-2 text-sm text-gray-500">Pronunciation:</div>
              <div className="italic text-gray-600">{phrase.pronunciation}</div>
            </div>
            <button
              className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                         transition-colors duration-200 ease-in-out flex items-center justify-center gap-2"
              onClick={() => speak(phrase.translation)}
              aria-label={`Play audio for ${phrase.translation}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.079a1 1 0 00-1.54 1.047l.63 1.905c.161.486.29.98.397 1.48l-.004.001c.21.99.398 1.99.564 3H12a1 1 0 100-2h-1.597l-.27-.811A13.064 13.064 0 0010 8a1 1 0 00-.445-1.921zM9.99 4a1 1 0 00-.001 2 1 1 0 00.001-2z" clipRule="evenodd" />
              </svg>
              Play Audio
            </button>
          </div>
        ))
      ) : (
        <div className="text-center p-8 text-gray-600 border border-dashed border-gray-300 rounded-xl">
          <p className="text-xl font-semibold mb-2">No phrases found</p>
          <p>Please select a language and category to see translations.</p>
        </div>
      )}
    </div>
  );
});

TranslatorBox.displayName = 'TranslatorBox';

export default TranslatorBox;
