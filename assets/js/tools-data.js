// Datos de las herramientas de OptiSuite Office (usados por index.html y tool.html)
window.OPTI_TOOLS = [
  { id:"rotate", name:"Rotar", emoji:"🔄", cat:"Editar", tier:"Gratis",
    desc:"Gira la orientación de las páginas de un PDF. Útil para corregir documentos escaneados al revés o de lado.",
    functions:["Rotar todas las páginas 90°, 180° o 270°","Restaurar la orientación original","Vista previa del resultado antes de guardar"],
    specs:["Entrada/Salida: PDF","Ángulos: 90° / 180° / 270° / original","Alcance: todas las páginas","Procesamiento 100% local, sin conexión","Guarda en la carpeta Descargas"] },

  { id:"compress", name:"Comprimir", emoji:"🗜️", cat:"Editar", tier:"Gratis",
    desc:"Reduce el peso del archivo PDF recomprimiendo su contenido, manteniendo una calidad legible.",
    functions:["Reduce el tamaño del PDF","Muestra el porcentaje ahorrado","Indica la ruta exacta del archivo final"],
    specs:["Entrada/Salida: PDF","Reducción típica: hasta ~70%","Procesamiento 100% local, sin conexión","Guarda en la carpeta Descargas"] },

  { id:"addtext", name:"Agregar texto", emoji:"🔤", cat:"Editar", tier:"Gratis",
    desc:"Editor de texto sobre el PDF: corrige el texto existente o crea texto nuevo en cualquier punto del documento.",
    functions:["Editar el texto existente del PDF","Crear texto nuevo en cualquier posición","Mover, redimensionar y reeditar cada cuadro de texto","Guardado fiable en Descargas"],
    specs:["Entrada/Salida: PDF","Tamaño de fuente ajustable","Multilínea","Procesamiento 100% local, sin conexión"] },

  { id:"password", name:"Contraseña", emoji:"🔒", cat:"Editar", tier:"PRO",
    desc:"Protege un PDF con contraseña o desbloquea uno cifrado que ya conoces.",
    functions:["Proteger con contraseña","Desbloquear un PDF protegido","Permite impresión y copia tras proteger"],
    specs:["Cifrado: AES-128","Entrada/Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"annotate", name:"Anotaciones", emoji:"💬", cat:"Editar", tier:"PRO",
    desc:"Añade notas y resaltados sobre el documento para revisar o comentar.",
    functions:["Notas y texto libre","Resaltado de regiones","Color y posición ajustables"],
    specs:["Entrada/Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"insertimg", name:"Insertar imagen", emoji:"🖼️", cat:"Editar", tier:"PRO",
    desc:"Coloca una imagen de tu galería dentro del PDF y ajústala donde quieras.",
    functions:["Insertar imagen de la galería","Mover, escalar y posicionar","Múltiples imágenes"],
    specs:["Imagen: JPG/PNG","Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"redact", name:"Redactar", emoji:"⬛", cat:"Editar", tier:"PRO",
    desc:"Censura información sensible cubriéndola con rectángulos negros permanentes.",
    functions:["Arrastrar sobre el texto a censurar","Rectángulos negros permanentes","Varias zonas por página"],
    specs:["Entrada/Salida: PDF","Censura aplicada a la capa visible","Procesamiento 100% local, sin conexión"] },

  { id:"merge", name:"Combinar", emoji:"🔗", cat:"Combinar", tier:"Gratis",
    desc:"Une varios PDFs en un único documento, en el orden que elijas.",
    functions:["Seleccionar y reordenar varios PDFs","Vista previa del resultado","Decidir guardar o descartar","Nombre de archivo personalizado"],
    specs:["Entrada/Salida: PDF","Sin límite práctico de archivos","Procesamiento 100% local, sin conexión"] },

  { id:"split", name:"Dividir", emoji:"✂️", cat:"Combinar", tier:"Gratis",
    desc:"Extrae un rango de páginas de un PDF a un documento nuevo.",
    functions:["Elegir página inicial y final","Genera un PDF nuevo con ese rango"],
    specs:["Entrada/Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"organize", name:"Organizar páginas", emoji:"📑", cat:"Páginas", tier:"PRO",
    desc:"Reorganiza el documento: elimina o cambia el orden de las páginas.",
    functions:["Eliminar páginas","Reordenar páginas","Vista de miniaturas"],
    specs:["Entrada/Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"convert", name:"Convertir", emoji:"🔁", cat:"Convertir", tier:"PRO",
    desc:"Convierte imágenes a PDF y abre documentos de Office para visualizarlos.",
    functions:["Imágenes → PDF","Abrir Word (DOCX) y Excel (XLSX) como PDF"],
    specs:["Entrada: JPG/PNG, DOCX, XLSX","Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"translate", name:"Traducir", emoji:"🌐", cat:"Convertir", tier:"PRO",
    desc:"Extrae el texto del PDF y lo envía a tu traductor para entenderlo en otro idioma.",
    functions:["Extrae el texto del PDF","Lo envía al traductor del sistema"],
    specs:["Entrada: PDF","Requiere app de traducción para abrir el texto"] },

  { id:"sign", name:"Firma digital", emoji:"✍️", cat:"Firmar", tier:"PRO",
    desc:"Dibuja tu firma a mano y colócala sobre el documento con total control.",
    functions:["Dibujar la firma a mano","Ubicar, escalar y rotar la firma","Vista previa antes de guardar"],
    specs:["Salida: PDF con firma estampada","Procesamiento 100% local, sin conexión"] },

  { id:"fillform", name:"Formularios", emoji:"🧾", cat:"Firmar", tier:"PRO",
    desc:"Rellena los campos de formulario interactivos de un PDF.",
    functions:["Detecta campos AcroForm","Rellena y guarda los valores"],
    specs:["Entrada/Salida: PDF con AcroForm","Procesamiento 100% local, sin conexión"] },

  { id:"scan", name:"Escanear documento", emoji:"📷", cat:"Escanear", tier:"PRO",
    desc:"Usa la cámara para escanear documentos físicos y guardarlos como PDF.",
    functions:["Captura con la cámara","Guarda el resultado en PDF"],
    specs:["Salida: PDF","Requiere permiso de cámara","Procesamiento 100% local, sin conexión"] },

  { id:"text", name:"Buscar / Extraer", emoji:"🔍", cat:"Escanear", tier:"PRO",
    desc:"Encuentra o extrae el texto de un PDF, incluso de páginas escaneadas mediante OCR.",
    functions:["Buscar texto en el PDF","Extraer todo el texto","OCR de imágenes (reconocimiento óptico)"],
    specs:["Entrada: PDF","OCR: script latino, en el dispositivo","Procesamiento 100% local, sin conexión"] },

  { id:"metadata", name:"Metadatos", emoji:"📋", cat:"Info", tier:"PRO",
    desc:"Consulta la información interna del documento.",
    functions:["Título, autor y asunto","Número de páginas","Detalles del archivo"],
    specs:["Entrada: PDF","Solo lectura"] },

  { id:"export", name:"Exportar", emoji:"📤", cat:"Exportar", tier:"PRO",
    desc:"Convierte el contenido del PDF a formatos editables.",
    functions:["Exportar a TXT","Exportar a DOCX (Word)","Exportar a XLSX (Excel)"],
    specs:["Entrada: PDF","Salida: TXT / DOCX / XLSX","Procesamiento 100% local, sin conexión"] },

  { id:"searchreplace", name:"Buscar / Reemplazar", emoji:"🔁", cat:"Buscar", tier:"PRO",
    desc:"Busca un texto dentro del PDF y reemplázalo por otro.",
    functions:["Buscar coincidencias","Reemplazar el texto encontrado"],
    specs:["Entrada/Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"print", name:"Imprimir", emoji:"🖨️", cat:"Imprimir", tier:"PRO",
    desc:"Envía el documento a imprimir con vista previa del sistema.",
    functions:["Vista previa de impresión","Selección de impresora del sistema"],
    specs:["Entrada: PDF","Usa el servicio de impresión de Android"] },

  { id:"pageconfig", name:"Config. de página", emoji:"📐", cat:"Imprimir", tier:"PRO",
    desc:"Ajusta el formato de página del documento.",
    functions:["Orientación vertical/horizontal","Tamaño de papel (A4, A3, Carta, Legal)","Márgenes"],
    specs:["Entrada/Salida: PDF","Procesamiento 100% local, sin conexión"] },

  { id:"markdown", name:"Markdown", emoji:"📝", cat:"Markdown", tier:"PRO+",
    desc:"Exclusivo de PRO+. Escribe en Markdown con vista previa en vivo y expórtalo a varios formatos.",
    functions:["Editor con vista previa en tiempo real","Encabezados, listas, tablas, código, citas","Exportar a PDF, HTML y .md","Importar archivos .md / .txt"],
    specs:["Salida: PDF / HTML / Markdown","Disponible solo en OptiSuite Office PRO+","Procesamiento 100% local, sin conexión"] }
];
