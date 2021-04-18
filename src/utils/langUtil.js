import i18n from 'i18next';
import { isString } from 'lodash';

export const getCurrentLang = () => {
    const found = i18n.language || localStorage.getItem("i18nextLng");
    if (!isString(found)) {
        return 'en';
    }
    if (found.includes('-')) {
        const [lang] = found.split('-');
        return `${lang}`.trim().toLowerCase();
    }
    return `${found}`.trim().toLowerCase();
};
