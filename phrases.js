// =============================================
// РАЗГОВОРНИК — ФРАЗЫ
// Чтобы добавить фразу — скопируй блок { ... }
// в нужную категорию или создай новую.
// =============================================

const PHRASES = [
  {
    category: "Знакомство",
    items: [
      { sr: "Како се зовете?", ru: "Как вас зовут?", phonetic: "Kako se zovete?" },
      { sr: "Зовем се...", ru: "Меня зовут...", phonetic: "Zovem se..." },
      { sr: "Одакле сте?", ru: "Откуда вы?", phonetic: "Odakle ste?" },
      { sr: "Из Русије сам.", ru: "Я из России.", phonetic: "Iz Rusije sam." },
      { sr: "Колико година имате?", ru: "Сколько вам лет?", phonetic: "Koliko godina imate?" },
      { sr: "Причате ли српски?", ru: "Вы говорите по-сербски?", phonetic: "Pričate li srpski?" },
      { sr: "Мало разумем.", ru: "Я немного понимаю.", phonetic: "Malo razumem." },
    ]
  },
  {
    category: "В кафе / ресторане",
    items: [
      { sr: "Један сто за двоје, молим.", ru: "Столик на двоих, пожалуйста.", phonetic: "Jedan sto za dvoje, molim." },
      { sr: "Шта препоручујете?", ru: "Что вы рекомендуете?", phonetic: "Šta preporučujete?" },
      { sr: "Донесите рачун, молим.", ru: "Принесите счёт, пожалуйста.", phonetic: "Donesite račun, molim." },
      { sr: "Без меса, молим.", ru: "Без мяса, пожалуйста.", phonetic: "Bez mesa, molim." },
      { sr: "Веома укусно!", ru: "Очень вкусно!", phonetic: "Veoma ukusno!" },
    ]
  },
  {
    category: "Транспорт",
    items: [
      { sr: "Где је аутобуска станица?", ru: "Где автобусная станция?", phonetic: "Gde je autobuska stanica?" },
      { sr: "Када полази воз?", ru: "Когда отправляется поезд?", phonetic: "Kada polazi voz?" },
      { sr: "Карту до Београда, молим.", ru: "Билет до Белграда, пожалуйста.", phonetic: "Kartu do Beograda, molim." },
      { sr: "Колико траје пут?", ru: "Сколько длится дорога?", phonetic: "Koliko traje put?" },
    ]
  },
  {
    category: "Помощь / проблемы",
    items: [
      { sr: "Помозите ми, молим!", ru: "Помогите мне, пожалуйста!", phonetic: "Pomozite mi, molim!" },
      { sr: "Позовите лекара.", ru: "Вызовите врача.", phonetic: "Pozovite lekara." },
      { sr: "Изгубио/Изгубила сам се.", ru: "Я потерялся / потерялась.", phonetic: "Izgubio/Izgubila sam se." },
      { sr: "Не разумем.", ru: "Я не понимаю.", phonetic: "Ne razumem." },
      { sr: "Молим вас, говорите полако.", ru: "Говорите медленно, пожалуйста.", phonetic: "Molim vas, govorite polako." },
    ]
  },
  {
    category: "Покупки",
    items: [
      { sr: "Колико ово кошта?", ru: "Сколько это стоит?", phonetic: "Koliko ovo košta?" },
      { sr: "Да ли имате...?", ru: "У вас есть...?", phonetic: "Da li imate...?" },
      { sr: "Превише је скупо.", ru: "Это слишком дорого.", phonetic: "Previše je skupo." },
      { sr: "Узећу ово.", ru: "Я возьму это.", phonetic: "Uzeću ovo." },
      { sr: "Плаћам картицом.", ru: "Плачу картой.", phonetic: "Plaćam karticom." },
    ]
  },
];
