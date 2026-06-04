const SHEET_ID = "PASTE_GOOGLE_SHEET_ID_HERE";
const TELEGRAM_BOT_TOKEN = "PASTE_TELEGRAM_BOT_TOKEN_HERE";
const TELEGRAM_CHAT_ID = "PASTE_ADMIN_CHAT_ID_HERE";

function setupKaroMasterSheets() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  ensureHeader_(ss.getSheetByName("Masters") || ss.insertSheet("Masters"), mastersHeader_());
  ensureHeader_(ss.getSheetByName("Reviews") || ss.insertSheet("Reviews"), [
    "ID отзыва",
    "ID мастера",
    "Имя клиента",
    "Оценка",
    "Текст отзыва",
    "Дата",
    "Статус"
  ]);
  ensureHeader_(ss.getSheetByName("VIP") || ss.insertSheet("VIP"), [
    "ID мастера",
    "Тариф",
    "Сумма",
    "Дата оплаты",
    "VIP до",
    "Статус оплаты"
  ]);
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents || "{}");
  const data = payload.data || {};
  const draft = payload.draft || {};

  appendMaster(data, draft);
  sendTelegram(data, draft);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function appendMaster(data, draft) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName("Masters") || ss.insertSheet("Masters");
  ensureHeader_(sheet, mastersHeader_());

  sheet.appendRow([
    draft.id || Utilities.getUuid(),
    new Date(),
    "На модерации",
    draft.vip ? "Да" : "Нет",
    "",
    data.name || "",
    data.phone || "",
    data.telegram || "",
    data.instagram || "",
    data.website || "",
    data.city || "",
    data.district || "",
    data.category || "",
    data.servicesExperience || "",
    data.serviceArea || "",
    data.price || "",
    data.description || "",
    draft.photo || "",
    Array.isArray(draft.works) ? draft.works.slice(0, 10).join("\n") : "",
    0,
    0,
    0,
    0,
    0,
    ""
  ]);
}

function mastersHeader_() {
  return [
    "ID",
    "Дата добавления",
    "Статус",
    "VIP",
    "VIP до",
    "Имя мастера / бригады",
    "Телефон для связи",
    "Telegram",
    "Instagram",
    "Сайт",
    "Город",
    "Район",
    "Категория",
    "Услуги и опыт",
    "Районы выезда",
    "Цена от",
    "Описание",
    "Фото профиля",
    "Фото работ до 10",
    "Рейтинг",
    "Количество отзывов",
    "Просмотры",
    "Клики WhatsApp",
    "Клики звонка",
    "Ссылка на карточку"
  ];
}

function sendTelegram(data, draft) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

  const text = [
    "Новая заявка KARO Master",
    "Имя: " + (data.name || ""),
    "Телефон: " + (data.phone || ""),
    "Город: " + (data.city || ""),
    "Район: " + (data.district || ""),
    "Категория: " + (data.category || ""),
    "Услуги и опыт: " + (data.servicesExperience || ""),
    "Районы выезда: " + (data.serviceArea || ""),
    "Цена от: " + (data.price || "") + " тг",
    "Описание: " + (data.description || ""),
    "Фото профиля: " + (draft.photo ? "загружено" : "нет"),
    "Фото работ: " + (Array.isArray(draft.works) ? draft.works.length : 0),
    "ID: " + (draft.id || "")
  ].join("\n");

  UrlFetchApp.fetch("https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: text
    })
  });
}

function ensureHeader_(sheet, header) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(header);
}
