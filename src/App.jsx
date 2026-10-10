import { useMemo, useState } from "react";
import CategoryCards from "./components/CategoryCards";
import LanguageGuide from "./components/LanguageGuide";
import LanguageSelector from "./components/LanguageSelector";
import TranslatorBox from "./components/TranslatorBox";
import { languageSettings } from "./data/languages";
import { translations } from "./data/translations";

export default function App() {
    const [language, setLanguage] = useState("Kannada");
    const [category, setCategory] = useState("Greetings");
    const [search, setSearch] = useState("");
    const theme = languageSettings[language] ?? languageSettings.Kannada;
    const phraseCount = useMemo(
        () => Object.values(translations[language] ?? {}).reduce((total, phrases) => total + phrases.length, 0),
        [language],
    );
    const categories = Object.keys(translations[language] ?? {});
    const welcomeSamples = [
        { language: "Kannada", word: "ನಮಸ್ಕಾರ", style: { "--x": "15%", "--y": "18%", "--rotate": "-9deg" } },
        { language: "Telugu", word: "నమస్కారం", style: { "--x": "44%", "--y": "12%", "--rotate": "-5deg" } },
        { language: "Hindi", word: "नमस्ते", style: { "--x": "62%", "--y": "47%", "--rotate": "8deg" } },
        { language: "Tamil", word: "வணக்கம்", style: { "--x": "45%", "--y": "72%", "--rotate": "9deg" } },
        { language: "Malayalam", word: "നമസ്കാരം", style: { "--x": "21%", "--y": "66%", "--rotate": "-7deg" } },
    ];

    function selectLanguage(nextLanguage) {
        setLanguage(nextLanguage);
        setCategory("Greetings");
        setSearch("");
    }

    return (
        <div className="app-shell" style={{ "--accent": theme.color, "--accent-soft": theme.softColor }}>
            <header className="topbar">
                <a className="brand" href="#" aria-label="LangBridge home">
                    <span className="brand-mark" aria-hidden="true">L</span>
                    <span className="brand-copy">
                        <strong>langbridge</strong>
                        <small>Words bring us closer</small>
                    </span>
                </a>
                <div className="topbar-note">
                    <span className="status-dot" />
                    Your multilingual phrasebook
                </div>
            </header>

            <main className="page-content">
                <section className="welcome-panel">
                    <div className="welcome-copy">
                        <span className="eyebrow">YOUR POCKET PHRASEBOOK</span>
                        <h1>Say it with<br /><span>confidence.</span></h1>
                        <p>Useful everyday phrases, ready whenever you need them. Pick a language and start exploring.</p>
                    </div>
                    <div className="welcome-art" aria-hidden="true">
                        <span className="art-orbit orbit-one" />
                        <span className="art-orbit orbit-two" />
                        {welcomeSamples.map((sample) => (
                            <span
                                key={sample.language}
                                className="art-bubble"
                                style={sample.style}
                            >
                                {sample.word}
                            </span>
                        ))}
                        <span className="art-center">Aa</span>
                    </div>
                    <div className="welcome-foot">
                        <div>
                            <strong>{Object.keys(translations).length}</strong>
                            <span>languages</span>
                        </div>
                        <div>
                            <strong>{phraseCount}</strong>
                            <span>phrases in {language}</span>
                        </div>
                        <div className="learning-language">
                            <span className="learning-script">{theme.script}</span>
                            <span><small>LEARNING</small><strong>{language}</strong></span>
                        </div>
                    </div>
                </section>

                <section className="language-section" aria-labelledby="language-title">
                    <div className="section-heading">
                        <div>
                            <span className="eyebrow">MAKE IT YOURS</span>
                            <h2 id="language-title">Choose a language</h2>
                        </div>
                        <span className="section-hint">Select to see its phrasebook</span>
                    </div>
                    <LanguageSelector selectedLanguage={language} onSelectLanguage={selectLanguage} />
                </section>

                <section className="phrasebook" aria-labelledby="phrasebook-title">
                    <aside className="category-panel">
                        <div className="category-heading">
                            <span className="eyebrow">PHRASEBOOK</span>
                            <h2>Browse by topic</h2>
                        </div>
                        <CategoryCards
                            categories={categories}
                            selectedCategory={category}
                            onSelectCategory={setCategory}
                        />
                        <div className="aside-tip">
                            <span className="tip-icon" aria-hidden="true">✦</span>
                            <p><strong>Little tip</strong>Tap the speaker on any phrase to hear how it sounds.</p>
                        </div>
                    </aside>

                    <div className="phrase-panel">
                        <div className="phrase-heading">
                            <div>
                                <span className="eyebrow">{language} · {theme.script}</span>
                                <h2 id="phrasebook-title">{category}</h2>
                                <p>Handy expressions for everyday conversations</p>
                            </div>
                            <label className="search-box">
                                <span className="search-icon" aria-hidden="true">⌕</span>
                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Find a phrase"
                                    aria-label="Search phrases"
                                />
                                <kbd>/</kbd>
                            </label>
                        </div>
                        <TranslatorBox language={language} category={category} search={search} />
                    </div>
                </section>

                <LanguageGuide language={language} />

                <footer className="page-footer">
                    <span>Made for the moments when words matter.</span>
                    <span>LangBridge <span aria-hidden="true">·</span> Learn a little, connect a lot.</span>
                </footer>
            </main>
        </div>
    );
}
