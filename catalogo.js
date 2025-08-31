/* =========================================================
   Carrito + Catálogo DINÁMICO (SIN precios)
   ---------------------------------------------------------
   - Los productos se definen aquí (array PRODUCTS).
   - Se renderizan automáticamente en #productsGrid.
   - Filtros, ordenar, shuffle y carrito con WhatsApp.
========================================================= */

/* ===== 0) NÚMERO DE WHATSAPP (SOLO DÍGITOS) ===== */
const WHATSAPP_NUMBER = "50431804540"; // <-- CAMBIA a tu número real

/* ===== 1) CATÁLOGO: productos desde JS =====
   id:       identificador único
   name:     nombre del producto
   cat:      categoría (cabello | uñas | maquillaje)
   img:      ruta a la imagen del producto
   featured: booleano para “Destacados”
   trend:    número (0..1) para ordenar por “Tendencia”
   desc:     descripción corta
*/
const PRODUCTS = [
  
{ id: 1, name: "Rubber Monarca",   cat: "uñas",    img: "rubermonarca.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 2, name: "Rubber Monarca",  cat: "uñas",    img: "rubermonarca1.jpeg", featured: false, trend: 0.60, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 3, name: "Rubber Monarca", cat: "uñas",    img: "rubermonarca2.jpeg", featured: true,  trend: 0.95, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 4, name: "Rubber Monarca",    cat: "uñas",       img: "rubermonarca3.jpeg",    featured: false, trend: 0.73, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 5, name: "Radiant Collection",   cat: "uñas",    img: "radiant.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 6, name: "Polvo WHITE CE",  cat: "uñas",    img: "white.jpeg", featured: false, trend: 0.60, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 7, name: "Polvo MAKEUP BRIDE White CE", cat: "uñas",    img: "makeup.jpeg", featured: true,  trend: 0.95, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 8, name: "Polvo ELEMENT tales #3",    cat: "uñas",       img: "element.jpeg",    featured: false, trend: 0.73, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 9, name: "Polvo Cristal",   cat: "uñas",    img: "cristal.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 10, name: "Pincel PRO",  cat: "uñas",    img: "pincel.jpeg", featured: false, trend: 0.60, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 11, name: "Pegamento Uñas", cat: "uñas",    img: "pegamento.jpeg", featured: true,  trend: 0.95, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 12, name: "Naturaleza Muerta",    cat: "uñas",       img: "naturaleza.jpeg",    featured: false, trend: 0.73, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 13, name: "Monomero MC Nails",   cat: "uñas",    img: "monomero.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 14, name: "Monomero MC Nails",   cat: "uñas",    img: "monomero1.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 15, name: "Monomero MC Nails",   cat: "uñas",    img: "monomero3.jpeg", featured: true,  trend: 0.42, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 16, name: "Monomero MC Nails",   cat: "uñas",    img: "monomero4.jpeg", featured: true,  trend: 0.92, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 17, name: "MC BLISS",   cat: "uñas",    img: "mcbliss.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 18, name: "MC BLAZE",   cat: "uñas",    img: "blaze.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 19, name: "Lima SWEET",   cat: "uñas",    img: "sweet.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 20, name: "Lima MC",   cat: "uñas",    img: "mc.jpeg", featured: true,  trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 21, name: "Lima MC",   cat: "uñas",    img: "mc1.jpeg", featured: true,  trend: 0.42, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 22, name: "Lima MC",   cat: "uñas",    img: "mc2.jpeg", featured: true,  trend: 0.92, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 23, name: "Lima ESPONGE",   cat: "uñas",    img: "esponge.jpeg", featured: true,  trend: 0.92, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 24, name: "Gel Verde",   cat: "uñas",    img: "gelverde.jpeg", featured: true,  trend: 0.42, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 25, name: "Gel UV Builder MC",   cat: "uñas",    img: "builder.jpeg", featured: true,  trend: 0.62, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 26, name: "Gel Negro LIVELY",   cat: "uñas",    img: "gelnegro.jpeg", featured: true,  trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 27, name: "Gel GLITTER",   cat: "uñas",    img: "gelgliter.jpeg", featured: true,  trend: 0.42, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 28, name: "Gel Fonny Bonny",   cat: "uñas",    img: "gelfonny.jpeg", featured: true,  trend: 0.62, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 29, name: "Gel Blanco",   cat: "uñas",    img: "gelblanco.jpeg", featured: true,  trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 30, name: "Gel Base Me",   cat: "uñas",    img: "base.jpeg", featured: true,  trend: 0.42, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 31, name: "Forever Shine",   cat: "uñas",    img: "ferever.jpeg", featured: true,  trend: 0.62, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 32, name: "Empujador de Cuticula",   cat: "uñas",    img: "empujador.jpeg", featured: true,  trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 49, name: "Gel UV Builder",   cat: "uñas",    img: "builder.jpeg", featured: true,  trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 51, name: "Cuare Bond",   cat: "uñas",    img: "cuare.jpeg", featured: true,  trend: 0.78, desc:"Para mas informacion del producto ve a nuestro whatsapp" },
{ id: 74, name: "Lampara para uñas-Rosada",   cat: "uñas", img: "lamparaparauñas.jpeg",  featured: false, trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 75, name: "Lampara para uñas-Morada",   cat: "uñas", img: "lampara2.jpeg",  featured: false, trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 76, name: "Lampara para uñas",   cat: "uñas", img: "lampara1.jpeg",  featured: false, trend: 0.45, desc:"Para mas informacion del producto ve a nuestro whatsapp." },


 { id: 33, name: "Brochas",   cat: "maquillaje", img: "brochas.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 34, name: "Gel Fijador de Cejas",   cat: "maquillaje", img: "fijador.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 35, name: "Paleta de Sombras Glitter",   cat: "maquillaje", img: "paletaa.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 36, name: "Pestañas Postizas",   cat: "maquillaje", img: "pestañas.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 37, name: "Tintas para Labios",   cat: "maquillaje", img: "tintas.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 38, name: "Primer HD",   cat: "maquillaje", img: "primer.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 48, name: "Contorno",   cat: "maquillaje", img: "contor.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 50, name: "Corrector en barra",   cat: "maquillaje", img: "corrector.jpeg",  featured: false, trend: 0.57, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 52, name: "Delineador Negro",   cat: "maquillaje", img: "delineadoor.jpeg",  featured: false, trend: 0.90, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 53, name: "Delineador Negro",   cat: "maquillaje", img: "delineador.jpeg",  featured: false, trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 54, name: "Jelly Tinta para labios",   cat: "maquillaje", img: "Jellytinta.jpeg",  featured: false, trend: 0.72, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 55, name: "Paleta de Maquillaje",   cat: "maquillaje", img: "paleta.jpeg",  featured: false, trend: 0.50, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 56, name: "Lip GLoss",   cat: "maquillaje", img: "lipgloss.jpeg",  featured: false, trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
 { id: 57, name: "Pestañas Postizas",   cat: "maquillaje", img: "pestañass.jpeg",  featured: false, trend: 0.62, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 58, name: "Primer HD",   cat: "maquillaje", img: "primerh.jpeg",  featured: false, trend: 0.62, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 67, name: "Delineador y Rimel",   cat: "maquillaje", img: "delineadoryrimel.jpeg",  featured: false, trend: 0.32, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 68, name: "Enchinador de Pestañas",   cat: "maquillaje", img: "enchinadordepestañas.jpeg",  featured: false, trend: 0.72, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 69, name: "Esponjas para maquillaje",   cat: "maquillaje", img: "esponjasparamaquillaje.jpeg",  featured: false, trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 70, name: "Jelly Tint Balm",   cat: "maquillaje", img: "jellytintbalm.jpeg",  featured: false, trend: 0.42, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 71, name: "Lip Gloss",   cat: "maquillaje", img: "lipglossss.jpeg",  featured: false, trend: 0.22, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 72, name: "Lip Tint Rimocoo",   cat: "maquillaje", img: "liptintrimocoo.jpeg",  featured: false, trend: 0.92, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 73, name: "Paleta Maquillaje",   cat: "maquillaje", img: "paletamaquillaje.jpeg",  featured: false, trend: 0.52, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
{ id: 79, name: "Mascara Crystal Protein Gel",   cat: "maquillaje", img: "mascaracrystalproteingel.jpeg",  featured: false, trend: 0.82, desc:"Para mas informacion del producto ve a nuestro whatsapp." },




  { id: 39, name: "Shampoo Curly", cat: "cabello",       img: "shampoocurly.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 40, name: "Acondicionador Curly", cat: "cabello",       img: "acondicionadorcurly.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 41, name: "Crema Leave-In", cat: "cabello",       img: "cremaleavein.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 42, name: "Shampoo Frizz Zero", cat: "cabello",       img: "shampoofrizz.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 43, name: "Acondicionador Frizz Zero", cat: "cabello",       img: "acondicionadorfrizzzero.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 44, name: "Mascara Liquida Frizz Zero", cat: "cabello",       img: "mascaraliquidafrizz.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 45, name: "Aceite de Jojoba, Extracto de Jengibre y Aceite de Argan", cat: "cabello",       img: "aceitesalon.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 46, name: "Crema Salon-In", cat: "cabello",       img: "cremasalonin.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 47, name: "Shampoo Equilibrium", cat: "cabello",       img: "shampooequilibrium.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 59, name: "Keratin Vegan Salon IN", cat: "cabello",       img: "keratinvegansalonin.jpeg",    featured: false, trend: 0.71, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 60, name: "Potenciador de rizos crema leave-IN", cat: "cabello",       img: "potenciadorderizo.jpeg",    featured: false, trend: 0.41, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 61, name: "Shampoo de Hidratacion TRUSS", cat: "cabello",       img: "shampoodehidratacionprofundatruss.jpeg",    featured: false, trend: 0.71, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 62, name: "Shampoo y Acondicionador TRUSS", cat: "cabello",       img: "shampoootruss.jpeg",    featured: false, trend: 0.91, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 63, name: "Shampoo TRUSS", cat: "cabello",       img: "shampootruss.jpeg",    featured: false, trend: 0.51, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 64, name: "Shampoo y Acondicionador Salon-IN", cat: "cabello",       img: "shampooyacondicionadorsalonin.jpeg",    featured: false, trend: 0.71, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 65, name: "Shampoo y Acondicionador Salon-IN", cat: "cabello",       img: "shampooyacondicionadorsalonin1.jpeg",    featured: false, trend: 0.51, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 66, name: "Tratamientos Salon-IN", cat: "cabello",       img: "Tratamientosalonin.jpeg",    featured: false, trend: 0.21, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 77, name: "Super Fix For Hair", cat: "cabello",       img: "superfixforhair.jpeg",    featured: false, trend: 0.21, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 78, name: "Hair Tonic Castor Oil", cat: "cabello",       img: "hairtoniccastoroil.jpeg",    featured: false, trend: 0.21, desc:"Para mas informacion del producto ve a nuestro whatsapp." },
  { id: 78, name: "Tintes para Cabello- Tonos", cat: "cabello",       img: "productos.jpeg",    featured: false, trend: 0.21, desc:"Para mas informacion del producto ve a nuestro whatsapp." },

];

/* ===== 2) UTILIDADES Y ESTADO ===== */
const $  = (s, r=document) => r.querySelector(s);         // querySelector corto
const $$ = (s, r=document) => [...r.querySelectorAll(s)]; // querySelectorAll corto

const CART_KEY = "cart";                                  // clave en localStorage
const ICON = { cabello: "fa-scissors", "uñas": "fa-hand-sparkles", maquillaje: "fa-brush" };

function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); } // Capitaliza texto
function loadCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(_){ return []; } }
function saveCart(v){ localStorage.setItem(CART_KEY, JSON.stringify(v)); }

let state = {                                             // estado UI
  filter: "all",                                          // filtro activo
  sort:   "featured",                                     // criterio de orden
  products: [...PRODUCTS],                                // copia del catálogo
};

/* ===== 3) RENDER DE PRODUCTOS (crea tarjetas desde JS) ===== */
function applyFilterAndSort(list){
  // 3.1 Filtra por categoría
  let out = list.filter(p => state.filter === "all" ? true : p.cat === state.filter);

  // 3.2 Ordena según criterio actual
  switch (state.sort) {
    case "name-asc":  out.sort((a,b) => a.name.localeCompare(b.name)); break;
    case "name-desc": out.sort((a,b) => b.name.localeCompare(a.name)); break;
    case "trend":     out.sort((a,b) => b.trend - a.trend);            break;
    case "featured":
    default:          out.sort((a,b) => Number(b.featured) - Number(a.featured));
  }
  return out;
}

function renderProducts(){
  // 3.3 Contenedor del grid
  const grid = $("#productsGrid");
  grid.innerHTML = "";                                    // Limpia el grid

  // 3.4 Aplica filtro/orden y crea cada tarjeta
  const data = applyFilterAndSort(state.products);

  data.forEach(p => {
    // Tarjeta
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-cat", p.cat);

    // Estructura interna de la tarjeta (sin precios)
    card.innerHTML = `
      <img class="product-thumb" src="${p.img}" alt="${p.name}">
      <div class="product-body">
        <span class="product-cat"><i class="fa-solid ${ICON[p.cat] || 'fa-tag'}"></i> ${cap(p.cat)}</span>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.featured ? "★ Destacado · " : ""}${p.desc || "Calidad profesional."}</p>
        <div class="product-footer">
          <div class="actions">
            <button class="btn-add" data-id="${p.id}">
              <i class="fa-solid fa-cart-plus"></i> Agregar
            </button>
            <button class="btn-buy" data-id="${p.id}">
              <i class="fa-brands fa-whatsapp"></i> Comprar
            </button>
          </div>
        </div>
      </div>
    `;

    // Agrega la tarjeta al grid
    grid.appendChild(card);
  });

  // 3.5 Conecta los nuevos botones a sus handlers
  $$(".btn-add", grid).forEach(b => b.addEventListener("click", () => addToCart(Number(b.dataset.id))));
  $$(".btn-buy", grid).forEach(b => b.addEventListener("click", () => buySingle(Number(b.dataset.id))));
}

/* ===== 4) CARRITO (SIN precios) ===== */
function updateBadge(){
  // Actualiza el número del badge en el header
  const qty = loadCart().reduce((s,i) => s + i.qty, 0);
  $("#cartCount").textContent = String(qty);
}

function addToCart(id){
  // Agrega 1 unidad del producto indicado
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;

  const cart = loadCart();
  const ex = cart.find(i => i.id === id);

  if(ex) ex.qty += 1;
  else   cart.push({ id: p.id, name: p.name, cat: cap(p.cat), img: p.img, qty: 1 });

  saveCart(cart);
  renderCart();
  updateBadge();
}

function removeFromCart(id){
  // Saca el producto del carrito
  const cart = loadCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
  updateBadge();
}

function changeQty(id, delta){
  // Sube/baja cantidad (mínimo 1)
  const cart = loadCart();
  const it = cart.find(i => i.id === id);
  if(!it) return;

  it.qty = Math.max(1, it.qty + delta);
  saveCart(cart);
  renderCart();
  updateBadge();
}

function renderCart(){
  // Dibuja el contenido del drawer de carrito
  const wrap = $("#cartItems");
  if(!wrap) return;

  const cart = loadCart();
  wrap.innerHTML = "";

  if(cart.length === 0){
    // Mensaje cuando no hay productos
    wrap.innerHTML = `
      <div style="color:#cfcfcf;text-align:center;padding:20px">
        <i class="fa-solid fa-bag-shopping"></i><br>
        Tu carrito está vacío.
      </div>`;
    return;
  }

  // Crea una fila por producto
  cart.forEach(it => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${it.img}" alt="${it.name}">
      <div>
        <h4>${it.name}</h4>
        <div class="small">${it.cat || ""}</div>
        <div class="qty">
          <button data-a="dec">−</button>
          <span>${it.qty}</span>
          <button data-a="inc">+</button>
        </div>
      </div>
      <div style="display:grid;gap:6px;justify-items:end">
        <button class="remove" data-a="rm" title="Eliminar">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    // Conecta acciones de cantidad y eliminar
    row.querySelector('[data-a="dec"]').onclick = () => changeQty(it.id, -1);
    row.querySelector('[data-a="inc"]').onclick = () => changeQty(it.id, +1);
    row.querySelector('[data-a="rm"]').onclick  = () => removeFromCart(it.id);

    // Agrega la fila al contenedor
    wrap.appendChild(row);
  });
}

/* ===== 5) WHATSAPP (sin precios) ===== */
function openWa(text){
  // Abre WhatsApp Web/APP con un mensaje
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function buySingle(id){
  // Arma mensaje por un solo producto
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;

  const msg = `Hola 👋, me interesa: ${p.name} (${cap(p.cat)}). ¿Disponibilidad?`;
  openWa(msg);
}

function buyCart(){
  // Arma mensaje con todo el carrito
  const cart = loadCart();
  if(cart.length === 0){
    alert("Tu carrito está vacío.");
    return;
  }

  const lines = ["Hola 👋, quiero comprar estos productos:\n"];
  cart.forEach(it => lines.push(`• ${it.name} x${it.qty}`));
  lines.push("\n¿Me confirmas disponibilidad y entrega/pago?");
  openWa(lines.join("\n"));
}

/* ===== 6) INTERFAZ (filtros/orden/shuffle & drawer) ===== */
function setFilter(cat){
  // Cambia filtro activo y re-renderiza
  state.filter = cat;
  $$(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === cat));
  renderProducts();
}

function setSort(val){
  // Cambia criterio de orden y re-renderiza
  state.sort = val;
  renderProducts();
}

function shuffleProducts(){
  // Baraja el array de productos y re-renderiza
  for(let i = state.products.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [state.products[i], state.products[j]] = [state.products[j], state.products[i]];
  }
  renderProducts();
}

function openCart(){
  // Abre el drawer y su overlay
  $("#cartDrawer").classList.add("open");
  $("#overlay").hidden = false;
  renderCart();
}

function closeCart(){
  // Cierra el drawer y su overlay
  $("#cartDrawer").classList.remove("open");
  $("#overlay").hidden = true;
}

/* ===== 7) INIT — Conecta todo al cargar la página ===== */
document.addEventListener("DOMContentLoaded", () => {
  // Render inicial (grid y carrito)
  renderProducts();
  renderCart();
  updateBadge();

  // Filtros por categoría
  $$(".filter-btn").forEach(b => b.addEventListener("click", () => setFilter(b.dataset.filter)));

  // Ordenamientos
  const sortSel = $("#sortSelect");
  if (sortSel) sortSel.addEventListener("change", e => setSort(e.target.value));

  // Shuffle
  const shuffleBtn = $("#shuffleBtn");
  if (shuffleBtn) shuffleBtn.addEventListener("click", shuffleProducts);

  // Drawer del carrito
  const openBtn  = $("#openCartBtn");
  const closeBtn = $("#closeCartBtn");
  const overlay  = $("#overlay");

  if (openBtn)  openBtn.addEventListener("click", openCart);
  if (closeBtn) closeBtn.addEventListener("click", closeCart);
  if (overlay)  overlay.addEventListener("click", closeCart);

  // Acciones del carrito
  const clearBtn    = $("#clearCartBtn");
  const checkoutBtn = $("#checkoutBtn");

  if (clearBtn)    clearBtn.onclick = () => { saveCart([]); renderCart(); updateBadge(); };
  if (checkoutBtn) checkoutBtn.onclick = buyCart;
});