const ADMIN_KEY = "karo-master-admin";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz1X-HR4VFr_gWeQiVSXaKOPwm1dFOMu9znTKrrW3pEqs9lvAXWggzIdoshFNlxVLHkBQ/exec";
const ADMIN_WHATSAPP = "77009904003";

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

function money(value) {
  return new Intl.NumberFormat("ru-KZ").format(Number(value || 0)) + " тг";
}

function formatExperience(value) {
  if (typeof value === "number") return `${value} лет опыта`;
  return value || "Опыт указан в анкете";
}

function masterStats(master, reviewCount) {
  return `Рейтинг ${master.rating} · ${reviewCount} отзывов · ${master.views || 0} просмотров · ${master.callClicks || 0} звонков`;
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

function fillSelect(selector, items, placeholder) {
  document.querySelectorAll(selector).forEach((select) => {
    if (select.dataset.filled) return;
    select.innerHTML = `<option value="">${placeholder}</option>${items.map((item) => `<option>${item}</option>`).join("")}`;
    select.dataset.filled = "true";
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
      <strong>${category}</strong>
      <span>Показать мастеров</span>
    </button>
  `).join("");

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
  cityList.innerHTML = cities.map((city) => `<a href="masters.html?city=${encodeURIComponent(city)}">${city}</a>`).join("");
}

function renderVipMasters() {
  const grid = document.querySelector("#vipMastersGrid");
  if (!grid) return;
  grid.innerHTML = getAllMasters().filter((master) => master.vip).slice(0, 12).map(renderMasterCard).join("");
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
  if (resultCount) resultCount.textContent = `${filtered.length} мастеров`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty"><h3>Мастера не найдены</h3><p class="muted">Попробуйте изменить город, услугу, цену или район.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(renderMasterCard).join("");
}

function renderMasterCard(master) {
  const links = contactLinks(master);
  const reviewCount = Array.isArray(master.reviews) ? master.reviews.length : Number(master.reviewCount || 0);
  return `
    <article class="master-card ${master.vip ? "vip" : ""}">
      <a class="card-photo" href="master.html?id=${master.id}" aria-label="${master.name}">
        <img src="${master.photo}" alt="${master.name}" loading="lazy">
      </a>
      <div class="card-body">
        <div class="avatar-row">
          <div class="avatar">${initials(master.name)}</div>
          <div>
            <h3>${master.name}</h3>
            <div class="master-meta">${master.city}, ${master.district}</div>
          </div>
        </div>
        <div class="badges">
          <span class="badge">${master.category}</span>
          ${master.vip ? `<span class="badge vip">VIP</span>` : `<span class="badge">Обычный</span>`}
          ${master.vip ? `<span class="badge verified">Партнер KARO Master</span>` : ""}
        </div>
        <p class="master-meta">${master.description || master.services.join(", ")}</p>
        <div class="price">от ${money(master.price)}</div>
        <div class="reviews">${formatExperience(master.experience)} · ${masterStats(master, reviewCount)}</div>
        <div class="card-actions">
          <a class="btn btn-dark" href="master.html?id=${master.id}">Смотреть карточку</a>
          <a class="btn btn-line" href="${links.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-primary" href="${links.phone}">Позвонить</a>
        </div>
      </div>
    </article>
  `;
}

function bindSearch() {
  applyParamsToControls();

  document.querySelector("#heroSearch")?.addEventListener("submit", (event) => {
    event.preventDefault();
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
    renderCatalog();
  });

  ["#searchInput", "#citySelect", "#districtInput", "#categorySelect", "#sortSelect", "#minPriceInput", "#maxPriceInput", "#vipOnlyInput", "#reviewsOnlyInput"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", renderCatalog);
    document.querySelector(selector)?.addEventListener("change", renderCatalog);
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "master_request", data, draft })
      });
    } catch (error) {
      console.warn("Google Apps Script request failed", error);
    }
  }
}

function renderDetail() {
  const detail = document.querySelector("#masterDetail");
  if (!detail) return;

  const id = new URLSearchParams(window.location.search).get("id") || masters[0].id;
  const master = getAllMasters().find((item) => item.id === id) || masters[0];
  const links = contactLinks(master);
  const related = getAllMasters()
    .filter((item) => item.id !== master.id && item.category === master.category && item.city === master.city)
    .slice(0, 3);
  document.title = `${master.name} - ${master.category} | KARO Master`;

  detail.innerHTML = `
    <article class="detail-card">
      <div class="detail-photo">
        <img src="${master.photo}" alt="${master.name}">
      </div>
      <div class="detail-content">
        <div class="badges">
          <span class="badge">${master.category}</span>
          ${master.vip ? `<span class="badge vip">VIP выше в поиске</span>` : `<span class="badge">Обычный статус</span>`}
          ${master.vip ? `<span class="badge verified">Партнер KARO Master</span>` : ""}
        </div>
        <h1>${master.name}</h1>
        <p class="master-meta">${master.city}, ${master.district}</p>
        <p>${master.description}</p>
        <div class="price">Цены от ${money(master.price)}</div>
        <div class="reviews">${formatExperience(master.experience)} · ${masterStats(master, master.reviews.length)}</div>
        <div class="card-actions">
          <a class="btn btn-line" href="${links.whatsapp}" target="_blank" rel="noopener">Написать в WhatsApp</a>
          <a class="btn btn-line" href="${links.telegram}" target="_blank" rel="noopener">Написать в Telegram</a>
          <a class="btn btn-primary" href="${links.phone}">Позвонить</a>
        </div>
        <section>
          <h2>Список услуг</h2>
          <div class="badges">${master.services.map((service) => `<span class="badge">${service}</span>`).join("")}</div>
        </section>
        <section>
          <h2>Фото работ</h2>
          <div class="works">
            ${master.works.map((src) => `<img src="${src}" alt="Работа ${master.name}" loading="lazy">`).join("")}
          </div>
        </section>
        <section>
          <h2>Отзывы</h2>
          <div class="review-list">
            ${master.reviews.map((review) => `<blockquote><strong>${review.name} · ${review.rating}/5</strong><br>${review.text}<small>${review.date}</small></blockquote>`).join("") || "<p class='muted'>Отзывов пока нет.</p>"}
          </div>
          <a class="btn btn-line" href="https://t.me/share/url?text=${encodeURIComponent(`Отзыв для ${master.name} на KARO Master`)}" target="_blank" rel="noopener">Оставить отзыв</a>
        </section>
      </div>
    </article>
    ${related.length ? `<section class="section catalog"><h2>Похожие мастера</h2><div class="masters-grid">${related.map(renderMasterCard).join("")}</div></section>` : ""}
  `;
}

function bindVipButtons() {
  document.querySelectorAll("[data-vip-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.vipPlan;
      const text = `Здравствуйте! Хочу подключить VIP-размещение KARO Master: ${plan}`;
      window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    });
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

initSelects();
renderCategories();
renderCities();
renderVipMasters();
bindSearch();
bindAddForm();
bindVipButtons();
bindAdmin();
renderCatalog();
renderDetail();
