const GRAMMAR = [
  {
    title: "Падежи — обзор и предлоги",
    summary: "В сербском 7 падежей. Каждый отвечает на свой вопрос и используется с определёнными предлогами.",
    image: null,
    tables: [
      {
        subtitle: null,
        headers: ["Падеж", "Вопрос", "Предлоги", "Значение"],
        rows: [
          ["Nominativ",     "Ko? Šta?",          "—",                                  "Подлежащее"],
          ["Genitiv",       "Koga? Čega?",        "od, do, iz, kod, bez, za, oko, posle", "Принадлежность, отсутствие"],
          ["Dativ",         "Kome? Čemu?",        "ka, prema",                          "Получатель действия"],
          ["Akuzativ",      "Koga? Šta?",         "u, na, za, kroz, po",                "Прямое дополнение, направление"],
          ["Vokativ",       "— (обращение)",      "—",                                  "Обращение к кому-то"],
          ["Instrumental",  "Kim? Čim?",          "s(a), pred, nad, pod, za, između",   "Совместность, орудие"],
          ["Lokativ",       "O kome? O čemu?",    "u, na, o, pri, po",                  "Место, тема (всегда с предлогом)"],
        ]
      }
    ],
    note: "Lokativ всегда стоит с предлогом — без предлога эта форма не употребляется."
  },
  {
    title: "Падежи — склонение существительных",
    summary: "Окончания для четырёх типов существительных. М — мужской род, Ж — женский, С — средний.",
    image: null,
    tables: [
      {
        subtitle: "Единственное число",
        headers: ["Падеж", "М неодуш. (sto)", "М одуш. (student)", "Ж на -a (žena)", "Ж на согл. (stvar)", "С (selo)"],
        rows: [
          ["Nominativ",    "sto",       "student",    "žena",   "stvar",   "selo"],
          ["Genitiv",      "stola",     "studenta",   "žene",   "stvari",  "sela"],
          ["Dativ",        "stolu",     "studentu",   "ženi",   "stvari",  "selu"],
          ["Akuzativ",     "sto",       "studenta",   "ženu",   "stvar",   "selo"],
          ["Vokativ",      "stole!",    "studente!",  "ženo!",  "stvari!", "selo!"],
          ["Instrumental", "stolom",    "studentom",  "ženom",  "stvari",  "selom"],
          ["Lokativ",      "stolu",     "studentu",   "ženi",   "stvari",  "selu"],
        ]
      },
      {
        subtitle: "Множественное число",
        headers: ["Падеж", "М неодуш. (sto)", "М одуш. (student)", "Ж на -a (žena)", "Ж на согл. (stvar)", "С (selo)"],
        rows: [
          ["Nominativ",    "stolovi",    "studenti",    "žene",    "stvari",   "sela"],
          ["Genitiv",      "stolova",    "studenata",   "žena",    "stvari",   "sela"],
          ["Dativ",        "stolovima",  "studentima",  "ženama",  "stvarima", "selima"],
          ["Akuzativ",     "stolove",    "studente",    "žene",    "stvari",   "sela"],
          ["Vokativ",      "stolovi!",   "studenti!",   "žene!",   "stvari!",  "sela!"],
          ["Instrumental", "stolovima",  "studentima",  "ženama",  "stvarima", "selima"],
          ["Lokativ",      "stolovima",  "studentima",  "ženama",  "stvarima", "selima"],
        ]
      }
    ],
    note: "Dativ, Instrumental и Lokativ множественного числа всегда совпадают по форме."
  },
  {
    title: "Личные местоимения по падежам",
    summary: "Склонение личных местоимений. Краткие формы (кр.) используются чаще в разговорной речи.",
    image: null,
    tables: [
      {
        subtitle: null,
        headers: ["Падеж", "ja", "ti", "on", "ona", "ono", "mi", "vi", "oni/one"],
        rows: [
          ["Nominativ",    "ja",       "ti",       "on",      "ona",     "ono",     "mi",      "vi",      "oni/one"],
          ["Genitiv",      "mene/me",  "tebe/te",  "njega/ga","nje/je",  "njega/ga","nas",     "vas",     "njih/ih"],
          ["Dativ",        "meni/mi",  "tebi/ti",  "njemu/mu","njoj/joj","njemu/mu","nama/nam","vama/vam","njima/im"],
          ["Akuzativ",     "mene/me",  "tebe/te",  "njega/ga","nju/je",  "njega/ga","nas",     "vas",     "njih/ih"],
          ["Instrumental", "mnom(e)",  "tobom",    "njim(e)", "njom(e)", "njim(e)", "nama",    "vama",    "njima"],
          ["Lokativ",      "meni",     "tebi",     "njemu",   "njoj",    "njemu",   "nama",    "vama",    "njima"],
        ]
      }
    ],
    note: "Краткие формы (me, ti, ga...) не могут стоять в начале предложения и после предлога."
  },
  {
    title: "Глаголы: настоящее время",
    summary: "Спряжение в настоящем времени на примере трёх типов: govoriti, čitati, pisati.",
    image: null,
    tables: [
      {
        subtitle: null,
        headers: ["Лицо", "govoriti (говорить)", "čitati (читать)", "pisati (писать)"],
        rows: [
          ["ja",    "govorim",   "čitam",   "pišem"],
          ["ti",    "govoriš",   "čitaš",   "pišeš"],
          ["on/ona","govori",    "čita",    "piše"],
          ["mi",    "govorimo",  "čitamo",  "pišemo"],
          ["vi",    "govorite",  "čitate",  "pišete"],
          ["oni",   "govore",    "čitaju",  "pišu"],
        ]
      }
    ],
    note: "Личные местоимения (ja, ti...) часто опускаются — глагол сам показывает лицо."
  },
  {
    title: "Род существительных",
    summary: "Три рода: мужской, женский, средний. Определяется по окончанию.",
    image: null,
    tables: [
      {
        subtitle: null,
        headers: ["Род", "Окончание", "Примеры"],
        rows: [
          ["Мужской", "согласная", "sto, grad, brat, voz"],
          ["Женский",  "-a",       "žena, mama, voda, reka"],
          ["Женский",  "согласная","stvar, noć, reč"],
          ["Средний",  "-o / -e",  "selo, more, polje, ime"],
        ]
      }
    ],
    note: "Существительные на согласную — чаще мужского рода, но noć, stvar, reč — женского."
  },
  {
    title: "Отрицание",
    summary: "Частица NE ставится перед глаголом. Глагол hteti (хотеть) образует отрицание особым образом.",
    image: null,
    tables: [
      {
        subtitle: null,
        headers: ["Утверждение", "Отрицание"],
        rows: [
          ["Govorim srpski.",   "Ne govorim srpski."],
          ["Razumem.",          "Ne razumem."],
          ["Idem kući.",        "Ne idem kući."],
          ["Hoću kafu.",        "Neću kafu."],
          ["Hoćeš da ideš?",   "Nećeš da ideš?"],
        ]
      }
    ],
    note: "Глагол hteti (хотеть) в отрицании: neću, nećeš, neće, nećemo, nećete, neće."
  },
  {
    title: "Вопросы",
    summary: "Вопросительные слова. Для вопроса да/нет добавь DA LI в начало.",
    image: null,
    tables: [
      {
        subtitle: null,
        headers: ["Сербский", "Русский", "Пример"],
        rows: [
          ["Ko?",     "Кто?",     "Ko si ti?"],
          ["Šta?",    "Что?",     "Šta radiš?"],
          ["Gde?",    "Где?",     "Gde živiš?"],
          ["Kada?",   "Когда?",   "Kada ideš?"],
          ["Zašto?",  "Почему?",  "Zašto učiš srpski?"],
          ["Kako?",   "Как?",     "Kako si?"],
          ["Koliko?", "Сколько?", "Koliko košta?"],
          ["Čiji?",   "Чей?",     "Čija je ovo torba?"],
          ["Koji?",   "Который?", "Koji jezik govoriš?"],
        ]
      }
    ],
    note: "Da li govoriš srpski? = Ты говоришь по-сербски? (общий вопрос с da li)"
  },
];
