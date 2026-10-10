import { useEffect,useState } from "react";
import axios from "axios";

export const useTranslator = (text, language) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text ){
        setTranslated("");
        return;
    }

    const translate = async () => {
      try {
        const target =mapLangToCode(language);
        const apikey =import.meta.env.VITE_GOOGLE_API_KEY;
        const url= `https://translation.googleapis.com/language/translate/v2?key=${apikey}`;
       
       const response = await axios.post(url, {
          q: text,
          target: target, 
           format: "text",

        });
        setTranslated(response.data.data.translations[0].translatedText);
      } catch (error) {
        console.error("Translation error:", error);
        setTranslated("Translation failed");
      }
    };

    translate();
  }, [text, language]);

  return translated;
}

function mapLangToCode(lang) {
    switch (lang) {
        case "Kannada": return "kn";
        case "Hindi": return "hi";    
        case "Tamil": return "ta";
        case "Telugu": return "te";
        case "Malayalam": return "ml";
        default: return "en"; // Fallback to English if no match
    }

}
