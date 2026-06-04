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
    "moderation",
    draft.vip ? "yes" : "no",
    "",
    data.name || "",
    data.phone || "",
    data.whatsapp || "",
    data.telegram || "",
    data.instagram || "",
    data.city || "",
    data.district || "",
    data.category || "",
    data.services || "",
    data.price || "",
    data.experience || "",
    data.description || "",
    data.photo || "",
    data.works || "",
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
    "Имя мастера",
    "Телефон",
    "WhatsApp",
    "Telegram",
    "Instagram",
    "Город",
    "Район",
    "Категория",
    "Услуги",
    "Цена от",
    "Опыт",
    "Описание",
    "Фото профиля",
    "Фото работ",
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
    "Телефон: " + (data.phone || data.whatsapp || ""),
    "Город: " + (data.city || ""),
    "Категория: " + (data.category || ""),
    "Услуги: " + (data.services || ""),
    "Цена от: " + (data.price || "") + " тг",
    "Описание: " + (data.description || ""),
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
