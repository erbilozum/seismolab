"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// JSON dosyalarını import ediyoruz
import tr from '../app/locales/tr.json';
import en from '../app/locales/en.json';
import et from '../app/locales/et.json';
import ru from '../app/locales/ru.json';
import de from '../app/locales/de.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            tr: { translation: tr },
            en: { translation: en },
            et: { translation: et },
            ru: { translation: ru },
            de: { translation: de },
        },
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator'],
            caches: ['cookie'],
        },
    });

export default i18n;