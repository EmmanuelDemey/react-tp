import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ICU from 'i18next-icu';

const englishDictionary = {
  LIKE: "I like",
  DISLIKE: "I dislike",
  COUNT: "{count, plural, =0 {nobody} =1 {one person} other {# people}}"
};

export type DictionaryType = typeof englishDictionary;

declare module 'i18next' {
    interface CustomTypeOptions {
      resources: DictionaryType;
    }
  }



const frenchDictionary: DictionaryType = {
  LIKE: "J'aime",
  DISLIKE: "Je n'aime pas",
  COUNT: "{count, plural, =0 {aucun personnage} =1 {un personnage} other {# personnages}}"

};

i18n.use(initReactI18next).use(new ICU()).init({
  resources: {
    en: {
      translation: englishDictionary,
    },
    fr: {
      translation: frenchDictionary,
    },
  },
  lng: "en",
});
