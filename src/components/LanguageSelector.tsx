import { useTranslation } from "react-i18next";

const languages = [
    {code: "pt", language: "PT"},
    {code: "en", language: "EN"},
    {code: "de", language: "DE"},
];

const LanguageSelector = () => {

    const {i18n} = useTranslation();

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="btn-container">
            {languages.map((lng) => {
                return (
                    <button 
                        className={lng.code === i18n.language ? "selected-language" : ""}
                        key={lng.code} onClick={() => changeLanguage(lng.code)}>
                            {lng.language}
                    </button>
                )
            })}
        </div>
    )
};

export default LanguageSelector;