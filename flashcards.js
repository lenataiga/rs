// =============================================
// КАРТОЧКИ СО СЛОВАМИ
// Чтобы добавить слово — скопируй один блок { ... }
// и добавь его в нужную категорию.
// category: "greetings" | "numbers" | "food" | "travel" | "verbs" | "adjectives"
// =============================================

const FLASHCARDS = [
  // --- ПРИВЕТСТВИЯ ---
  { sr: "Добродошли", ru: "Добро пожаловать", phonetic: "Dobrodoшли", category: "greetings" },
  { sr: "Здраво", ru: "Привет / Здравствуйте", phonetic: "Zdravo", category: "greetings" },
  { sr: "Довиђења", ru: "До свидания", phonetic: "Doviđenja", category: "greetings" },
  { sr: "Хвала", ru: "Спасибо", phonetic: "Hvala", category: "greetings" },
  { sr: "Молим", ru: "Пожалуйста / Прошу", phonetic: "Molim", category: "greetings" },
  { sr: "Извините", ru: "Извините", phonetic: "Izvinite", category: "greetings" },
  { sr: "Да", ru: "Да", phonetic: "Da", category: "greetings" },
  { sr: "Не", ru: "Нет", phonetic: "Ne", category: "greetings" },
  { sr: "Како си?", ru: "Как дела?", phonetic: "Kako si?", category: "greetings" },
  { sr: "Добро јутро", ru: "Доброе утро", phonetic: "Dobro jutro", category: "greetings" },
  { sr: "Лаку ноћ", ru: "Спокойной ночи", phonetic: "Laku noć", category: "greetings" },

  // --- ЧИСЛА ---
  { sr: "Један", ru: "Один", phonetic: "Jedan", category: "numbers" },
  { sr: "Два", ru: "Два", phonetic: "Dva", category: "numbers" },
  { sr: "Три", ru: "Три", phonetic: "Tri", category: "numbers" },
  { sr: "Четири", ru: "Четыре", phonetic: "Četiri", category: "numbers" },
  { sr: "Пет", ru: "Пять", phonetic: "Pet", category: "numbers" },
  { sr: "Десет", ru: "Десять", phonetic: "Deset", category: "numbers" },
  { sr: "Двадесет", ru: "Двадцать", phonetic: "Dvadeset", category: "numbers" },
  { sr: "Сто", ru: "Сто", phonetic: "Sto", category: "numbers" },

  // --- ЕДА ---
  { sr: "Хлеб", ru: "Хлеб", phonetic: "Hleb", category: "food" },
  { sr: "Вода", ru: "Вода", phonetic: "Voda", category: "food" },
  { sr: "Кафа", ru: "Кофе", phonetic: "Kafa", category: "food" },
  { sr: "Пиво", ru: "Пиво", phonetic: "Pivo", category: "food" },
  { sr: "Месо", ru: "Мясо", phonetic: "Meso", category: "food" },
  { sr: "Рачун", ru: "Счёт", phonetic: "Račun", category: "food" },

  // --- ПУТЕШЕСТВИЯ ---
  { sr: "Где је...?", ru: "Где находится...?", phonetic: "Gde je...?", category: "travel" },
  { sr: "Колико кошта?", ru: "Сколько стоит?", phonetic: "Koliko košta?", category: "travel" },
  { sr: "Станица", ru: "Станция / Остановка", phonetic: "Stanica", category: "travel" },
  { sr: "Аутобус", ru: "Автобус", phonetic: "Autobus", category: "travel" },
  { sr: "Лево", ru: "Налево", phonetic: "Levo", category: "travel" },
  { sr: "Десно", ru: "Направо", phonetic: "Desno", category: "travel" },
  { sr: "Право", ru: "Прямо", phonetic: "Pravo", category: "travel" },

  // --- ГЛАГОЛЫ ---
  { sr: "Говорити", ru: "Говорить", phonetic: "Govoriti", category: "verbs" },
  { sr: "Разумети", ru: "Понимать", phonetic: "Razumeti", category: "verbs" },
  { sr: "Хтети", ru: "Хотеть", phonetic: "Hteti", category: "verbs" },
  { sr: "Ићи", ru: "Идти", phonetic: "Ići", category: "verbs" },
  { sr: "Јести", ru: "Есть (кушать)", phonetic: "Jesti", category: "verbs" },
  { sr: "Пити", ru: "Пить", phonetic: "Piti", category: "verbs" },

  // --- ПРИЛАГАТЕЛЬНЫЕ ---
  { sr: "Велики", ru: "Большой", phonetic: "Veliki", category: "adjectives" },
  { sr: "Мали", ru: "Маленький", phonetic: "Mali", category: "adjectives" },
  { sr: "Леп", ru: "Красивый", phonetic: "Lep", category: "adjectives" },
  { sr: "Добар", ru: "Хороший", phonetic: "Dobar", category: "adjectives" },
  { sr: "Скупо", ru: "Дорого", phonetic: "Skupo", category: "adjectives" },
  { sr: "Јефтино", ru: "Дёшево", phonetic: "Jeftino", category: "adjectives" },
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
