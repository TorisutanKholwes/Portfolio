import fr from "../lang/fr.json";
import en from "../lang/en.json";
import es from "../lang/es.json";
import {getCookie} from "./cookie";

const lang = {
    fr: fr,
    en: en,
    es: es
}

function getLangText(langText, textClass) {
    let textFile = lang[langText]
    return (textFile[textClass] !== undefined) ? textFile[textClass] : textFile["error"];
}

function getText(textClass) {
    let langText = (getCookie("lang") !== undefined) ? getCookie("lang") : "fr";
    return getLangText(langText, textClass);
}

export { getLangText, getText };