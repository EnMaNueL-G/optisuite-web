/* ════════════════════════════════════════════════════════════
   OptiSuite — i18n en el sitio (sin redirigir, conserva el diseño)
   Cambia SOLO el texto. Recuerda el idioma (localStorage) en todas
   las secciones. DICT = nodos de texto · DICT_HTML = bloques con <b>/<i>.
════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---- Bloques con formato interno (clave = innerHTML ES) ---- */
  var DICT_HTML = {
    'Consola ADB para <b>PC y portátiles</b> (Windows): hace prácticamente <b>todo lo que se puede hacer con ADB</b> sobre cualquier Android — teléfonos, tablets y más. 18 categorías y +150 acciones: optimización, debloat multi-marca, batería, diagnóstico, red, hardware, seguridad, respaldos, captura, grabación, suite avanzada y privacidad. Suscripción mensual — 10 días de prueba gratis.':
      'ADB power console for <b>PCs and laptops</b> (Windows): does practically <b>everything you can do with ADB</b> on any Android — phones, tablets and more. 18 categories and 150+ actions: optimization, multi-brand debloat, battery, diagnostics, network, hardware, security, backups, capture, recording, advanced suite and privacy. Monthly subscription — 10-day free trial.',
    'Controla y <b>visualiza toda tu flota de Android</b> desde el PC: panel profesional por equipo (estilo centro de mando), mosaico con <b>vídeo en vivo</b> de todos a la vez, control y espejado, e informe de salud. Pensado para talleres y granjas de <b>10+ dispositivos</b> con conexión estable por tiempo prolongado.':
      'Control and <b>watch your whole Android fleet</b> from your PC: a pro per-device dashboard (command-center style), a <b>live-video</b> mosaic of every unit at once, mirroring &amp; control, and a health report. Built for workshops and farms of <b>10+ devices</b> with a stable connection over long periods.',
    'Conecta un móvil y obtén en segundos un <b>certificado de confianza</b>: diagnóstico, <b>grado A/B/C/D</b> y PDF firmado con QR. Para vender y comprar <b>móviles usados</b> con garantía.':
      'Plug in a phone and get a <b>trust certificate</b> in seconds: diagnostics, an <b>A/B/C/D grade</b> and a signed PDF with QR. To sell and buy <b>used phones</b> with confidence.',
    'Descarga <b>vídeo y audio</b> de YouTube, TikTok, Instagram, X, Facebook, Vimeo y +1000 webs. <b>Privado, local y sin anuncios.</b>':
      'Download <b>video &amp; audio</b> from YouTube, TikTok, Instagram, X, Facebook, Vimeo and +1000 sites. <b>Private, local and ad-free.</b>',
    'Investigación de <b>fuentes abiertas (OSINT)</b>: reúne información pública sobre un usuario, correo, dominio, IP, teléfono o imagen y la muestra en una <b>lista clara</b> o un <b>mapa de conexiones</b>. Para antifraude, <i>due diligence</i>, RRHH y protección de marca.':
      '<b>Open-source intelligence (OSINT)</b>: gathers public info about a username, email, domain, IP, phone or image and shows it as a <b>clear list</b> or a <b>connection map</b>. For anti-fraud, <i>due diligence</i>, HR and brand protection.',
    'Reproductor multimedia <b>rápido, privado y completo</b> para música y vídeo. Sin anuncios, sin telemetría y <b>sin permiso de Internet</b>: tus datos nunca salen del teléfono.':
      'A <b>fast, private and complete</b> media player for music and video. No ads, no telemetry and <b>no Internet permission</b>: your data never leaves the phone.',
    'El editor de documentos completo para Android: 22 herramientas para PDF, visor de Word/Excel, OCR y firma, más <strong>editor Markdown</strong> (export a PDF/HTML/.md) y creación de texto libre en cualquier punto. Pago único — 7 días de prueba gratis.':
      'The complete document editor for Android: 22 tools for PDF, Word/Excel viewer, OCR &amp; signing, plus a <strong>Markdown editor</strong> (export to PDF/HTML/.md) and free-text creation anywhere. One-time payment — 7-day free trial.',
    'v1.5.1 — Rebrand a <strong>OptiSuite PDF</strong> (com.opti.pdf, APK firmado). Notas redimensionables, resaltado detecta texto real, diálogo Sobrescribir/Guardar-como, comprimir muestra % y ruta en Descargas/OptiSuitePDF/, insertar imagen abre galería directamente, formularios auto-detectan campos AcroForm. Sin anuncios, sin trackers.':
      'v1.5.1 — Rebrand to <strong>OptiSuite PDF</strong> (com.opti.pdf, signed APK). Resizable notes, highlight detects real text, Overwrite/Save-as dialog, compress shows % and path in Downloads/OptiSuitePDF/, insert image opens the gallery directly, forms auto-detect AcroForm fields. No ads, no trackers.',
    '<span class="feature-dot" style="background:#a855f7;"></span><b>Control desde el navegador</b> (red local o Internet) · comparte equipos por usuario':
      '<span class="feature-dot" style="background:#a855f7;"></span><b>Browser control</b> (local network or Internet) · share devices per user',
    '<span class="feature-dot" style="background:#10b981;"></span>Salud de <b>batería</b>, IMEI (Luhn + blacklist) y FRP/iCloud':
      '<span class="feature-dot" style="background:#10b981;"></span><b>Battery</b> health, IMEI (Luhn + blacklist) and FRP/iCloud',
    '<span class="feature-dot" style="background:#10b981;"></span>Pruebas funcionales, <b>cámara en vivo</b> y test térmico':
      '<span class="feature-dot" style="background:#10b981;"></span>Functional tests, <b>live camera</b> and thermal test',
    '<span class="feature-dot" style="background:#10b981;"></span><b>Certificado PDF firmado</b> (Ed25519) + QR de verificación':
      '<span class="feature-dot" style="background:#10b981;"></span><b>Signed PDF certificate</b> (Ed25519) + verification QR',
    '<span class="feature-dot" style="background:#a855f7;"></span>Vídeo <b>MP4 hasta 4K</b> o audio <b>MP3/M4A/WAV/AAC</b>':
      '<span class="feature-dot" style="background:#a855f7;"></span>Video <b>MP4 up to 4K</b> or audio <b>MP3/M4A/WAV/AAC</b>',
    '<span class="feature-dot" style="background:#a855f7;"></span><b>Descarga múltiple</b> y carga de listas de enlaces':
      '<span class="feature-dot" style="background:#a855f7;"></span><b>Batch download</b> and loading of link lists',
    '<span class="feature-dot" style="background:#22d3ee;"></span>Cuentas por <b>usuario y correo</b> en miles de sitios':
      '<span class="feature-dot" style="background:#22d3ee;"></span>Accounts by <b>username and email</b> across thousands of sites',
    '<span class="feature-dot" style="background:#22d3ee;"></span>Dominio, IP, teléfono y <b>EXIF/GPS de imágenes</b>':
      '<span class="feature-dot" style="background:#22d3ee;"></span>Domain, IP, phone and <b>image EXIF/GPS</b>',
    '<span class="feature-dot" style="background:#22d3ee;"></span><b>100% local y privado</b> · solo fuentes públicas y legales':
      '<span class="feature-dot" style="background:#22d3ee;"></span><b>100% local and private</b> · public, legal sources only',
    '<span class="feature-dot" style="background:#3DDC84;"></span><b>Privacidad absoluta</b>: sin anuncios, sin rastreo, sin cuentas':
      '<span class="feature-dot" style="background:#3DDC84;"></span><b>Absolute privacy</b>: no ads, no tracking, no accounts',
    'La consola ADB definitiva para PC y portátiles: hace prácticamente <b>todo lo que se puede hacer con ADB</b> sobre cualquier Android — mantenimiento, optimización, diagnóstico, respaldos y herramientas avanzadas — desde una interfaz fluida y profesional.':
      'The ultimate ADB console for PCs and laptops: does practically <b>everything you can do with ADB</b> on any Android — maintenance, optimization, diagnostics, backups and advanced tools — from a smooth, professional interface.',
    'Para tu licencia PRO+ escríbenos a <a href="mailto:support@optisuite.app" style="color:#a855f7;font-weight:600;">support@optisuite.app</a>':
      'For your PRO+ license, email us at <a href="mailto:support@optisuite.app" style="color:#a855f7;font-weight:600;">support@optisuite.app</a>',
    'Cancela cuando quieras · licencia vinculada a tu equipo · requiere ADB (Android Platform-Tools). <b>PRO+</b> se activa con tu clave: contáctanos en support@optisuite.app.':
      'Cancel anytime · license tied to your computer · requires ADB (Android Platform-Tools). <b>PRO+</b> is activated with your key: contact us at support@optisuite.app.',
    'Tu <b>centro de mando</b> para decenas de dispositivos Android a la vez: visualízalos en un mosaico en vivo, controla cualquiera con un clic y revisa la salud de cada equipo desde un panel profesional. Diseñado para talleres y granjas de dispositivos con sesiones de larga duración.':
      'Your <b>command center</b> for dozens of Android devices at once: see them in a live mosaic, control any one with a click and check each device’s health from a pro dashboard. Designed for workshops and device farms with long sessions.',
    'Abre cada equipo en su propia ventana, estilo emulador: <b>vídeo en vivo fluido</b> de la pantalla a un lado y una barra de botones al otro (encender, inicio, atrás, volumen, rotar…). Toca y desliza para controlarlo. Abre varios a la vez.':
      'Open each device in its own window, emulator-style: <b>smooth live video</b> of the screen on one side and a button bar on the other (power, home, back, volume, rotate…). Tap and swipe to control it. Open several at once.',
    'Audita la postura de cada equipo (root, cuentas, opciones de desarrollador) y aplica refuerzo reversible. En equipos con root, <b>bloquea el restablecimiento de fábrica (factory reset)</b> y oculta opciones de desarrollador para reducir la manipulación.':
      'Audit each device’s posture (root, accounts, developer options) and apply reversible hardening. On rooted devices, <b>block factory reset</b> and hide developer options to reduce tampering.',
    'Abre tus equipos en el navegador de cualquier dispositivo —tu otro móvil, una tablet o un PC— con vídeo en vivo. En tu red local funciona al instante; para llegar desde Internet solo necesitas un túnel seguro. Aquí tienes un ejemplo real con <b>ngrok</b>:':
      'Open your devices in the browser of any device —your other phone, a tablet or a PC— with live video. On your local network it works instantly; to reach it from the Internet you just need a secure tunnel. Here’s a real example with <b>ngrok</b>:',
    'En OptiFleet abre la pestaña <b>Apoyo</b> y activa el <b>Control web</b>.':
      'In OptiFleet, open the <b>Support</b> tab and enable <b>Web control</b>.',
    '<b>En tu red (Wi-Fi):</b> pulsa “Abrir control web” o copia el enlace y ábrelo en otro dispositivo de la misma red.':
      '<b>On your network (Wi-Fi):</b> press “Open web control” or copy the link and open it on another device on the same network.',
    '<b>Desde Internet:</b> crea una cuenta gratuita en <b>ngrok</b>, instálalo y conéctalo con tu token; luego ejecuta <code>ngrok http 8770</code>. Te dará una dirección <b>https</b> pública.':
      '<b>From the Internet:</b> create a free <b>ngrok</b> account, install it and connect it with your token; then run <code>ngrok http 8770</code>. It will give you a public <b>https</b> address.',
    '<b>Comparte por usuario:</b> crea un enlace para cada persona o grupo con los equipos que le asignes y, si quieres, con caducidad por horas o días.':
      '<b>Share per user:</b> create a link for each person or group with the devices you assign, and optionally with an expiry of hours or days.',
    'Te da una dirección <b>https</b> lista para pegar en OptiFleet.':
      'It gives you an <b>https</b> address ready to paste into OptiFleet.',
    'Devuelve una dirección <b>https</b> de Cloudflare.':
      'Returns a Cloudflare <b>https</b> address.',
    'En todos los casos el paso final es el mismo: copia la dirección que te da el servicio y pégala en OptiFleet → <b>Apoyo → Dirección pública</b>. Para tu red local no necesitas nada de esto. Recomendado para Internet: una dirección <b>https</b> (ngrok/Cloudflare) o una <b>VPN privada</b> (Tailscale).':
      'In every case the final step is the same: copy the address the service gives you and paste it into OptiFleet → <b>Support → Public address</b>. For your local network you need none of this. Recommended for the Internet: an <b>https</b> address (ngrok/Cloudflare) or a <b>private VPN</b> (Tailscale).',
    'Todo lo de PRO + <b>control desde el navegador</b> (incluido acceso remoto por Internet), <b>compartir equipos por usuario</b> con caducidad, <b>respaldo 1-clic</b>, <b>optimización por equipo</b>, <b>monitoreo avanzado continuo</b> (temperatura, salud y ciclos de batería, avisos de batería baja), <b>automatización (macros)</b>, <b>modo ahorro</b> y <b>API local + webhooks</b> para integrar tu flota con tus sistemas.':
      'Everything in PRO + <b>browser control</b> (including remote access over the Internet), <b>share devices per user</b> with expiry, <b>1-click backup</b>, <b>per-device optimization</b>, <b>continuous advanced monitoring</b> (temperature, battery health &amp; cycles, low-battery alerts), <b>automation (macros)</b>, <b>power-saving mode</b> and <b>local API + webhooks</b> to integrate your fleet with your systems.',
    'Licencias: <a href="mailto:support@optisuite.app" style="color:#a855f7;font-weight:600;">support@optisuite.app</a>':
      'Licenses: <a href="mailto:support@optisuite.app" style="color:#a855f7;font-weight:600;">support@optisuite.app</a>',
    'Conecta un móvil y obtén en segundos un <b>certificado de confianza</b> para venderlo o comprarlo con garantía: diagnóstico completo, <b>grado A/B/C/D</b> y un <b>PDF firmado con QR de verificación</b>. Pensado para tiendas y para la compraventa entre particulares. Da seguridad al comprador y diferencia tu venta.':
      'Plug in a phone and get a <b>trust certificate</b> in seconds to sell or buy it with confidence: full diagnostics, an <b>A/B/C/D grade</b> and a <b>signed PDF with a verification QR</b>. Built for shops and peer-to-peer sales. It reassures the buyer and sets your listing apart.',
    'Portable: descomprime y abre <b>OptiCert.exe</b>. <b>Incluye ADB</b> — no necesitas instalar nada más.':
      'Portable: unzip and open <b>OptiCert.exe</b>. <b>ADB included</b> — no need to install anything else.',
    'Un documento profesional que el comprador puede <b>verificar por QR</b>. Más confianza, mejor precio y menos disputas.':
      'A professional document the buyer can <b>verify by QR</b>. More trust, a better price and fewer disputes.',
    'Descarga <b>vídeo y audio</b> de YouTube, TikTok, Instagram, X/Twitter, Facebook, Vimeo y <b>+1000 webs</b>. Elige la <b>resolución</b> (hasta <b>4K</b>) o el <b>formato de audio</b> (MP3/M4A/WAV/AAC) antes de bajar cada uno. Además, <b>busca, reproduce y escucha</b> dentro de la app (en Windows y Android), con recomendaciones, directos, biblioteca e historial. <b>Privado, local y sin anuncios</b>: nada se sube a ningún servidor.':
      'Download <b>video &amp; audio</b> from YouTube, TikTok, Instagram, X/Twitter, Facebook, Vimeo and <b>+1000 sites</b>. Choose the <b>resolution</b> (up to <b>4K</b>) or the <b>audio format</b> (MP3/M4A/WAV/AAC) before downloading each one. Plus, <b>search, play and listen</b> inside the app (on Windows and Android), with recommendations, live streams, library and history. <b>Private, local and ad-free</b>: nothing is uploaded to any server.',
    '<b>Windows:</b> descomprime y abre <b>OptiGrab.exe</b> (incluye yt-dlp y ffmpeg). · <b>Android:</b> instala el APK (activa "orígenes desconocidos"); además <b>busca, reproduce y escucha</b> dentro de la app. Ambas descargan de <b>YouTube, TikTok, Instagram, X, Facebook y +1000 sitios</b>. Descarga solo contenido para el que tengas derecho.':
      '<b>Windows:</b> unzip and open <b>OptiGrab.exe</b> (includes yt-dlp and ffmpeg). · <b>Android:</b> install the APK (enable "unknown sources"); plus <b>search, play and listen</b> inside the app. Both download from <b>YouTube, TikTok, Instagram, X, Facebook and +1000 sites</b>. Only download content you have the right to.',
    'Parte del ecosistema OptiSuite — herramientas privadas y sin anuncios. Si te resulta útil, puedes <b>apoyar su desarrollo</b> desde la propia app.':
      'Part of the OptiSuite ecosystem — private, ad-free tools. If you find it useful, you can <b>support its development</b> from within the app.',
    'Es <b>gratis</b>, sin anuncios y sin recopilar tus datos — pero detrás hay muchas horas de trabajo. Si te ahorra tiempo, una pequeña aportación ayuda a mantenerlo y a seguir mejorándolo. ¡Mil gracias! 🙌':
      'It’s <b>free</b>, ad-free and never collects your data — but there are many hours of work behind it. If it saves you time, a small contribution helps keep it going and improving. Thank you so much! 🙌',
    'El reproductor multimedia más <b>rápido, privado y completo</b> para Android. Reproduce tu música y tus vídeos con una experiencia premium y <b>cero recolección de datos</b>: sin anuncios, sin telemetría y <b>sin permiso de Internet</b>.':
      'The <b>fastest, most private and complete</b> media player for Android. Play your music and videos with a premium experience and <b>zero data collection</b>: no ads, no telemetry and <b>no Internet permission</b>.',
    'El editor de documentos definitivo para Android: edita PDF, Word y Excel, firma, convierte y aplica OCR — y además, exclusivo de PRO+, un <b>editor Markdown</b> con vista previa en vivo y <b>creación de texto libre</b> en cualquier punto del documento. Todo 100% local.':
      'The ultimate document editor for Android: edit PDF, Word and Excel, sign, convert and run OCR — plus, exclusive to PRO+, a <b>Markdown editor</b> with live preview and <b>free-text creation</b> anywhere in the document. All 100% local.',
    'Rebrand completo a <strong>OptiSuite PDF</strong>. Nuevo paquete com.opti.pdf, APK firmado. Solucionado error de instalación "paquete no válido".':
      'Full rebrand to <strong>OptiSuite PDF</strong>. New package com.opti.pdf, signed APK. Fixed the "invalid package" install error.',
    '¿Encontraste un bug o necesitas ayuda? Escríbenos por correo a <strong>support@optisuite.app</strong>, o abre un Issue en GitHub para las herramientas de código abierto.':
      'Found a bug or need help? Email us at <strong>support@optisuite.app</strong>, or open an Issue on GitHub for the open-source tools.'
  };

  /* ---- Cadenas simples (clave = texto ES, trim) ---- */
  var DICT = {
    // Nav
    'Inicio': 'Home', 'Herramientas': 'Tools', 'Actualizaciones': 'Updates', 'Sobre': 'About', 'GitHub ↗': 'GitHub ↗',
    // Hero
    'MULTIPLATAFORMA • EFICIENTE • CONFIABLE': 'MULTIPLATFORM • EFFICIENT • RELIABLE',
    'Herramientas que': 'Tools that', 'respetan tu sistema': 'respect your system', 'Ver herramientas': 'View tools',
    'Plataformas': 'Platforms', 'Anuncios': 'Ads',
    'Optimización y seguridad para Windows, Android, macOS y Linux.': 'Optimization and security for Windows, Android, macOS and Linux.',
    'Herramientas simples': 'Simple tools', '— Gratis. Código abierto. Para siempre.': '— Free. Open source. Forever.',
    'Herramientas complejas': 'Complex tools', '— Pago único. Sin suscripciones. Tuyas para siempre.': '— One-time payment. No subscriptions. Yours forever.',
    // Hero floating cards
    'Monitor RAM · CPU · Red · Inicio de Windows': 'Monitor RAM · CPU · Network · Windows startup',
    'Telemetría · Privacidad · Firewall': 'Telemetry · Privacy · Firewall',
    'Editor directo · Firma · Formularios': 'Direct editor · Signing · Forms',
    'Permisos · Espías · Anomalías · Huella': 'Permissions · Spyware · Anomalies · Fingerprint',
    'Markdown · Texto libre · 22 herramientas': 'Markdown · Free text · 22 tools',
    // Home — destacadas / modelo / última actualización
    'Destacadas': 'Featured',
    'Toca una herramienta para ver su plataforma · desliza para ver todas.': 'Tap a tool to see its platform · swipe to see them all.',
    'Monitor de rendimiento completo con gestor de inicio integrado. Libera RAM, limpia temporales, controla qué arranca con Windows.': 'Complete performance monitor with an integrated startup manager. Free up RAM, clean temp files, control what starts with Windows.',
    'Descargar': 'Download', 'Nuevo': 'New',
    'Desactiva la telemetría de Microsoft, audita el inicio de Windows, limpia rastros digitales y gestiona el Firewall.': 'Disable Microsoft telemetry, audit Windows startup, clean digital traces and manage the Firewall.',
    'Editor PDF directo. Toca texto, arrastra firmas, notas redimensionables, resaltado inteligente. Sin anuncios, código base público.': 'Direct PDF editor. Tap text, drag signatures, resizable notes, smart highlight. No ads, public source base.',
    'Descargar APK': 'Download APK',
    '5 pestañas: permisos, detector de espías, guard en tiempo real, anomalías del dispositivo y huella digital. Sin root, sin internet, 100% local.': '5 tabs: permissions, spyware detector, real-time guard, device anomalies and digital fingerprint. No root, no internet, 100% local.',
    'Código abierto total': 'Fully open source', 'Cualquier persona puede revisar, auditar o contribuir libremente.': 'Anyone can review, audit or contribute freely.',
    'Sin instaladores': 'No installers', 'Ejecutables directos (.exe) o APKs. Descarga y usa.': 'Direct executables (.exe) or APKs. Download and use.',
    'Sin telemetría': 'No telemetry', 'Ninguna herramienta recopila ni envía datos de usuario.': 'No tool collects or sends user data.',
    'Simples = Gratis': 'Simple = Free', 'Código abierto, sin anuncios, para siempre.': 'Open source, ad-free, forever.',
    'Complejas = Pago único': 'Complex = One-time payment', 'Sin suscripciones. Pagas una vez, tuya para siempre. $10-15 vs $60-100/año.': 'No subscriptions. Pay once, yours forever. $10-15 vs $60-100/yr.',
    'Última actualización': 'Latest update', 'Ver todas →': 'View all →', 'Junio 2026': 'June 2026',
    'Todas las herramientas': 'All tools', 'Herramientas disponibles': 'Available tools',
    '7 herramientas para Windows y Android. Gratuitas, sin anuncios, código abierto.': '7 tools for Windows and Android. Free, ad-free, open source.',
    'Todas (9)': 'All (9)', 'Windows (2)': 'Windows (2)', 'Android (7)': 'Android (7)',
    // Version / pricing
    'v1.5.1 · Android · Gratis': 'v1.5.1 · Android · Free',
    'v1.0.0 · Windows · Gratis · Open source': 'v1.0.0 · Windows · Free · Open source',
    'v1.0.0 · Windows + Android · Gratis': 'v1.0.0 · Windows + Android · Free',
    'v1.0.0 · Android 8+ · Gratis': 'v1.0.0 · Android 8+ · Free',
    'v1.6.0 · Android · Gratis': 'v1.6.0 · Android · Free', 'v1.6.0 · Gratis': 'v1.6.0 · Free',
    'v1.5.1 · Gratis': 'v1.5.1 · Free', 'v1.0.0 · Windows · Gratis · Código privado': 'v1.0.0 · Windows · Free · Private code',
    'desde $9.99/mes': 'from $9.99/mo', '/mes · 1er mes $4.99': '/mo · 1st month $4.99', '/mes': '/mo',
    '· PRO+ $19.99': '· PRO+ $19.99', '1er mes $4.99': '1st month $4.99', '1er mes $9.99': '1st month $9.99',
    'pago único': 'one-time', 'Gratis': 'Free', '10 días gratis': '10-day free trial', '7 días gratis · Sin tarjeta': '7-day free trial · No card',
    'Android 8+': 'Android 8+', '$9.99 pago único': '$9.99 one-time', '7 días gratis · sin tarjeta': '7-day free trial · no card',
    // Buttons
    'Ver detalles': 'View details', 'Ver detalles →': 'View details →', 'Suscribirse': 'Subscribe', 'Comprar': 'Buy',
    'Descargar para Windows': 'Download for Windows', 'Descargar gratis para Windows': 'Download free for Windows',
    'Descargar .exe': 'Download .exe', 'Código fuente': 'Source code', 'Ver en GitHub': 'View on GitHub',
    'Descargar APK v1.1.1': 'Download APK v1.1.1', 'Descargar APK v1.5.1': 'Download APK v1.5.1', 'Descargar APK v1.0.2': 'Download APK v1.0.2',
    'Ver código (GitHub)': 'View code (GitHub)', 'Ver otras herramientas': 'View other tools', '← Volver a herramientas': '← Back to tools',
    'Descargar gratis para Windows': 'Download free for Windows', 'Descargar v2.3.1': 'Download v2.3.1', 'Descargar v1.0.0': 'Download v1.0.0',
    'Descargar APK gratis': 'Download free APK', 'Descargar APK · v1.0.2': 'Download APK · v1.0.2', 'Comprar · $9.99 pago único': 'Buy · $9.99 one-time',
    'Comprar licencia': 'Buy license', '📱 Descargar para Android (APK)': '📱 Download for Android (APK)',
    // Tool card feature lists (tools page)
    'Debloat automático por marca (Samsung, Xiaomi, Motorola…)': 'Automatic debloat by brand (Samsung, Xiaomi, Motorola…)',
    'Diagnóstico de conexión, red (ruta/velocidad/Wi-Fi) y batería': 'Connection, network (route/speed/Wi-Fi) and battery diagnostics',
    'Respaldos, capturas, grabación de pantalla y registro por app': 'Backups, screenshots, screen recording and per-app logging',
    '6 funciones gratis · PRO desde $9.99/mes · PRO+ (root) $19.99/mes': '6 free features · PRO from $9.99/mo · PRO+ (root) $19.99/mo',
    'Actualizaciones y funciones nuevas incluidas · cancela cuando quieras': 'Updates and new features included · cancel anytime',
    'Para PC y portátiles · requiere ADB (Android Platform-Tools)': 'For PCs and laptops · requires ADB (Android Platform-Tools)',
    'Panel por dispositivo: batería, almacenamiento, IMEI e informe de salud': 'Per-device dashboard: battery, storage, IMEI and health report',
    'Mosaico en vivo de todos los equipos · elige cuál controlar': 'Live mosaic of all devices · pick which to control',
    'Espejado y control · acciones en lote (reiniciar, espejar, etc.)': 'Mirroring and control · batch actions (reboot, mirror, etc.)',
    'Respaldo 1-clic · optimización por equipo · 10 días de prueba': '1-click backup · per-device optimization · 10-day trial',
    'PRO: control + vídeo · PRO+: + control web remoto, compartir y monitoreo avanzado · requiere ADB': 'PRO: control + video · PRO+: + remote web control, sharing and advanced monitoring · requires ADB',
    'Export a marketplaces · 100% local, sin telemetría': 'Export to marketplaces · 100% local, no telemetry',
    'Alta velocidad (fragmentos en paralelo) · cola con progreso': 'High speed (parallel fragments) · queue with progress',
    'Sin anuncios ni telemetría · 100% en tu equipo': 'No ads or telemetry · 100% on your device',
    'Mapa de conexiones pivotable · informe exportable': 'Pivotable connection map · exportable report',
    'Audio en segundo plano · cola · velocidad · ecualizador de 10 bandas': 'Background audio · queue · speed · 10-band equalizer',
    'Vídeo a pantalla completa con gestos · subtítulos · Picture-in-Picture': 'Full-screen video with gestures · subtitles · Picture-in-Picture',
    'Listas, favoritos, recientes y más reproducidas (todo local)': 'Playlists, favorites, recents and most-played (all local)',
    'Material You · temas claro / oscuro / AMOLED · temporizador de apagado': 'Material You · light / dark / AMOLED themes · sleep timer',
    '100% gratuito · sin compras · código abierto auditable': '100% free · no purchases · auditable open source',
    'Monitor RAM, CPU, disco y red en tiempo real': 'Real-time RAM, CPU, disk and network monitor',
    'Gestor de inicio de Windows con recomendaciones': 'Windows startup manager with recommendations',
    'Top 5 procesos por uso de RAM con opción Kill': 'Top 5 processes by RAM usage with a Kill option',
    'Historial gráfico de 2 minutos': '2-minute graphical history',
    'Bandeja del sistema + auto-optimización programada': 'System tray + scheduled auto-optimization',
    '7 servicios de telemetría + 9 tareas programadas': '7 telemetry services + 9 scheduled tasks',
    'Auditor de inicio con clasificación por riesgo': 'Startup auditor with risk classification',
    'Limpiador de 8 categorías con vista previa de tamaño': '8-category cleaner with size preview',
    'Gestor de Firewall (bloqueo por aplicación)': 'Firewall manager (per-app blocking)',
    'Puntuación de seguridad 0-100 en tiempo real': 'Real-time 0-100 security score',
    'Monitor en tiempo real: RAM, CPU, temperatura, batería': 'Real-time monitor: RAM, CPU, temperature, battery',
    'Mantenimiento automático periódico en segundo plano': 'Automatic periodic background maintenance',
    'Protección térmica: optimiza al detectar sobrecalentamiento': 'Thermal protection: optimizes when overheating is detected',
    'Libera RAM, detiene procesos y limpia caché · sin root': 'Frees RAM, stops processes and clears cache · no root',
    'Salud real de la batería en porcentaje': 'Real battery health as a percentage',
    'Ranking de apps por consumo energético': 'App ranking by power consumption',
    'Estimación de tiempo restante': 'Remaining-time estimate', 'Sin root requerido': 'No root required',
    'Mapa de uso de almacenamiento por categoría': 'Storage usage map by category',
    'Limpieza de caché de todas las apps': 'Cache cleanup for all apps',
    'Detección de archivos grandes y duplicados': 'Detection of large and duplicate files',
    'Tráfico en tiempo real por aplicación': 'Real-time per-app traffic',
    'Descarga + subida separados por app': 'Download + upload split per app',
    'Historial de consumo por sesión': 'Per-session usage history', 'Sin root · Android 8+': 'No root · Android 8+',
    'Auditor de permisos — cero falsos positivos en apps del sistema': 'Permission auditor — zero false positives on system apps',
    'Detector de espías — combinaciones peligrosas con descripción en español': 'Spyware detector — dangerous combinations explained',
    'Guard en tiempo real — cámara y micrófono LIBRE / EN USO': 'Real-time guard — camera and mic FREE / IN USE',
    'Anomalías — root, USB debug, VPN, certificados CA, notif listeners': 'Anomalies — root, USB debug, VPN, CA certificates, notif listeners',
    'Mi Huella Digital — puntuación de privacidad personalizada': 'My Digital Fingerprint — personalized privacy score',
    'Editor directo: texto, firma e imagen directamente sobre el PDF': 'Direct editor: text, signature and image right on the PDF',
    'Notas redimensionables · resaltado detecta líneas de texto reales': 'Resizable notes · highlight detects real text lines',
    'Guardar como nuevo archivo o sobrescribir el original': 'Save as a new file or overwrite the original',
    'Combinar, dividir, comprimir, rotar, formularios AcroForm': 'Merge, split, compress, rotate, AcroForm forms',
    'Sin anuncios · sin trackers · código base público en GitHub': 'No ads · no trackers · public source base on GitHub',
    '22 herramientas: edición PDF, visor Word (DOCX)/Excel (XLSX), OCR y firma': '22 tools: PDF editing, Word (DOCX)/Excel (XLSX) viewer, OCR and signing',
    'Editor Markdown con vista previa en vivo y exportación a PDF, HTML y .md': 'Markdown editor with live preview and export to PDF, HTML and .md',
    'Texto libre: crea texto nuevo en cualquier punto, muévelo, ajústalo y edítalo': 'Free text: create new text anywhere, move it, resize it and edit it',
    'Interfaz premium diferenciada · 7 días de prueba gratis (sin tarjeta)': 'Distinct premium interface · 7-day free trial (no card)',
    '100% local · sin anuncios ni telemetría · código privado': '100% local · no ads or telemetry · private code',
    'Editor completo con Markdown': 'Complete editor with Markdown',
    // Coming soon
    'Próximamente': 'Coming soon', 'Pronto': 'Soon', 'En desarrollo': 'In development',
    'Android · Auditor de permisos': 'Android · Permission auditor', 'Windows · Scanner + WiFi + DNS': 'Windows · Scanner + WiFi + DNS',
    'Windows · Hardware + SMART + Bench': 'Windows · Hardware + SMART + Bench', 'Windows · Duplicados + mapa disco': 'Windows · Duplicates + disk map',
    // Toolkit detail page
    'v1.0.0 · Windows 10/11 · ADB · +150 acciones': 'v1.0.0 · Windows 10/11 · ADB · 150+ actions',
    '✓ 10 días de prueba gratis': '✓ 10-day free trial', '18 categorías · +150 acciones': '18 categories · 150+ actions',
    'Sin anuncios · sin telemetría': 'No ads · no telemetry', 'Código privado y protegido': 'Private, protected code',
    'Suscribirse · desde $9.99/mes': 'Subscribe · from $9.99/mo',
    'Interfaz principal · detección de dispositivos en vivo · consola de resultados': 'Main interface · live device detection · results console',
    'Qué incluye': 'What’s included', '🚀 Optimización y rendimiento': '🚀 Optimization & performance',
    'Debloat automático por marca (Samsung, Xiaomi, Motorola…), animaciones, AOT/dexopt, Doze y Mantenimiento completo en un clic.': 'Automatic debloat by brand (Samsung, Xiaomi, Motorola…), animations, AOT/dexopt, Doze and full Maintenance in one click.',
    '📡 Red e Internet': '📡 Network & Internet',
    'Diagnóstico por capas, reparación de "Wi-Fi sin internet", DNS seguro, trazado de ruta, prueba de velocidad, escaneo de redes cercanas y control de datos/APN.': 'Layered diagnostics, "Wi-Fi without internet" repair, secure DNS, route tracing, speed test, nearby-network scanning and data/APN control.',
    '🔋 Hardware y energía': '🔋 Hardware & power',
    'Informe completo de salud de batería, estado térmico, sensores, CPU, IMEI e información completa del equipo.': 'Full battery-health report, thermal status, sensors, CPU, IMEI and complete device info.',
    '🩺 Diagnóstico': '🩺 Diagnostics',
    'Diagnóstico de conexión guiado, registro (log) en vivo y por aplicación, crashes/ANR, informe del sistema y grabación de pantalla.': 'Guided connection diagnostics, live and per-app logging, crashes/ANR, system report and screen recording.',
    '🛡️ Seguridad y permisos': '🛡️ Security & permissions',
    'Detección de gestión corporativa y perfiles administrados, control granular de permisos por app, usuarios/perfiles y estado de cifrado y arranque.': 'Detection of corporate management and managed profiles, granular per-app permission control, users/profiles and encryption/boot status.',
    '💾 Respaldos y archivos': '💾 Backups & files',
    'Copia de fotos/vídeos y memoria interna, transferencia de archivos, limpieza de caché por app y capturas al PC.': 'Copy photos/videos and internal storage, file transfer, per-app cache cleanup and screenshots to the PC.',
    '🔓 Suite avanzada (PRO+)': '🔓 Advanced suite (PRO+)',
    'Optimización extrema, control de CPU, herramientas de recuperación avanzada, limpieza profunda, borrado seguro y OptiMirror (control de pantalla).': 'Extreme optimization, CPU control, advanced recovery tools, deep cleaning, secure wipe and OptiMirror (screen control).',
    'Controla la pantalla desde el PC — incluso varios equipos a la vez': 'Control the screen from the PC — even several devices at once',
    'Visualiza y maneja tu Android desde el ordenador con un motor de espejado integrado (no necesitas instalar nada extra). Si conectas varios dispositivos, elige cuáles y se abre una ventana de control por cada uno.': 'View and control your Android from the computer with a built-in mirroring engine (no extra install needed). If you connect several devices, pick which ones and a control window opens for each.',
    'Una experiencia que evoluciona con tu plan': 'An experience that grows with your plan',
    'PRO · tema esmeralda': 'PRO · emerald theme', 'PRO+ · suite avanzada, tema violeta': 'PRO+ · advanced suite, violet theme',
    'Planes': 'Plans', '6 funciones básicas siempre disponibles + 10 días de prueba con todo desbloqueado.': '6 basic features always available + a 10-day trial with everything unlocked.',
    'Todas las herramientas estándar (+100 acciones), Mantenimiento completo y actualizaciones incluidas.': 'All standard tools (100+ actions), full Maintenance and updates included.',
    'Todo lo de PRO + suite avanzada (root), control de CPU, borrado seguro y OptiMirror.': 'Everything in PRO + advanced suite (root), CPU control, secure wipe and OptiMirror.',
    'Prueba OptiSuite Toolkit gratis durante 10 días': 'Try OptiSuite Toolkit free for 10 days',
    'Sin tarjeta para la prueba. Descárgalo y empieza a optimizar.': 'No card for the trial. Download it and start optimizing.',
    // OptiFleet detail
    'v1.0.0 · Windows 10/11 · ADB · Centro de mando de flotas': 'v1.0.0 · Windows 10/11 · ADB · Fleet command center',
    '✓ 10 días de prueba': '✓ 10-day trial', 'Vídeo en vivo · 10+ dispositivos': 'Live video · 10+ devices',
    'Panel por dispositivo · información en vivo · informe de salud': 'Per-device dashboard · live info · health report',
    '🗂️ Mosaico en vivo': '🗂️ Live mosaic',
    'Todos tus equipos en una rejilla que se actualiza en tiempo real. Elige cuál controlar con un clic.': 'All your devices in a grid that updates in real time. Pick which to control with a click.',
    '📊 Panel por dispositivo': '📊 Per-device dashboard',
    'Batería (salud, ciclos, temperatura), almacenamiento, identidad e IMEI, con informe de verificación.': 'Battery (health, cycles, temperature), storage, identity and IMEI, with a verification report.',
    '🖥️ Ventana de espejo + control': '🖥️ Mirror + control window', '⚙️ Acciones en lote': '⚙️ Batch actions',
    'Reinicia, espeja o gestiona varios equipos seleccionados de una sola vez.': 'Reboot, mirror or manage several selected devices at once.',
    '🔋 Modo bajo consumo': '🔋 Low-power mode',
    'Optimizado para mantener muchos equipos conectados durante sesiones largas sin saturar el PC.': 'Optimized to keep many devices connected during long sessions without overloading the PC.',
    '🔒 Privado y seguro': '🔒 Private & secure',
    'Licencia vinculada a tu equipo. Sin anuncios ni telemetría. Tus datos no salen de tu PC.': 'License tied to your computer. No ads or telemetry. Your data never leaves your PC.',
    '🌐 Control desde el navegador': '🌐 Browser control',
    'Abre y maneja tus teléfonos desde el navegador de cualquier dispositivo de tu red —o desde Internet— con vídeo en vivo y baja latencia.': 'Open and control your phones from the browser of any device on your network —or from the Internet— with low-latency live video.',
    '👥 Compartir por usuario': '👥 Share per user',
    'Crea enlaces de acceso para una persona o grupo: cada uno solo ve y controla los equipos que le asignes. Con caducidad por horas o días y revocación al instante.': 'Create access links for a person or group: each one only sees and controls the devices you assign. With an hours/days expiry and instant revocation.',
    '💾 Respaldo 1-clic': '💾 1-click backup',
    'Copia fotos, vídeos y archivos de tus equipos a tu PC con un clic. Protege la información ante un restablecimiento de fábrica.': 'Copy photos, videos and files from your devices to your PC with a click. Protects your data against a factory reset.',
    '🧹 Optimización por equipo': '🧹 Per-device optimization',
    'Desactiva apps innecesarias y deja cada teléfono con solo las herramientas que usa. Reversible y en lote.': 'Disable unneeded apps and leave each phone with only the tools it uses. Reversible and in batch.',
    '📦 Instala APK y XAPK': '📦 Install APK and XAPK',
    'Instala apps en uno o varios equipos a la vez, incluyendo apps divididas (XAPK), con avisos claros si algo falla.': 'Install apps on one or several devices at once, including split apps (XAPK), with clear warnings if something fails.',
    '🔁 Reconexión automática': '🔁 Automatic reconnection',
    'Si se va la luz o se reinicia el PC, OptiFleet recuerda tus equipos y los vuelve a conectar solo. Sin reconectar uno por uno.': 'If the power goes out or the PC restarts, OptiFleet remembers your devices and reconnects them on its own. No reconnecting one by one.',
    '🔌 Mantener despierto': '🔌 Keep awake',
    'Pantalla apagada pero el sistema y la conexión siguen vivos: menos calor y menos consumo, y los equipos siguen respondiendo.': 'Screen off but the system and connection stay alive: less heat and less power, and the devices keep responding.',
    '➕ Añade equipos de cualquier red': '➕ Add devices from any network',
    'Conecta teléfonos de tu red local o de fuera (por Internet, con una VPN privada o reenvío de puerto). Quedan recordados.': 'Connect phones from your local network or from outside (over the Internet, with a private VPN or port forwarding). They’re remembered.',
    '🔒 Seguridad y auditoría': '🔒 Security & auditing',
    'Mosaico en vivo': 'Live mosaic', 'Toda tu flota en una sola pantalla': 'Your whole fleet on a single screen',
    'Conecta tus dispositivos y velos todos a la vez, en vivo. Selecciona uno o varios para controlarlos, reiniciarlos o espejarlos. Ideal para talleres y pruebas en múltiples modelos.': 'Connect your devices and see them all at once, live. Select one or several to control, reboot or mirror them. Ideal for workshops and testing across many models.',
    'Espejo + control por equipo': 'Mirror + control per device', 'Como un emulador, pero con tus teléfonos reales': 'Like an emulator, but with your real phones',
    'Abre cada equipo en su propia ventana: la pantalla del teléfono y, al lado, una barra de herramientas a mano (encender/apagar, inicio, atrás, recientes, volumen, rotar, pantalla completa). Tócala o deslízala para controlar el equipo. Si el vídeo en vivo no está disponible, sigue mostrando la pantalla por capturas para que nunca te quedes a ciegas.': 'Open each device in its own window: the phone’s screen and, beside it, a handy toolbar (power, home, back, recents, volume, rotate, full screen). Tap or swipe it to control the device. If live video isn’t available, it keeps showing the screen via snapshots so you’re never left blind.',
    'Control desde el navegador': 'Browser control', 'Controla tus teléfonos desde donde estés': 'Control your phones from anywhere',
    'Pega esa dirección https en OptiFleet (campo "Dirección pública"). A partir de ahí, los enlaces que compartas funcionan desde cualquier lugar.': 'Paste that https address into OptiFleet (the "Public address" field). From then on, the links you share work from anywhere.',
    'La dirección https es necesaria para el vídeo fluido en el navegador. En tu red local, el control funciona también sin túnel.': 'The https address is needed for smooth video in the browser. On your local network, control works without a tunnel too.',
    'Otras opciones de servidor (elige la que prefieras)': 'Other server options (pick the one you prefer)',
    'El más rápido para empezar. Cuenta gratuita.': 'The fastest to get started. Free account.',
    'Gratis y sin abrir puertos del router.': 'Free and no router ports to open.',
    'Lo más privado: no expone nada a Internet público.': 'The most private: exposes nothing to the public Internet.',
    'Instala Tailscale en el PC y en tu dispositivo y entra por su IP privada.': 'Install Tailscale on the PC and your device and connect via its private IP.',
    'Alternativa simple y gratuita.': 'A simple, free alternative.', 'Devuelve una dirección pública para pegar en OptiFleet.': 'Returns a public address to paste into OptiFleet.',
    'Precio': 'Price', 'Prueba': 'Trial', '10 días': '10 days',
    'Todo desbloqueado para que pruebes tu flota completa, sin tarjeta.': 'Everything unlocked so you can test your whole fleet, no card.',
    'licencia por equipo': 'license per computer',
    'Control completo, mosaico con vídeo en vivo, espejado y acciones en lote. Actualizaciones incluidas.': 'Full control, live-video mosaic, mirroring and batch actions. Updates included.',
    'Licencia vinculada a tu equipo · requiere ADB (Android Platform-Tools) · Windows 10/11.': 'License tied to your computer · requires ADB (Android Platform-Tools) · Windows 10/11.',
    'Lleva el control de toda tu flota': 'Take control of your whole fleet',
    'Descárgalo y pruébalo 10 días gratis, con todo desbloqueado.': 'Download it and try it free for 10 days, with everything unlocked.',
    // OptiCert detail
    'v1.0.0 · Windows 10/11 · Gratis · Open source': 'v1.0.0 · Windows 10/11 · Free · Open source', '✓ 100% gratis': '✓ 100% free',
    'Certificado firmado (Ed25519)': 'Signed certificate (Ed25519)', 'Sin anuncios ni telemetría': 'No ads or telemetry',
    'Diagnóstico en vivo: salud de batería, temperatura y ciclos en medidores, con grado y semáforo "listo para vender".': 'Live diagnostics: battery health, temperature and cycles on gauges, with a grade and a "ready to sell" traffic light.',
    '🔋 Salud real de batería': '🔋 Real battery health', 'Capacidad, ciclos, temperatura y % de salud. Grado A/B/C/D objetivo.': 'Capacity, cycles, temperature and health %. Objective A/B/C/D grade.',
    '🛡️ IMEI y FRP/iCloud': '🛡️ IMEI and FRP/iCloud', 'Validez del IMEI (Luhn), blacklist (robo) y aviso de cuenta vinculada.': 'IMEI validity (Luhn), blacklist (theft) and linked-account warning.',
    '🧪 Pruebas funcionales': '🧪 Functional tests', 'Cámara en vivo, botones que se marcan al pulsarlos, WiFi/BT en gráfico y test térmico.': 'Live camera, buttons that light up when pressed, WiFi/BT graph and thermal test.',
    '📜 Certificado firmado': '📜 Signed certificate', 'PDF con tu marca, QR de verificación y firma Ed25519 antifalsificable.': 'PDF with your branding, verification QR and a tamper-proof Ed25519 signature.',
    '🏷️ Export a marketplaces': '🏷️ Export to marketplaces', 'Genera el anuncio (título, descripción, precio y CSV) para Wallapop, Back Market, eBay.': 'Generates the listing (title, description, price and CSV) for Wallapop, Back Market, eBay.',
    '🔒 100% local': '🔒 100% local', 'Solo datos del propio equipo. Sin telemetría. Tus datos no salen de tu PC.': 'Only the device’s own data. No telemetry. Your data never leaves your PC.',
    'El certificado que entrega': 'The certificate it produces',
    // OptiGrab detail
    'v1.0.0 · Windows 10/11 + Android 7+ · Gratis · Código privado': 'v1.0.0 · Windows 10/11 + Android 7+ · Free · Private code',
    'Descarga múltiple / listas': 'Batch download / lists',
    'Busca, reproduce y escucha dentro de la app, con recomendaciones. O pega un enlace (o un canal/perfil entero) y descarga. Todo en tu equipo.': 'Search, play and listen inside the app, with recommendations. Or paste a link (or a whole channel/profile) and download. All on your device.',
    'Pestaña de descargas: progreso por archivo, y puedes pausar o cancelar cada una — o todas a la vez.': 'Downloads tab: per-file progress, and you can pause or cancel each one — or all at once.',
    '🎬 Vídeo hasta 4K': '🎬 Video up to 4K', 'Elige la resolución antes de bajar: 360p, 480p, 720p, 1080p, 1440p o 4K, según la fuente.': 'Choose the resolution before downloading: 360p, 480p, 720p, 1080p, 1440p or 4K, depending on the source.',
    '🎵 Solo audio': '🎵 Audio only', 'Extrae la música en el formato que prefieras: MP3, M4A, WAV o AAC.': 'Extract the audio in the format you prefer: MP3, M4A, WAV or AAC.',
    '▶️ Reproduce antes de bajar': '▶️ Play before downloading', 'Busca y escucha dentro de la app, con recomendaciones. Cambia la resolución de reproducción.': 'Search and listen inside the app, with recommendations. Change the playback resolution.',
    '📑 Páginas y perfiles enteros': '📑 Whole pages and profiles', 'Pega un canal o perfil y lista todos sus vídeos para elegir cuáles bajar — sin copiar enlaces uno a uno.': 'Paste a channel or profile and list all its videos to pick which to download — no copying links one by one.',
    '⏸ Cola con pausa y cancelar': '⏸ Queue with pause and cancel', 'Pestaña de descargas con progreso por archivo. Pausa o cancela cada una, o todas a la vez.': 'Downloads tab with per-file progress. Pause or cancel each one, or all at once.',
    '📄 Descarga múltiple y listas': '📄 Batch download and lists', 'Pega varios enlaces o carga un .txt y descárgalos todos a la vez, en vídeo o audio.': 'Paste several links or load a .txt and download them all at once, as video or audio.',
    '⚡ Alta velocidad': '⚡ High speed', 'Descarga por fragmentos en paralelo (configurable). Cola con progreso, velocidad y ETA.': 'Parallel-fragment downloading (configurable). Queue with progress, speed and ETA.',
    '🌐 +1000 plataformas': '🌐 +1000 platforms', 'YouTube, TikTok, Instagram, X, Facebook, Vimeo, Dailymotion y muchas más.': 'YouTube, TikTok, Instagram, X, Facebook, Vimeo, Dailymotion and many more.',
    '🔒 100% privado': '🔒 100% private', 'Todo se procesa en tu equipo. Sin anuncios, sin rastreadores, sin cuenta.': 'Everything is processed on your device. No ads, no trackers, no account.',
    'Hecho con dedicación': 'Made with care', '💜 Apoya OptiGrab': '💜 Support OptiGrab', 'O con criptomonedas': 'Or with crypto',
    'USDT · BSC (BEP-20)': 'USDT · BSC (BEP-20)',
    // OptiDocs (card + detail)
    'IA integrada (sin nube)': 'Built-in AI (no cloud)',
    'v1.0.0 · Windows · Gratis · IA 100% local': 'v1.0.0 · Windows · Free · 100% local AI',
    'Tu <b>asistente de IA 100% local</b>: chatea con tus <b>documentos</b> (con citas), programa, navega internet y <b>optimiza tu PC y móviles</b>. Sin nube, sin telemetría.':
      'Your <b>100% local AI assistant</b>: chat with your <b>documents</b> (with citations), code, browse the internet and <b>optimize your PC and phones</b>. No cloud, no telemetry.',
    '<b>IA propia integrada</b> (Qwen) · también LM Studio/Ollama': '<b>Built-in own AI</b> (Qwen) · also LM Studio/Ollama',
    'Chat con PDF, Word, código… con <b>citas y página</b>': 'Chat with PDF, Word, code… with <b>citations and page</b>',
    'Memoria que aprende · internet · OCR · voz': 'Memory that learns · internet · OCR · voice',
    '<b>Diagnóstico y optimización</b> de PC y Android (ADB)': '<b>Diagnostics and optimization</b> for PC and Android (ADB)',
    'v1.0.0 · Windows 10/11 · Gratis · Código privado': 'v1.0.0 · Windows 10/11 · Free · Private code',
    'Tu <b>asistente de inteligencia artificial 100% local</b>. Carga tus PDFs, Word, código o notas y <b>pregúntale en lenguaje natural</b>: responde citando el documento y la página exactos. Tiene su <b>propia IA integrada</b> (no depende de servidores externos), <b>navega internet</b> cuando tú quieras, <b>programa</b>, recuerda lo que le enseñas, y <b>diagnostica y optimiza tu PC y tus móviles</b> por ADB. Todo en tu equipo — sin nube, sin telemetría, sin que tus datos salgan.':
      'Your <b>100% local AI assistant</b>. Load your PDFs, Word, code or notes and <b>ask in natural language</b>: it answers citing the exact document and page. It has its <b>own built-in AI</b> (no external servers needed), <b>browses the internet</b> whenever you want, <b>codes</b>, remembers what you teach it, and <b>diagnoses and optimizes your PC and phones</b> via ADB. All on your device — no cloud, no telemetry, your data never leaves.',
    '<b>Windows:</b> descomprime y abre <b>OptiDocs.exe</b>. La IA local (modelo Qwen) se descarga dentro de la app la primera vez. También puede conectarse a <b>LM Studio</b> u <b>Ollama</b> si los prefieres.':
      '<b>Windows:</b> unzip and open <b>OptiDocs.exe</b>. The local AI (Qwen model) downloads inside the app the first time. It can also connect to <b>LM Studio</b> or <b>Ollama</b> if you prefer.',
    'OptiDocs: chat con documentos y citas': 'OptiDocs: chat with documents and citations',
    'Pregunta en lenguaje natural sobre tus documentos: responde citando la fuente y la página exactos. Todo en tu equipo.': 'Ask in natural language about your documents: it answers citing the exact source and page. All on your device.',
    'OptiDocs en modo programador': 'OptiDocs in developer mode',
    'Modo programador: genera, repara y optimiza código con modelos Qwen-Coder y bloques copiables.': 'Developer mode: generate, fix and optimize code with Qwen-Coder models and copyable blocks.',
    '🧠 IA local propia': '🧠 Own local AI', 'Descarga un modelo (Qwen2.5) una vez y funciona sin servidores externos. O usa LM Studio/Ollama.': 'Download a model (Qwen2.5) once and it works without external servers. Or use LM Studio/Ollama.',
    '📄 Chat con documentos (RAG)': '📄 Chat with documents (RAG)', 'PDF, Word, TXT, Markdown, CSV, código… con citas del documento y la página.': 'PDF, Word, TXT, Markdown, CSV, code… with citations of the document and page.',
    '🧩 Memoria que aprende': '🧩 Memory that learns', 'Dile «recuerda que…» y lo recordará. Todo editable y en local.': 'Say “remember that…” and it will remember. Fully editable and local.',
    '🌐 Internet opcional': '🌐 Optional internet', 'Busca y lee páginas web reales, citando las fuentes. Lo activas tú con un botón.': 'Searches and reads real web pages, citing sources. You enable it with a button.',
    '💻 Programación': '💻 Programming', 'Genera, repara y optimiza código (Qwen-Coder) con bloques y botón de copiar.': 'Generate, fix and optimize code (Qwen-Coder) with blocks and a copy button.',
    '🩺 Diagnóstico y optimización': '🩺 Diagnostics and optimization', 'Analiza tu PC (CPU, RAM, discos) y tus móviles Android por ADB, y propone mejoras.': 'Analyzes your PC (CPU, RAM, disks) and your Android phones via ADB, and suggests improvements.',
    '🔌 Gestión de APIs': '🔌 API management', 'Llama a cualquier servicio REST con tus claves guardadas en local.': 'Call any REST service with your keys stored locally.',
    '🎙️ Voz y 🖼️ OCR': '🎙️ Voice & 🖼️ OCR', 'Lee respuestas en voz alta y dictado por voz · lee el texto de imágenes (OCR local).': 'Reads answers aloud and voice dictation · reads text from images (local OCR).',
    'Documentos, conversaciones y datos no salen de tu equipo. Sin cuenta, sin anuncios.': 'Documents, conversations and data never leave your device. No account, no ads.',
    'Búsqueda organizada en OptiDocs': 'Organized search in OptiDocs', 'Ajustes de OptiDocs': 'OptiDocs settings',
    '💙 Apoya OptiDocs': '💙 Support OptiDocs',
    'Es <b>gratis</b>, sin anuncios y sin recopilar tus datos. Si te resulta útil, una pequeña aportación ayuda a mantenerlo y a seguir mejorándolo. ¡Mil gracias! 🙌 <b>Al llegar a 1000 estrellas en GitHub se liberará el código fuente.</b>':
      'It is <b>free</b>, ad-free and never collects your data. If you find it useful, a small contribution helps keep it going and improving. Many thanks! 🙌 <b>When it reaches 1000 stars on GitHub the source code will be released.</b>',
    '⭐ Dar estrella en GitHub': '⭐ Star on GitHub', '⭐ Ver en GitHub': '⭐ View on GitHub',
    'Descargar gratis para Windows': 'Download free for Windows',
    // OptiPlay detail
    'v1.0.0 · Android 8+ · Reproductor de música y vídeo · 100% gratis': 'v1.0.0 · Android 8+ · Music & video player · 100% free',
    'Sin permiso de Internet': 'No Internet permission', 'Música + Vídeo': 'Music + Video', 'Descargar APK gratis': 'Download free APK',
    'Inicio · Reproduciendo · Ecualizador · Privacidad y marca': 'Home · Now playing · Equalizer · Privacy & branding',
    '🎧 Audio premium': '🎧 Premium audio', 'Reproducción en segundo plano con notificación y controles, cola, velocidad (0.5–2×), aleatorio y repetición.': 'Background playback with notification and controls, queue, speed (0.5–2×), shuffle and repeat.',
    '🎬 Vídeo universal': '🎬 Universal video', 'Pantalla completa con gestos (brillo, volumen, avance), ajuste de pantalla, subtítulos, pista de audio y Picture-in-Picture.': 'Full screen with gestures (brightness, volume, seek), screen fit, subtitles, audio track and Picture-in-Picture.',
    '🎚️ Ecualizador': '🎚️ Equalizer', 'Ecualizador gráfico de varias bandas con presets, refuerzo de graves y sonido envolvente.': 'Multi-band graphic equalizer with presets, bass boost and surround sound.',
    '📂 Biblioteca completa': '📂 Full library', 'Canciones, álbumes, artistas, carpetas y vídeos, con búsqueda y orden instantáneos.': 'Songs, albums, artists, folders and videos, with instant search and sorting.',
    '⭐ Listas y favoritos': '⭐ Playlists and favorites', 'Crea listas de reproducción, marca favoritos y revisa recientes y más reproducidas. Todo guardado en el teléfono.': 'Create playlists, mark favorites and check recents and most-played. All stored on the phone.',
    '🎨 Material You': '🎨 Material You', 'Temas claro, oscuro y AMOLED, con colores dinámicos extraídos de tu fondo de pantalla. Temporizador de apagado.': 'Light, dark and AMOLED themes, with dynamic colors from your wallpaper. Sleep timer.',
    '🔒 Privacidad absoluta': '🔒 Absolute privacy', 'No declara el permiso de Internet: es incapaz de enviar tus datos. Sin anuncios, sin rastreo, sin cuentas.': 'It doesn’t declare the Internet permission: it’s incapable of sending your data. No ads, no tracking, no accounts.',
    'Privacidad real, no promesas': 'Real privacy, not promises', 'La app que': 'The app that', 'no puede': 'cannot', 'espiarte': 'spy on you',
    'OptiPlay no incluye el permiso de Internet en su manifiesto, así que técnicamente no puede enviar tu información a ningún servidor. No hay anuncios, ni analítica, ni cuentas. Tu biblioteca, tus listas y tu historial se quedan en tu teléfono. Código abierto y auditable.': 'OptiPlay doesn’t include the Internet permission in its manifest, so it technically cannot send your information to any server. No ads, no analytics, no accounts. Your library, your playlists and your history stay on your phone. Open source and auditable.',
    '100% gratuito y sin compras dentro de la app. Para siempre.': '100% free and no in-app purchases. Forever.',
    'Tu música y tus vídeos, como deben ser': 'Your music and videos, as they should be',
    'Rápido, privado y gratis. Descárgalo e instálalo en segundos.': 'Fast, private and free. Download and install it in seconds.',
    // OptiSuite Office detail
    'v1.0.2 · Android · la versión más avanzada': 'v1.0.2 · Android · the most advanced version', '✓ 7 días de prueba · sin tarjeta': '✓ 7-day trial · no card',
    '22 herramientas': '22 tools', '100% local · sin anuncios': '100% local · no ads', 'Descargar APK · v1.0.2': 'Download APK · v1.0.2',
    '✍️ Editar PDF': '✍️ Edit PDF', 'Rotar, comprimir, contraseña, agregar texto, anotaciones, insertar imagen y redactar (ocultar) contenido.': 'Rotate, compress, password, add text, annotations, insert image and redact (hide) content.',
    '📄 Páginas y combinar': '📄 Pages & merge', 'Combinar varios PDF, dividir, y organizar/reordenar páginas con arrastrar y soltar.': 'Merge several PDFs, split, and organize/reorder pages with drag and drop.',
    '🔄 Convertir y traducir': '🔄 Convert & translate', 'Convierte entre formatos y traduce el contenido. Visor de Word (DOCX), Excel (XLSX), PDF e imágenes.': 'Convert between formats and translate the content. Word (DOCX), Excel (XLSX), PDF and image viewer.',
    '✒️ Firmar y formularios': '✒️ Sign & forms', 'Firma digital dibujada y relleno de formularios PDF.': 'Hand-drawn digital signature and PDF form filling.',
    '🔍 Escanear y OCR': '🔍 Scan & OCR', 'Escanea documentos con la cámara y extrae texto de imágenes con OCR. Buscar y reemplazar.': 'Scan documents with the camera and extract text from images with OCR. Find and replace.',
    '⭐ Exclusivo PRO+': '⭐ PRO+ exclusive', 'Editor Markdown con vista previa en vivo (export a PDF/HTML/.md) y creación de texto libre en cualquier punto.': 'Markdown editor with live preview (export to PDF/HTML/.md) and free-text creation anywhere.',
    'En acción': 'In action', 'Inicio · herramientas rápidas': 'Home · quick tools', '22 herramientas organizadas': '22 organized tools',
    'Firmar · escanear · convertir · exportar': 'Sign · scan · convert · export',
    'Tuya para siempre · sin suscripciones · sin anuncios · 7 días de prueba gratis (sin tarjeta).': 'Yours forever · no subscriptions · no ads · 7-day free trial (no card).',
    'Requisitos: Android 8.0 o superior. Activa "instalar apps de orígenes desconocidos" para el APK. Tras comprar, pega tu clave en la app para activar.': 'Requirements: Android 8.0 or higher. Enable "install apps from unknown sources" for the APK. After buying, paste your key in the app to activate.',
    // Platform pages
    'Plataforma': 'Platform', 'Herramientas Windows': 'Windows tools',
    'Aplicaciones nativas para Windows 10 y 11. PowerShell + WPF, sin dependencias externas. Compiladas a .exe de menos de 100 KB.': 'Native apps for Windows 10 and 11. PowerShell + WPF, no external dependencies. Compiled to .exe under 100 KB.',
    'x64': 'x64', 'PowerShell 5.1 · .NET 4.7.2 incluido': 'PowerShell 5.1 · .NET 4.7.2 included',
    'RAM física, virtual y caché en tiempo real': 'Physical, virtual RAM and cache in real time',
    'Temperatura de CPU, top 5 procesos por RAM': 'CPU temperature, top 5 processes by RAM',
    'Gestor de inicio con recomendaciones automáticas': 'Startup manager with automatic recommendations',
    'Historial gráfico de 2 minutos (CPU + RAM)': '2-minute graphical history (CPU + RAM)',
    'Bandeja del sistema + auto-optimización': 'System tray + auto-optimization', '87 KB compilado · sin instalador': '87 KB compiled · no installer',
    'Reemplaza O&O ShutUp10 + CCleaner + gestor de Firewall en una sola herramienta gratuita y de código abierto.': 'Replaces O&O ShutUp10 + CCleaner + a Firewall manager in a single free, open-source tool.',
    '7 servicios de telemetría desactivables con un clic': '7 telemetry services disableable with one click',
    '9 tareas programadas de Microsoft': '9 Microsoft scheduled tasks',
    'Auditor de inicio con clasificación Alto/Medio/Bajo': 'Startup auditor with High/Medium/Low classification',
    '8 categorías de limpieza con vista previa de tamaño': '8 cleanup categories with size preview',
    'Bloqueo de apps al Firewall por selector de archivo': 'Block apps in the Firewall via file picker',
    'En desarrollo para Windows': 'In development for Windows', 'RouterScan · WiFi · DNS Benchmark · Seguridad': 'RouterScan · WiFi · DNS Benchmark · Security',
    'CPU · RAM · SMART · Temperatura · Drivers': 'CPU · RAM · SMART · Temperature · Drivers', 'Mapa disco · Duplicados · Limpieza · Backup': 'Disk map · Duplicates · Cleanup · Backup',
    'Pomodoro · App Timer · Historial de uso': 'Pomodoro · App Timer · Usage history',
    'Herramientas Android': 'Android tools',
    'Aplicaciones nativas para Android. Sin root requerido, sin permisos innecesarios. Descarga directa como APK.': 'Native apps for Android. No root required, no unnecessary permissions. Direct download as an APK.',
    'Sin root': 'No root', 'APK directo': 'Direct APK', 'Kotlin · Jetpack Compose': 'Kotlin · Jetpack Compose', 'v1.6.0 · Gratis': 'v1.6.0 · Free',
    'Optimizador integral para Android: RAM, CPU y temperatura en tiempo real con mantenimiento automático periódico. 100% gratis.': 'All-in-one Android optimizer: RAM, CPU and temperature in real time with automatic periodic maintenance. 100% free.',
    'Monitor en tiempo real y mantenimiento automático': 'Real-time monitor and automatic maintenance',
    'Protección térmica ante sobrecalentamiento': 'Thermal protection against overheating',
    'Libera RAM, detiene procesos, limpia caché · sin root': 'Frees RAM, stops processes, clears cache · no root',
    'Salud real de batería, apps que drenan energía y optimización de consumo.': 'Real battery health, power-draining apps and consumption optimization.',
    'Salud real de la batería en %': 'Real battery health in %', 'Ranking de apps por consumo': 'App ranking by consumption',
    'Análisis de almacenamiento por categoría y limpieza de caché con un toque.': 'Storage analysis by category and one-tap cache cleanup.',
    'Mapa de uso por categoría': 'Usage map by category', 'Detección de archivos grandes': 'Large-file detection',
    'Monitor de tráfico de red por app en tiempo real. Sin root, sin VPN local.': 'Real-time per-app network traffic monitor. No root, no local VPN.',
    'Tráfico por app en tiempo real': 'Per-app traffic in real time', 'Descarga + subida separados': 'Download + upload separated',
    'Android 8+ · Sin root': 'Android 8+ · No root', 'Editor directo: texto, firma e imágenes sobre el PDF': 'Direct editor: text, signature and images on the PDF',
    'Combinar, dividir, comprimir, formularios AcroForm': 'Merge, split, compress, AcroForm forms', 'Guardar como nuevo o sobrescribir el original': 'Save as new or overwrite the original',
    'v1.0.2 · $9.99': 'v1.0.2 · $9.99',
    'El editor de documentos completo para Android: 22 herramientas PDF, visor de Word/Excel, OCR y firma, más editor Markdown y texto libre. Pago único — sin suscripciones, sin anuncios. 7 días de prueba gratis.': 'The complete document editor for Android: 22 PDF tools, Word/Excel viewer, OCR and signing, plus a Markdown editor and free text. One-time payment — no subscriptions, no ads. 7-day free trial.',
    '$9.99 pago único': '$9.99 one-time', '7 días gratis · sin tarjeta': '7-day free trial · no card',
    'En desarrollo para Android': 'In development for Android', 'Pomodoro · App Timer · Uso diario': 'Pomodoro · App Timer · Daily use',
    'Traducción de documentos · Multi-idioma': 'Document translation · Multi-language',
    // Updates page
    'Historial de cambios': 'Changelog', 'Registro completo de versiones y cambios en todas las herramientas.': 'Full record of versions and changes across all tools.',
    'Mejora': 'Improvement', 'PRO & PRO+ · Android': 'PRO & PRO+ · Android',
    'OptiSuite Office PRO y PRO+ v1.0.2 — Edición de texto mejorada': 'OptiSuite Office PRO and PRO+ v1.0.2 — Improved text editing',
    'Editor de texto del documento más preciso: el reemplazo queda ceñido a su celda sin afectar el contenido cercano, ahora puedes cambiar el color del texto y el tamaño del reemplazo coincide con el original. Además, los documentos de Word (DOCX) ya pueden editarse, no solo verse.': 'More precise document text editor: the replacement stays within its cell without affecting nearby content, you can now change the text color and the replacement size matches the original. Plus, Word (DOCX) documents can now be edited, not just viewed.',
    'PRO+ · Android': 'PRO+ · Android', 'OptiSuite Office PRO+ v1.0.1 — Nuevo producto': 'OptiSuite Office PRO+ v1.0.1 — New product',
    'La versión avanzada de OptiSuite Office, con identidad propia. Pago único — 7 días de prueba gratuita.': 'The advanced version of OptiSuite Office, with its own identity. One-time payment — 7-day free trial.',
    'Interfaz premium diferenciada · incluye todo lo de PRO (22 herramientas)': 'Distinct premium interface · includes everything in PRO (22 tools)',
    'Pago único, sin suscripciones, sin anuncios, sin telemetría · código privado': 'One-time payment, no subscriptions, no ads, no telemetry · private code',
    'Actualización': 'Update', 'PRO · Android': 'PRO · Android', 'OptiSuite Office PRO v1.0.1': 'OptiSuite Office PRO v1.0.1',
    'Suite profesional de PDF y oficina para Android. Pago único $12.99 — 7 días de prueba gratuita, sin suscripciones, sin anuncios.': 'Professional PDF and office suite for Android. One-time payment $12.99 — 7-day free trial, no subscriptions, no ads.',
    '21 herramientas PDF · visor Word (DOCX)/Excel (XLSX) · OCR · firma a mano': '21 PDF tools · Word (DOCX)/Excel (XLSX) viewer · OCR · hand signing',
    'Editor de texto: edita el existente o crea texto nuevo; guarda de forma fiable en Descargas': 'Text editor: edit existing or create new text; saves reliably to Downloads',
    'Edición sobre imágenes · botón de información en cada herramienta': 'Editing over images · an info button on each tool',
    '5 herramientas básicas gratis · resto con licencia · 100% local, sin internet': '5 basic tools free · the rest with a license · 100% local, no internet',
    'APK firmado · obfuscación R8 · código privado': 'Signed APK · R8 obfuscation · private code', 'Jun 2026': 'Jun 2026',
    'Rebrand': 'Rebrand', 'OptiSuite PDF v1.5.1 — Rebrand + APK firmado': 'OptiSuite PDF v1.5.1 — Rebrand + signed APK',
    'Nuevo nombre: OptiSuite PDF · paquete: com.opti.pdf · APK 8.37 MB firmado': 'New name: OptiSuite PDF · package: com.opti.pdf · 8.37 MB signed APK',
    'Notas (ANNOTATE) redimensionables con handle inferior-derecho': 'Resizable notes (ANNOTATE) with a bottom-right handle',
    'Resaltado detecta líneas de texto reales, ignora áreas imagen': 'Highlight detects real text lines, ignores image areas',
    'Diálogo de guardado: Sobrescribir o Guardar como [nombre]': 'Save dialog: Overwrite or Save as [name]',
    'Comprimir muestra % de reducción + ruta en Descargas/OptiSuitePDF/': 'Compress shows % reduction + path in Downloads/OptiSuitePDF/',
    'Solucionado error de instalación "paquete no válido" — APK estaba sin firmar': 'Fixed the "invalid package" install error — the APK was unsigned',
    'OptiSuite PDF v1.0.0 — Lanzamiento completo': 'OptiSuite PDF v1.0.0 — Full release',
    'Suite PDF completa para Android. 11 herramientas: combina, divide, comprime, rota, firma, escanea y rellena formularios. Sin anuncios ni trackers. Nombre original: PDFSuite.': 'Complete PDF suite for Android. 11 tools: merge, split, compress, rotate, sign, scan and fill forms. No ads or trackers. Original name: PDFSuite.',
    'Lector con zoom, navegación y modo oscuro': 'Reader with zoom, navigation and dark mode',
    'Historial de recientes y favoritos persistentes': 'Persistent recents and favorites history',
    'Apertura directa desde gestor de archivos (intent VIEW)': 'Direct opening from the file manager (VIEW intent)',
    'Herramientas en v1.1: combinar, dividir, comprimir, rotar': 'Tools in v1.1: merge, split, compress, rotate',
    'Fix': 'Fix', 'WinOptimizer — Corrección de error NULL al iniciar': 'WinOptimizer — Fixed NULL error on startup',
    'Corregido el error "No se puede llamar a un método en una expresión con valor NULL" que aparecía al abrir la aplicación.': 'Fixed the "You cannot call a method on a null-valued expression" error that appeared when opening the app.',
    'movido a scope de script para garantizar acceso desde el handler asíncrono del DispatcherTimer': 'moved to script scope to guarantee access from the DispatcherTimer’s async handler',
    'completamente protegido con bloques try/catch independientes': 'fully protected with independent try/catch blocks',
    'SecuritySuite — Rendimiento mejorado': 'SecuritySuite — Improved performance',
    'Inicio y comandos mucho más rápidos: 16 queries WMI individuales reemplazados por 2 queries batch en caché.': 'Much faster startup and commands: 16 individual WMI queries replaced by 2 cached batch queries.',
    'Cache batch: 2 queries en lugar de 16 al cargar y ejecutar acciones': 'Batch cache: 2 queries instead of 16 when loading and running actions',
    'Toggles individuales actualizan caché en tiempo real': 'Individual toggles update the cache in real time',
    'Puntuación de seguridad instantánea (cache hit)': 'Instant security score (cache hit)',
    'SecuritySuite — Inicio rápido': 'SecuritySuite — Fast startup',
    'La ventana ahora aparece de inmediato al abrir. Los datos se cargan en segundo plano tras mostrar la interfaz.': 'The window now appears immediately on open. Data loads in the background after the interface is shown.',
    'Inicialización diferida al evento ContentRendered: ventana visible de inmediato': 'Deferred initialization to the ContentRendered event: window visible immediately',
    'Eliminado bloqueo síncrono previo al ShowDialog que causaba la demora': 'Removed the synchronous block before ShowDialog that caused the delay',
    'SecuritySuite — Corrección lista de telemetría': 'SecuritySuite — Telemetry list fix',
    'Corrección del bug visual que mostraba la lista de servicios y tareas de telemetría vacía. Icono de aplicación rediseñado.': 'Fixed the visual bug that showed the telemetry services and tasks list empty. App icon redesigned.',
    'Lista de servicios de telemetría ahora muestra los 7 servicios correctamente': 'The telemetry services list now shows all 7 services correctly',
    'Lista de tareas programadas ahora visible con botones funcionales': 'The scheduled tasks list is now visible with working buttons',
    'Icono rediseñado: escudo con candado sobre fondo oscuro': 'Redesigned icon: a shield with a lock on a dark background',
    'SecuritySuite — Lanzamiento inicial': 'SecuritySuite — Initial release',
    'Suite de seguridad y privacidad para Windows. Combina 4 herramientas en una: control de telemetría, auditor de inicio, limpieza de rastros y gestión de Firewall.': 'Security and privacy suite for Windows. Combines 4 tools in one: telemetry control, startup auditor, trace cleanup and Firewall management.',
    'Módulo de telemetría: 7 servicios + 9 tareas programadas de Microsoft': 'Telemetry module: 7 services + 9 Microsoft scheduled tasks',
    'Auditor de inicio con clasificación automática por riesgo (Alto/Medio/Bajo)': 'Startup auditor with automatic risk classification (High/Medium/Low)',
    'Limpiador de 8 categorías con análisis de tamaño previo': '8-category cleaner with prior size analysis',
    'Gestor de Firewall: bloquear/desbloquear apps al acceso a Internet': 'Firewall manager: block/unblock apps from Internet access',
    'Puntuación de seguridad 0-100 calculada en tiempo real': '0-100 security score calculated in real time',
    'WinOptimizer — Gestor de inicio integrado': 'WinOptimizer — Integrated startup manager',
    'Gestor de inicio de Windows directamente en la GUI — sin abrir el Administrador de tareas': 'Windows startup manager right in the GUI — without opening Task Manager',
    'Recomendaciones automáticas por categoría para cada entrada de inicio': 'Automatic per-category recommendations for each startup entry',
    'Eliminado acceso externo al Administrador de tareas': 'Removed external access to Task Manager',
    'WinOptimizer — Correcciones críticas de inicialización': 'WinOptimizer — Critical initialization fixes',
    'con null-check para todos los eventos WPF': 'with a null-check for all WPF events', 'en toda la UI': 'across the whole UI',
    'Operadores de comparación corregidos (espacios requeridos en PS 5.1)': 'Fixed comparison operators (spaces required in PS 5.1)',
    'WinOptimizer — Temperatura CPU, Kill process, Auto-optimización': 'WinOptimizer — CPU temperature, Kill process, Auto-optimization',
    'Temperatura de CPU en tiempo real': 'CPU temperature in real time', 'Botón Kill en Top 5 procesos por RAM': 'Kill button in Top 5 processes by RAM',
    'Auto-optimización programada cada 5/15/30 minutos': 'Scheduled auto-optimization every 5/15/30 minutes',
    // Categories page
    'Explorar por categoría': 'Browse by category', 'Categorías': 'Categories',
    'Las herramientas organizadas por tipo de función. Cada suite combina funciones relacionadas en una sola app.': 'Tools organized by type of function. Each suite combines related features in a single app.',
    'Rendimiento del sistema': 'System performance', 'RAM · CPU · disco · red · procesos': 'RAM · CPU · disk · network · processes',
    'Seguridad y privacidad': 'Security & privacy', 'Telemetría · permisos · firewall': 'Telemetry · permissions · firewall',
    'Batería y energía': 'Battery & power', 'Salud · consumo · optimización': 'Health · consumption · optimization',
    'Almacenamiento': 'Storage', 'Análisis · limpieza · duplicados': 'Analysis · cleanup · duplicates',
    'Red y conectividad': 'Network & connectivity', 'Tráfico · WiFi · DNS · scanner': 'Traffic · WiFi · DNS · scanner',
    'Diagnóstico de hardware': 'Hardware diagnostics', 'CPU · RAM · SMART · temperatura': 'CPU · RAM · SMART · temperature',
    'Productividad': 'Productivity', 'Pomodoro · timer · uso diario': 'Pomodoro · timer · daily use',
    'Seguridad Android': 'Android security', 'Permisos · APK · cámara/mic guard': 'Permissions · APK · camera/mic guard',
    // About page
    'El proyecto': 'The project', 'Sobre OptiSuite': 'About OptiSuite', 'Por qué existe, qué lo diferencia y cómo se desarrolla.': 'Why it exists, what sets it apart and how it’s built.',
    'Un problema real': 'A real problem',
    'Las apps de "optimización" del mercado suelen venir con publicidad invasiva, trackers ocultos, o directamente son malware disfrazado. Las que son legítimas te cobran por funciones básicas o te obligan a crear una cuenta.': 'The "optimization" apps on the market usually come with invasive ads, hidden trackers, or are outright malware in disguise. The legit ones charge for basic features or force you to create an account.',
    'OptiSuite nació de la necesidad de tener herramientas que simplemente funcionen: sin anuncios, sin trackers, sin servidores a los que conectarse, sin cuenta que crear. El modelo es simple: herramientas básicas son gratis y abiertas. Herramientas avanzadas tienen un precio único justo — pagas una vez, usas para siempre. Sin suscripciones, sin sorpresas.': 'OptiSuite was born from the need for tools that simply work: no ads, no trackers, no servers to connect to, no account to create. The model is simple: basic tools are free and open. Advanced tools have a fair one-time price — pay once, use forever. No subscriptions, no surprises.',
    'Cada herramienta está construida para resolver un problema real que las alternativas del mercado resuelven mal o no resuelven sin cobrarte.': 'Each tool is built to solve a real problem that market alternatives solve poorly or don’t solve without charging you.',
    'Herramientas simples = Gratis': 'Simple tools = Free',
    'Código abierto total. Cualquier persona puede revisar, auditar o contribuir. Sin anuncios, sin telemetría, para siempre.': 'Fully open source. Anyone can review, audit or contribute. No ads, no telemetry, forever.',
    'Herramientas complejas = Pago único': 'Complex tools = One-time payment',
    'Sin suscripciones, sin anuncios. $10-15 vs $60-100/año de la competencia. Pagas una vez y la herramienta es tuya para siempre.': 'No subscriptions, no ads. $10-15 vs the competition’s $60-100/yr. Pay once and the tool is yours forever.',
    'Sin instaladores complejos': 'No complex installers',
    'Ejecutables directos (.exe) o APKs. Descargas y usas. Sin asistentes que instalen cosas extra.': 'Direct executables (.exe) or APKs. Download and use. No wizards installing extra things.',
    'Sin telemetría ni ads': 'No telemetry or ads',
    'Ninguna herramienta recopila datos. Ni en la versión gratuita ni en la de pago. Sin trackers, sin servicios de terceros.': 'No tool collects data. Neither the free nor the paid version. No trackers, no third-party services.',
    'Desarrollado con IA': 'Built with AI',
    'Asistencia de inteligencia artificial en el proceso de desarrollo, para mayor calidad y menos errores.': 'AI assistance in the development process, for higher quality and fewer bugs.',
    'Desarrollador': 'Developer', 'Enmanuel Gil': 'Enmanuel Gil', 'Desarrollador independiente': 'Independent developer',
    'Construyo herramientas de optimización y seguridad con el apoyo de inteligencia artificial. Básicas: gratis y código abierto. Accesibles: pago único justo. Profesionales avanzadas: suscripción mensual con actualizaciones incluidas. Siempre sin anuncios y sin telemetría — porque el software ético no debería ser la excepción.': 'I build optimization and security tools with the help of AI. Basic ones: free and open source. Accessible ones: a fair one-time payment. Advanced professional ones: a monthly subscription with updates included. Always ad-free and telemetry-free — because ethical software shouldn’t be the exception.',
    'Apoyar el proyecto': 'Support the project', 'Si alguna herramienta te resultó útil. No es obligatorio — todo seguirá siendo gratuito independientemente.': 'If any tool was useful to you. It’s not required — everything will stay free regardless.',
    '☕ Invítame un café en Ko-fi': '☕ Buy me a coffee on Ko-fi', '♡ Donar en Liberapay (recurrente)': '♡ Donate on Liberapay (recurring)',
    'Red': 'Network', 'BNB Smart Chain (BEP20)': 'BNB Smart Chain (BEP20)', 'Token': 'Token',
    'Escanea el QR con Binance o copia la dirección abajo': 'Scan the QR with Binance or copy the address below',
    'Binance Pay': 'Binance Pay', 'Clic en la dirección para copiar al portapapeles.': 'Click the address to copy it to your clipboard.',
    'Reportar un error': 'Report a bug', '✉️ Soporte por correo: support@optisuite.app': '✉️ Email support: support@optisuite.app',
    '🐛 Reportar bug en OptiSuite Office →': '🐛 Report a bug in OptiSuite Office →', '🐛 Bug en OptiSuite PDF (GitHub) →': '🐛 Bug in OptiSuite PDF (GitHub) →',
    '🐛 Bug en WinOptimizer (GitHub) →': '🐛 Bug in WinOptimizer (GitHub) →',
    // Community page
    'Comunidad': 'Community', 'Reseñas, sugerencias y soporte': 'Reviews, suggestions and support',
    'Comparte tu experiencia, reporta errores o propone mejoras. Toda la interacción es pública y verificada mediante cuenta de GitHub.': 'Share your experience, report bugs or propose improvements. All interaction is public and verified via a GitHub account.',
    'Cuentas verificadas': 'Verified accounts', 'Comentar requiere una cuenta de GitHub. Sin bots, sin spam, sin comentarios anónimos falsos.': 'Commenting requires a GitHub account. No bots, no spam, no fake anonymous comments.',
    '100% transparente': '100% transparent', 'Todos los comentarios son públicos. Nada se modera ni se oculta salvo spam evidente.': 'All comments are public. Nothing is moderated or hidden except obvious spam.',
    'Reporta bugs': 'Report bugs', '¿Encontraste un error? Descríbelo aquí o abre un Issue directamente en el repositorio de la herramienta.': 'Found a bug? Describe it here or open an Issue directly in the tool’s repository.',
    'Sugiere mejoras': 'Suggest improvements', 'Cada sugerencia es leída. Las mejores ideas se incorporan en las próximas versiones.': 'Every suggestion is read. The best ideas are added in upcoming versions.',
    'General': 'General', 'Sistema de comentarios': 'Comment system',
    'Los comentarios se cargarán cuando habilites GitHub Discussions en el repositorio y configures Giscus. Ver instrucciones de activación abajo.': 'Comments will load once you enable GitHub Discussions in the repository and configure Giscus. See activation instructions below.',
    'Ver discusiones en GitHub →': 'View discussions on GitHub →', 'Foro por herramienta': 'Per-tool forum',
    'También puedes ir directamente a las discusiones de cada herramienta en GitHub.': 'You can also go directly to each tool’s discussions on GitHub.',
    'Abrir discusiones →': 'Open discussions →',
    // macOS / Linux pages
    'OptiSuite para': 'OptiSuite for', 'Herramientas de optimización y seguridad para Mac. En desarrollo para 2026.': 'Optimization and security tools for Mac. In development for 2026.',
    'macOS · Próximamente': 'macOS · Coming soon',
    'Editor PDF directo, firma digital, anotaciones y compresión. La misma experiencia que en Android, adaptada al escritorio de Mac.': 'Direct PDF editor, digital signature, annotations and compression. The same experience as on Android, adapted to the Mac desktop.',
    'Edición directa sin re-exportar': 'Direct editing without re-exporting', 'Firma digital con trazado a mano': 'Digital signature with hand drawing',
    'Notas, resaltado e inserción de imágenes': 'Notes, highlighting and image insertion', 'Sin iCloud obligatorio, sin cuenta Apple': 'No mandatory iCloud, no Apple account',
    'MacOptimizer': 'MacOptimizer', 'Monitor de rendimiento para Mac. RAM, CPU, disco y red en tiempo real. Gestor de Login Items y limpieza de caché.': 'Performance monitor for Mac. RAM, CPU, disk and network in real time. Login Items manager and cache cleanup.',
    'Monitor de RAM, CPU y red en tiempo real': 'Real-time RAM, CPU and network monitor', 'Gestor de Login Items (inicio automático)': 'Login Items manager (auto-start)',
    'App nativa — sin Electron, sin Java': 'Native app — no Electron, no Java', 'macOS en el roadmap 2026': 'macOS on the 2026 roadmap',
    'Las herramientas para macOS están planificadas para el segundo semestre de 2026. Sigue el progreso en GitHub.': 'macOS tools are planned for the second half of 2026. Follow the progress on GitHub.',
    'Seguir en GitHub →': 'Follow on GitHub →',
    'Herramientas de código abierto para distribuciones Linux. Siempre gratuitas.': 'Open-source tools for Linux distributions. Always free.',
    'Linux · Próximamente': 'Linux · Coming soon',
    'Editor PDF para Linux. Edición directa, firmas y anotaciones. AppImage portable sin instalación.': 'PDF editor for Linux. Direct editing, signatures and annotations. Portable AppImage with no installation.',
    'AppImage portable — sin instalación, sin root': 'Portable AppImage — no installation, no root', 'Compatible con Ubuntu, Fedora, Arch y derivados': 'Compatible with Ubuntu, Fedora, Arch and derivatives',
    'Sin telemetría, código completamente abierto': 'No telemetry, fully open source', 'LinuxOptimizer': 'LinuxOptimizer',
    'Monitor y optimizador de sistema para Linux. RAM, CPU, procesos y servicios systemd. GUI nativa sin Electron.': 'System monitor and optimizer for Linux. RAM, CPU, processes and systemd services. Native GUI, no Electron.',
    'Monitor de recursos en tiempo real': 'Real-time resource monitor', 'Gestor de servicios systemd': 'systemd services manager',
    'Limpieza de paquetes huérfanos y caché apt/dnf': 'Cleanup of orphan packages and apt/dnf cache', 'Linux — siempre código abierto': 'Linux — always open source',
    'Las herramientas para Linux serán siempre de código abierto y gratuitas. Soporte planificado para 2026.': 'Linux tools will always be open source and free. Support planned for 2026.',
    // Footer
    'Changelog': 'Changelog', 'Contacto': 'Contact', 'Privacidad': 'Privacy', 'Términos': 'Terms', 'Licencia': 'License',
    '© 2026 Enmanuel Gil — MIT License': '© 2026 Enmanuel Gil — MIT License', 'Explora': 'Explore',
    // Home featured card summaries (.card-summary)
    'Monitor de rendimiento completo. Muestra RAM física, virtual, caché, CPU, disco y red en tiempo real. Gestor de inicio de Windows integrado.': 'Complete performance monitor. Shows physical, virtual RAM, cache, CPU, disk and network in real time. Integrated Windows startup manager.',
    'Suite de seguridad y privacidad. Desactiva la telemetría de Microsoft, audita programas de inicio, limpia rastros digitales y gestiona reglas de Firewall.': 'Security and privacy suite. Disables Microsoft telemetry, audits startup programs, cleans digital traces and manages Firewall rules.',
    'Optimizador integral para Android: mantiene RAM, CPU y temperatura en óptimo rendimiento en tiempo real, con mantenimiento automático periódico. 100% gratis, sin anuncios ni telemetría.': 'All-in-one Android optimizer: keeps RAM, CPU and temperature at peak performance in real time, with automatic periodic maintenance. 100% free, no ads or telemetry.',
    'Análisis real de salud de la batería. Detecta aplicaciones que drenan energía en segundo plano y optimiza el consumo del dispositivo.': 'Real battery-health analysis. Detects apps draining power in the background and optimizes the device’s consumption.',
    'Analizador de almacenamiento por categoría. Muestra qué está ocupando espacio y permite limpiar caché con un toque. Sin sorpresas.': 'Storage analyzer by category. Shows what’s taking up space and lets you clear cache with one tap. No surprises.',
    'Monitor de tráfico de red por aplicación en tiempo real. Detecta qué apps están transfiriendo datos y cuánto. Sin root, sin VPN local.': 'Real-time per-app network traffic monitor. Detects which apps are transferring data and how much. No root, no local VPN.',
    'Auditoría completa de seguridad y privacidad para Android. Sin root, sin internet, 100% local. Detecta amenazas reales, monitorea cámara/micrófono en tiempo real y analiza anomalías del dispositivo.': 'Complete security and privacy audit for Android. No root, no internet, 100% local. Detects real threats, monitors camera/microphone in real time and analyzes device anomalies.',
    'Editor PDF completo para Android. Toca el texto para editarlo, arrastra firmas e imágenes sobre la página, notas redimensionables, resaltado inteligente. Sin anuncios, código base público.': 'Complete PDF editor for Android. Tap text to edit it, drag signatures and images onto the page, resizable notes, smart highlight. No ads, public source base.',
    'El editor de documentos completo para Android, con identidad propia: edición PDF, visor de Word/Excel, OCR y firma, más el editor Markdown y la creación de texto libre. Pago único, sin suscripciones, sin anuncios.': 'The complete document editor for Android, with its own identity: PDF editing, Word/Excel viewer, OCR and signing, plus the Markdown editor and free-text creation. One-time payment, no subscriptions, no ads.',
    // Curly-quote variants (must match the page exactly)
    'Pega esa dirección https en OptiFleet (campo “Dirección pública”). A partir de ahí, los enlaces que compartas funcionan desde cualquier lugar.': 'Paste that https address into OptiFleet (the “Public address” field). From then on, the links you share work from anywhere.',
    'Requisitos: Android 8.0 o superior. Activa “instalar apps de orígenes desconocidos” para el APK. Tras comprar, pega tu clave en la app para activar.': 'Requirements: Android 8.0 or higher. Enable “install apps from unknown sources” for the APK. After buying, paste your key in the app to activate.',
    // misc
    'Función': 'Feature',
    'Toolkit': 'Toolkit'
  };

  var _origNode = new WeakMap();
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };

  function applyHtml(en) {
    document.querySelectorAll('p,h1,h2,h3,h4,h5,li,.version,.card-desc,.badge,label,td,th,.feature-item').forEach(function (el) {
      if (en) {
        var key = (el.getAttribute('data-es') != null ? el.getAttribute('data-es') : el.innerHTML).trim();
        var tr = DICT_HTML[key];
        if (tr !== undefined && el.innerHTML.trim() !== tr) {
          if (el.getAttribute('data-es') == null) el.setAttribute('data-es', el.innerHTML);
          el.innerHTML = tr;
        }
      } else if (el.getAttribute('data-es') != null) {
        el.innerHTML = el.getAttribute('data-es');
        el.removeAttribute('data-es');
      }
    });
  }

  function applyText(en) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
        if (p.classList && (p.classList.contains('lang-label') || p.classList.contains('lang-toggle'))) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = w.nextNode())) {
      var raw = n.nodeValue, t = raw.trim();
      if (en) {
        var tr = DICT[t];
        if (tr !== undefined) {
          if (!_origNode.has(n)) _origNode.set(n, raw);
          var i = raw.indexOf(t);
          n.nodeValue = raw.slice(0, i) + tr + raw.slice(i + t.length);
        }
      } else if (_origNode.has(n)) {
        n.nodeValue = _origNode.get(n);
        _origNode['delete'](n);
      }
    }
  }

  function apply(lang) {
    var en = lang === 'en';
    applyHtml(en);
    applyText(en);
    document.documentElement.lang = en ? 'en' : 'es';
    document.querySelectorAll('.lang-label').forEach(function (s) { s.textContent = en ? 'ES' : 'EN'; });
  }

  function getLang() { return localStorage.getItem('os_lang') === 'en' ? 'en' : 'es'; }
  window.setLang = function (l) { localStorage.setItem('os_lang', l); apply(l); };
  window.toggleLang = function () { window.setLang(getLang() === 'en' ? 'es' : 'en'); };

  function init() { apply(getLang()); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);

  window.addEventListener('hashchange', function () { if (getLang() === 'en') setTimeout(function () { apply('en'); }, 40); });
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-page]') && getLang() === 'en') setTimeout(function () { apply('en'); }, 60);
  }, true);
})();
