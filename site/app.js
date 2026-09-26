const categories = ["Todos", "Betoneiras", "Marteletes", "Compactadores", "Andaimes", "Geradores", "Vibradores", "Lavadoras"];

const equipment = [
  { name: "Betoneira 120 L", category: "Betoneiras", code: "BET-120", price: 75, stock: 2, image: "photo-1504307651254-35680f356dfd", description: "Compacta e prática para misturas em pequenas reformas.", specs: [["Capacidade", "120 litros"], ["Alimentação", "Elétrica"], ["Indicação", "Argamassa e concreto"]] },
  { name: "Betoneira 250 L", category: "Betoneiras", code: "BET-250", price: 105, stock: 3, image: "photo-1503387762-592deb58ef4e", description: "Boa capacidade para acompanhar o ritmo da sua obra.", specs: [["Capacidade", "250 litros"], ["Alimentação", "Elétrica"], ["Indicação", "Concreto e argamassa"]] },
  { name: "Betoneira 400 L", category: "Betoneiras", code: "BET-400", price: 145, stock: 1, image: "photo-1517581177682-a085bb7ffb15", description: "Mais volume para serviços que pedem produtividade.", specs: [["Capacidade", "400 litros"], ["Alimentação", "Elétrica"], ["Indicação", "Obras de médio porte"]] },
  { name: "Martelete SDS Plus", category: "Marteletes", code: "MAR-SDS+", price: 68, stock: 4, image: "photo-1504148455328-c376907d081c", description: "Perfuração e pequenos rompimentos com controle e precisão.", specs: [["Encaixe", "SDS Plus"], ["Alimentação", "Elétrica"], ["Indicação", "Perfuração e reforma"]] },
  { name: "Martelete Rompedor", category: "Marteletes", code: "MAR-RP01", price: 95, stock: 2, image: "photo-1581092160562-40aa08e78837", description: "Força de impacto para demolição e remoção de revestimentos.", specs: [["Tipo", "Rompedor"], ["Alimentação", "Elétrica"], ["Indicação", "Demolição leve"]] },
  { name: "Martelete SDS Max", category: "Marteletes", code: "MAR-SDSM", price: 125, stock: 1, image: "photo-1581141849291-1125c7b692b5", description: "Para perfurações e trabalhos de maior exigência.", specs: [["Encaixe", "SDS Max"], ["Alimentação", "Elétrica"], ["Indicação", "Obra pesada"]] },
  { name: "Compactador de Solo", category: "Compactadores", code: "COM-SAPO", price: 180, stock: 1, image: "photo-1517089596392-fb9a9033e05b", description: "Compactação eficiente para preparar o terreno da sua obra.", specs: [["Tipo", "Compactador tipo sapo"], ["Motor", "Combustão"], ["Indicação", "Valas e fundações"]] },
  { name: "Placa Vibratória", category: "Compactadores", code: "COM-PL01", price: 160, stock: 2, image: "photo-1504307651254-35680f356dfd", description: "Acabamento uniforme em pisos, pátios e preparação de base.", specs: [["Tipo", "Placa vibratória"], ["Motor", "Combustão"], ["Indicação", "Pisos e calçamento"]] },
  { name: "Andaime Metálico 1 m", category: "Andaimes", code: "AND-100", price: 18, stock: 12, image: "photo-1590644365607-1c5a9b7b4a2c", description: "Módulo versátil para alcançar alturas com estabilidade.", specs: [["Altura", "1 metro"], ["Material", "Aço"], ["Locação", "Por peça / diária"]] },
  { name: "Andaime Metálico 1,5 m", category: "Andaimes", code: "AND-150", price: 23, stock: 10, image: "photo-1504307651254-35680f356dfd", description: "Estrutura modular para serviços em fachadas e ambientes internos.", specs: [["Altura", "1,5 metro"], ["Material", "Aço"], ["Locação", "Por peça / diária"]] },
  { name: "Gerador 3 kVA", category: "Geradores", code: "GER-03K", price: 135, stock: 2, image: "photo-1486406146926-c627a92ad1ab", description: "Energia de apoio para ferramentas e pequenos serviços.", specs: [["Potência", "3 kVA"], ["Combustível", "Gasolina"], ["Indicação", "Obra e manutenção"]] },
  { name: "Gerador 5 kVA", category: "Geradores", code: "GER-05K", price: 185, stock: 1, image: "photo-1497366754035-f200968a6e72", description: "Mais potência para manter sua operação funcionando.", specs: [["Potência", "5 kVA"], ["Combustível", "Gasolina"], ["Indicação", "Obra e evento"]] },
  { name: "Vibrador de Concreto 35 mm", category: "Vibradores", code: "VIB-035", price: 72, stock: 2, image: "photo-1504307651254-35680f356dfd", description: "Ajuda a adensar o concreto e reduzir bolhas de ar.", specs: [["Ponta", "35 mm"], ["Alimentação", "Elétrica"], ["Indicação", "Concretagem"]] },
  { name: "Lavadora de Alta Pressão", category: "Lavadoras", code: "LAV-001", price: 88, stock: 3, image: "photo-1527515637462-cff94eecc1ac", description: "Limpeza prática de pisos, máquinas e áreas de trabalho.", specs: [["Tipo", "Alta pressão"], ["Alimentação", "Elétrica"], ["Indicação", "Limpeza geral"]] },
  { name: "Lavadora Industrial", category: "Lavadoras", code: "LAV-IND", price: 145, stock: 1, image: "photo-1527515637462-cff94eecc1ac", description: "Desempenho reforçado para limpeza mais intensa.", specs: [["Tipo", "Industrial"], ["Alimentação", "Elétrica"], ["Indicação", "Uso profissional"]] }
];

const grid = document.querySelector("#equipment-grid");
const searchInput = document.querySelector("#search-input");
const categoryTabs = document.querySelector("#category-tabs");
const sortSelect = document.querySelector("#sort-select");
let activeCategory = "Todos";

function money(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function photoUrl(id, width = 720) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

function renderCategories() {
  categoryTabs.innerHTML = categories.map((category) => `<button class="category-tab${category === activeCategory ? " active" : ""}" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">${category}</button>`).join("");
  categoryTabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderCategories();
    renderEquipment();
  }));
}

function renderEquipment() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const matches = equipment.filter((item) => {
    const matchesCategory = activeCategory === "Todos" || item.category === activeCategory;
    const matchesSearch = `${item.name} ${item.category} ${item.code}`.toLocaleLowerCase("pt-BR").includes(term);
    return matchesCategory && matchesSearch;
  });
  const sort = sortSelect.value;
  if (sort === "price-asc") matches.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") matches.sort((a, b) => b.price - a.price);
  if (sort === "name") matches.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  document.querySelector("#result-count").textContent = `${matches.length} ${matches.length === 1 ? "equipamento" : "equipamentos"}`;
  document.querySelector("#empty-state").hidden = matches.length > 0;
  grid.hidden = matches.length === 0;
  grid.innerHTML = matches.map((item, index) => `<article class="equipment-card" style="--card-index:${index}">
    <button class="card-image" type="button" data-code="${item.code}" aria-label="Ver detalhes de ${item.name}" style="background-image:url('${photoUrl(item.image)}')"><span class="stock-badge"><i></i>${item.stock > 0 ? "Disponível para consulta" : "Consulte disponibilidade"}</span><span class="card-code">${item.code}</span></button>
    <div class="card-body"><p class="card-category">${item.category}</p><h3>${item.name}</h3><p class="card-description">${item.description}</p><div class="card-bottom"><p class="card-price"><strong>${money(item.price)}</strong><span>/ diária estimada</span></p><button class="card-open" type="button" data-code="${item.code}" aria-label="Ver detalhes de ${item.name}">↗</button></div></div>
  </article>`).join("");
  grid.querySelectorAll("[data-code]").forEach((button) => button.addEventListener("click", () => openEquipment(button.dataset.code)));
}

function whatsappUrl(message = "Olá! Gostaria de informações sobre locação de equipamentos.") {
  const number = (window.SITE_CONFIG.whatsapp || "").replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function sendToWhatsApp(message) {
  if (!(window.SITE_CONFIG.whatsapp || "").replace(/\D/g, "")) {
    window.alert("O WhatsApp da empresa ainda não foi configurado. Consulte site/config.js antes de publicar.");
    return;
  }
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

function openEquipment(code) {
  const item = equipment.find((entry) => entry.code === code);
  if (!item) return;
  const dialog = document.querySelector("#equipment-dialog");
  const content = document.querySelector("#dialog-content");
  content.innerHTML = `<div class="dialog-photo" style="background-image:url('${photoUrl(item.image, 1000)}')"><span class="stock-badge"><i></i>Disponibilidade sob consulta</span></div>
    <div class="dialog-info"><p class="card-category">${item.category} <span>· ${item.code}</span></p><h2 id="dialog-title">${item.name}</h2><p>${item.description}</p>
    <div class="spec-grid">${item.specs.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
    <form class="quote-form" id="quote-form"><h3>Peça sua estimativa</h3><div class="form-row"><label>Retirada<input name="start" type="date" required /></label><label>Devolução<input name="end" type="date" required /></label></div><div class="form-row"><label>Quantidade<input name="quantity" type="number" value="1" min="1" max="${item.stock}" required /></label><label>Seu nome<input name="name" type="text" placeholder="Nome" required /></label></div><p class="estimate" id="estimate">Selecione as datas para estimar o valor.</p><button class="button button-dark" type="submit">Continuar pelo WhatsApp <span aria-hidden="true">↗</span></button><small class="form-disclaimer">Estimativa demonstrativa. Valor, disponibilidade e condições são confirmados pela equipe.</small></form></div>`;
  dialog.showModal();
  const form = content.querySelector("#quote-form");
  const start = form.elements.start;
  const end = form.elements.end;
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  start.min = minDate;
  end.min = minDate;
  const updateEstimate = () => {
    const startDate = new Date(`${start.value}T12:00:00`);
    const endDate = new Date(`${end.value}T12:00:00`);
    const days = Math.ceil((endDate - startDate) / 86400000);
    content.querySelector("#estimate").textContent = days > 0 ? `Estimativa de ${days} ${days === 1 ? "diária" : "diárias"}: ${money(days * item.price * Number(form.elements.quantity.value || 1))}` : "Selecione as datas para estimar o valor.";
  };
  start.addEventListener("change", () => { end.min = start.value || minDate; updateEstimate(); });
  end.addEventListener("change", updateEstimate);
  form.elements.quantity.addEventListener("input", updateEstimate);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (new Date(`${end.value}T12:00:00`) <= new Date(`${start.value}T12:00:00`)) {
      end.setCustomValidity("A devolução deve ser depois da retirada.");
      end.reportValidity();
      return;
    }
    end.setCustomValidity("");
    const days = Math.ceil((new Date(`${end.value}T12:00:00`) - new Date(`${start.value}T12:00:00`)) / 86400000);
    const quantity = Number(form.elements.quantity.value);
    const message = `Olá! Gostaria de consultar uma locação.\n\nEquipamento: ${item.name} (${item.code})\nRetirada: ${start.value}\nDevolução: ${end.value}\nQuantidade: ${quantity}\nNome: ${form.elements.name.value}\nEstimativa: ${money(days * item.price * quantity)}\n\nPodem confirmar disponibilidade e condições?`;
    sendToWhatsApp(message);
  });
}

document.querySelector(".dialog-close").addEventListener("click", () => document.querySelector("#equipment-dialog").close());
document.querySelector("#equipment-dialog").addEventListener("click", (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });
document.querySelector("#clear-filters").addEventListener("click", () => { searchInput.value = ""; activeCategory = "Todos"; renderCategories(); renderEquipment(); });
searchInput.addEventListener("input", renderEquipment);
sortSelect.addEventListener("change", renderEquipment);
document.querySelectorAll(".whatsapp-link").forEach((link) => link.addEventListener("click", (event) => {
  if (link.getAttribute("href") !== "#") return;
  event.preventDefault();
  sendToWhatsApp();
}));
const menuToggle = document.querySelector("#menu-toggle");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  document.querySelector("#main-nav").classList.toggle("open", !isOpen);
});
document.querySelectorAll("#main-nav a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  document.querySelector("#main-nav").classList.remove("open");
}));

const config = window.SITE_CONFIG;
document.querySelector("#footer-contact").textContent = `${config.phoneDisplay} · ${config.serviceArea} · ${config.email}`;
document.querySelector("#year").textContent = new Date().getFullYear();
renderCategories();
renderEquipment();