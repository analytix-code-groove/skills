# Anuncio Databricks Partner · Octubre 2026

Post de LinkedIn de la página de empresa que anuncia el partnership con Databricks. Aprobado por Analytix. **Publicado el 30/10/2026:** https://www.linkedin.com/feed/update/urn:li:activity:7521944184036175872/

El texto también está en `references/ejemplos.md` como Ejemplo 5.

## Artifacts (claude.ai)

| Qué | Link |
|---|---|
| Video con intro de logos (versión publicada, exporta el MP4) | https://claude.ai/artifact/G6oCJrhYduuSLrxZSJZcSy |
| Video simple sin intro (10 s, versión anterior) | https://claude.ai/artifact/8WJmrcwovMZawKv74f5XvK |
| Backup del post final (preview + cuadro del video) | https://claude.ai/artifact/22iQWEXffU5FkmcXno9D2w |
| Lienzo de trabajo (versiones B y D) | https://claude.ai/artifact/YFVbV4HbBBFUKWx8cF1XF8 |
| Alternativa del video en paleta bronce (descartada) | https://claude.ai/artifact/Cq64bH2WeeHUzXfz2g6RMz |

Los artifacts son privados: hay que compartirlos desde el menú Share para que otros los vean.

## Texto del post

```
Una noticia que nos llena de orgullo.

Hace muchos años que trabajamos con @Databricks. Con esta alianza, se abre una etapa nueva: llevar su plataforma de Data + IA directamente a nuestros clientes, para que obtengan más valor de sus datos, aceleren sus iniciativas de IA y democraticen el acceso a la información en toda la organización.

Desde nuestra experiencia en datos, sobre todo en el sector salud, ayudamos a las empresas a:
→ Modernizar su plataforma de datos.
→ Escalar sin que los costos se disparen, pagando solo por lo que usan.
→ Que los líderes del negocio obtengan respuestas de sus datos con solo preguntar.
→ Anticipar tendencias, no solo analizar lo que ya pasó.

Esto recién empieza: en las próximas semanas vamos a compartir casos y aprendizajes. Si estás pensando en modernizar tu plataforma de datos o en cómo Databricks puede complementarla, hablemos.

#Databricks #Analytix #DataEngineering #DataAnalytics
```

Al publicar, escribir `@Databricks` y elegir la página oficial para que quede etiquetada (lo pide la guía de partners de Databricks).

## Video

- 13 s, 1080×1350 (4:5), con música original. Abre con una intro de logos (Analytix + badge Partner) y sigue con la escena del anuncio.
- Izquierda: "Analytix es ahora / Databricks Consulting & SI Partner" sobre negro con flechas del isotipo en contorno, y el badge genérico de Brickbuilder Partner Network.
- Derecha: textura de la marca con una constelación de datos turquesa en movimiento continuo y el logo de Analytix abajo, centrado.
- **MP4 a publicar:** `video/anuncio-databricks-partner-intro-logos.mp4` (1080×1350, 30 fps, 13 s, con audio, 9 MB), exportado desde el artifact con intro de logos.
- `video/anuncio-databricks-partner.mp4` es la versión anterior de 10 s sin intro.
- `video/source/` y `video/store/` corresponden a la versión de 10 s; el código de la intro está solo en el artifact.

## Contenido de esta carpeta

```
assets/          Imágenes usadas (badge Partner, logo recortado, textura low-poly)
post-preview/    Mockup del post en el feed (formato .dc.html del lienzo de diseño)
video/source/    Código legible del video: escena, estilos, música y lista de escenas
video/store/     Copia exacta de la base del artifact del video, para poder restaurarlo
```

Las rutas `/_blob/...` dentro de los `.dc.html` y del video apuntan a archivos guardados en cada artifact: solo se ven ahí. Las imágenes originales están en `assets/`. La tipografía Museo no se incluye por licencia; está en SharePoint (ACG → Shared Documents/brand/logos/others/Museo).

## Decisiones tomadas

- Sin fechas ni cifras de la experiencia previa: se sugiere ("hace muchos años que trabajamos con Databricks").
- Badge genérico de Brickbuilder Partner Network en lugar del Bronze: el bronce choca con el turquesa de Analytix.
- El post no repite el anuncio literal porque ya lo dice el video.

## Guía de comunicación de Databricks (2026)

Según *Databricks x Partners — Communications Guidelines 2026*:
- Etiquetar a Databricks en LinkedIn y X.
- Nombre de la plataforma: "Databricks Data + AI Platform".
- El contenido relacionado con el partnership se valida con el Partner Manager de Databricks.
- Databricks no da citas para anuncios de ingreso a la Partner Network.

## Pendientes

- Validar el post con el Partner Manager de Databricks antes de publicarlo.
- Reemplazar el badge (captura de 340 px) por el archivo original del portal de partners, idealmente en SVG.
- Confirmar la denominación del programa: el badge dice "Brickbuilder Partner Network" y el video "Consulting & SI Partner".
