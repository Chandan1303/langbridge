import {useState , useEffect } from "react";
import LanguageSelector from "./components/LanguageSelector";
import CategoryCards from "./components/CategoryCards";
import TranslatorBox from "./components/TranslatorBox";

import { translations } from "./data/translations";


export default function App(){
    const [language , setLanguage] = useState("Kannada");
    const[category, setCategory] = useState("Greetings");

    useEffect(()=>{
        if(translations[language] && !translations[language][category]){
            const availableCategories =Object.keys(translations[language]);
            if(availableCategories.includes("Greetings")){
                setCategory("Greetings");
            }
            else if (availableCategories.length >0){
                setCategory(availableCategories[0]);
            }
            else {
                setCategory("");
            }
        }
    } , [language , category]

);

return (
    <div className ="max-w-2xl mx-auto p-4 space-y-6 b-white rounded-lg shadow-xl my-8">
     <h1 className="text-4xl font-extrabold text-center text-blue-800 pt-4">
        LangBridge 🌐
     </h1>
     <p className="text-center text-gray-600">
        Bridge language barriers with instant translation and pronunciations.
     </p>

     <section className="bg-blue-50 p-4 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold text-blue-700 mb-3 text-center">Select Language</h2>
        <LanguageSelector selectedLanguage={language} onSelectLanguage={setLanguage} />
     </section>

     <section className="bg-green-50 p-4 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold text-blue-680 mb-3 text-center">Choose Category</h2>
        <CategoryCards selectedLanguage={language} onSelectCategory={setCategory} />
     </section>
<section className="bg-yellow-50 p-4 rounded -lg shadow-inner">
    <h2 className="text-xl font-semibold text-yellow-700 mb-3 text-center">Translations for "{category}" ({language})</h2>
    <TranslatorBox language={language} category={category}/>
</section>


    </div>
);


}