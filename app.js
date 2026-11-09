const dates = [
  { id: "14", title: "14 ноября", meta: "суббота", weekend: true, note: "Самый живой день. Центр светится, и никуда не надо спешить. Днём +2." },
  { id: "15", title: "15 ноября", meta: "воскресенье", weekend: true, note: "Мягкий выходной. Можно начать днём и дать вечеру тянуться. Ночью около −5." },
  { id: "12", title: "12 ноября", meta: "четверг", note: "Тихий будний. Если хочется спокойнее, чем в выходные. Днём +1." },
  { id: "13", title: "13 ноября", meta: "пятница", note: "Уже почти выходные: вечер длиннее, центр понемногу оживает." }
];

const times = [
  { id: "day", title: "13:00", meta: "дневной свет", note: "Светло, лица рядом, кофе ещё горячий. Самое мягкое начало." },
  { id: "afternoon", title: "15:30", meta: "после полудня", note: "Город не спешит. Можно зайти в зал и потом выйти к фонарям." },
  { id: "evening", title: "18:30", meta: "тёплый вечер", note: "Фонари, пальто на вешалке, зал уже в своём свете." }
];

const places = [
  {
    id: "cheese",
    title: "Сыроварня",
    image: "images/syrovarnya.jpg",
    image2: "images/syrovarnya-room.jpg",
    tone: "tone-warm",
    tags: ["ужин", "свой сыр", "особняк XIX века"],
    text: "Ресторан в историческом особняке рядом с городской администрацией. Свой сыр, десерты, дровяная печь, много дерева и зелени. На первом этаже зал, открытая кухня и сырная лавка, на втором — более тихие зоны. Для первой встречи лучше сырная тарелка и одно тёплое блюдо, чем длинный банкет: так вечер остаётся лёгким. Столик стоит забронировать.",
    address: "ул. Гагарина, 36",
    hours: "ежедневно 11:00–23:59",
    phone: "+7 (3812) 30-80-40",
    extra: "Бесплатная парковка со стороны Гагарина и Больничного переулка. Средний чек около 1000–3000 ₽.",
    lat: 54.9903625,
    lon: 73.3746139
  },
  {
    id: "coffee",
    title: "Skuratov на Любинском",
    image: "images/skuratov-2.jpg",
    tone: "tone-warm",
    tags: ["кофе", "разговор", "Любинский"],
    text: "Кофейня в Камергерском переулке, в минуте от Любинского проспекта. Маленькие столы у окна, кирпич, дневной свет. Одна чашка, живой разговор и ощущение, что вечер ещё впереди. В субботу днём зал может шуметь, утро или ранний вечер мягче.",
    address: "ул. Ленина, 13А",
    hours: "ежедневно 06:55–23:05",
    phone: "+7 (929) 301-42-41",
    extra: "Средний чек около 300 ₽. Остановка «Любинский проспект» в паре минут пешком.",
    lat: 54.9851904,
    lon: 73.3761681
  },
  {
    id: "museum",
    title: "Музей им. Врубеля",
    image: "images/vrubel-hall.jpg",
    tone: "tone-museum",
    tags: ["разговору есть опора", "дворец", "до 19:00"],
    text: "Врубелевский корпус — бывший генерал-губернаторский дворец на улице Ленина. Залы сами подсказывают тему, если на минуту затихает разговор. Верхнюю одежду сдают в гардероб. До 29 ноября в музейном комплексе идёт выставка «Михаил Врубель. Метаморфозы» в центре «Эрмитаж-Сибирь»: утром в день встречи стоит глянуть на vrubel.ru, в каком зале она открыта. Прийти лучше до 16:30.",
    address: "ул. Ленина, 3",
    hours: "вторник–воскресенье 10:00–19:00, касса до 18:00",
    phone: "+7 (3812) 24-15-64",
    extra: "Понедельник — выходной.",
    lat: 54.9883384,
    lon: 73.3726336
  },
  {
    id: "river",
    title: "Набережная Иртыша",
    image: "images/gates.jpg",
    tone: "tone-warm",
    tags: ["короткая прогулка", "потом тепло", "Тобольские ворота"],
    text: "Встреча у Тобольских ворот. Двадцать минут по освещённой набережной Тухачевского, рядом с водой разговор идёт легче, чем лицом к лицу за столом. Потом сразу в тепло: Skuratov на набережной Тухачевского, 16, открыт до 23:05. У реки ветер холоднее, чем в переулке. Если на месте зябко, прогулку пропускаем и остаёмся в зале — это и есть план.",
    address: "Тобольские ворота, наб. Тухачевского",
    hours: "набережная открыта всегда, кофейня 06:55–23:05",
    phone: "тёплый зал: Skuratov, наб. Тухачевского, 16",
    extra: "Шарф и перчатки. В эти дни днём около +2, к ночи до −5.",
    lat: 54.9851755,
    lon: 73.3624874
  }
];

const looks = [
  { id: "formal", title: "Официальный", man: "images/look-formal-m.jpg", woman: "images/look-formal-w.jpg", note: "Пиджак или жакет, спокойная рубашка, обувь почище. Собранно, без лишней парадности." },
  { id: "informal", title: "Неформальный", man: "images/look-casual-m.jpg", woman: "images/look-casual-w.jpg", note: "Куртка, пальто не по дресс-коду, джинсы или юбка. Живо и без старания." },
  { id: "daily", title: "Повседневный", man: "images/look-daily-m.jpg", woman: "images/look-daily-w.jpg", note: "То, в чём хорошо идти по городу: пальто, слой под ним, удобная обувь и шарф." },
  { id: "dressy", title: "Нарядный", man: "images/look-dressy-m.jpg", woman: "images/look-dressy-w.jpg", note: "Чуть праздничнее обычного: костюм или тёмное платье. Сверху всё равно пальто." }
];

const gestures = [
  { id: "flower", title: "Один цветок", note: "Эустома или ранункулюс. Один стебель теплее букета: его можно поставить в стакан и не нести через весь вечер." },
  { id: "note", title: "Записка", note: "Три строки, которые можно прочитать потом, уже дома. На встрече достаточно короткой." },
  { id: "dessert", title: "Общий десерт", note: "Только если разговор сам до него дойдёт. Заранее стол «на двоих» не накрываю." },
  { id: "songs", title: "Дорога с музыкой", note: "Утром пришлю четыре тихие песни. Их можно слушать по пути, каждый в своих наушниках." }
];

const state = { date: null, time: null, place: null, look: null, gesture: null };
const key = "pervaya-vstrecha";

function saved() {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}

function persist() {
  localStorage.setItem(key, JSON.stringify(state));
}

function button(item, group) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = group === "place" ? "place" : "choice";
  el.dataset.group = group;
  el.dataset.id = item.id;
  el.setAttribute("aria-pressed", "false");
  if (item.weekend) el.classList.add("is-weekend");
  if (group === "look") {
    el.className = "choice look";
    el.innerHTML = `
      <div class="pair">
        <figure><img src="${item.man}" alt="Пример для него, ${item.title}"><figcaption>он</figcaption></figure>
        <figure><img src="${item.woman}" alt="Пример для неё, ${item.title}"><figcaption>она</figcaption></figure>
      </div>
      <div class="pad"><strong>${item.title}</strong><span>${item.note}</span></div>`;
    return el;
  }
  if (group === "place") {
    const card = document.createElement("article");
    card.className = `place ${item.tone}`;
    card.dataset.id = item.id;
    const extra = item.image2
      ? `<img src="${item.image2}" alt="Зал «${item.title}»">`
      : "";
    card.innerHTML = `
      <figure class="photos ${item.image2 ? "" : "single"}">
        <img src="${item.image}" alt="${item.title}">
        ${extra}
      </figure>
      <div class="body">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="tags">${item.tags.map((t) => `<i>${t}</i>`).join("")}</div>
        <p class="addr"><strong>${item.address}</strong><br>${item.hours}<br>${item.phone}<br>${item.extra}</p>
        <p class="addr"><a class="map-link" href="${yandex(item)}" target="_blank" rel="noopener">Открыть в Яндекс Картах</a></p>
        <button type="button" class="pick" data-group="place" data-id="${item.id}" aria-pressed="false">Выбрать это место</button>
      </div>`;
    return card;
  } else {
    const pill = item.weekend ? `<em class="pill">выходные</em>` : "";
    el.innerHTML = `${pill}<span class="dow">${item.meta || ""}</span><strong>${item.title}</strong><span>${item.note}</span>`;
  }
  return el;
}

function yandex(place) {
  return `https://yandex.ru/maps/?pt=${place.lon},${place.lat}&z=17&l=map`;
}

function osm(place) {
  const lat = place.lat;
  const lon = place.lon;
  const bbox = [lon - 0.01, lat - 0.006, lon + 0.01, lat + 0.006].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}

function mount(id, items, group) {
  const root = document.getElementById(id);
  items.forEach((item) => root.appendChild(button(item, group)));
}

function find(list, id) {
  return list.find((item) => item.id === id) || null;
}

function selected() {
  return {
    date: find(dates, state.date),
    time: find(times, state.time),
    place: find(places, state.place),
    look: find(looks, state.look),
    gesture: find(gestures, state.gesture)
  };
}

function invitation(s) {
  if (!s.date || !s.time || !s.place || !s.look || !s.gesture) return "";
  return [
    `${s.date.title}, ${s.date.meta}, в ${s.time.title}.`,
    `${s.place.title}, ${s.place.address}.`,
    `Одежда: ${s.look.title.toLowerCase()}.`,
    `Жест: ${s.gesture.title.toLowerCase()}.`,
    "Я буду чуть раньше. Дальше пусть вечер живёт сам."
  ].join("\n");
}

function render() {
  document.querySelectorAll("[data-group]").forEach((el) => {
    el.setAttribute("aria-pressed", String(state[el.dataset.group] === el.dataset.id));
  });
  document.querySelectorAll("article.place").forEach((el) => {
    el.classList.toggle("is-on", state.place === el.dataset.id);
  });
  const s = selected();
  const ready = invitation(s);
  const title = document.querySelector("#card h3");
  const lead = document.getElementById("card-lead");
  const summary = document.getElementById("summary");
  const mapSlot = document.getElementById("map-slot");
  const rows = [
    ["Дата", s.date && `${s.date.title}, ${s.date.meta}`],
    ["Час", s.time && s.time.title],
    ["Место", s.place && s.place.title],
    ["Одежда", s.look && s.look.title],
    ["Жест", s.gesture && s.gesture.title]
  ];
  summary.innerHTML = rows
    .filter((row) => row[1])
    .map((row) => `<div><b>${row[0]}</b><span>${row[1]}</span></div>`)
    .join("");
  if (ready) {
    title.textContent = "Вечер собран";
    lead.textContent = ready;
  } else {
    title.textContent = "Пока пусто";
    lead.textContent = "Выбери дату, час, место, одежду и жест. Карточка сложится сама.";
  }
  if (s.place) {
    const current = mapSlot.querySelector("iframe");
    const src = osm(s.place);
    if (!current || current.dataset.src !== src) {
      mapSlot.innerHTML = `<iframe title="Карта: ${s.place.title}" data-src="${src}" src="${src}" style="width:100%;height:200px;border:0;border-radius:16px;margin:8px 0 12px" loading="lazy"></iframe>`;
    }
  } else {
    mapSlot.innerHTML = "";
  }
}

function toast(text) {
  const el = document.getElementById("toast");
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

document.getElementById("open").addEventListener("click", () => {
  document.body.classList.add("is-open");
  document.getElementById("veil").classList.add("is-gone");
});

document.body.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-group]");
  if (!choice || event.target.closest("a")) return;
  state[choice.dataset.group] = choice.dataset.id;
  persist();
  render();
});

document.getElementById("copy").addEventListener("click", async () => {
  const text = invitation(selected());
  if (!text) {
    toast("Сначала собери весь вечер");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    toast("Приглашение скопировано");
  } catch {
    toast("Не удалось скопировать");
  }
});

document.getElementById("reset").addEventListener("click", () => {
  Object.keys(state).forEach((name) => { state[name] = null; });
  persist();
  render();
});

mount("dates", dates, "date");
mount("times", times, "time");
mount("places", places, "place");
mount("looks", looks, "look");
mount("gestures", gestures, "gesture");

const stored = saved();
Object.keys(state).forEach((name) => {
  if (stored[name]) state[name] = stored[name];
});
render();
