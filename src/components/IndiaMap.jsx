import { memo } from "react";
import { indiaMapViewBox, indiaStates } from "../data/indiaStates";

const IndiaMap = memo(({ language, settings }) => {
    const highlighted = new Set(settings.stateCodes);

    return (
        <article className="india-map-card" aria-label={`${language} speaking regions in India`}>
            <div className="guide-card-heading">
                <span className="guide-icon" aria-hidden="true">⌖</span>
                <div>
                    <span className="eyebrow">WHERE IT'S SPOKEN</span>
                    <h2>{language} in India</h2>
                </div>
            </div>
            <svg
                className="india-map"
                viewBox={indiaMapViewBox}
                role="img"
                aria-label={`Map of India highlighting ${settings.states.join(", ")}`}
            >
                {indiaStates.map((state) => (
                    <path
                        key={state.code}
                        d={state.path}
                        className={highlighted.has(state.code) ? "map-state is-highlighted" : "map-state"}
                        fillRule="evenodd"
                    >
                        <title>{state.name}{highlighted.has(state.code) ? ` — ${language} region` : ""}</title>
                    </path>
                ))}
            </svg>
            <p className="map-state-list"><strong>Highlighted:</strong> {settings.states.join(", ")}</p>
            {settings.stateNote && <p className="map-note">{settings.stateNote}</p>}
        </article>
    );
});

IndiaMap.displayName = "IndiaMap";

export default IndiaMap;
