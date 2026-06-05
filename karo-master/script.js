const ADMIN_KEY = "karo-master-admin";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz1X-HR4VFr_gWeQiVSXaKOPwm1dFOMu9znTKrrW3pEqs9lvAXWggzIdoshFNlxVLHkBQ/exec";
const ADMIN_WHATSAPP = "77009904003";
const SITE_BASE_URL = "https://movixstudio-kz.github.io/karo-market/karo-master/";
const GA4_MEASUREMENT_ID = "";
const YANDEX_METRIKA_ID = "";

const translations = {
  ru: {
    navHome: "Главная",
    navCategories: "Категории",
    navCities: "Города",
    navCatalog: "Каталог",
    navAdd: "Добавить мастера",
    heroEyebrow: "Каталог мастеров и услуг Казахстана",
    heroTitle: "KARO Master - мастера и услуги Казахстана",
    heroCopy: "Найдите сантехника, электрика, сварщика, кровельщика или бригаду рядом с вами. Сравните цены, отзывы, VIP-статус и свяжитесь напрямую через WhatsApp, звонок или Telegram.",
    searchLabel: "Какая услуга нужна?",
    cityLabel: "Город",
    districtLabel: "Район",
    findMaster: "Найти мастера",
    addMaster: "Добавить мастера",
    anyCity: "Любой город",
    allCategories: "Все категории",
    chooseCategory: "Выберите категорию",
    showMasters: "Показать мастеров",
    normal: "Обычный",
    partner: "Партнер KARO Master",
    from: "от",
    pricesFrom: "Цены от",
    tenge: "тг",
    yearsExperience: "лет опыта",
    experienceFromForm: "Опыт указан в анкете",
    rating: "Рейтинг",
    reviews: "отзывов",
    views: "просмотров",
    calls: "звонков",
    viewCard: "Смотреть карточку",
    call: "Позвонить",
    writeWhatsapp: "Написать в WhatsApp",
    writeTelegram: "Написать в Telegram",
    vipSearch: "VIP выше в поиске",
    normalPlacement: "Обычное размещение",
    servicesList: "Список услуг",
    workPhotos: "Фото работ",
    reviewTitle: "Отзывы",
    noReviews: "Отзывов пока нет.",
    leaveReview: "Оставить отзыв",
    similarMasters: "Похожие мастера",
    resultMasters: "мастеров",
    emptyTitle: "Мастера не найдены",
    emptyText: "Попробуйте изменить город, услугу, цену или район.",
    resetFilters: "Сбросить фильтры",
    footerAgreement: "Соглашение",
    footerPrivacy: "Конфиденциальность",
    promoTitle: "Первые 100 мастеров получают VIP бесплатно на 30 дней",
    promoText: "Добавьте анкету сейчас, и мы поднимем карточку выше обычных размещений на старте каталога.",
    totalMasters: "Всего мастеров",
    totalCities: "Городов",
    totalCategories: "Категорий",
    whatsappClicks: "WhatsApp",
    telegramClicks: "Telegram",
    reportMaster: "Пожаловаться на мастера",
    openPhoto: "Открыть фото",
    close: "Закрыть",
    nextPhoto: "Следующее фото",
    prevPhoto: "Предыдущее фото",
    reviewWhatsappText: "Здравствуйте! Хочу оставить отзыв для",
    reportWhatsappText: "Здравствуйте! Хочу пожаловаться на мастера"
  },
  kk: {
    navHome: "Басты бет",
    navCategories: "Санаттар",
    navCities: "Қалалар",
    navCatalog: "Каталог",
    navAdd: "Шебер қосу",
    heroEyebrow: "Қазақстан шеберлері мен қызметтері каталогы",
    heroTitle: "KARO Master - Қазақстандағы шеберлер мен қызметтер",
    heroCopy: "Сантехник, электрик, дәнекерлеуші, шатыршы немесе бригаданы өз қалаңыздан табыңыз. Баға, пікір, VIP-мәртебе және байланыс батырмаларын салыстырыңыз.",
    searchLabel: "Қандай қызмет керек?",
    cityLabel: "Қала",
    districtLabel: "Аудан",
    findMaster: "Шебер табу",
    addMaster: "Шебер қосу",
    anyCity: "Кез келген қала",
    allCategories: "Барлық санаттар",
    chooseCategory: "Санатты таңдаңыз",
    showMasters: "Шеберлерді көрсету",
    normal: "Қарапайым",
    partner: "KARO Master серіктесі",
    from: "бастап",
    pricesFrom: "Бағасы",
    tenge: "тг",
    yearsExperience: "жыл тәжірибе",
    experienceFromForm: "Тәжірибе анкетаға енгізілген",
    rating: "Рейтинг",
    reviews: "пікір",
    views: "қаралым",
    calls: "қоңырау",
    viewCard: "Карточканы көру",
    call: "Қоңырау шалу",
    writeWhatsapp: "WhatsApp-қа жазу",
    writeTelegram: "Telegram-ға жазу",
    vipSearch: "VIP іздеуде жоғары",
    normalPlacement: "Қарапайым орналастыру",
    servicesList: "Қызметтер тізімі",
    workPhotos: "Жұмыс фотолары",
    reviewTitle: "Пікірлер",
    noReviews: "Әзірге пікір жоқ.",
    leaveReview: "Пікір қалдыру",
    similarMasters: "Ұқсас шеберлер",
    resultMasters: "шебер",
    emptyTitle: "Шеберлер табылмады",
    emptyText: "Қаланы, қызметті, бағаны немесе ауданды өзгертіп көріңіз.",
    resetFilters: "Сүзгілерді тазарту",
    footerAgreement: "Келісім",
    footerPrivacy: "Құпиялылық",
    promoTitle: "Алғашқы 100 шебер 30 күнге тегін VIP алады",
    promoText: "Анкетаны қазір қосыңыз, каталог басталғанда карточкаңыз қарапайым орналастырулардан жоғары тұрады.",
    totalMasters: "Барлық шебер",
    totalCities: "Қала",
    totalCategories: "Санат",
    whatsappClicks: "WhatsApp",
    telegramClicks: "Telegram",
    reportMaster: "Шеберге шағымдану",
    openPhoto: "Фотоны ашу",
    close: "Жабу",
    nextPhoto: "Келесі фото",
    prevPhoto: "Алдыңғы фото",
    reviewWhatsappText: "Сәлеметсіз бе! Пікір қалдырғым келеді:",
    reportWhatsappText: "Сәлеметсіз бе! Шеберге шағым қалдырғым келеді:"
  },
  en: {
    navHome: "Home",
    navCategories: "Categories",
    navCities: "Cities",
    navCatalog: "Catalog",
    navAdd: "Add a master",
    heroEyebrow: "Directory of Kazakhstan masters and services",
    heroTitle: "KARO Master - masters and services in Kazakhstan",
    heroCopy: "Find a plumber, electrician, welder, roofer or team near you. Compare prices, reviews, VIP status and contact directly by WhatsApp, phone or Telegram.",
    searchLabel: "What service do you need?",
    cityLabel: "City",
    districtLabel: "District",
    findMaster: "Find a master",
    addMaster: "Add a master",
    anyCity: "Any city",
    allCategories: "All categories",
    chooseCategory: "Choose a category",
    showMasters: "Show masters",
    normal: "Standard",
    partner: "KARO Master partner",
    from: "from",
    pricesFrom: "Prices from",
    tenge: "KZT",
    yearsExperience: "years of experience",
    experienceFromForm: "Experience is listed in the form",
    rating: "Rating",
    reviews: "reviews",
    views: "views",
    calls: "calls",
    viewCard: "View profile",
    call: "Call",
    writeWhatsapp: "Write on WhatsApp",
    writeTelegram: "Write on Telegram",
    vipSearch: "VIP higher in search",
    normalPlacement: "Standard placement",
    servicesList: "Services",
    workPhotos: "Work photos",
    reviewTitle: "Reviews",
    noReviews: "No reviews yet.",
    leaveReview: "Leave a review",
    similarMasters: "Similar masters",
    resultMasters: "masters",
    emptyTitle: "No masters found",
    emptyText: "Try changing the city, service, price or district.",
    resetFilters: "Reset filters",
    footerAgreement: "Terms",
    footerPrivacy: "Privacy",
    promoTitle: "First 100 masters get VIP free for 30 days",
    promoText: "Add your profile now and we will place it above standard listings at the catalog launch.",
    totalMasters: "Masters",
    totalCities: "Cities",
    totalCategories: "Categories",
    whatsappClicks: "WhatsApp",
    telegramClicks: "Telegram",
    reportMaster: "Report this master",
    openPhoto: "Open photo",
    close: "Close",
    nextPhoto: "Next photo",
    prevPhoto: "Previous photo",
    reviewWhatsappText: "Hello! I want to leave a review for",
    reportWhatsappText: "Hello! I want to report this master:"
  }
};

let currentLang = "ru";

const categoryTranslations = {
  kk: {
    "Ремонт квартир": "Пәтер жөндеу",
    "Сантехники": "Сантехниктер",
    "Электрики": "Электриктер",
    "Сварщики": "Дәнекерлеушілер",
    "Кровельщики": "Шатыршылар",
    "Бетонщики": "Бетоншылар",
    "Мастер на час": "Бір сағаттық шебер",
    "Мебельщики": "Жиһаз шеберлері",
    "Автоэлектрики": "Автоэлектриктер",
    "Грузчики": "Жүк тасушылар",
    "Уборка": "Тазалау",
    "Спецтехника": "Арнайы техника",
    "Штукатур": "Сылақшы",
    "Маляр": "Бояушы",
    "Плиточник": "Плиткашы",
    "Гипсокартонщик": "Гипсокартон шебері",
    "Окна и двери": "Терезе және есік",
    "Натяжные потолки": "Керме төбелер",
    "Сборка мебели": "Жиһаз құрастыру",
    "Установка техники": "Техника орнату",
    "Химчистка": "Химиялық тазалау",
    "Переезды": "Көшу",
    "Автомеханик": "Автомеханик",
    "Шиномонтаж": "Шиномонтаж",
    "Эвакуатор": "Эвакуатор",
    "Детейлинг": "Детейлинг",
    "Автомойка": "Автожуу",
    "Заборы": "Қоршаулар",
    "Навесы": "Бастырмалар",
    "Ворота": "Қақпалар",
    "Благоустройство": "Абаттандыру",
    "Садовник": "Бағбан",
    "Вывоз мусора": "Қоқыс шығару",
    "Экскаватор": "Экскаватор",
    "Манипулятор": "Манипулятор",
    "КамАЗ": "КамАЗ",
    "Автовышка": "Автомұнара",
    "Бобкат": "Бобкат",
    "Бетономешалка": "Бетон араластырғыш"
  },
  en: {
    "Ремонт квартир": "Apartment renovation",
    "Сантехники": "Plumbers",
    "Электрики": "Electricians",
    "Сварщики": "Welders",
    "Кровельщики": "Roofers",
    "Бетонщики": "Concrete workers",
    "Мастер на час": "Handyman",
    "Мебельщики": "Furniture makers",
    "Автоэлектрики": "Auto electricians",
    "Грузчики": "Movers",
    "Уборка": "Cleaning",
    "Спецтехника": "Special equipment",
    "Штукатур": "Plasterer",
    "Маляр": "Painter",
    "Плиточник": "Tile installer",
    "Гипсокартонщик": "Drywall specialist",
    "Окна и двери": "Windows and doors",
    "Натяжные потолки": "Stretch ceilings",
    "Сборка мебели": "Furniture assembly",
    "Установка техники": "Appliance installation",
    "Химчистка": "Dry cleaning",
    "Переезды": "Moving",
    "Автомеханик": "Auto mechanic",
    "Шиномонтаж": "Tire service",
    "Эвакуатор": "Tow truck",
    "Детейлинг": "Detailing",
    "Автомойка": "Car wash",
    "Заборы": "Fences",
    "Навесы": "Canopies",
    "Ворота": "Gates",
    "Благоустройство": "Landscaping",
    "Садовник": "Gardener",
    "Вывоз мусора": "Waste removal",
    "Экскаватор": "Excavator",
    "Манипулятор": "Crane truck",
    "КамАЗ": "KamAZ truck",
    "Автовышка": "Aerial lift",
    "Бобкат": "Bobcat",
    "Бетономешалка": "Concrete mixer"
  }
};

const cityTranslations = {
  kk: {
    "Алматы": "Алматы",
    "Астана": "Астана",
    "Шымкент": "Шымкент",
    "Караганда": "Қарағанды",
    "Талгар": "Талғар",
    "Каскелен": "Қаскелең",
    "Бесагаш": "Бесағаш",
    "Конаев": "Қонаев",
    "Семей": "Семей",
    "Тараз": "Тараз"
  },
  en: {
    "Алматы": "Almaty",
    "Астана": "Astana",
    "Шымкент": "Shymkent",
    "Караганда": "Karaganda",
    "Талгар": "Talgar",
    "Каскелен": "Kaskelen",
    "Бесагаш": "Besagash",
    "Конаев": "Konaev",
    "Семей": "Semey",
    "Тараз": "Taraz"
  }
};

const uiTextTranslations = {
  kk: {
    "Главная": "Басты бет",
    "Категории": "Санаттар",
    "Города": "Қалалар",
    "Каталог": "Каталог",
    "Добавить мастера": "Шебер қосу",
    "Каталог мастеров": "Шеберлер каталогы",
    "Найдите мастера по городу, району и услуге": "Қала, аудан және қызмет бойынша шебер табыңыз",
    "Поиск по услуге": "Қызмет бойынша іздеу",
    "Город": "Қала",
    "Район": "Аудан",
    "Категория": "Санат",
    "Цена от": "Бағасы бастап",
    "Цена до": "Бағасы дейін",
    "Сортировка": "Сұрыптау",
    "VIP сначала": "Алдымен VIP",
    "Новые": "Жаңа",
    "Популярные": "Танымал",
    "По рейтингу": "Рейтинг бойынша",
    "Дешевле": "Арзанырақ",
    "Дороже": "Қымбатырақ",
    "Только VIP": "Тек VIP",
    "С отзывами": "Пікірлері бар",
    "Найти мастера": "Шебер табу",
    "Сбросить фильтры": "Сүзгілерді тазарту",
    "Результаты": "Нәтижелер",
    "Мастера": "Шеберлер",
    "Популярные услуги": "Танымал қызметтер",
    "Популярные города": "Танымал қалалар",
    "VIP-мастера": "VIP шеберлер",
    "VIP-мастера выше в поиске": "VIP шеберлер іздеуде жоғары",
    "Открыть весь каталог": "Каталогты толық ашу",
    "Как это работает": "Бұл қалай жұмыс істейді",
    "Для клиента и мастера": "Клиент пен шебер үшін",
    "Выберите услугу": "Қызметті таңдаңыз",
    "Укажите город, район и нужную работу.": "Қаланы, ауданды және қажетті жұмысты көрсетіңіз.",
    "Найдите мастера": "Шеберді табыңыз",
    "Сравните цены, рейтинг, отзывы и VIP-статус.": "Баға, рейтинг, пікір және VIP-мәртебені салыстырыңыз.",
    "Свяжитесь напрямую": "Тікелей байланысыңыз",
    "Напишите в WhatsApp, Telegram или позвоните.": "WhatsApp, Telegram арқылы жазыңыз немесе қоңырау шалыңыз.",
    "Получайте клиентов": "Клиенттер алыңыз",
    "Добавьте карточку и подключите VIP для большего числа заявок.": "Карточка қосып, көбірек өтінім үшін VIP қосыңыз.",
    "VIP-размещение": "VIP орналастыру",
    "Хотите получать больше заявок?": "Көбірек өтінім алғыңыз келе ме?",
    "Подключите VIP, и ваша карточка будет выше обычных мастеров, с золотым акцентом и дополнительным вниманием клиентов.": "VIP қоссаңыз, карточкаңыз қарапайым шеберлерден жоғары тұрады, алтын түспен ерекшеленеді және клиенттердің назарын көбірек аударады.",
    "Подключить VIP": "VIP қосу",
    "VIP на 7 дней": "VIP 7 күнге",
    "VIP на 14 дней": "VIP 14 күнге",
    "VIP на 30 дней": "VIP 30 күнге",
    "Пользовательское соглашение": "Пайдаланушы келісімі",
    "Политика конфиденциальности": "Құпиялылық саясаты",
    "Соглашение": "Келісім",
    "Конфиденциальность": "Құпиялылық",
    "Заявка на модерацию": "Модерацияға өтінім",
    "Заполните карточку мастера. Мы проверим анкету перед публикацией и добавим ее в каталог после модерации.": "Шебер карточкасын толтырыңыз. Анкетаны жариялау алдында қарап, модерациядан кейін каталогқа қосамыз.",
    "Имя мастера / название бригады": "Шебердің аты / бригада атауы",
    "Телефон для связи": "Байланыс телефоны",
    "Бригада Ерлана": "Ерлан бригадасы",
    "Алматы": "Алматы",
    "Ауэзовский": "Әуезов ауданы",
    "Например: сантехника, замена труб, установка смесителей. Опыт 8 лет, выезд по Алматы.": "Мысалы: сантехника, құбыр ауыстыру, араластырғыш орнату. 8 жыл тәжірибе, Алматы бойынша шығу.",
    "10000": "10000",
    "Ауэзовский, Бостандыкский": "Әуезов, Бостандық аудандары",
    "Кратко опишите опыт, районы выезда и сильные стороны": "Тәжірибені, баратын аудандарды және артықшылықтарды қысқаша сипаттаңыз",
    "Например: сантехник, сварка, ремонт крыши": "Мысалы: сантехник, дәнекерлеу, шатыр жөндеу",
    "Медеу, центр, микрорайон": "Медеу, орталық, шағын аудан",
    "сантехник, электрик, сварка": "сантехник, электрик, дәнекерлеу",
    "центр, Медеу, Юго-Восток": "орталық, Медеу, Оңтүстік-Шығыс",
    "5000": "5000",
    "50000": "50000",
    "Услуги и опыт": "Қызметтер және тәжірибе",
    "Цена от, тг": "Бағасы бастап, тг",
    "Районы выезда": "Баратын аудандар",
    "Описание": "Сипаттама",
    "Фото мастера или логотип": "Шебер фотосы немесе логотип",
    "Фото работ, до 10 фото": "Жұмыс фотолары, 10 фотоға дейін",
    "Сайт": "Сайт",
    "Хочу VIP-размещение": "VIP орналастыруды қалаймын",
    "Я подтверждаю достоверность данных.": "Деректердің дұрыстығын растаймын.",
    "Согласен с публикацией информации на сайте.": "Ақпаратты сайтта жариялауға келісемін.",
    "Отправить заявку": "Өтінімді жіберу",
    "Ваша заявка принята. После проверки карточка появится в каталоге.": "Өтінім қабылданды. Тексеруден кейін карточка каталогта пайда болады.",
    "Информационный каталог специалистов. Размещение анкеты не является гарантией качества услуг.": "Мамандардың ақпараттық каталогы. Анкетаны орналастыру қызмет сапасына кепілдік бермейді.",
    "Информационный каталог специалистов. Администрация сайта не является стороной сделки.": "Мамандардың ақпараттық каталогы. Сайт әкімшілігі мәміле тарапы емес.",
    "Информационный каталог специалистов. Условия, сроки и качество работ согласуются с мастером напрямую.": "Мамандардың ақпараттық каталогы. Шарттар, мерзімдер және жұмыс сапасы шебермен тікелей келісіледі.",
    "Первые 100 мастеров получают VIP бесплатно на 30 дней": "Алғашқы 100 шебер 30 күнге тегін VIP алады",
    "Добавьте анкету сейчас, и мы поднимем карточку выше обычных размещений на старте каталога.": "Анкетаны қазір қосыңыз, каталог басталғанда карточкаңыз қарапайым орналастырулардан жоғары тұрады.",
    "Поднимите карточку выше обычных мастеров": "Карточканы қарапайым шеберлерден жоғары көтеріңіз",
    "VIP дает больше просмотров, золотой акцент, значок VIP и приоритет в городе и категории.": "VIP көбірек қаралым, алтын акцент, VIP белгісі және қала мен санатта басымдық береді.",
    "VIP 7 дней": "VIP 7 күн",
    "VIP 14 дней": "VIP 14 күн",
    "VIP 30 дней": "VIP 30 күн",
    "Выше обычных мастеров, яркая карточка, больше просмотров.": "Қарапайым шеберлерден жоғары, көзге түсетін карточка, көбірек қаралым.",
    "Оптимально для стабильного потока заявок на две недели.": "Екі аптаға тұрақты өтінім ағыны үшін ыңғайлы.",
    "Максимальный срок размещения и приоритет в каталоге.": "Ең ұзақ орналастыру мерзімі және каталогтағы басымдық.",
    "Что дает VIP": "VIP не береді",
    "Показ выше": "Жоғары көрсету",
    "VIP-мастера сортируются выше обычных карточек.": "VIP шеберлер қарапайым карточкалардан жоғары сұрыпталады.",
    "Золотой акцент": "Алтын акцент",
    "Карточка заметнее в каталоге и на главной.": "Карточка каталогта және басты бетте көбірек көзге түседі.",
    "Больше внимания": "Көбірек назар",
    "VIP-метка и приоритетное размещение помогают карточке выделяться в каталоге.": "VIP белгісі және басым орналастыру карточканы каталогта ерекшелейді.",
    "Правовые условия": "Құқықтық шарттар",
    "Пользовательское соглашение": "Пайдаланушы келісімі",
    "Политика конфиденциальности": "Құпиялылық саясаты",
    "Персональные данные": "Жеке деректер",
    "Статус площадки": "Платформа мәртебесі",
    "Ответственность": "Жауапкершілік",
    "Размещение анкеты": "Анкетаны орналастыру",
    "Модерация": "Модерация",
    "Какие данные собираются": "Қандай деректер жиналады",
    "Для чего используются данные": "Деректер не үшін қолданылады",
    "Публикация данных": "Деректерді жариялау",
    "Хранение": "Сақтау",
    "Удаление и изменение": "Өшіру және өзгерту",
    "Сантехники Алматы": "Алматы сантехниктері",
    "Сантехник Алматы - мастера с отзывами и WhatsApp": "Алматы сантехнигі - пікірлері және WhatsApp бар шеберлер",
    "Сварщики Талгара": "Талғар дәнекерлеушілері",
    "Сварщик Талгар - услуги сварки рядом с вами": "Талғар дәнекерлеушісі - жаныңыздағы дәнекерлеу қызметтері",
    "Бетонные работы": "Бетон жұмыстары",
    "Бетонщик Бесагаш - заливка, фундамент, стяжка": "Бесағаш бетоншысы - құю, іргетас, стяжка",
    "Кровельщики Алматы": "Алматы шатыршылары",
    "Ремонт крыши Алматы - кровельщики с WhatsApp": "Алматыда шатыр жөндеу - WhatsApp бар шатыршылар",
    "Электрики Караганды": "Қарағанды электриктері",
    "Электрик Караганда - мастера с отзывами и WhatsApp": "Қарағанды электригі - пікірлері және WhatsApp бар шеберлер",
    "Электрики Алматы": "Алматы электриктері",
    "Электрик Алматы - мастера с WhatsApp и отзывами": "Алматы электригі - WhatsApp және пікірлері бар шеберлер",
    "Мастер на час": "Бір сағаттық шебер",
    "Мастер на час Астана - мелкий ремонт рядом": "Астана бір сағаттық шебері - жаныңыздағы ұсақ жөндеу",
    "Условия работ согласуются напрямую с мастером.": "Жұмыс шарттары шебермен тікелей келісіледі."
  },
  en: {
    "Главная": "Home",
    "Категории": "Categories",
    "Города": "Cities",
    "Каталог": "Catalog",
    "Добавить мастера": "Add a master",
    "Каталог мастеров": "Master catalog",
    "Найдите мастера по городу, району и услуге": "Find a master by city, district and service",
    "Поиск по услуге": "Search by service",
    "Город": "City",
    "Район": "District",
    "Категория": "Category",
    "Цена от": "Price from",
    "Цена до": "Price to",
    "Сортировка": "Sort",
    "VIP сначала": "VIP first",
    "Новые": "New",
    "Популярные": "Popular",
    "По рейтингу": "By rating",
    "Дешевле": "Cheaper",
    "Дороже": "More expensive",
    "Только VIP": "VIP only",
    "С отзывами": "With reviews",
    "Найти мастера": "Find a master",
    "Сбросить фильтры": "Reset filters",
    "Результаты": "Results",
    "Мастера": "Masters",
    "Популярные услуги": "Popular services",
    "Популярные города": "Popular cities",
    "VIP-мастера": "VIP masters",
    "VIP-мастера выше в поиске": "VIP masters higher in search",
    "Открыть весь каталог": "Open full catalog",
    "Как это работает": "How it works",
    "Для клиента и мастера": "For clients and masters",
    "Выберите услугу": "Choose a service",
    "Укажите город, район и нужную работу.": "Select a city, district and the work you need.",
    "Найдите мастера": "Find a master",
    "Сравните цены, рейтинг, отзывы и VIP-статус.": "Compare prices, ratings, reviews and VIP status.",
    "Свяжитесь напрямую": "Contact directly",
    "Напишите в WhatsApp, Telegram или позвоните.": "Write on WhatsApp, Telegram or call.",
    "Получайте клиентов": "Get clients",
    "Добавьте карточку и подключите VIP для большего числа заявок.": "Add a profile and connect VIP for more leads.",
    "VIP-размещение": "VIP placement",
    "Хотите получать больше заявок?": "Want to get more leads?",
    "Подключите VIP, и ваша карточка будет выше обычных мастеров, с золотым акцентом и дополнительным вниманием клиентов.": "Connect VIP and your profile will appear above standard masters, with a gold accent and more client attention.",
    "Подключить VIP": "Connect VIP",
    "VIP на 7 дней": "VIP for 7 days",
    "VIP на 14 дней": "VIP for 14 days",
    "VIP на 30 дней": "VIP for 30 days",
    "Пользовательское соглашение": "Terms of use",
    "Политика конфиденциальности": "Privacy policy",
    "Соглашение": "Terms",
    "Конфиденциальность": "Privacy",
    "Заявка на модерацию": "Moderation request",
    "Заполните карточку мастера. Мы проверим анкету перед публикацией и добавим ее в каталог после модерации.": "Fill in the master profile. We will review the form before publication and add it to the catalog after moderation.",
    "Имя мастера / название бригады": "Master name / team name",
    "Телефон для связи": "Contact phone",
    "Бригада Ерлана": "Yerlan team",
    "Алматы": "Almaty",
    "Ауэзовский": "Auezov district",
    "Например: сантехника, замена труб, установка смесителей. Опыт 8 лет, выезд по Алматы.": "Example: plumbing, pipe replacement, faucet installation. 8 years of experience, service across Almaty.",
    "10000": "10000",
    "Ауэзовский, Бостандыкский": "Auezov, Bostandyk districts",
    "Кратко опишите опыт, районы выезда и сильные стороны": "Briefly describe experience, service areas and strengths",
    "Например: сантехник, сварка, ремонт крыши": "Example: plumber, welding, roof repair",
    "Медеу, центр, микрорайон": "Medeu, center, microdistrict",
    "сантехник, электрик, сварка": "plumber, electrician, welding",
    "центр, Медеу, Юго-Восток": "center, Medeu, South-East",
    "5000": "5000",
    "50000": "50000",
    "Услуги и опыт": "Services and experience",
    "Цена от, тг": "Price from, KZT",
    "Районы выезда": "Service areas",
    "Описание": "Description",
    "Фото мастера или логотип": "Master photo or logo",
    "Фото работ, до 10 фото": "Work photos, up to 10",
    "Сайт": "Website",
    "Хочу VIP-размещение": "I want VIP placement",
    "Я подтверждаю достоверность данных.": "I confirm the accuracy of the data.",
    "Согласен с публикацией информации на сайте.": "I agree to publish the information on the site.",
    "Отправить заявку": "Submit request",
    "Ваша заявка принята. После проверки карточка появится в каталоге.": "Your request has been received. After review, the profile will appear in the catalog.",
    "Информационный каталог специалистов. Размещение анкеты не является гарантией качества услуг.": "Information directory of specialists. Publishing a profile is not a guarantee of service quality.",
    "Информационный каталог специалистов. Администрация сайта не является стороной сделки.": "Information directory of specialists. The site administration is not a party to the deal.",
    "Информационный каталог специалистов. Условия, сроки и качество работ согласуются с мастером напрямую.": "Information directory of specialists. Terms, timing and work quality are agreed directly with the master.",
    "Первые 100 мастеров получают VIP бесплатно на 30 дней": "First 100 masters get VIP free for 30 days",
    "Добавьте анкету сейчас, и мы поднимем карточку выше обычных размещений на старте каталога.": "Add your profile now and we will place it above standard listings at the catalog launch.",
    "Поднимите карточку выше обычных мастеров": "Move your profile above standard masters",
    "VIP дает больше просмотров, золотой акцент, значок VIP и приоритет в городе и категории.": "VIP gives more views, a gold accent, a VIP badge and priority in the city and category.",
    "VIP 7 дней": "VIP 7 days",
    "VIP 14 дней": "VIP 14 days",
    "VIP 30 дней": "VIP 30 days",
    "Выше обычных мастеров, яркая карточка, больше просмотров.": "Higher than standard masters, brighter profile, more views.",
    "Оптимально для стабильного потока заявок на две недели.": "Best for a stable two-week flow of leads.",
    "Максимальный срок размещения и приоритет в каталоге.": "Maximum placement period and catalog priority.",
    "Что дает VIP": "What VIP gives",
    "Показ выше": "Higher placement",
    "VIP-мастера сортируются выше обычных карточек.": "VIP masters are sorted above standard profiles.",
    "Золотой акцент": "Gold accent",
    "Карточка заметнее в каталоге и на главной.": "The profile stands out more in the catalog and on the homepage.",
    "Больше внимания": "More attention",
    "VIP-метка и приоритетное размещение помогают карточке выделяться в каталоге.": "The VIP badge and priority placement help the profile stand out in the catalog.",
    "Правовые условия": "Legal terms",
    "Пользовательское соглашение": "Terms of use",
    "Политика конфиденциальности": "Privacy policy",
    "Персональные данные": "Personal data",
    "Статус площадки": "Platform status",
    "Ответственность": "Responsibility",
    "Размещение анкеты": "Profile placement",
    "Модерация": "Moderation",
    "Какие данные собираются": "What data is collected",
    "Для чего используются данные": "How data is used",
    "Публикация данных": "Data publication",
    "Хранение": "Storage",
    "Удаление и изменение": "Deletion and updates",
    "Сантехники Алматы": "Plumbers in Almaty",
    "Сантехник Алматы - мастера с отзывами и WhatsApp": "Plumber Almaty - masters with reviews and WhatsApp",
    "Сварщики Талгара": "Welders in Talgar",
    "Сварщик Талгар - услуги сварки рядом с вами": "Welder Talgar - welding services near you",
    "Бетонные работы": "Concrete work",
    "Бетонщик Бесагаш - заливка, фундамент, стяжка": "Concrete worker Besagash - pouring, foundation, screed",
    "Кровельщики Алматы": "Roofers in Almaty",
    "Ремонт крыши Алматы - кровельщики с WhatsApp": "Roof repair Almaty - roofers with WhatsApp",
    "Электрики Караганды": "Electricians in Karaganda",
    "Электрик Караганда - мастера с отзывами и WhatsApp": "Electrician Karaganda - masters with reviews and WhatsApp",
    "Электрики Алматы": "Electricians in Almaty",
    "Электрик Алматы - мастера с WhatsApp и отзывами": "Electrician Almaty - masters with WhatsApp and reviews",
    "Мастер на час": "Handyman",
    "Мастер на час Астана - мелкий ремонт рядом": "Handyman Astana - small repairs nearby",
    "Условия работ согласуются напрямую с мастером.": "Work terms are agreed directly with the master."
  }
};

const cities = ["Алматы", "Астана", "Шымкент", "Караганда", "Талгар", "Каскелен", "Бесагаш", "Конаев", "Семей", "Тараз"];

const categories = [
  "Ремонт квартир",
  "Сантехники",
  "Электрики",
  "Сварщики",
  "Кровельщики",
  "Бетонщики",
  "Мастер на час",
  "Мебельщики",
  "Автоэлектрики",
  "Грузчики",
  "Уборка",
  "Спецтехника",
  "Штукатур",
  "Маляр",
  "Плиточник",
  "Гипсокартонщик",
  "Окна и двери",
  "Натяжные потолки",
  "Сборка мебели",
  "Установка техники",
  "Химчистка",
  "Переезды",
  "Автомеханик",
  "Шиномонтаж",
  "Эвакуатор",
  "Детейлинг",
  "Автомойка",
  "Заборы",
  "Навесы",
  "Ворота",
  "Благоустройство",
  "Садовник",
  "Вывоз мусора",
  "Экскаватор",
  "Манипулятор",
  "КамАЗ",
  "Автовышка",
  "Бобкат",
  "Бетономешалка"
];

const masters = [
  {
    id: "arman-santehnik",
    createdAt: "2026-06-01",
    name: "Арман Сантехник",
    category: "Сантехники",
    city: "Алматы",
    district: "Ауэзовский район",
    services: ["замена смесителей", "прочистка труб", "монтаж радиаторов", "ремонт протечек"],
    description: "Выезд по Алматы, аккуратный ремонт сантехники, труб, смесителей и радиаторов. Помогаю с подбором материалов.",
    experience: 11,
    price: 7000,
    rating: 4.9,
    views: 428,
    reviews: [
      { name: "Алия", rating: 5, date: "02.06.2026", text: "Приехал за 40 минут, устранил протечку аккуратно." },
      { name: "Руслан", rating: 5, date: "30.05.2026", text: "Цена как договорились, все чисто." }
    ],
    whatsapp: "+77009904003",
    telegram: "arman_master",
    phone: "+77009904003",
    vip: true,
    verified: true,
    photo: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
    works: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "temir-svarka",
    createdAt: "2026-05-28",
    name: "Temir Welding",
    category: "Сварщики",
    city: "Талгар",
    district: "Центр",
    services: ["ворота", "навесы", "заборы", "выездная сварка"],
    description: "Сварочные работы в Талгаре и рядом: ворота, навесы, заборы, лестницы, усиление металлоконструкций.",
    experience: 8,
    price: 12000,
    rating: 4.8,
    views: 386,
    reviews: [
      { name: "Марат", rating: 5, date: "01.06.2026", text: "Сделали навес за два дня." },
      { name: "Данияр", rating: 5, date: "25.05.2026", text: "Хороший металл, швы ровные." }
    ],
    whatsapp: "+77011234567",
    telegram: "temir_welding",
    phone: "+77011234567",
    vip: true,
    verified: true,
    photo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    works: [
      "https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "besagash-beton",
    createdAt: "2026-05-18",
    name: "Бесагаш Бетон",
    category: "Бетонщики",
    city: "Бесагаш",
    district: "Новая застройка",
    services: ["фундамент", "стяжка", "заливка двора", "опалубка"],
    description: "Бетонные работы для дома и участка: фундамент, стяжка, двор, дорожки, подготовка опалубки.",
    experience: 10,
    price: 18000,
    rating: 4.7,
    views: 244,
    reviews: [
      { name: "Ербол", rating: 5, date: "20.05.2026", text: "Фундамент залили без задержек." },
      { name: "Айгерим", rating: 4, date: "18.05.2026", text: "Помогли рассчитать объем бетона." }
    ],
    whatsapp: "+77021234567",
    telegram: "besagash_beton",
    phone: "+77021234567",
    vip: false,
    verified: false,
    photo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    works: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "krysha-pro",
    createdAt: "2026-06-02",
    name: "Krysha Pro KZ",
    category: "Кровельщики",
    city: "Алматы",
    district: "Медеуский район",
    services: ["ремонт крыши", "мягкая кровля", "профлист", "утепление"],
    description: "Ремонт и монтаж кровли в Алматы. Устраняем протечки, меняем профлист, утепляем крышу.",
    experience: 12,
    price: 15000,
    rating: 4.9,
    views: 502,
    reviews: [
      { name: "Сергей", rating: 5, date: "03.06.2026", text: "После дождя крыша больше не течет." },
      { name: "Нурлан", rating: 5, date: "29.05.2026", text: "Смету дали заранее, фотоотчет прислали." }
    ],
    whatsapp: "+77031234567",
    telegram: "krysha_pro_kz",
    phone: "+77031234567",
    vip: true,
    verified: true,
    photo: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80",
    works: [
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "karaganda-electric",
    createdAt: "2026-05-22",
    name: "Электрик Караганда 24/7",
    category: "Электрики",
    city: "Караганда",
    district: "Юго-Восток",
    services: ["аварийный выезд", "щитки", "проводка", "розетки"],
    description: "Электрик с аварийным выездом по Караганде. Щитки, автоматы, розетки, проводка, свет.",
    experience: 9,
    price: 8000,
    rating: 4.8,
    views: 318,
    reviews: [
      { name: "Олег", rating: 5, date: "24.05.2026", text: "Нашел причину короткого замыкания." },
      { name: "Мадина", rating: 5, date: "23.05.2026", text: "Работает спокойно и объясняет по делу." }
    ],
    whatsapp: "+77041234567",
    telegram: "karaganda_electric",
    phone: "+77041234567",
    vip: false,
    verified: true,
    photo: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    works: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: "master-na-chas-astana",
    createdAt: "2026-06-03",
    name: "Мастер на час Астана",
    category: "Мастер на час",
    city: "Астана",
    district: "Левый берег",
    services: ["мелкий ремонт", "сборка мебели", "установка полок", "замена замков"],
    description: "Мелкий бытовой ремонт, сборка мебели, установка карнизов, замков, полок и техники.",
    experience: 6,
    price: 9000,
    rating: 4.7,
    views: 211,
    reviews: [
      { name: "Индира", rating: 5, date: "03.06.2026", text: "Быстро собрал шкаф и повесил полки." }
    ],
    whatsapp: "+77061234567",
    telegram: "master_astana",
    phone: "+77061234567",
    vip: true,
    verified: true,
    photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    works: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80"
    ]
  }
];

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.ru[key] || key;
}

function translateCategory(category) {
  return (categoryTranslations[currentLang] && categoryTranslations[currentLang][category]) || category;
}

function translateCity(city) {
  return (cityTranslations[currentLang] && cityTranslations[currentLang][city]) || city;
}

function translateUiText(text) {
  const source = String(text || "").trim();
  return (uiTextTranslations[currentLang] && uiTextTranslations[currentLang][source]) || source;
}

function translateStaticText(root = document) {
  root.querySelectorAll("a, button, h1, h2, h3, p, span, label > span, option").forEach((node) => {
    if (node.children.length && !node.matches("option")) return;
    if (!node.dataset.i18nSource) node.dataset.i18nSource = node.textContent.trim();
    const source = node.dataset.i18nSource;
    const next = currentLang === "ru" ? source : translateUiText(source);
    if (next !== node.textContent.trim()) node.textContent = next;
  });
  root.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((node) => {
    if (!node.dataset.placeholderSource) node.dataset.placeholderSource = node.getAttribute("placeholder") || "";
    const source = node.dataset.placeholderSource;
    const translated = currentLang === "ru" ? source : translateUiText(source);
    if (translated) node.setAttribute("placeholder", translated);
  });
}

function money(value) {
  return new Intl.NumberFormat(currentLang === "en" ? "en-US" : "ru-KZ").format(Number(value || 0)) + " " + t("tenge");
}

function formatExperience(value) {
  if (typeof value === "number") return `${value} ${t("yearsExperience")}`;
  return value || t("experienceFromForm");
}

function masterStats(master, reviewCount) {
  return `${t("rating")} ${master.rating} · ${reviewCount} ${t("reviews")} · ${master.views || 0} ${t("views")} · ${master.callClicks || 0} ${t("calls")}`;
}

function masterPerformance(master) {
  return [
    `${master.views || 0} ${t("views")}`,
    `${master.whatsappClicks || 0} ${t("whatsappClicks")}`,
    `${master.callClicks || 0} ${t("calls")}`,
    `${master.telegramClicks || 0} ${t("telegramClicks")}`
  ].join(" · ");
}

function adminWhatsAppUrl(text) {
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function deviceType() {
  return window.matchMedia("(max-width: 760px)").matches ? "mobile" : "desktop";
}

function currentPageName() {
  const path = location.pathname.split("/").pop() || "index.html";
  return path;
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "ru";
  const pack = translations[lang] || translations.ru;
  document.documentElement.lang = lang === "kk" ? "kk" : lang;
  const pairs = [
    ['.top-nav a[href="index.html"]', pack.navHome],
    ['.top-nav a[href="#categories"]', pack.navCategories],
    ['.top-nav a[href="#cities"]', pack.navCities],
    ['.top-nav a[href="masters.html"]', pack.navCatalog],
    ['.top-nav a[href="add-master.html"]', pack.navAdd],
    [".hero .eyebrow", pack.heroEyebrow],
    [".hero h1", pack.heroTitle],
    [".hero-copy", pack.heroCopy],
    ['label span', null]
  ];
  pairs.forEach(([selector, text]) => {
    if (!text) return;
    document.querySelectorAll(selector).forEach((node) => node.textContent = text);
  });
  const labels = document.querySelectorAll(".search-panel label span");
  if (labels[0]) labels[0].textContent = pack.searchLabel;
  if (labels[1]) labels[1].textContent = pack.cityLabel;
  if (labels[2]) labels[2].textContent = pack.districtLabel;
  const findButton = document.querySelector(".search-panel .btn-primary");
  if (findButton) findButton.textContent = pack.findMaster;
  const addButton = document.querySelector(".search-panel .btn-ghost");
  if (addButton) addButton.textContent = pack.addMaster;
  refreshSelectLabels();
  renderCategories();
  renderCities();
  renderVipMasters();
  renderHomeStats();
  renderCatalog();
  renderDetail({ skipTrack: true });
  translateStaticText();
}

function initLanguageSwitcher() {
  const nav = document.querySelector(".top-nav");
  if (!nav || document.querySelector(".lang-switcher")) return;
  const params = new URLSearchParams(location.search);
  const current = params.get("lang") || localStorage.getItem("karoMasterLang") || "ru";
  const switcher = document.createElement("div");
  switcher.className = "lang-switcher";
  switcher.innerHTML = ["ru", "kk", "en"].map((lang) => `<button type="button" data-lang="${lang}">${lang.toUpperCase()}</button>`).join("");
  nav.appendChild(switcher);
  switcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");
    if (!button) return;
    const lang = button.dataset.lang;
    localStorage.setItem("karoMasterLang", lang);
    switcher.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item.dataset.lang === lang));
    applyLanguage(lang);
    trackEvent("language_switch", {}, lang);
  });
  switcher.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item.dataset.lang === current));
  applyLanguage(current);
}

function trackEvent(eventName, master = {}, comment = "") {
  if (window.gtag) {
    window.gtag("event", eventName, {
      master_id: master.id || "",
      master_name: master.name || "",
      category: master.category || "",
      city: master.city || "",
      comment
    });
  }
  if (window.ym && YANDEX_METRIKA_ID) {
    window.ym(Number(YANDEX_METRIKA_ID), "reachGoal", eventName, {
      masterId: master.id || "",
      category: master.category || "",
      city: master.city || ""
    });
  }
  if (!GOOGLE_SCRIPT_URL) return;
  const payload = {
    action: "stat",
    event: eventName,
    masterId: master.id || "",
    masterName: master.name || "",
    category: master.category || "",
    city: master.city || "",
    district: master.district || "",
    source: document.referrer || "direct",
    page: location.href,
    device: deviceType(),
    comment
  };

  try {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.warn("Stats request failed", error);
  }
}

function initExternalAnalytics() {
  if (GA4_MEASUREMENT_ID) {
    const ga = document.createElement("script");
    ga.async = true;
    ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(){ window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA4_MEASUREMENT_ID);
  }
  if (YANDEX_METRIKA_ID) {
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    window.ym(Number(YANDEX_METRIKA_ID), "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }
}

function initials(name) {
  return String(name || "K").split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function getDrafts() {
  return JSON.parse(localStorage.getItem("karoMasterDrafts") || "[]");
}

function setDrafts(items) {
  localStorage.setItem("karoMasterDrafts", JSON.stringify(items));
}

function getAllMasters() {
  return [...getDrafts().filter((item) => item.status !== "rejected"), ...masters];
}

function contactLinks(master) {
  const cleanWhatsApp = String(master.whatsapp || master.phone || "").replace(/\D/g, "");
  const telegram = String(master.telegram || "").replace("@", "");
  return {
    whatsapp: cleanWhatsApp ? `https://wa.me/${cleanWhatsApp}` : "#",
    telegram: telegram ? `https://t.me/${telegram}` : "#",
    phone: master.phone ? `tel:${master.phone}` : "#"
  };
}

function optionHtml(item) {
  const label = cities.includes(item) ? translateCity(item) : translateCategory(item);
  return `<option value="${item}">${label}</option>`;
}

function fillSelect(selector, items, placeholder) {
  document.querySelectorAll(selector).forEach((select) => {
    if (select.dataset.filled) return;
    select.dataset.items = JSON.stringify(items);
    select.dataset.placeholderKey = placeholder;
    select.innerHTML = `<option value="">${placeholder}</option>${items.map(optionHtml).join("")}`;
    select.dataset.filled = "true";
  });
}

function refreshSelectLabels() {
  document.querySelectorAll("select[data-items]").forEach((select) => {
    const value = select.value;
    const items = JSON.parse(select.dataset.items || "[]");
    let placeholder = select.dataset.placeholderKey || "";
    if (placeholder === "Любой город") placeholder = t("anyCity");
    if (placeholder === "Все категории") placeholder = t("allCategories");
    if (placeholder === "Выберите категорию") placeholder = t("chooseCategory");
    select.innerHTML = `<option value="">${placeholder}</option>${items.map(optionHtml).join("")}`;
    select.value = value;
  });
}

function initSelects() {
  fillSelect(".js-city-select", cities, "Любой город");
  fillSelect(".js-category-select", categories, "Все категории");
  fillSelect("#formCategory", categories, "Выберите категорию");
}

function renderCategories() {
  const categoryList = document.querySelector("#categoryList");
  if (!categoryList) return;
  const visible = categories.slice(0, 24);
  categoryList.innerHTML = visible.map((category) => `
    <button class="category-btn" type="button" data-category="${category}">
      <strong>${translateCategory(category)}</strong>
      <span>${t("showMasters")}</span>
    </button>
  `).join("");

  if (categoryList.dataset.bound) return;
  categoryList.dataset.bound = "true";
  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest(".category-btn");
    if (!button) return;
    document.querySelectorAll(".category-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const categorySelect = document.querySelector("#categorySelect");
    if (!document.querySelector("#mastersGrid")) {
      window.location.href = `masters.html?category=${encodeURIComponent(button.dataset.category)}`;
      return;
    }
    if (categorySelect) categorySelect.value = button.dataset.category;
    renderCatalog();
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" });
  });
}

function renderCities() {
  const cityList = document.querySelector("#cityList");
  if (!cityList) return;
  cityList.innerHTML = cities.map((city) => `<a href="masters.html?city=${encodeURIComponent(city)}" data-track="city_filter" data-comment="${city}">${translateCity(city)}</a>`).join("");
}

function renderVipMasters() {
  const grid = document.querySelector("#vipMastersGrid");
  if (!grid) return;
  grid.innerHTML = getAllMasters().filter((master) => master.vip).slice(0, 12).map(renderMasterCard).join("");
}

function renderHomeStats() {
  const stats = document.querySelector("#homeStats");
  if (!stats) return;
  const items = getAllMasters();
  stats.innerHTML = `
    <article><strong>${items.length}</strong><span>${t("totalMasters")}</span></article>
    <article><strong>${new Set(items.map((item) => item.city)).size}</strong><span>${t("totalCities")}</span></article>
    <article><strong>${categories.length}</strong><span>${t("totalCategories")}</span></article>
  `;
}

function scoreMaster(master, sort) {
  if (sort === "new") return Date.parse(master.createdAt || "2026-01-01");
  if (sort === "popular") return Number(master.views || 0);
  if (sort === "rating") return Number(master.rating || 0);
  if (sort === "price") return -Number(master.price || 0);
  if (sort === "price-desc") return Number(master.price || 0);
  if (sort === "experience") return Number(master.experience || 0);
  return (master.vip ? 100000 : 0) + Number(master.rating || 0) * 100 + Number(master.views || 0);
}

function getFilters() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: normalize(document.querySelector("#searchInput")?.value || params.get("service")),
    city: normalize(document.querySelector("#citySelect")?.value || params.get("city")),
    district: normalize(document.querySelector("#districtInput")?.value || params.get("district")),
    category: normalize(document.querySelector("#categorySelect")?.value || params.get("category")),
    minPrice: Number(document.querySelector("#minPriceInput")?.value || 0),
    maxPrice: Number(document.querySelector("#maxPriceInput")?.value || 0),
    vipOnly: document.querySelector("#vipOnlyInput")?.checked || params.get("vip") === "1",
    reviewsOnly: document.querySelector("#reviewsOnlyInput")?.checked || false,
    sort: document.querySelector("#sortSelect")?.value || "recommended"
  };
}

function applyParamsToControls() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("category") && document.querySelector("#categorySelect")) document.querySelector("#categorySelect").value = params.get("category");
  if (params.get("city") && document.querySelector("#citySelect")) document.querySelector("#citySelect").value = params.get("city");
  if (params.get("service") && document.querySelector("#searchInput")) document.querySelector("#searchInput").value = params.get("service");
  if (params.get("vip") === "1" && document.querySelector("#vipOnlyInput")) document.querySelector("#vipOnlyInput").checked = true;
}

function filterMasters(items) {
  const filters = getFilters();
  return items
    .filter((master) => {
      const reviewCount = Array.isArray(master.reviews) ? master.reviews.length : Number(master.reviewCount || 0);
      const haystack = normalize([master.name, master.category, master.city, master.district, master.description, master.services.join(" ")].join(" "));
      return (!filters.search || haystack.includes(filters.search))
        && (!filters.city || normalize(master.city) === filters.city)
        && (!filters.district || normalize(master.district).includes(filters.district))
        && (!filters.category || normalize(master.category) === filters.category)
        && (!filters.minPrice || Number(master.price) >= filters.minPrice)
        && (!filters.maxPrice || Number(master.price) <= filters.maxPrice)
        && (!filters.vipOnly || master.vip)
        && (!filters.reviewsOnly || reviewCount > 0);
    })
    .sort((a, b) => scoreMaster(b, filters.sort) - scoreMaster(a, filters.sort));
}

function renderCatalog() {
  const grid = document.querySelector("#mastersGrid");
  if (!grid) return;

  const filtered = filterMasters(getAllMasters());
  const resultCount = document.querySelector("#resultCount");
  if (resultCount) resultCount.textContent = `${filtered.length} ${t("resultMasters")}`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty"><h3>${t("emptyTitle")}</h3><p class="muted">${t("emptyText")}</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(renderMasterCard).join("");
}

function renderMasterCard(master) {
  const links = contactLinks(master);
  const reviewCount = Array.isArray(master.reviews) ? master.reviews.length : Number(master.reviewCount || 0);
  return `
    <article class="master-card ${master.vip ? "vip" : ""}">
      <a class="card-photo" href="master.html?id=${master.id}" aria-label="${master.name}" data-track="master_card_open" data-master-id="${master.id}">
        <img src="${master.photo}" alt="${master.name}" loading="lazy">
      </a>
      <div class="card-body">
        <div class="avatar-row">
          <div class="avatar">${initials(master.name)}</div>
          <div>
            <h3>${master.name}</h3>
            <div class="master-meta">${translateCity(master.city)}, ${master.district}</div>
          </div>
        </div>
        <div class="badges">
          <span class="badge">${translateCategory(master.category)}</span>
          ${master.vip ? `<span class="badge vip">VIP</span>` : `<span class="badge">${t("normal")}</span>`}
          ${master.vip ? `<span class="badge verified">${t("partner")}</span>` : ""}
        </div>
        <p class="master-meta">${master.description || master.services.join(", ")}</p>
        <div class="price">${t("from")} ${money(master.price)}</div>
        <div class="reviews">${formatExperience(master.experience)} · ${masterStats(master, reviewCount)}</div>
        <div class="master-performance">${masterPerformance(master)}</div>
        <div class="card-actions">
          <a class="btn btn-dark" href="master.html?id=${master.id}" data-track="master_card_open" data-master-id="${master.id}">${t("viewCard")}</a>
          <a class="btn btn-line" href="${links.whatsapp}" target="_blank" rel="noopener" data-track="whatsapp_click" data-master-id="${master.id}">WhatsApp</a>
          <a class="btn btn-primary" href="${links.phone}" data-track="call_click" data-master-id="${master.id}">${t("call")}</a>
        </div>
      </div>
    </article>
  `;
}

function bindSearch() {
  applyParamsToControls();

  document.querySelector("#heroSearch")?.addEventListener("submit", (event) => {
    event.preventDefault();
    trackEvent("service_search", {}, document.querySelector("#searchInput")?.value || "");
    if (!document.querySelector("#mastersGrid")) {
      const params = new URLSearchParams();
      const search = document.querySelector("#searchInput")?.value;
      const city = document.querySelector("#citySelect")?.value;
      const district = document.querySelector("#districtInput")?.value;
      if (search) params.set("service", search);
      if (city) params.set("city", city);
      if (district) params.set("district", district);
      window.location.href = `masters.html?${params.toString()}`;
      return;
    }
    renderCatalog();
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("#catalogSearch")?.addEventListener("submit", (event) => {
    event.preventDefault();
    trackEvent("service_search", {}, document.querySelector("#searchInput")?.value || "");
    renderCatalog();
  });

  ["#searchInput", "#citySelect", "#districtInput", "#categorySelect", "#sortSelect", "#minPriceInput", "#maxPriceInput", "#vipOnlyInput", "#reviewsOnlyInput"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", renderCatalog);
    document.querySelector(selector)?.addEventListener("change", (event) => {
      if (selector === "#citySelect") trackEvent("city_filter", {}, event.target.value);
      renderCatalog();
    });
  });

  document.querySelector("#resetFilters")?.addEventListener("click", () => {
    document.querySelectorAll("#searchInput, #districtInput, #minPriceInput, #maxPriceInput").forEach((input) => input.value = "");
    document.querySelectorAll("#citySelect, #categorySelect").forEach((select) => select.value = "");
    document.querySelectorAll("#vipOnlyInput, #reviewsOnlyInput").forEach((input) => input.checked = false);
    if (document.querySelector("#sortSelect")) document.querySelector("#sortSelect").value = "recommended";
    document.querySelectorAll(".category-btn").forEach((button) => button.classList.remove("active"));
    renderCatalog();
  });
}

function bindAddForm() {
  const form = document.querySelector("#addMasterForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const profilePhoto = await readFileAsDataUrl(form.elements.photoFile?.files?.[0]);
    const workPhotos = await readFilesAsDataUrls(Array.from(form.elements.workFiles?.files || []).slice(0, 10));
    const servicesText = data.servicesExperience || "";
    const draft = {
      id: `draft-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
      status: "pending",
      name: data.name,
      category: data.category,
      city: data.city,
      district: data.district,
      services: servicesText.split(/[,\n]/).map((item) => item.trim()).filter(Boolean).slice(0, 8),
      description: data.description || servicesText,
      experience: servicesText,
      price: parseInt(data.price, 10) || 0,
      rating: 5,
      views: 0,
      reviews: [],
      whatsapp: data.phone,
      telegram: data.telegram,
      instagram: data.instagram,
      website: data.website,
      serviceArea: data.serviceArea,
      phone: data.phone,
      vip: data.vip === "on",
      verified: false,
      photo: profilePhoto || "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      works: workPhotos.length ? workPhotos.slice(0, 20) : [
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
      ]
    };

    setDrafts([draft, ...getDrafts()]);
    trackEvent("add_master_submit", draft, data.category || "");
    await sendLead(data, draft);
    form.reset();
    const success = document.querySelector("#formSuccess");
    if (success) success.hidden = false;
    renderCatalog();
  });
}

function readFileAsDataUrl(file) {
  if (!file) return Promise.resolve("");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function readFilesAsDataUrls(files) {
  return Promise.all(Array.from(files).map(readFileAsDataUrl));
}

async function sendLead(data, draft) {
  if (GOOGLE_SCRIPT_URL) {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ type: "master_request", data, draft })
      });
    } catch (error) {
      console.warn("Google Apps Script request failed", error);
    }
  }
}

function renderDetail(options = {}) {
  const detail = document.querySelector("#masterDetail");
  if (!detail) return;

  const id = new URLSearchParams(window.location.search).get("id") || masters[0].id;
  const master = getAllMasters().find((item) => item.id === id) || masters[0];
  const links = contactLinks(master);
  const gallery = [master.photo, ...(Array.isArray(master.works) ? master.works : [])].filter(Boolean);
  const related = getAllMasters()
    .filter((item) => item.id !== master.id && item.category === master.category && item.city === master.city)
    .slice(0, 3);
  document.title = `${master.name} - ${translateCategory(master.category)} | KARO Master`;
  if (!options.skipTrack) trackEvent("master_profile_view", master);

  detail.innerHTML = `
    <article class="detail-card">
      <div class="detail-photo">
        <button class="photo-open" type="button" data-gallery-index="0" aria-label="${t("openPhoto")}">
          <img src="${master.photo}" alt="${master.name}">
        </button>
      </div>
      <div class="detail-content">
        <div class="badges">
          <span class="badge">${translateCategory(master.category)}</span>
          ${master.vip ? `<span class="badge vip">${t("vipSearch")}</span>` : `<span class="badge">${t("normalPlacement")}</span>`}
          ${master.vip ? `<span class="badge verified">${t("partner")}</span>` : ""}
        </div>
        <h1>${master.name}</h1>
        <p class="master-meta">${translateCity(master.city)}, ${master.district}</p>
        <p>${master.description}</p>
        <div class="price">${t("pricesFrom")} ${money(master.price)}</div>
        <div class="reviews">${formatExperience(master.experience)} · ${masterStats(master, master.reviews.length)}</div>
        <div class="master-performance">${masterPerformance(master)}</div>
        <div class="card-actions">
          <a class="btn btn-line" href="${links.whatsapp}" target="_blank" rel="noopener" data-track="whatsapp_click" data-master-id="${master.id}">${t("writeWhatsapp")}</a>
          <a class="btn btn-line" href="${links.telegram}" target="_blank" rel="noopener" data-track="telegram_click" data-master-id="${master.id}">${t("writeTelegram")}</a>
          <a class="btn btn-primary" href="${links.phone}" data-track="call_click" data-master-id="${master.id}">${t("call")}</a>
          <a class="btn btn-line" href="${adminWhatsAppUrl(`${t("reportWhatsappText")} ${master.name} (${SITE_BASE_URL}master.html?id=${master.id})`)}" target="_blank" rel="noopener" data-track="report_master" data-master-id="${master.id}">${t("reportMaster")}</a>
        </div>
        <section>
          <h2>${t("servicesList")}</h2>
          <div class="badges">${master.services.map((service) => `<span class="badge">${service}</span>`).join("")}</div>
        </section>
        <section>
          <h2>${t("workPhotos")}</h2>
          <div class="works">
            ${master.works.map((src, index) => `<button class="photo-open work-photo" type="button" data-gallery-index="${index + 1}" aria-label="${t("openPhoto")}"><img src="${src}" alt="${t("workPhotos")} ${master.name}" loading="lazy"></button>`).join("")}
          </div>
        </section>
        <section>
          <h2>${t("reviewTitle")}</h2>
          <div class="review-list">
            ${master.reviews.map((review) => `<blockquote><strong>${review.name} · ${review.rating}/5</strong><br>${review.text}<small>${review.date}</small></blockquote>`).join("") || `<p class='muted'>${t("noReviews")}</p>`}
          </div>
          <a class="btn btn-line" href="${adminWhatsAppUrl(`${t("reviewWhatsappText")} ${master.name}`)}" target="_blank" rel="noopener" data-track="review_click" data-master-id="${master.id}">${t("leaveReview")}</a>
        </section>
      </div>
    </article>
    ${related.length ? `<section class="section catalog"><h2>${t("similarMasters")}</h2><div class="masters-grid">${related.map(renderMasterCard).join("")}</div></section>` : ""}
  `;
  bindGallery(gallery, master);
}

function bindGallery(images, master) {
  if (!images.length) return;
  let activeIndex = 0;
  let modal = document.querySelector("#photoLightbox");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "photoLightbox";
    modal.className = "photo-lightbox";
    modal.hidden = true;
    modal.innerHTML = `
      <div class="photo-lightbox-backdrop" data-close-gallery></div>
      <div class="photo-lightbox-panel" role="dialog" aria-modal="true">
        <button class="photo-lightbox-close" type="button" data-close-gallery aria-label="${t("close")}">×</button>
        <button class="photo-lightbox-nav prev" type="button" data-gallery-prev aria-label="${t("prevPhoto")}">‹</button>
        <img alt="">
        <button class="photo-lightbox-nav next" type="button" data-gallery-next aria-label="${t("nextPhoto")}">›</button>
        <div class="photo-lightbox-count"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  const image = modal.querySelector("img");
  const count = modal.querySelector(".photo-lightbox-count");
  const show = (index) => {
    activeIndex = (index + images.length) % images.length;
    image.src = images[activeIndex];
    image.alt = `${master.name} ${activeIndex + 1}`;
    count.textContent = `${activeIndex + 1} / ${images.length}`;
    modal.hidden = false;
    document.body.classList.add("modal-open");
  };
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };
  document.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      trackEvent("photo_open", master, String(Number(button.dataset.galleryIndex) + 1));
      show(Number(button.dataset.galleryIndex || 0));
    });
  });
  modal.querySelector("[data-gallery-prev]").onclick = () => show(activeIndex - 1);
  modal.querySelector("[data-gallery-next]").onclick = () => show(activeIndex + 1);
  modal.querySelectorAll("[data-close-gallery]").forEach((button) => button.onclick = close);
  document.onkeydown = (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(activeIndex - 1);
    if (event.key === "ArrowRight") show(activeIndex + 1);
  };
}

function bindVipButtons() {
  document.querySelectorAll("[data-vip-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.vipPlan;
      const text = `Здравствуйте! Хочу подключить VIP-размещение KARO Master: ${plan}`;
      trackEvent("vip_click", {}, plan);
      window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
  });
}

function bindTrackingLinks() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-track]");
    if (!target) return;
    const masterId = target.dataset.masterId;
    const master = masterId ? getAllMasters().find((item) => item.id === masterId) || {} : {};
    trackEvent(target.dataset.track, master, target.dataset.comment || target.textContent.trim());
  });
}

function bindAdmin() {
  const login = document.querySelector("#adminLogin");
  const panel = document.querySelector("#adminPanel");
  if (!login || !panel) return;

  login.addEventListener("submit", (event) => {
    event.preventDefault();
    const key = new FormData(login).get("key");
    if (key !== ADMIN_KEY) {
      document.querySelector("#adminError").hidden = false;
      return;
    }
    login.hidden = true;
    panel.hidden = false;
    renderAdmin();
  });
}

function renderAdmin() {
  const list = document.querySelector("#adminList");
  if (!list) return;
  const drafts = getDrafts();
  list.innerHTML = drafts.length ? drafts.map((item) => `
    <article class="admin-item">
      <div>
        <h3>${item.name}</h3>
        <p class="muted">${item.status || "pending"} · ${item.city}, ${item.category} · от ${money(item.price)}</p>
      </div>
      <div class="admin-actions">
        <button class="btn btn-line" data-admin="approved" data-id="${item.id}">Одобрить</button>
        <button class="btn btn-line" data-admin="rejected" data-id="${item.id}">Отклонить</button>
        <button class="btn btn-line" data-admin="vip" data-id="${item.id}">Сделать VIP</button>
        <button class="btn btn-line" data-admin="novip" data-id="${item.id}">Снять VIP</button>
        <button class="btn btn-primary" data-admin="delete" data-id="${item.id}">Удалить</button>
      </div>
    </article>
  `).join("") : "<p class='muted'>Новых заявок пока нет.</p>";

  list.querySelectorAll("[data-admin]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.admin;
      const id = button.dataset.id;
      let next = getDrafts();
      if (action === "delete") {
        next = next.filter((item) => item.id !== id);
      } else {
        next = next.map((item) => {
          if (item.id !== id) return item;
          if (action === "vip") return { ...item, vip: true, verified: false };
          if (action === "novip") return { ...item, vip: false };
          return { ...item, status: action };
        });
      }
      setDrafts(next);
      renderAdmin();
      renderCatalog();
    });
  });
}

initExternalAnalytics();
initSelects();
initLanguageSwitcher();
trackEvent("site_view", {}, currentPageName());
renderCategories();
renderCities();
renderVipMasters();
renderHomeStats();
bindSearch();
bindAddForm();
bindVipButtons();
bindTrackingLinks();
bindAdmin();
renderCatalog();
renderDetail();
