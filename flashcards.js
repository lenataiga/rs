const FLASHCARDS = [
  // --- ПРИВЕТСТВИЯ ---
  { sr: "Dobrodošli",      ru: "Добро пожаловать",       category: "greetings" },
  { sr: "Zdravo",          ru: "Привет / Здравствуйте",  category: "greetings" },
  { sr: "Doviđenja",       ru: "До свидания",             category: "greetings" },
  { sr: "Hvala",           ru: "Спасибо",                 category: "greetings" },
  { sr: "Molim",           ru: "Пожалуйста / Прошу",      category: "greetings" },
  { sr: "Izvinite",        ru: "Извините",                category: "greetings" },
  { sr: "Da",              ru: "Да",                      category: "greetings" },
  { sr: "Ne",              ru: "Нет",                     category: "greetings" },
  { sr: "Kako si?",        ru: "Как дела?",               category: "greetings" },
  { sr: "Dobro jutro",     ru: "Доброе утро",             category: "greetings" },
  { sr: "Laku noć",        ru: "Спокойной ночи",          category: "greetings" },

  // --- ЧИСЛА ---
  { sr: "Jedan",     ru: "Один",     category: "numbers" },
  { sr: "Dva",       ru: "Два",      category: "numbers" },
  { sr: "Tri",       ru: "Три",      category: "numbers" },
  { sr: "Četiri",    ru: "Четыре",   category: "numbers" },
  { sr: "Pet",       ru: "Пять",     category: "numbers" },
  { sr: "Deset",     ru: "Десять",   category: "numbers" },
  { sr: "Dvadeset",  ru: "Двадцать", category: "numbers" },
  { sr: "Sto",       ru: "Сто",      category: "numbers" },

  // --- ЕДА ---
  { sr: "Hleb",    ru: "Хлеб",   category: "food" },
  { sr: "Voda",    ru: "Вода",   category: "food" },
  { sr: "Kafa",    ru: "Кофе",   category: "food" },
  { sr: "Pivo",    ru: "Пиво",   category: "food" },
  { sr: "Meso",    ru: "Мясо",   category: "food" },
  { sr: "Račun",   ru: "Счёт",   category: "food" },

  // --- ПУТЕШЕСТВИЯ ---
  { sr: "Gde je...?",     ru: "Где находится...?",    category: "travel" },
  { sr: "Koliko košta?",  ru: "Сколько стоит?",       category: "travel" },
  { sr: "Stanica",        ru: "Станция / Остановка",  category: "travel" },
  { sr: "Autobus",        ru: "Автобус",              category: "travel" },
  { sr: "Levo",           ru: "Налево",               category: "travel" },
  { sr: "Desno",          ru: "Направо",              category: "travel" },
  { sr: "Pravo",          ru: "Прямо",                category: "travel" },

  // --- ГЛАГОЛЫ ---
  { sr: "Govoriti",   ru: "Говорить",      category: "verbs" },
  { sr: "Razumeti",   ru: "Понимать",      category: "verbs" },
  { sr: "Hteti",      ru: "Хотеть",        category: "verbs" },
  { sr: "Ići",        ru: "Идти",          category: "verbs" },
  { sr: "Jesti",      ru: "Есть (кушать)", category: "verbs" },
  { sr: "Piti",       ru: "Пить",          category: "verbs" },

  // --- ПРИЛАГАТЕЛЬНЫЕ ---
  { sr: "Veliki",   ru: "Большой",    category: "adjectives" },
  { sr: "Mali",     ru: "Маленький",  category: "adjectives" },
  { sr: "Lep",      ru: "Красивый",   category: "adjectives" },
  { sr: "Dobar",    ru: "Хороший",    category: "adjectives" },
  { sr: "Skupo",    ru: "Дорого",     category: "adjectives" },
  { sr: "Jeftino",  ru: "Дёшево",     category: "adjectives" },
];

const CATEGORIES = {
  all:        "Все",
  greetings:  "Приветствия",
  numbers:    "Числа",
  food:       "Еда",
  travel:     "Путешествия",
  verbs:      "Глаголы",
  adjectives: "Прилагательные",
};
