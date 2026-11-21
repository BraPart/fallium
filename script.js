(() => {
  const $ = (s, c = document) => c.querySelector(s);

  // Photos: tries name.jpg / .jpeg / .png / .webp from /images and shows the first that exists
  const exts = ['jpg', 'jpeg', 'png', 'webp'];
  document.querySelectorAll('[data-img]').forEach(el => {
    let i = 0;
    const next = () => {
      if (i >= exts.length) return;
      const src = 'images/' + el.dataset.img + '.' + exts[i++];
      const im = new Image();
      im.onload = () => { el.style.setProperty('--img', 'url(' + src + ')'); el.classList.add('ok'); };
      im.onerror = next;
      im.src = src;
    };
    next();
  });

  // Mobile menu
  const menu = $('#menu'), burger = $('#burger');
  const toggle = open => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.textContent = open ? '×' : '☰';
  };
  burger.addEventListener('click', () => toggle(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.tagName === 'A') toggle(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });

  // Sticky nav + floating order button
  const nav = $('#nav'), fo = $('#floatOrder'), hero = $('#home'), order = $('#order');
  let atOrder = false;
  new IntersectionObserver(([e]) => { atOrder = e.isIntersecting; update(); }).observe(order);
  const update = () => {
    nav.classList.toggle('solid', scrollY > 40);
    fo.classList.toggle('show', scrollY > hero.offsetHeight * 0.6 && !atOrder);
  };
  addEventListener('scroll', update, { passive: true });
  update();

  // Scroll reveal with a light stagger inside grids
  document.querySelectorAll('.grid, .masonry').forEach(g =>
    g.querySelectorAll('.reveal').forEach((el, i) => el.style.setProperty('--d', (i % 4) * 0.08 + 's')));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Count-up numbers
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    co.unobserve(e.target);
    const el = e.target, end = +el.dataset.count, dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
    const t0 = performance.now();
    const tick = t => {
      const p = Math.min((t - t0) / 1400, 1), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

  // ---- Language (default Arabic) + theme (default light) ----
  const D = {
    'About':'عن فاليوم','Menu':'القائمة','Why us':'لماذا نحن','Reviews':'آراء الضيوف','Gallery':'المعرض','Visit':'زورونا','Order Now':'اطلب الآن',
    '★★★★★ 4.7 Rating · 331+ Happy Customers':'★★★★★ تقييم 4.7 · +331 عميل سعيد',
    'Exceptional Coffee. Memorable Moments.':'قهوة استثنائية. لحظات لا تُنسى.',
    'Experience specialty coffee, handcrafted beverages, and delicious desserts in the heart of Riyadh.':'جرّب القهوة المختصة والمشروبات المحضّرة يدوياً والحلويات اللذيذة في قلب الرياض.',
    'View Menu':'عرض القائمة','Order Online':'اطلب أونلاين',
    'Specialty coffee, poured with care':'قهوة مختصة، تُحضَّر بعناية',
    'Fallium Coffee is a calm, beautifully designed corner of Al Mansourah where every cup is made with quality ingredients and real attention. From the first espresso to the last bite of dessert, we want your visit to feel unhurried and a little special.':'فاليوم كوفي ركن هادئ ومصمَّم بأناقة في حي المنصورة، حيث يُحضَّر كل كوب بمكونات عالية الجودة واهتمام حقيقي. من أول إسبريسو إلى آخر قضمة حلوى، نريد أن تكون زيارتك هادئة ومميزة.',
    'Bring your laptop, your friends or your next meeting. Our comfortable seating and warm atmosphere make Fallium a perfect place to work, meet and unwind, open every day until 1 AM.':'أحضر حاسوبك أو أصدقاءك أو اجتماعك القادم. جلساتنا المريحة وأجواؤنا الدافئة تجعل فاليوم المكان المثالي للعمل واللقاء والاسترخاء، ونفتح يومياً حتى الساعة 1 صباحاً.',
    'Dine-In':'جلسات داخلية','Takeaway':'سفري','No-Contact Delivery':'توصيل بلا تلامس','Online Ordering':'طلب أونلاين',
    'Positive Reviews':'تقييم إيجابي','Customer Rating':'تقييم العملاء','1 AM':'1 ص','Open Daily':'مفتوح يومياً',
    'Featured menu':'قائمتنا المميزة','Most drinks and desserts range from SAR 20 to 40.':'تتراوح أسعار معظم المشروبات والحلويات بين 20 و40 ريالاً.',
    'Coffee of the Day':'قهوة اليوم','A rotating single-origin brew, freshly prepared.':'تحضير طازج من أصل واحد، يتغيّر باستمرار.',
    'Specialty Latte':'لاتيه مختص','Silky espresso and steamed milk with seasonal flavours.':'إسبريسو ناعم وحليب مبخّر بنكهات موسمية.',
    'Iced Americano':'أمريكانو مثلّج','Bold, clean and refreshing over ice.':'قوي ونقي ومنعش فوق الثلج.',
    'Matcha Summer Cloud':'ماتشا سمر كلاود','Ceremonial matcha topped with a light, creamy cloud.':'ماتشا فاخر يعلوه سحاب كريمي خفيف.',
    'Honey Tiramisu':'تيراميسو بالعسل','Coffee-soaked layers with mascarpone and a touch of honey.':'طبقات منقوعة بالقهوة مع الماسكاربوني ولمسة عسل.',
    'Mango Truffle':'ترافل المانجو','A bright, silky mango dessert with a chocolate finish.':'حلوى مانجو حريرية منعشة بلمسة شوكولاتة.',
    'Fresh Cookies':'كوكيز طازجة','Baked daily, soft in the middle and golden at the edge.':'تُخبز يومياً، طرية من الداخل وذهبية الأطراف.',
    'Signature Desserts':'حلويات مميزة','Handcrafted sweets and cakes made to share.':'حلويات وكيك محضّر يدوياً للمشاركة.',
    'Why customers love us':'لماذا يحبنا عملاؤنا',
    'Specialty Coffee':'قهوة مختصة','Freshly prepared premium coffee.':'قهوة فاخرة محضّرة طازجة.',
    'Handcrafted sweets and cakes.':'حلويات وكيك مصنوع يدوياً.',
    'Work Friendly':'مناسب للعمل','Ideal for remote work and meetings.':'مثالي للعمل عن بُعد والاجتماعات.',
    'Open Late':'مفتوح حتى وقت متأخر','Serving customers until 1 AM.':'نخدمكم حتى الساعة 1 صباحاً.',
    'Convenient Delivery':'توصيل مريح','No-contact delivery available.':'التوصيل بلا تلامس متاح.',
    'Highly Rated':'تقييم عالٍ','4.7 stars from 331+ customers.':'4.7 نجوم من أكثر من 331 عميلاً.',
    'What our guests say':'ماذا يقول ضيوفنا',
    'This place is classy, the atmosphere is excellent, and the coffee tastes amazing.':'مكان راقٍ، والأجواء ممتازة، وطعم القهوة رائع.',
    'Perfect for working remotely and meeting friends.':'مثالي للعمل عن بُعد ولقاء الأصدقاء.',
    'The interior design and overall environment are outstanding.':'التصميم الداخلي والأجواء العامة رائعة.',
    'Google review':'تقييم على Google',
    'Replace these with real reviews from your Google Maps listing, with the customer’s name.':'استبدل هذه بتقييمات حقيقية من صفحتك على خرائط Google مع اسم العميل.',
    'The Fallium look':'أجواء فاليوم',
    'Visit Fallium':'زوروا فاليوم','Address':'العنوان','Southern Ring Branch Rd, Al Mansourah, Riyadh 12691':'طريق الدائري الجنوبي الفرعي، المنصورة، الرياض 12691',
    'Phone':'الهاتف','Hours':'ساعات العمل','Open daily until 1 AM':'مفتوح يومياً حتى الساعة 1 صباحاً',
    'Get Directions':'احصل على الاتجاهات','Call now':'اتصل الآن',
    'Your Favourite Coffee Is Just One Click Away.':'قهوتك المفضلة على بُعد نقرة واحدة.',
    'Specialty coffee and desserts in Al Mansourah, Riyadh.':'قهوة مختصة وحلويات في المنصورة، الرياض.',
    'Southern Ring Branch Rd, Al Mansourah':'طريق الدائري الجنوبي الفرعي، المنصورة','Riyadh 12691':'الرياض 12691',
    'Instagram':'إنستغرام','Snapchat':'سناب شات','TikTok':'تيك توك','Google Reviews':'تقييمات Google',
    'Fallium Coffee. All rights reserved.':'فاليوم كوفي. جميع الحقوق محفوظة.'
  };
  const A = [
    ['#burger','aria-label','Open menu','فتح القائمة'],['#menu','aria-label','Main','التنقل الرئيسي'],
    ['.wa','aria-label','Chat on WhatsApp','تواصل عبر واتساب'],['.stars','aria-label','5 stars','5 نجوم'],
    ['iframe','title','Fallium Coffee on Google Maps','فاليوم كوفي على خرائط Google']
  ];
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode());) {
    if (n.parentNode.closest('script,style')) continue;
    const k = n.nodeValue.trim();
    if (D[k]) nodes.push([n, n.nodeValue, n.nodeValue.replace(k, () => D[k])]);
  }
  const root = document.documentElement, themeBtn = $('#themeBtn'), langBtn = $('#langBtn');
  const metaDesc = $('meta[name=description]'), metaTheme = $('meta[name=theme-color]');
  const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const TT = { en: 'Fallium Coffee (فاليوم كوفي) | Specialty Coffee in Al Mansourah, Riyadh', ar: 'فاليوم كوفي (Fallium Coffee) | قهوة مختصة في المنصورة، الرياض' };
  const DD = { en: metaDesc.content, ar: 'فاليوم كوفي بتقييم 4.7/5 من أكثر من 331 عميلاً. قهوة مختصة وماتشا وحلويات مميزة في المنصورة، الرياض. جلسات داخلية وسفري وتوصيل بلا تلامس. مفتوح يومياً حتى الساعة 1 صباحاً.' };
  const themeLabel = () => {
    const dark = root.dataset.theme === 'dark', ar = root.lang === 'ar';
    themeBtn.textContent = dark ? '☀' : '☾';
    themeBtn.setAttribute('aria-label', ar ? (dark ? 'الوضع الفاتح' : 'الوضع الداكن') : (dark ? 'Light mode' : 'Dark mode'));
  };
  const setTheme = t => {
    root.dataset.theme = t;
    metaTheme.content = t === 'dark' ? '#0d0907' : '#faf5ec';
    themeLabel(); save('fc-theme', t);
  };
  const setLang = l => {
    const ar = l === 'ar';
    root.lang = l; root.dir = ar ? 'rtl' : 'ltr';
    nodes.forEach(([n, en, arT]) => { n.nodeValue = ar ? arT : en; });
    A.forEach(([s, a, en, arT]) => document.querySelectorAll(s).forEach(e => e.setAttribute(a, ar ? arT : en)));
    document.title = TT[l]; metaDesc.content = DD[l];
    langBtn.textContent = ar ? 'EN' : 'ع';
    langBtn.setAttribute('aria-label', ar ? 'Switch to English' : 'التبديل إلى العربية');
    $('#yr').textContent = new Date().getFullYear();
    themeLabel(); save('fc-lang', l);
  };
  themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  langBtn.addEventListener('click', () => setLang(root.lang === 'ar' ? 'en' : 'ar'));
  setLang(root.lang === 'en' ? 'en' : 'ar');
  setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
})();
