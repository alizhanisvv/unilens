"use strict";

const CATEGORIES = [
  { id: "all",    label: "Все",         icon: "✨" },
  { id: "campus", label: "Кампус",      icon: "🏛️" },
  { id: "dorms",  label: "Общежития",   icon: "🛏️" },
  { id: "sport",  label: "Спорт",       icon: "🏟️" },
  { id: "labs",   label: "Лаборатории", icon: "🔬" },
  { id: "city",   label: "Город",       icon: "🌆" },
];

const UNIVERSITIES = [
  {
    id: "kaznu",
    name: "КазНУ им. аль-Фараби",
    en: "Al-Farabi Kazakh National University",
    city: "Алматы",
    founded: 1934,
    site: "https://www.farabi.university/",
    about: "Старейший классический университет Казахстана. Кампус «КазГУград» — самый большой в стране.",
    aliases: ["казну", "kaznu", "казгу", "kazgu", "аль фараби", "al farabi", "alfarabi", "farabi", "фараби",
      "казахский национальный университет", "kazakh national university", "al farabi kazakh national university"],
    photos: [
      { cat: "campus", caption: "Главное здание КазНУ им. аль-Фараби (ректорат)",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Al-Farabi_KazNU_rektorat.jpg/960px-Al-Farabi_KazNU_rektorat.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/7/72/Al-Farabi_KazNU_rektorat.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Al-Farabi_KazNU_rektorat.jpg" },
      { cat: "campus", caption: "Главный корпус КазНУ",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Main_building_of_KazNU.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Main_building_of_KazNU.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Main_building_of_KazNU.jpg" },
      { cat: "campus", caption: "Корпус факультета журналистики КазНУ",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/%D2%9A%D0%B0%D0%B7%D2%B0%D0%A3_%D0%96%D1%83%D1%80.%D1%84%D0%B0%D0%BA.JPG/960px-%D2%9A%D0%B0%D0%B7%D2%B0%D0%A3_%D0%96%D1%83%D1%80.%D1%84%D0%B0%D0%BA.JPG",
        full: "https://upload.wikimedia.org/wikipedia/commons/6/68/%D2%9A%D0%B0%D0%B7%D2%B0%D0%A3_%D0%96%D1%83%D1%80.%D1%84%D0%B0%D0%BA.JPG",
        page: "https://commons.wikimedia.org/wiki/File:%D2%9A%D0%B0%D0%B7%D2%B0%D0%A3_%D0%96%D1%83%D1%80.%D1%84%D0%B0%D0%BA.JPG" },
      { cat: "campus", caption: "Территория кампуса КазНУ",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/TWC,_KazNU_Campus.JPG/960px-TWC,_KazNU_Campus.JPG",
        full: "https://upload.wikimedia.org/wikipedia/commons/1/14/TWC,_KazNU_Campus.JPG",
        page: "https://commons.wikimedia.org/wiki/File:TWC,_KazNU_Campus.JPG" },
    ],
  },
  {
    id: "iitu",
    name: "МУИТ (IITU)",
    en: "International Information Technology University",
    city: "Алматы",
    founded: 2009,
    site: "https://iitu.edu.kz/",
    about: "Первый в Казахстане университет информационных технологий.",
    aliases: ["муит", "iitu", "международный университет информационных технологий",
      "international information technology university", "international information technologies university"],
    photos: [],
  },
  {
    id: "kbtu",
    name: "КБТУ",
    en: "Kazakh-British Technical University",
    city: "Алматы",
    founded: 2001,
    site: "https://kbtu.edu.kz/",
    about: "Расположен в историческом здании на Старой площади Алматы. Обучение ведётся на английском.",
    aliases: ["кбту", "kbtu", "казахстанско британский технический университет",
      "казахско британский технический университет", "kazakh british technical university", "kazakh british"],
    photos: [
      { cat: "campus", caption: "Здание КБТУ, Алматы",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kazakh-British_Technical_University,_Almaty_(P1180218).jpg/960px-Kazakh-British_Technical_University,_Almaty_(P1180218).jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kazakh-British_Technical_University,_Almaty_(P1180218).jpg",
        page: "https://commons.wikimedia.org/wiki/File:Kazakh-British_Technical_University,_Almaty_(P1180218).jpg" },
      { cat: "campus", caption: "Здание КБТУ, ул. Толе би, 59",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B,_%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%9A%D0%91%D0%A2%D0%A3.jpg/960px-%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B,_%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%9A%D0%91%D0%A2%D0%A3.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/d/d9/%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B,_%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%9A%D0%91%D0%A2%D0%A3.jpg",
        page: "https://commons.wikimedia.org/wiki/File:%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B,_%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%9A%D0%91%D0%A2%D0%A3.jpg" },
      { cat: "campus", caption: "КБТУ, Алматы",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/KBTU,_Almaty_(cropped).jpg/960px-KBTU,_Almaty_(cropped).jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/3/38/KBTU,_Almaty_(cropped).jpg",
        page: "https://commons.wikimedia.org/wiki/File:KBTU,_Almaty_(cropped).jpg" },
      { cat: "city", caption: "КБТУ на улице Толе би в центре Алматы",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/KBTU_Tole_Bi_Street.jpg/960px-KBTU_Tole_Bi_Street.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/a/a2/KBTU_Tole_Bi_Street.jpg",
        page: "https://commons.wikimedia.org/wiki/File:KBTU_Tole_Bi_Street.jpg" },
    ],
  },
  {
    id: "nu",
    name: "Назарбаев Университет (NU)",
    en: "Nazarbayev University",
    city: "Астана",
    founded: 2010,
    site: "https://nu.edu.kz/",
    about: "Автономный исследовательский университет в Астане с обучением на английском.",
    aliases: ["nu", "ну", "назарбаев", "nazarbayev", "nazarbaev", "назарбаев университет", "nazarbayev university"],
    photos: [
      { cat: "campus", caption: "Nazarbayev University, Астана",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nazarbaev_University_Astana.JPG/960px-Nazarbaev_University_Astana.JPG",
        full: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Nazarbaev_University_Astana.JPG",
        page: "https://commons.wikimedia.org/wiki/File:Nazarbaev_University_Astana.JPG" },
      { cat: "campus", caption: "Nazarbayev University — общий вид",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Nazarbayev_University.JPG/960px-Nazarbayev_University.JPG",
        full: "https://upload.wikimedia.org/wikipedia/commons/7/78/Nazarbayev_University.JPG",
        page: "https://commons.wikimedia.org/wiki/File:Nazarbayev_University.JPG" },
      { cat: "campus", caption: "NU — School of Engineering",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Nazarbayev_University,_School_of_Engineering.jpg/960px-Nazarbayev_University,_School_of_Engineering.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Nazarbayev_University,_School_of_Engineering.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Nazarbayev_University,_School_of_Engineering.jpg" },
      { cat: "labs", caption: "Лаборатория возобновляемой энергии NU",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Renewable_Energy_Laboratory_at_Nazarbayev_University.JPG/960px-Renewable_Energy_Laboratory_at_Nazarbayev_University.JPG",
        full: "https://upload.wikimedia.org/wikipedia/commons/9/92/Renewable_Energy_Laboratory_at_Nazarbayev_University.JPG",
        page: "https://commons.wikimedia.org/wiki/File:Renewable_Energy_Laboratory_at_Nazarbayev_University.JPG" },
    ],
  },
  {
    id: "aitu",
    name: "AITU (Astana IT University)",
    en: "Astana IT University",
    city: "Астана",
    founded: null,
    site: "https://astanait.edu.kz/",
    about: "IT-университет в Астане, расположен в бизнес-центре EXPO.",
    aliases: ["aitu", "аиту", "astana it", "астана ит", "astana it university", "астана ит университет"],
    photos: [],
  },
  {
    id: "enu",
    name: "ЕНУ им. Л. Н. Гумилёва",
    en: "L. N. Gumilyov Eurasian National University",
    city: "Астана",
    founded: 1996,
    site: "https://enu.kz/",
    about: "Крупнейший вуз Астаны, основан в 1996 году.",
    aliases: ["ену", "enu", "гумилев", "gumilyov", "gumilev", "евразийский национальный университет",
      "eurasian national university", "l n gumilyov eurasian national university"],
    photos: [
      { cat: "campus", caption: "ЕНУ им. Л. Н. Гумилёва, Астана",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/L.N.Gumilyov_Eurasian_National_University.JPG/960px-L.N.Gumilyov_Eurasian_National_University.JPG",
        full: "https://upload.wikimedia.org/wikipedia/commons/f/f8/L.N.Gumilyov_Eurasian_National_University.JPG",
        page: "https://commons.wikimedia.org/wiki/File:L.N.Gumilyov_Eurasian_National_University.JPG" },
    ],
  },
  {
    id: "kimep",
    name: "КИМЭП (KIMEP University)",
    en: "KIMEP University",
    city: "Алматы",
    founded: 1992,
    site: "https://www.kimep.kz/",
    about: "Частный университет в Алматы, основан в 1992 году.",
    aliases: ["кимэп", "кимеп", "kimep", "kimep university",
      "казахстанский институт менеджмента экономики и прогнозирования"],
    photos: [
      { cat: "campus", caption: "KIMEP — вид на кампус сверху",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aerial-view-kimep.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Aerial-view-kimep.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Aerial-view-kimep.jpg" },
      { cat: "campus", caption: "Новый учебный корпус KIMEP",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/KIMEP_New_Academic_Building.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/f/f5/KIMEP_New_Academic_Building.jpg",
        page: "https://commons.wikimedia.org/wiki/File:KIMEP_New_Academic_Building.jpg" },
      { cat: "campus", caption: "Oliver Giscard d’Estaing Library, KIMEP",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Oliver_Giscard_d'Estaing_Library_at_KIMEP.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Oliver_Giscard_d'Estaing_Library_at_KIMEP.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Oliver_Giscard_d'Estaing_Library_at_KIMEP.jpg" },
      { cat: "campus", caption: "Корпус KIMEP University",
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kimep.jpg",
        full: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kimep.jpg",
        page: "https://commons.wikimedia.org/wiki/File:Kimep.jpg" },
    ],
  },
];

const CITY_ALIASES = {
  "алматы": "Алматы", "almaty": "Алматы", "алма ата": "Алматы",
  "астана": "Астана", "astana": "Астана", "нур султан": "Астана", "нурсултан": "Астана",
};

const NOT_IN_DB_TITLE = "⚠️ Честная неопределенность:";
const NOT_IN_DB_TEXT = "В базе пока нет верифицированных фото для этого университета";

const $ = (sel, root = document) => root.querySelector(sel);
const state = { query: "", cat: "all" };
let visiblePhotos = [];
let lbIndex = -1;

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function norm(s) {
  return String(s).toLowerCase().replace(/ё/g, "е").replace(/й/g, "й")
    .replace(/[«»"'`’‘“”.,()\-–—_/\\:;!?]/g, " ").replace(/\s+/g, " ").trim();
}
function lev(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}
UNIVERSITIES.forEach((u) => { u._aliases = u.aliases.map(norm); });

const catMeta = (id) => CATEGORIES.find((c) => c.id === id);
const fallbackUrl = (p) => p.page.replace("/wiki/File:", "/wiki/Special:FilePath/") + "?width=960";
const hostOf = (url) => { try { return new URL(url).hostname; } catch { return "источник"; } };

function matchUniversity(u, nq, tokens) {
  for (const alias of u._aliases) {
    if (nq === alias) return true;
    if (alias.length <= 3) { if (tokens.includes(alias)) return true; continue; }
    if (nq.includes(alias)) return true;
    if (nq.length >= 3 && alias.startsWith(nq)) return true;
    if (!alias.includes(" ")) {
      const tol = alias.length >= 7 ? 2 : 1;
      if (tokens.some((t) => t.length >= 4 && lev(t, alias) <= tol)) return true;
    }
  }
  return false;
}

function resolveQuery(query) {
  const nq = norm(query);
  if (!nq) return { list: UNIVERSITIES, unknown: false };
  const tokens = nq.split(" ");
  const cities = new Set();
  Object.entries(CITY_ALIASES).forEach(([k, city]) => {
    if (nq === k || nq.includes(k)) cities.add(city);
  });
  const list = UNIVERSITIES.filter((u) => cities.has(u.city) || matchUniversity(u, nq, tokens));
  return { list, unknown: list.length === 0 };
}

function renderChips(list) {
  const box = $("#chips");
  const counts = { all: 0 };
  CATEGORIES.forEach((c) => (counts[c.id] = 0));
  list.forEach((u) => u.photos.forEach((p) => { counts[p.cat]++; counts.all++; }));

  box.innerHTML = "";
  CATEGORIES.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (state.cat === c.id ? " active" : "") + (counts[c.id] === 0 ? " empty" : "");
    b.setAttribute("aria-pressed", state.cat === c.id);
    b.innerHTML = `<span>${c.icon}</span><span>${esc(c.label)}</span><span class="count">${counts[c.id]}</span>`;
    b.addEventListener("click", () => { state.cat = c.id; render(); });
    box.appendChild(b);
  });
}

function makeNotice({ title, text, sub, big = false, suggest = false, resetCat = false }) {
  const el = document.createElement("div");
  el.className = "notice" + (big ? " big" : "");
  el.innerHTML = `
    <div>
      <div class="notice-title">${esc(title)}</div>
      <p>${esc(text)}</p>
      ${sub ? `<p style="margin-top:8px;opacity:.85">${esc(sub)}</p>` : ""}
      <div class="suggest"></div>
    </div>`;
  const box = $(".suggest", el);
  if (suggest) {
    const label = document.createElement("span");
    label.className = "muted";
    label.style.fontSize = ".85rem";
    label.textContent = "Есть в базе:";
    box.appendChild(label);
    UNIVERSITIES.filter((u) => u.photos.length).forEach((u) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = u.name;
      b.addEventListener("click", () => setQuery(u.name.split(" ")[0].replace(/[()]/g, "")));
      box.appendChild(b);
    });
  }
  if (resetCat) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = "Показать все категории";
    b.addEventListener("click", () => { state.cat = "all"; render(); });
    box.appendChild(b);
  }
  if (!box.children.length) box.remove();
  return el;
}

function attachImage(img, photo, mediaEl) {
  let step = 0;
  img.addEventListener("load", () => mediaEl.classList.add("loaded"));
  img.addEventListener("error", () => {
    step++;
    if (step === 1) img.src = fallbackUrl(photo);
    else if (step === 2) img.src = photo.full;
    else mediaEl.classList.add("broken");
  });
  img.src = photo.src;
}

function makeCard(photo, uni, index) {
  const cat = catMeta(photo.cat);
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.style.animationDelay = Math.min(index * 60, 400) + "ms";
  card.innerHTML = `
    <div class="card-media">
      <div class="skeleton"></div>
      <div class="broken-msg">Фото не загрузилось. Откройте источник по ссылке ниже.</div>
      <img alt="${esc(photo.caption)} — ${esc(uni.name)}" loading="lazy" decoding="async" />
      <span class="badge">${cat.icon} ${esc(cat.label)}</span>
    </div>
    <div class="card-body">
      <h3>${esc(photo.caption)}</h3>
      <div class="uni">${esc(uni.name)} · ${esc(uni.city)}</div>
      <a class="source" href="${esc(photo.page)}" target="_blank" rel="noopener noreferrer">📍 Источник: ${esc(hostOf(photo.page))}</a>
    </div>`;
  const media = $(".card-media", card);
  attachImage($("img", card), photo, media);

  const idx = visiblePhotos.push({ photo, uni }) - 1;
  const open = () => openLightbox(idx);
  media.addEventListener("click", open);
  card.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target === card) open(); });
  $(".source", card).addEventListener("click", (e) => e.stopPropagation());
  return card;
}

function makeSection(uni, photos) {
  const sec = document.createElement("section");
  sec.className = "uni-section";
  const tags = [
    `<span class="tag">📍 ${esc(uni.city)}</span>`,
    uni.founded ? `<span class="tag">🗓 с ${uni.founded}</span>` : "",
    `<span class="tag">📸 ${uni.photos.length} верифиц. фото</span>`,
    `<a class="tag" href="${esc(uni.site)}" target="_blank" rel="noopener noreferrer">🌐 Официальный сайт</a>`,
  ].join("");
  sec.innerHTML = `
    <div class="uni-head">
      <div class="uni-title">
        <h2>${esc(uni.name)}</h2>
        <div class="en">${esc(uni.en)}</div>
        <p class="uni-about">${esc(uni.about)}</p>
      </div>
      <div class="meta">${tags}</div>
    </div>`;
  if (uni.photos.length === 0) {
    sec.appendChild(makeNotice({
      title: NOT_IN_DB_TITLE,
      text: NOT_IN_DB_TEXT,
      sub: "Университет есть в справочнике, но подходящих проверенных фотографий мы не нашли. Случайные картинки не подставляем.",
    }));
  } else {
    const grid = document.createElement("div");
    grid.className = "grid";
    photos.forEach((p, i) => grid.appendChild(makeCard(p, uni, i)));
    sec.appendChild(grid);
  }
  return sec;
}

function render() {
  const { list, unknown } = resolveQuery(state.query);
  const results = $("#results");
  const summary = $("#summary");
  results.innerHTML = "";
  visiblePhotos = [];

  renderChips(list);
  $("#clearBtn").hidden = !state.query;

  const totalPhotos = UNIVERSITIES.reduce((n, u) => n + u.photos.length, 0);
  $("#stats").innerHTML = `<b>${UNIVERSITIES.length}</b> вузов в справочнике · <b>${totalPhotos}</b> верифицированных фото · источник: Wikimedia Commons`;

  if (unknown) {
    summary.textContent = "";
    results.appendChild(makeNotice({
      title: NOT_IN_DB_TITLE,
      text: NOT_IN_DB_TEXT,
      sub: `Запрос: «${state.query.trim()}». Мы не показываем случайные или сгенерированные картинки — только проверенные.`,
      big: true,
      suggest: true,
    }));
    return;
  }

  let sections = 0;
  let shownPhotos = 0;
  list.forEach((u) => {
    const photos = state.cat === "all" ? u.photos : u.photos.filter((p) => p.cat === state.cat);
    if (u.photos.length > 0 && photos.length === 0) return;
    results.appendChild(makeSection(u, photos));
    sections++;
    shownPhotos += photos.length;
  });

  if (sections === 0) {
    const c = catMeta(state.cat);
    const available = CATEGORIES.filter((x) => x.id !== "all" && list.some((u) => u.photos.some((p) => p.cat === x.id)))
      .map((x) => x.label).join(", ");
    summary.textContent = "";
    results.appendChild(makeNotice({
      title: NOT_IN_DB_TITLE,
      text: `В базе пока нет верифицированных фото в категории «${c.label}»`,
      sub: available ? `Проверенные фото есть в категориях: ${available}.` : "",
      big: true,
      resetCat: true,
    }));
    return;
  }

  const catText = state.cat === "all" ? "" : ` · категория: <b>${esc(catMeta(state.cat).label)}</b>`;
  summary.innerHTML = `Найдено вузов: <b>${sections}</b> · фото: <b>${shownPhotos}</b>${catText}`;
}

const lb = { root: $("#lightbox"), img: $("#lbImg"), title: $("#lbTitle"), meta: $("#lbMeta"), src: $("#lbSource") };

function showLightbox() {
  const { photo, uni } = visiblePhotos[lbIndex];
  const cat = catMeta(photo.cat);
  lb.title.textContent = photo.caption;
  lb.meta.textContent = `${uni.name} · ${uni.city} · ${cat.icon} ${cat.label}`;
  lb.src.href = photo.page;
  lb.src.textContent = `📍 Источник: ${hostOf(photo.page)}`;
  lb.img.alt = photo.caption;
  let step = 0;
  lb.img.onerror = () => {
    step++;
    if (step === 1) lb.img.src = fallbackUrl(photo);
    else if (step === 2) lb.img.src = photo.full;
  };
  lb.img.src = photo.src;
}
function openLightbox(i) {
  lbIndex = i;
  lb.root.hidden = false;
  document.body.style.overflow = "hidden";
  showLightbox();
}
function closeLightbox() {
  lb.root.hidden = true;
  document.body.style.overflow = "";
  lb.img.removeAttribute("src");
}
function stepLightbox(d) {
  if (!visiblePhotos.length) return;
  lbIndex = (lbIndex + d + visiblePhotos.length) % visiblePhotos.length;
  showLightbox();
}
$("#lbClose").addEventListener("click", closeLightbox);
$("#lbPrev").addEventListener("click", () => stepLightbox(-1));
$("#lbNext").addEventListener("click", () => stepLightbox(1));
lb.root.addEventListener("click", (e) => { if (e.target === lb.root) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (!lb.root.hidden) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
    return;
  }
  const tag = document.activeElement && document.activeElement.tagName;
  if (e.key === "/" && tag !== "INPUT") { e.preventDefault(); $("#searchInput").focus(); }
});

const input = $("#searchInput");
let timer;
function setQuery(q) {
  input.value = q;
  state.query = q;
  render();
}
input.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => { state.query = input.value; render(); }, 120);
});
$("#clearBtn").addEventListener("click", () => { setQuery(""); input.focus(); });
document.querySelectorAll(".ex").forEach((b) => b.addEventListener("click", () => setQuery(b.dataset.q)));

render();