import { watch } from "vue";
import { LocalStorage } from "quasar";
import { useI18n } from "vue-i18n";
import { appLocaleKey } from "src/utils/config";
export const useLang = () => {
    const { t, locale } = useI18n();
    const localeList = [
        {text: t("thaiLanguage"), locale: "th"},
        {text: t("englishlanguage"), locale: "en"},
    ];

    watch(locale, async (newVal, oldVal) => {
        LocalStorage.set(appLocaleKey, newVal);
    });

    return {
        localeList,
        t,
        locale,
    }
}