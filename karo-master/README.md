# KARO Master

Статический MVP каталога мастеров Казахстана.

## Что есть

- Главная с поиском по услуге, городу и району.
- Отдельный каталог `masters.html` с фильтрами по услуге, городу, району, категории, цене, VIP и отзывам.
- Карточка мастера `master.html?id=...`.
- Отдельная форма добавления `add-master.html`.
- MVP-админка `admin.html` для локальной модерации заявок.
- Страница VIP-тарифов `vip.html`.
- Шаблон Google Apps Script в `apps-script/Code.gs`.
- SEO-страницы:
  - `/santehnik-almaty/`
  - `/elektrik-almaty.html`
  - `/svarshik-talgar/`
  - `/betonshik-besagash/`
  - `/remont-kryshi-almaty/`
  - `/master-na-chas-astana.html`
  - `/elektrik-karaganda/`

## Telegram

Сейчас форма открывает Telegram share с готовым текстом заявки и может отправлять данные в Google Apps Script, если заполнить `GOOGLE_SCRIPT_URL` в `script.js`.

Админка MVP: ключ `karo-master-admin`.
