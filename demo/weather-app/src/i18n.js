import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from '@/locales/en.json';
import vi from '@/locales/vi.json';
import constants from "@/constants";

Vue.use(VueI18n);

export default new VueI18n({
    locale: localStorage.getItem(constants.localKey.lang) || 'en',
    fallbackLocale: 'en',
    messages: {
        en, vi
    }
})