import { memo } from "react";
import { languageSettings } from "../data/languages";
import { translations } from "../data/translations";

const LanguageSelector = memo(({ selectedLanguage, onSelectLanguage }) => (
    <div className="language-grid" role="group" aria-label="Select a language">
        {Object.keys(translations).map((language) => {
            const settings = languageSettings[language];
            const isSelected = selectedLanguage === language;

            return (
                <button
                    className={`language-option${isSelected ? " is-selected" : ""}`}
                    key={language}
                    type="button"
                    onClick={() => onSelectLanguage(language)}
                    aria-pressed={isSelected}
                    style={{ "--language-color": settings.color }}
                >
                    <span className="language-script" lang={settings.locale}>{settings.script}</span>
                    <span className="language-label">
                        <strong>{language}</strong>
                        <small>{settings.nativeName}</small>
                    </span>
                    <span className="language-check" aria-hidden="true">{isSelected ? "✓" : "↗"}</span>
                </button>
            );
        })}
    </div>
));

LanguageSelector.displayName = "LanguageSelector";

export default LanguageSelector;
