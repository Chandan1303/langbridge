import { memo } from "react";
import { alphabets } from "../data/alphabets";
import IndiaMap from "./IndiaMap";
import { languageSettings } from "../data/languages";

const LanguageGuide = memo(({ language }) => {
    const alphabet = alphabets[language];
    const settings = languageSettings[language];
    if (!alphabet || !settings) return null;

    return (
        <section className="language-guide" aria-label={`${language} language guide`}>
            <div className="guide-sidebar">
                <article className="history-card">
                    <div className="guide-card-heading">
                        <span className="guide-icon" aria-hidden="true">⌛</span>
                        <div>
                            <span className="eyebrow">ROOTS & HERITAGE</span>
                            <h2>A little history</h2>
                        </div>
                    </div>
                    <p>{settings.history}</p>
                    <div className="history-language">
                        <span className="history-script" lang={settings.scriptLocale || settings.locale}>{settings.script}</span>
                        <span><strong>{language}</strong><small>{settings.nativeName}</small></span>
                    </div>
                </article>
                <IndiaMap language={language} settings={settings} />
            </div>

            <article className="alphabet-card">
                <div className="guide-card-heading alphabet-heading">
                    <span className="guide-icon" aria-hidden="true">Aa</span>
                    <div>
                        <span className="eyebrow">SCRIPT REFERENCE</span>
                        <h2>Learn the alphabet</h2>
                    </div>
                    <span className="letter-count">{alphabet.vowels.length} vowels</span>
                </div>

                <div className="letter-section">
                    <h3>{alphabet.vowelTitle}</h3>
                    <div className="letter-grid" lang={settings.scriptLocale || settings.locale}>
                        {alphabet.vowels.map((letter, index) => (
                            <span className="letter-tile vowel-tile" key={`${letter}-${index}`}>{letter}</span>
                        ))}
                    </div>
                    {alphabet.vowelMarks.length > 0 && (
                        <p className="letter-note">
                            <strong>Sound markers:</strong>{" "}
                            {alphabet.vowelMarks.map((letter) => (
                                <span className="inline-letter" lang={settings.scriptLocale || settings.locale} key={letter}>{letter}</span>
                            ))}
                            <span> · added to sounds in writing</span>
                        </p>
                    )}
                </div>

                <div className="letter-section consonant-section">
                    <h3>{alphabet.consonantTitle}</h3>
                    <div className="consonant-groups">
                        {alphabet.consonantGroups.map((group) => (
                            <div className="consonant-row" key={group.name}>
                                <span className="consonant-group-name">{group.name}</span>
                                <div className="letter-grid consonant-grid" lang={settings.scriptLocale || settings.locale}>
                                    {group.letters.map((letter, index) => (
                                        <span className="letter-tile" key={`${letter}-${index}`}>{letter}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {alphabet.additional.length > 0 && (
                    <div className="letter-section additional-section">
                        <h3>{alphabet.additionalTitle}</h3>
                        <div className="letter-grid" lang={settings.scriptLocale || settings.locale}>
                            {alphabet.additional.map((letter, index) => (
                                <span className="letter-tile extra-tile" key={`${letter}-${index}`}>{letter}</span>
                            ))}
                        </div>
                    </div>
                )}

                <p className="alphabet-note">{alphabet.note}</p>
            </article>
        </section>
    );
});

LanguageGuide.displayName = "LanguageGuide";

export default LanguageGuide;
