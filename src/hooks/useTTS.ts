import { use, useCallback, useEffect,useState } from "react";

const LANG_TO_BCP47_MAP: Record<string, string> = {
    Kannada: "kn-IN",
    Hindi: "hi-IN",
    Tamil: "ta-IN",
    Telugu: "te-IN",
    Malayalam: "ml-IN",
    
    Default : "en-US",

};



export function useTTS(language:string){
    const[synth , setSynth] = useState<SpeechSynthesis | null>(null);
    const[voices , setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        if(window.speechSynthesis){
            setSynth(window.speechSynthesis);

            const updateVoices= () => {
                setVoices(window.speechSynthesis.getVoices());
            };

            window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
            updateVoices();
            return () => {
                window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
            };  

        }
        else {
            console.warn("Speech Synthesis not supported in this browser.");
        }
        


},    []);
    const speak = useCallback((text: string) => {
        if (!synth) {
            console.warn("Speech Synthesis not available.");
            return;
        }
        if (synth.speaking) {
            console.warn("Speech already in progress. Stopping previous utterance.");
            synth.cancel();
        }

        const utter = new SpeechSynthesisUtterance(text);
        const bcp47Tag = LANG_TO_BCP47_MAP[language] || LANG_TO_BCP47_MAP.Default;

        const voice = voices.find(v => v.lang === bcp47Tag)
        if (voice) {
            utter.voice = voice;
        } else {
            utter.lang = bcp47Tag; // Fallback to setting the lang directly
            console.warn(`No voice found for language: ${bcp47Tag}`);
        }

        utter.onerror = (event) => {
            console.error("Speech synthesis error:", event);
        };

        synth.speak(utter);
    },[synth,language, voices]);

    return speak;


     
}
