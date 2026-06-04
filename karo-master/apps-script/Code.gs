const SHEET_ID = "1MxW_-eq4TLZBbV3ZY8AzfFF7ROaa3pCUOHI8Vogzvpg";
const DRIVE_FOLDER_ID = "1cpH-QZN7u36VINvXz5gI_8i_E8JHPnAi";
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
  const files = saveMasterPhotos_(data, draft);

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
    data.truthConsent ? "Да" : "Нет",
    data.publishConsent ? "Да" : "Нет",
    data.termsConsent ? "Да" : "Нет",
    files.folderUrl,
    files.profileUrl,
    files.workUrls.join("\n"),
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
    "Подтверждение достоверности",
    "Согласие на публикацию",
    "Принятие соглашения",
    "Папка с фото",
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

function saveMasterPhotos_(data, draft) {
  const root = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const safeName = String(data.name || "master").replace(/[\\/:*?"<>|#%{}~&]/g, " ").trim();
  const folderName = (draft.id || Utilities.getUuid()) + " - " + safeName;
  const folder = root.createFolder(folderName);
  const result = {
    folderUrl: folder.getUrl(),
    profileUrl: "",
    workUrls: []
  };

  if (draft.photo && String(draft.photo).indexOf("data:image/") === 0) {
    result.profileUrl = saveDataUrl_(folder, draft.photo, "profile");
  } else if (draft.photo) {
    result.profileUrl = draft.photo;
  }

  const works = Array.isArray(draft.works) ? draft.works.slice(0, 10) : [];
  works.forEach(function(photo, index) {
    if (photo && String(photo).indexOf("data:image/") === 0) {
      result.workUrls.push(saveDataUrl_(folder, photo, "work-" + (index + 1)));
    } else if (photo) {
      result.workUrls.push(photo);
    }
  });

  return result;
}

function saveDataUrl_(folder, dataUrl, baseName) {
  const match = String(dataUrl).match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) return "";
  const mimeType = match[1];
  const extension = mimeType.split("/")[1].replace("jpeg", "jpg");
  const bytes = Utilities.base64Decode(match[2]);
  const blob = Utilities.newBlob(bytes, mimeType, baseName + "." + extension);
  const file = folder.createFile(blob);
  return file.getUrl();
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
    "Согласия: " + (data.truthConsent && data.publishConsent && data.termsConsent ? "получены" : "не все получены"),
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
