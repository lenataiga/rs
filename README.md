# Сербский язык — личный сайт

## Структура файлов

```
serbian/
├── index.html        ← не трогать (вёрстка)
├── style.css         ← стили (можно менять цвета)
├── flashcards.js     ← слова и карточки
├── grammar.js        ← темы грамматики
├── phrases.js        ← фразы разговорника
└── img/
    └── grammar/      ← сюда кидай схемы и картинки
```

---

## Как добавить слово (flashcards.js)

Открой `flashcards.js`, найди нужную категорию и добавь строку:

```js
{ sr: "Пас", ru: "Собака", phonetic: "Pas", category: "adjectives" },
```

Категории: `greetings`, `numbers`, `food`, `travel`, `verbs`, `adjectives`

Хочешь новую категорию? Добавь слова с новым `category: "animals"` и добавь в список `CATEGORIES`:
```js
animals: "Животные",
```

---

## Как добавить схему в грамматику (grammar.js)

1. Положи картинку в папку `img/grammar/`, например `img/grammar/padezi.jpg`
2. В `grammar.js` найди нужную тему и замени `image: null` на:
```js
image: "img/grammar/padezi.jpg",
```

---

## Как добавить фразу (phrases.js)

Найди нужную категорию и добавь объект:
```js
{ sr: "Добар дан!", ru: "Добрый день!", phonetic: "Dobar dan!" },
```

Или создай новую категорию:
```js
{
  category: "В отеле",
  items: [
    { sr: "Имам резервацију.", ru: "У меня бронь.", phonetic: "Imam rezervaciju." },
  ]
},
```

---

## Публикация на GitHub Pages

1. Создай репозиторий на github.com (например `serbian`)
2. Загрузи все файлы (drag & drop в интерфейсе GitHub)
3. Зайди в Settings → Pages → Source: `main` / `root`
4. Сайт будет доступен по адресу: `https://твой-ник.github.io/serbian/`

### Добавить на экран телефона (iOS Safari):
Открой сайт → кнопка «Поделиться» → «На экран Домой»

---

## Как менять цвета (style.css)

В начале файла `style.css` найди блок `:root { ... }`:

```css
:root {
  --accent:  #2D4A3E;  /* тёмно-зелёный — основной акцент */
  --accent2: #C4633A;  /* терракота — для заметок */
  --bg:      #F7F4EF;  /* фоновый цвет страницы */
  ...
}
```

Меняй hex-коды на любые другие цвета.
