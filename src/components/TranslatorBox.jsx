import { memo, useEffect, useState } from "react";
import { translations } from "../data/translations";
import { languageSettings } from "../data/languages";
import { useTTS } from "../hooks/useTTS";

const TranslatorBox = memo(({ language, category, search = "" }) => {
    const speak = useTTS(language);
    const [speechStatus, setSpeechStatus] = useState("");
    const allPhrases = translations[language]?.[category] ?? [];
    const normalizedSearch = search.trim().toLocaleLowerCase();
    const phrases = allPhrases.filter((phrase) =>
        `${phrase.english} ${phrase.translation} ${phrase.pronunciation}`
            .toLocaleLowerCase()
            .includes(normalizedSearch),
    );
    const locale = languageSettings[language]?.locale;

    useEffect(() => {
        setSpeechStatus("");
    }, [language, category, search]);

    if (phrases.length === 0) {
        return (
            <div className="empty-state">
                <span aria-hidden="true">⌕</span>
                <strong>No matching phrases</strong>
                <p>Try another search or choose a different topic.</p>
            </div>
        );
    }

    return (
        <div className="phrase-list" aria-live="polite">
            {phrases.map((phrase) => (
                <article className="phrase-card" key={`${phrase.english}-${phrase.translation}`}>
                    <div className="phrase-topline">
                        <span>ENGLISH</span>
                        <span className="phrase-language">{language}</span>
                    </div>
                    <div className="phrase-content">
                        <div className="phrase-english">{phrase.english}</div>
                        <div className="phrase-translation" lang={locale}>{phrase.translation}</div>
                        <div className="phrase-pronunciation">
                            <span className="pronunciation-icon" aria-hidden="true">↗</span>
                            {phrase.pronunciation}
                        </div>
                    </div>
                    <button
                        className="speak-button"
                        type="button"
                        onClick={() => speak(phrase.translation, setSpeechStatus)}
                        aria-label={`Play audio for ${phrase.translation}`}
                        title={`Generate accurate ${language} audio`}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M11 5 6 9H3v6h3l5 4V5Zm4.5 3.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13" />
                        </svg>
                    </button>
                </article>
            ))}
            {speechStatus && (
                <p className="speech-status" role="status">
                    {speechStatus}
                </p>
            )}
            {languageSettings[language]?.translationNote && (
                <p className="speech-status">{languageSettings[language].translationNote}</p>
            )}
            <div className="results-note">
                Showing {phrases.length} {phrases.length === 1 ? "phrase" : "phrases"}
                {normalizedSearch ? " matching your search" : ""}
            </div>
        </div>
    );
});

TranslatorBox.displayName = "TranslatorBox";

export default TranslatorBox;
