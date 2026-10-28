/* ===== KONFIGURASI — UBAH DI SINI ===== */
const CONFIG = {
  WA: '6282257569855' // contoh: 628123456789 (tanpa + dan spasi)
};
/* Pilihan metode pembayaran (pelanggan mengisi nomor rekening/akun miliknya sendiri) */
const METHODS = { 'Bank Transfer': ['Mandiri','BCA','BNI'], 'E-Wallet': ['DANA','OVO','GoPay'] };
/* Data buku: edit/tambah di sini. cover kosong = sampul tipografi otomatis */
const BOOKS0 = [
 ['b1','Senja di Perpustakaan Tua','Laras Wirya','Novel',89000,8,4.6,'2026-09-20','Seorang penjaga arsip menemukan surat yang mengubah cara ia memandang kota kelahirannya.'],
 ['b2','Hikayat Malam Panjang','Sutan Pradipta','Sastra Klasik',75000,5,4.8,'2026-01-12','Kisah-kisah klasik Nusantara yang dituturkan ulang dengan bahasa yang hangat.'],
 ['b3','Kerajaan Abu dan Embun','Maya Kirana','Fantasi',112000,10,4.5,'2026-08-02','Dua kerajaan yang bermusuhan harus berbagi satu peta sebelum musim dingin terakhir tiba.'],
 ['b4','Kunci di Balik Rak Ketiga','Dimas Aryo','Misteri',95000,0,4.3,'2026-07-15','Sebuah toko buku, sebuah kunci hilang, dan lima orang yang menyimpan rahasia.'],
 ['b5','Kebiasaan Kecil, Hidup Besar','Ratri Anindya','Pengembangan Diri',82000,14,4.2,'2026-05-30','Panduan membangun rutinitas membaca, menulis, dan beristirahat dengan lebih sadar.'],
 ['b6','Logika di Balik Layar','Fajar Nugraha','Teknologi',129000,6,4.7,'2026-09-05','Pengantar pemrograman yang menjelaskan cara komputer berpikir tanpa jargon berlebihan.'],
 ['b7','Surat untuk Penyair Muda','Hana Prameswari','Sastra Klasik',68000,9,4.4,'2025-12-10','Kumpulan surat tentang menulis, kesepian, dan kesetiaan pada kata-kata.'],
 ['b8','Penjaga Peta Terakhir','Bima Saputra','Fantasi',105000,7,4.1,'2026-04-18','Seorang kartografer muda mewarisi peta yang menggambar dunia yang belum ada.'],
 ['b9','Hujan di Bulan Ketiga','Nadia Salsabila','Novel',79000,12,4.0,'2026-03-03','Tiga sahabat bertemu kembali setelah sepuluh tahun dan mengungkap janji lama.'],
 ['b10','Jejak di Lorong Arsip','Rendra Mahesa','Misteri',99000,4,4.6,'2026-10-01','Dokumen kuno membawa seorang arkeolog ke rangkaian teka-teki berbahaya.'],
 ['b11','Fokus di Era Notifikasi','Citra Maharani','Pengembangan Diri',87000,11,4.3,'2026-06-22','Cara menjaga perhatian di tengah dunia yang terus berdering.'],
 ['b12','Dasar Web untuk Pemula','Yoga Pratama','Teknologi',115000,13,4.5,'2026-09-28','HTML, CSS, dan JavaScript dijelaskan langkah demi langkah dengan proyek kecil.']
].map(a=>({id:a[0],title:a[1],author:a[2],category:a[3],price:a[4],stock:a[5],rating:a[6],added:a[7],synopsis:a[8],cover:'covers/'+a[0]+'.svg'}));
/* Ulasan CONTOH (demo:true, bukan ulasan pembeli sungguhan) */
const REVIEWS0 = [{'id': 'd1', 'bookId': 'b1', 'user': 'Aurelia_07', 'rating': 5, 'text': 'Suasananya hangat dan benar-benar terasa seperti di perpustakaan tua.', 'date': '2026-09-30', 'demo': true}, {'id': 'd2', 'bookId': 'b1', 'user': 'Bayu_k', 'rating': 4, 'text': 'Alurnya pelan tetapi memikat sampai halaman terakhir.', 'date': '2026-09-30', 'demo': true}, {'id': 'd3', 'bookId': 'b2', 'user': 'Citra.M', 'rating': 5, 'text': 'Bahasa klasiknya indah dan mudah dinikmati.', 'date': '2026-09-30', 'demo': true}, {'id': 'd4', 'bookId': 'b2', 'user': 'Dion_77', 'rating': 4, 'text': 'Cocok dibaca sebelum tidur.', 'date': '2026-09-30', 'demo': true}, {'id': 'd5', 'bookId': 'b3', 'user': 'Elan_r', 'rating': 5, 'text': 'Dunia fantasinya detail dan tokohnya hidup.', 'date': '2026-09-30', 'demo': true}, {'id': 'd6', 'bookId': 'b3', 'user': 'Fitri.n', 'rating': 4, 'text': 'Dua kerajaannya terasa nyata, endingnya memuaskan.', 'date': '2026-09-30', 'demo': true}, {'id': 'd7', 'bookId': 'b4', 'user': 'Gilang_a', 'rating': 4, 'text': 'Teka-tekinya cerdas, saya menebak salah sampai akhir.', 'date': '2026-09-30', 'demo': true}, {'id': 'd8', 'bookId': 'b4', 'user': 'Hana_p', 'rating': 5, 'text': 'Misteri toko buku yang menegangkan.', 'date': '2026-09-30', 'demo': true}, {'id': 'd9', 'bookId': 'b5', 'user': 'Indra_w', 'rating': 4, 'text': 'Praktis dan tidak menggurui.', 'date': '2026-09-30', 'demo': true}, {'id': 'd10', 'bookId': 'b5', 'user': 'Jasmine_x', 'rating': 5, 'text': 'Kebiasaan kecilnya mudah dicoba setiap hari.', 'date': '2026-09-30', 'demo': true}, {'id': 'd11', 'bookId': 'b6', 'user': 'Kirana_t', 'rating': 5, 'text': 'Penjelasan pemrogramannya runtut untuk pemula.', 'date': '2026-09-30', 'demo': true}, {'id': 'd12', 'bookId': 'b6', 'user': 'Lukman_z', 'rating': 4, 'text': 'Contohnya jelas dan bahasanya ringan.', 'date': '2026-09-30', 'demo': true}];
const STATUSES = ['Menunggu Konfirmasi','Dikonfirmasi','Pesanan Diproses','Selesai','Dibatalkan'];
/* ===== Utilitas ===== */
const $ = s => document.querySelector(s);
const rp = n => 'Rp' + Number(n).toLocaleString('id-ID');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (e) { return d; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
let books = load('vl_books', BOOKS0), reviews = load('vl_reviews', REVIEWS0), cart = [], orders = load('vl_orders', []);
let users = load('vl_users', [{username:'rakwan', password:'123123', role:'admin'}]);
let me = sessionStorage.getItem('vl_session'), authMode = 'login', cartCategory = 'Semua', proofFile = null, curOrder = null;
const cartKey = () => 'vl_cart_' + (me ? me.toLowerCase() : 'guest'); // keranjang terpisah per akun
const loadCart = () => { cart = load(cartKey(), []); if (!Array.isArray(cart)) cart = []; };
const saveCart = () => save(cartKey(), cart);
loadCart(); localStorage.removeItem('vl_session');
orders.forEach(o => { o.status = ({'Menunggu Pembayaran':'Menunggu Konfirmasi','Menunggu Verifikasi':'Menunggu Konfirmasi','Pembayaran Dikonfirmasi':'Dikonfirmasi'})[o.status] || o.status; });
if (!localStorage.getItem('vl_seed2')) { reviews.forEach(r => { if (r.id==='r1'||r.id==='r2') r.demo = true; }); REVIEWS0.forEach(r => { if (!reviews.some(x => x.id === r.id)) reviews.push(r); }); save('vl_reviews', reviews); localStorage.setItem('vl_seed2', '1'); }
books.forEach(b => { if (!b.cover) { const d = BOOKS0.find(x => x.id === b.id); if (d) b.cover = d.cover; } });
const rate = b => { const rs = reviews.filter(r => r.bookId === b.id && !r.demo); return rs.length ? Math.round(rs.reduce((s,r) => s + r.rating, 0) / rs.length * 10) / 10 : b.rating; };
const book = id => books.find(b => b.id === id);
const user = () => me && users.find(u => u.username === me);
let tt; function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),3000);}
function show(v){const adm=user()?.role==='admin';if(adm&&(v==='store'||v==='cart'))v='admin';document.querySelectorAll('.view').forEach(e=>e.hidden=e.id!=='v-'+v);$('#nav').classList.remove('open');scrollTo(0,0);if(v==='admin')renderAdmin();if(v==='orders')renderOrders();if(v==='cart')renderCartPage();}
const coverUrls = {};
const coverSrc = b => (b.cover || '').startsWith('idb:') ? (coverUrls[b.cover] || '') : (b.cover || '');
function coverEl(b){const s=coverSrc(b);return s?`<img class="cover" src="${esc(s)}" alt="Sampul ${esc(b.title)}" onerror="this.outerHTML='<div class=cover>${esc(b.title).replace(/'/g,'')}</div>'">`:`<div class="cover">${esc(b.title)}</div>`;}
/* Sampul unggahan admin disimpan di IndexedDB (hanya di browser ini); kunci 'idb:<id>' disimpan di data buku */
const idb = { db:null,
  open(){return new Promise((ok,no)=>{const r=indexedDB.open('vellichor',1);r.onupgradeneeded=()=>r.result.createObjectStore('covers');r.onsuccess=()=>{idb.db=r.result;ok();};r.onerror=no;});},
  put(k,v){return new Promise((ok,no)=>{const t=idb.db.transaction('covers','readwrite');t.objectStore('covers').put(v,k);t.oncomplete=ok;t.onerror=no;});},
  get(k){return new Promise((ok,no)=>{const q=idb.db.transaction('covers').objectStore('covers').get(k);q.onsuccess=()=>ok(q.result);q.onerror=no;});} };
let pendCover = null;
function clearCoverUI(){pendCover=null;$('#bprev').hidden=true;$('#bf').value='';}
const stars = n => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));
/* ===== Katalog ===== */
function card(b){return `<article class="card">${coverEl(b)}<h3>${esc(b.title)}</h3><span class="muted small">${esc(b.author)} · ${esc(b.category)}</span><span class="stars">${stars(rate(b))}</span><span class="price">${rp(b.price)}</span>${b.stock<=0?'<span class="out small">Stok habis</span>':''}<button class="btn" data-detail="${b.id}">Detail</button></article>`;}
function renderStore(){
  const q = $('#q').value.trim().toLowerCase(), cat = $('#cat').value || 'Semua';
  const cats = ['Semua', ...new Set(books.map(b => b.category))];
  $('#cat').innerHTML = cats.map(c => `<option ${c===cat?'selected':''}>${esc(c)}</option>`).join('');
  $('#cats').innerHTML = cats.slice(1).map(c => `<button class="chip" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  let list = books.filter(b => (cat==='Semua'||b.category===cat) && (b.title+' '+b.author).toLowerCase().includes(q));
  const s = $('#sort').value;
  list.sort((a,b) => s==='asc'?a.price-b.price : s==='desc'?b.price-a.price : b.added.localeCompare(a.added));
  $('#catalog').innerHTML = list.map(card).join(''); $('#empty').hidden = list.length > 0;
  $('#featured').innerHTML = [...books].sort((a,b)=>b.rating-a.rating).slice(0,4).map(card).join('');
  $('#newest').innerHTML = [...books].sort((a,b)=>b.added.localeCompare(a.added)).slice(0,4).map(card).join('');
  renderHomeReviews(); $('#cartCount').textContent = cart.reduce((s,i)=>s+i.qty,0);
  const adm = user()?.role === 'admin';
  $('#q').hidden = $('#cartBtn').hidden = adm;
  $('#nav').innerHTML = adm ? '<a href="#" data-go="admin">Admin</a><a href="#" data-go="orders">Daftar Pesanan</a>' : '<a href="#" data-go="store">Home</a><a href="#kategori" data-go="store">Kategori</a><a href="#terbaru" data-go="store">Terbaru</a><a href="#tentang" data-go="store">Tentang</a>';
  $('#accBtn').textContent = me ? me + ' (Keluar)' : 'Masuk';
}
let homePick = [];
function renderHomeReviews(){
  const ok = reviews.filter(r => book(r.bookId) && r.text);
  homePick = homePick.filter(id => ok.some(r => r.id === id));
  if (homePick.length < Math.min(3, ok.length)) { const sh = a => [...a].sort(() => Math.random() - .5); homePick = [...sh(ok.filter(r => !r.demo)), ...sh(ok.filter(r => r.demo))].slice(0, 3).map(r => r.id); }
  $('#homeRev').innerHTML = homePick.map(id => ok.find(r => r.id === id)).map(r => `<figure class="rv"><b>${esc(r.user)}</b>${r.demo?' <span class="tag">Contoh</span>':''}<div class="stars">${stars(r.rating)}</div><i>${esc(book(r.bookId).title)}</i><blockquote>“${esc(r.text)}”</blockquote></figure>`).join('') || '<p class="muted">Belum ada ulasan.</p>';
}
/* ===== Detail & ulasan ===== */
function openDetail(id){
  const b = book(id); if (!b) return;
  const rv = reviews.filter(r => r.bookId === id);
  $('#mBody').innerHTML = `<div class="det"><div>${coverEl(b)}</div><div><h2>${esc(b.title)}</h2><p class="muted">${esc(b.author)} · ${esc(b.category)}</p><p class="stars">${stars(rate(b))} (${rate(b)})</p><p>${esc(b.synopsis)}</p><p class="price">${rp(b.price)}</p><p>${b.stock>0?'Stok: '+b.stock:'<span class="out">Stok habis</span>'}</p>
  <button class="btn" data-add="${id}" ${b.stock<=0?'disabled':''}>Tambah ke keranjang</button> <button class="btn ghost" data-buy="${id}" ${b.stock<=0?'disabled':''}>Bayar</button></div></div>
  <h3>Ulasan</h3>${rv.map(r=>`<div class="rev"><b>${esc(r.user)}</b> <span class="stars">${stars(r.rating)}</span> <span class="muted small">${esc(r.date)}</span><p>${esc(r.text)}</p></div>`).join('')||'<p class="muted">Belum ada ulasan.</p>'}
  <p class="muted small">Ulasan dapat ditulis dari halaman Keranjang setelah pesanan dikonfirmasi admin.</p>`;
  $('#modal').hidden = false;
}
/* ===== Keranjang ===== */
function addCart(id){
  if (!me) { $('#modal').hidden = true; setAuth('login'); show('login'); return toast('Silakan login terlebih dahulu untuk membeli buku.'); }
  const b = book(id), it = cart.find(i => i.id === id);
  if (!b || b.stock <= 0) return toast('Stok habis.');
  if ((it ? it.qty : 0) + 1 > b.stock) return toast('Jumlah melebihi stok tersedia.');
  it ? it.qty++ : cart.push({id, qty:1, sel:true}); saveCart(); renderStore(); toast('Ditambahkan ke keranjang.'); return true;
}
const selItems = () => cart.filter(i => i.sel !== false);
const cartTotal = () => selItems().reduce((s,i) => s + (book(i.id)?.price || 0) * i.qty, 0);
let pmSel = '', accTxt = '', noteTxt = '';
const DIG = { BCA:[10,10], Mandiri:[13,13], BNI:[10,10] };
const digRange = m => DIG[m] || [11,13];
const digHint = m => { const [a,b] = digRange(m); return a===b ? a + ' digit' : a + '–' + b + ' digit'; };
const REVIEWABLE = ['Dikonfirmasi','Pesanan Diproses','Selesai'];
const isBank = () => METHODS['Bank Transfer'].includes(pmSel);
const pmUI = () => `<label>Metode pembayaran<select id="pm"><option value="">Pilih metode…</option>${Object.entries(METHODS).map(([g,l]) => `<optgroup label="${g}">${l.map(m => `<option ${m===pmSel?'selected':''}>${m}</option>`).join('')}</optgroup>`).join('')}</select></label>${pmSel ? `<label>${isBank()?'Nomor rekening':'Nomor akun'} ${esc(pmSel)} Anda (${digHint(pmSel)})<input id="acc" inputmode="numeric" maxlength="${digRange(pmSel)[1]}" value="${esc(accTxt)}"></label>` : ''}<label>Catatan tambahan (opsional)<textarea id="note" maxlength="200">${esc(noteTxt)}</textarea></label>`;
const stCls = st => st === 'Dibatalkan' ? 'bad' : REVIEWABLE.includes(st) ? 'ok' : 'wait';
function revRow(o, i){
  const r = reviews.find(x => x.orderId === o.code && x.bookId === i.id); let ex = '';
  if (REVIEWABLE.includes(o.status)) ex = r ? `<div class="stars">${stars(r.rating)}</div>${r.text?`<p>${esc(r.text)}</p>`:''}` : `<div class="revbox"><select aria-label="Rating"><option value="0">Beri rating…</option>${[5,4,3,2,1].map(n => `<option value="${n}">${'★'.repeat(n)}</option>`).join('')}</select><textarea maxlength="300" placeholder="Ulasan (opsional)"></textarea><button class="btn ghost" data-rev="${o.code}|${i.id}">Kirim ulasan</button></div>`;
  else if (o.status !== 'Dibatalkan') ex = '<span class="muted small">Ulasan bisa ditulis setelah pesanan dikonfirmasi.</span>';
  return `<div class="oi"><div>${esc(i.title)} × ${i.qty}</div>${ex}</div>`;
}
function renderCartPage(){
  cart = cart.filter(i => book(i.id));
  const items = !cart.length ? '<p class="muted">Keranjang masih kosong. Pilih buku dari Home.</p>' :
    cart.map(i => {const b = book(i.id); return `<div class="row"><input type="checkbox" data-sel="${i.id}" ${i.sel!==false?'checked':''} aria-label="Pilih ${esc(b.title)}"><span class="thumb">${coverEl(b)}</span><div style="flex:1"><b>${esc(b.title)}</b><br><span class="muted small">${rp(b.price)} × ${i.qty} = ${rp(b.price*i.qty)}</span><div class="qty"><button data-q="${i.id}" data-d="-1">−</button> ${i.qty} <button data-q="${i.id}" data-d="1">+</button> <button data-rm="${i.id}" aria-label="Hapus">🗑</button></div></div></div>`;}).join('');
  const form = cart.length ? `<div class="panel2"><h3>Ringkasan</h3><p class="muted small">Centang buku yang ingin dibeli sekarang.</p><p>${selItems().length} buku dipilih</p><h3 class="price">${rp(cartTotal())}</h3>${pmUI()}<button class="btn" id="checkout">Pesan via WhatsApp</button></div>` : '';
  const my = orders.filter(o => o.user === me).slice().reverse();
  const ords = my.length ? my.map(o => `<article class="ord"><div class="row"><b>${esc(o.code)}</b><span class="st ${stCls(o.status)}">${esc(o.status)}</span></div><div class="muted small">${esc(o.date)} · ${esc(o.method||'-')} · ${rp(o.total)}</div>${o.items.map(i => revRow(o, i)).join('')}</article>`).join('') : '<p class="muted">Belum ada pesanan.</p>';
  $('#cartPage').innerHTML = `<h2>Keranjang</h2><div class="cartgrid"><div>${items}</div>${form}</div><h2>Pesanan Saya</h2>${ords}`;
}
function checkout(){
  if (!me) { setAuth('login'); show('login'); return toast('Silakan login terlebih dahulu untuk membeli buku.'); }
  const sel = selItems();
  if (!sel.length) return toast('Pilih minimal satu buku untuk dipesan.');
  if (!pmSel) return toast('Pilih metode pembayaran terlebih dahulu.');
  const acc = accTxt.replace(/[\s-]/g, ''), [mn, mx] = digRange(pmSel);
  if (!/^\d+$/.test(acc) || acc.length < mn || acc.length > mx) return toast('Nomor ' + pmSel + ' harus ' + digHint(pmSel) + ' (hanya angka).');
  for (const i of sel) if (i.qty > book(i.id).stock) return toast('Stok ' + book(i.id).title + ' tidak cukup.');
  if (!waReady()) return toast('Layanan WhatsApp belum tersedia saat ini.');
  const o = {code:'VLC-'+Date.now().toString(36).toUpperCase(), user:me, method:pmSel, account:acc, note:noteTxt.trim(), status:'Menunggu Konfirmasi', date:new Date().toLocaleString('id-ID'), stockCut:false,
    items:sel.map(i => ({id:i.id, title:book(i.id).title, price:book(i.id).price, qty:i.qty})), total:cartTotal()};
  orders.push(o); save('vl_orders', orders);
  cart = cart.filter(i => i.sel === false); saveCart(); pmSel = accTxt = noteTxt = '';
  window.open(waLink(waMsg(o)), '_blank');
  renderStore(); show('cart'); toast('Pesanan dibuat dan menunggu konfirmasi admin.');
}
/* ===== WhatsApp ===== */
function waLink(text){return 'https://wa.me/' + CONFIG.WA.replace(/\D/g,'') + '?text=' + encodeURIComponent(text);}
const waReady = () => !CONFIG.WA.startsWith('GANTI') && /^\d{8,}$/.test(CONFIG.WA.replace(/\D/g,''));
function waMsg(o){
  return `Hallo Vellichor, saya ${o.user} ingin memesan buku.\nNomor pesanan: ${o.code}\nDaftar buku:\n\n` +
  o.items.map((i,n) => `${n+1}. ${i.title} x${i.qty}`).join('\n') +
  `\n\nHarga Total: ${rp(o.total)}\nMetode pembayaran: ${o.method||'-'}\nNomor rekening/akun: ${o.account||'-'}\nCatatan tambahan:\n${o.note||'-'}\n\nMohon konfirmasi pesanan dan pembayaran saya.\nTerima kasih.`;
}
const summary = waMsg;
function setStatus(code, st){
  const o = orders.find(x => x.code === code); if (!o) return; o.status = st;
  if (st === 'Dibatalkan') { reviews = reviews.filter(r => r.orderId !== code); save('vl_reviews', reviews); }
  const cut = st !== 'Menunggu Konfirmasi' && st !== 'Dibatalkan';
  if (cut && !o.stockCut) { o.items.forEach(i => { const b = book(i.id); if (b) b.stock = Math.max(0, b.stock - i.qty); }); o.stockCut = true; }
  else if (!cut && o.stockCut) { o.items.forEach(i => { const b = book(i.id); if (b) b.stock += i.qty; }); o.stockCut = false; }
  save('vl_books', books); save('vl_orders', orders); toast('Status pesanan: ' + st); renderAdmin(); renderOrders(); renderStore();
}
/* ===== Login ===== */
function setAuth(mode){authMode=mode;$('#authTitle').textContent=mode==='login'?'Masuk':'Daftar Akun';$('#authSubmit').textContent=mode==='login'?'Masuk':'Daftar';$('#authSwitch').textContent=mode==='login'?'Daftar akun':'Sudah punya akun';$('#p2w').hidden=mode==='login';$('#authErr').textContent='';}
$('#authForm').addEventListener('submit', e => {
  e.preventDefault(); const u = $('#u').value.trim(), p = $('#p').value, err = $('#authErr');
  if (!u || !p) return err.textContent = 'Username dan password wajib diisi.';
  if (authMode === 'login') {
    const f = users.find(x => x.username.toLowerCase() === u.toLowerCase() && x.password === p);
    if (!f) return err.textContent = 'Username atau password salah.';
    me = f.username; sessionStorage.setItem('vl_session', me); loadCart(); toast('Selamat datang, ' + me + '.'); renderStore(); show(f.role==='admin'?'admin':'store');
  } else {
    if (p !== $('#p2').value) return err.textContent = 'Konfirmasi password tidak sama.';
    if (users.some(x => x.username.toLowerCase() === u.toLowerCase())) return err.textContent = 'Username sudah digunakan. Pilih username lain.';
    users.push({username:u, password:p, role:'customer'}); save('vl_users', users);
    me = u; sessionStorage.setItem('vl_session', me); loadCart(); toast('Pendaftaran berhasil.'); renderStore(); show('store');
  }
  $('#authForm').reset();
});
/* ===== Admin ===== */
function renderAdmin(){
  if (!user() || user().role !== 'admin') { show('store'); return toast('Akses ditolak: hanya admin.'); }
  $('#stats').innerHTML = [['Buku',books.length],['Total stok',books.reduce((s,b)=>s+b.stock,0)],['Pesanan',orders.length],['Menunggu konfirmasi',orders.filter(o=>o.status==='Menunggu Konfirmasi').length]].map(a=>`<div><b>${a[1]}</b>${a[0]}</div>`).join('');
  $('#bookTbl').innerHTML = '<tr><th>Judul</th><th>Harga</th><th>Stok</th><th></th></tr>' + books.map(b=>`<tr><td>${esc(b.title)}</td><td>${rp(b.price)}</td><td>${b.stock}</td><td><button class="btn ghost" data-edit="${b.id}">Edit</button> <button class="btn danger" data-del="${b.id}">Hapus</button></td></tr>`).join('');
    $('#revTbl').innerHTML = '<tr><th>Buku</th><th>Pengulas</th><th>Ulasan</th><th></th></tr>' + (reviews.map(r=>`<tr><td>${esc(book(r.bookId)?.title||r.bookId)}</td><td>${esc(r.user)}</td><td>${r.rating}★ ${esc(r.text)}</td><td><button class="btn danger" data-rdel="${r.id}">Hapus</button></td></tr>`).join('')||'<tr><td colspan="4" class="muted">Belum ada ulasan.</td></tr>');
}
function renderOrders(){
  if (user()?.role !== 'admin') { show('store'); return toast('Akses ditolak: hanya admin.'); }
  $('#orderTbl').innerHTML = '<tr><th>Kode</th><th>Pelanggan</th><th>Pesanan</th><th>Total</th><th>Status</th><th></th></tr>' + (orders.slice().reverse().map(o=>`<tr><td>${esc(o.code)}<br><span class="muted small">${esc(o.date)}</span></td><td>${esc(o.user)}</td><td>${o.items.map(i=>esc(i.title)+' ×'+i.qty).join('<br>')}<div class="muted small">${esc(o.method||'-')} · ${esc(o.account||'-')}</div>${o.note?'<div class="small">Catatan: '+esc(o.note)+'</div>':''}</td><td>${rp(o.total)}</td><td><select data-st="${o.code}">${STATUSES.map(s=>`<option ${s===o.status?'selected':''}>${s}</option>`).join('')}</select></td><td><button class="btn" data-conf="${o.code}">Konfirmasi</button> <button class="btn ghost" data-cancel="${o.code}">Batalkan</button> <button class="btn danger" data-odel="${o.code}">Hapus</button></td></tr>`).join('')||'<tr><td colspan="6" class="muted">Belum ada pesanan.</td></tr>');
}
$('#bookForm').addEventListener('submit', async e => {
  e.preventDefault(); const t = $('#bt').value.trim(), p = +$('#bp').value, s = +$('#bs').value;
  if (!t || !$('#ba').value.trim() || !$('#bc').value.trim() || $('#bp').value === '' || $('#bs').value === '' || p < 0 || s < 0) return toast('Lengkapi judul, penulis, kategori, harga, dan stok.');
  const id = $('#bid').value, old = id && book(id), nid = id || 'b' + Date.now();
  let cv = $('#bu').value.trim() || (old ? old.cover : '');
  if (pendCover) { try { await idb.put('idb:' + nid, pendCover); coverUrls['idb:' + nid] = URL.createObjectURL(pendCover); cv = 'idb:' + nid; } catch (x) { return toast('Gagal menyimpan gambar di browser ini.'); } }
  const d = {title:t, author:$('#ba').value.trim(), category:$('#bc').value.trim(), price:p, stock:s, cover:cv, synopsis:$('#bsy').value.trim()};
  if (old) Object.assign(old, d); else books.push({id:nid, rating:4, added:new Date().toISOString().slice(0,10), ...d});
  save('vl_books', books); $('#bookForm').reset(); $('#bid').value = ''; clearCoverUI(); toast('Buku disimpan.'); renderAdmin(); renderStore();
});
$('#bReset').onclick = () => { $('#bookForm').reset(); $('#bid').value = ''; clearCoverUI(); };
$('#bprev').onerror = () => { toast('Gambar gagal dibaca.'); clearCoverUI(); };
document.addEventListener('change', e => {
  if (e.target.dataset.st) setStatus(e.target.dataset.st, e.target.value);
  if (e.target.id === 'pm') { pmSel = e.target.value; renderCartPage(); }
  if (e.target.dataset.sel) { const it = cart.find(x => x.id === e.target.dataset.sel); if (it) { it.sel = e.target.checked; saveCart(); renderCartPage(); } }
  if (e.target.id === 'bf') { const f = e.target.files[0]; if (!f) return clearCoverUI();
    if (!/^image\/(png|jpeg)$/.test(f.type)) { clearCoverUI(); return toast('Sampul harus berformat PNG atau JPG.'); }
    if (f.size > 2*1024*1024) { clearCoverUI(); return toast('Ukuran gambar maksimal 2 MB.'); }
    pendCover = f; $('#bprev').src = URL.createObjectURL(f); $('#bprev').hidden = false; }
  if (e.target.id === 'cat' || e.target.id === 'sort') renderStore();
});
/* ===== Klik global ===== */
document.addEventListener('click', e => {
  const t = e.target.closest('button,a'); if (!t) return; const d = t.dataset;
  if (d.go) { if (t.tagName === 'A' && t.getAttribute('href') === '#') e.preventDefault(); show(d.go); }
  if (d.detail) openDetail(d.detail);
  if (d.add) addCart(d.add);
  if (d.buy && addCart(d.buy)) { $('#modal').hidden = true; show('cart'); }
  if (d.rev) { const box = t.closest('.revbox'), [code, bid] = d.rev.split('|'), o = orders.find(x => x.code === code && x.user === me);
    if (!o || !REVIEWABLE.includes(o.status)) return toast('Ulasan hanya bisa diberikan setelah pesanan dikonfirmasi admin.');
    if (reviews.some(r => r.orderId === code && r.bookId === bid)) return toast('Anda sudah memberi ulasan untuk buku ini.');
    const rt = +box.querySelector('select').value, tx = box.querySelector('textarea').value.trim();
    if (!rt) return toast(tx ? 'Pilih rating bintang untuk menyertai ulasan.' : 'Pilih rating bintang terlebih dahulu.');
    reviews.push({id:'r'+Date.now(), bookId:bid, orderId:code, user:me, rating:rt, text:tx.slice(0,300), date:new Date().toISOString().slice(0,10)});
    save('vl_reviews', reviews); toast('Terima kasih atas ulasan Anda.'); renderCartPage(); renderStore(); }
  if (d.conf) setStatus(d.conf, 'Dikonfirmasi');
  if (d.cancel && confirm('Batalkan pesanan ini?')) setStatus(d.cancel, 'Dibatalkan');
  if (d.cat) { $('#cat').value = d.cat; renderStore(); $('#katalog').scrollIntoView(); }
  if (d.q) { const i = cart.find(x => x.id === d.q), b = book(d.q), n = i.qty + +d.d; if (n > b.stock) toast('Melebihi stok.'); else if (n < 1) cart = cart.filter(x => x !== i); else i.qty = n; saveCart(); renderCartPage(); renderStore(); }
  if (d.rm) { cart = cart.filter(x => x.id !== d.rm); saveCart(); renderCartPage(); renderStore(); }
  if (d.edit) { const b = book(d.edit); ['bid:id','bt:title','ba:author','bc:category','bp:price','bs:stock','bu:cover','bsy:synopsis'].forEach(p => { const [i, k] = p.split(':'); $('#'+i).value = b[k]; }); if ((b.cover||'').startsWith('idb:')) $('#bu').value = ''; clearCoverUI(); if (coverSrc(b)) { $('#bprev').src = coverSrc(b); $('#bprev').hidden = false; } scrollTo(0, 0); }
  if (d.del && confirm('Hapus buku ini?')) { books = books.filter(b => b.id !== d.del); save('vl_books', books); renderAdmin(); renderStore(); }
  if (d.od) { const o = orders.find(x => x.code === d.od); alert(summary(o) + '\nPelanggan: ' + o.user + '\nStatus: ' + o.status + '\nTanggal: ' + o.date); }
  if (d.odel && confirm('Hapus pesanan ini?')) { orders = orders.filter(o => o.code !== d.odel); reviews = reviews.filter(r => r.orderId !== d.odel); save('vl_orders', orders); save('vl_reviews', reviews); renderAdmin(); renderOrders(); }
  if (d.rdel && confirm('Hapus ulasan ini?')) { reviews = reviews.filter(r => r.id !== d.rdel); save('vl_reviews', reviews); renderAdmin(); }
  switch (t.id) {
    case 'checkout': checkout(); break;
    case 'resetAll': if (confirm('Reset semua data toko di browser ini?')) { Object.keys(localStorage).filter(k => k.startsWith('vl_')).forEach(k => localStorage.removeItem(k)); indexedDB.deleteDatabase('vellichor'); location.reload(); } break;
    case 'authSwitch': setAuth(authMode === 'login' ? 'register' : 'login'); break;
    case 'accBtn': if (me) { me = null; sessionStorage.removeItem('vl_session'); loadCart(); renderStore(); show('store'); toast('Anda telah keluar.'); } else { setAuth('login'); show('login'); } break;
    case 'cartBtn': if (!me) { setAuth('login'); show('login'); toast('Silakan login terlebih dahulu untuk membeli buku.'); break; } show('cart'); break;
    case 'closeModal': $('#modal').hidden = true; break;
    case 'burger': $('#nav').classList.toggle('open'); break;
  }
});
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') $('#modal').hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { $('#modal').hidden = true; } });
const goSearch = () => { if ($('#v-store').hidden) show('store'); renderStore(); $('#katalog').scrollIntoView({behavior:'smooth'}); };
$('#q').addEventListener('input', goSearch);
$('#q').addEventListener('keydown', e => { if (e.key === 'Enter') { const q = $('#q').value.trim().toLowerCase(), m = books.filter(b => (b.title + ' ' + b.author).toLowerCase().includes(q)); if (q && m.length === 1) openDetail(m[0].id); } });
document.addEventListener('input', e => { if (e.target.id === 'note') noteTxt = e.target.value; if (e.target.id === 'acc') accTxt = e.target.value; });
renderStore(); if (user()?.role === 'admin') show('admin');
(async () => { try { await idb.open(); for (const b of books) if ((b.cover||'').startsWith('idb:')) { const bl = await idb.get(b.cover); if (bl) coverUrls[b.cover] = URL.createObjectURL(bl); } } catch (e) {} renderStore(); })();
