# Playbook de publicación (criterio experto)

Estas son buenas prácticas generales. Los algoritmos cambian: cuando haya datos propios de Analytix (qué posts rindieron más), priorizarlos sobre estas pautas.

**Canal principal: LinkedIn.** Es donde está el cliente ideal (CTOs, gerentes y jefes de IT de LATAM) y el único canal que figura en el brochure. X es secundario: sumarlo solo si hay tiempo para sostenerlo con constancia. [CONFIRMAR: ¿existe y se va a usar una cuenta de X?]

## LinkedIn (página de empresa)

**Qué premia la plataforma**
- Tiempo de lectura (dwell time): posts que se leen completos y se expanden con "ver más".
- Comentarios con sustancia, sobre todo en la primera hora. Valen más que los likes.
- Conversación: que la página responda los comentarios genera más alcance.
- Contenido nativo: los links externos en el cuerpo reducen el alcance; van en el primer comentario.

**Formatos, de mayor a menor potencial para este público**
1. **Carrusel (documento PDF):** ideal para checklists, frameworks y "X errores comunes". Se guarda y se comparte mucho. 6 a 10 slides, una idea por slide, la primera slide es el gancho. Usar la identidad visual de `identidad-visual.md` (fondo negro low-poly, blanco y turquesa `#04D6A9`, tipografía Museo, logo oficial) para que se reconozca la marca.
   Ideas: "Errores de configuración de clusters que inflan la factura de Databricks", "Qué revisar antes de migrar a un lakehouse", "La cadena de datos en salud, actor por actor".
2. **Texto + imagen propia:** diagrama simple, antes/después ("4 días → 2 horas"), arquitectura de referencia. Evitar imágenes de stock. **En salud, nunca usar capturas con datos reales, aunque estén anonimizados**: usar diagramas o datos ficticios.
3. **Solo texto:** funciona bien para opinión y relatos de casos.
4. **Encuesta:** usar poco (1 por mes como máximo); útil para abrir conversación sobre un dolor ("¿Qué frena más tus proyectos de datos?", "¿Dónde está hoy tu plataforma de datos: on-premise, cloud, migrando?").
5. **Video corto:** solo si hay una persona real del equipo explicando algo; no animaciones genéricas. [DEFINIR: si aparecen los fundadores, la regla de no nombrarlos pierde sentido; decidir si el video se publica desde sus perfiles personales.]

**Frecuencia y horarios**
- Página de empresa: 3 posts por semana es un ritmo sostenible y suficiente al inicio. Constancia antes que volumen.
- Mejores días para B2B: martes a jueves. Evitar viernes por la tarde y fines de semana.
- Franjas: 9 a 11 h y 12 a 14 h (hora de Argentina). Si el público objetivo incluye México, Colombia o Perú (2 a 3 horas menos), priorizar la franja de 12 a 14 h de Argentina (10 a 12 h en Bogotá y Lima, 9 a 11 h en Ciudad de México), que cae en horario laboral en toda la región. La franja de 9 a 11 h de Argentina es temprano para ellos (6 a 9 h).

**Mix mensual sugerido (≈12 posts)**

| Pilar | Posts/mes | Ejemplo de tema |
|---|---|---|
| 1. Casos y aprendizajes | 4 | Un resultado de la migración a Databricks por post |
| 2. Opinión | 3 | Lakehouse vs. warehouse, IA sobre datos gobernados |
| 3. Contenido práctico | 3 | Carrusel de checklist o errores comunes |
| 4. Servicios | 1 a 2 | Reunión exploratoria de 15 minutos o diagnóstico |
| 5. Equipo | 0 a 1 | Hito: partnership con Databricks |

Cuidar los ejes de `pilares.md`: alrededor de 5 posts del mes con foco en salud y 3 con foco en Databricks (se pueden superponer).

**Distribución (clave para una página de empresa)**
- El alcance orgánico de una página es limitado: el multiplicador real son las personas.
- **Perfiles personales de los fundadores: el canal más potente que tiene Analytix.** Sus perfiles ya muestran su trayectoria, así que ahí pueden contar la experiencia en primera persona ("cuando lideraba la migración a Databricks..."), algo que la página de empresa no puede hacer por la regla de anonimato. Recomendado: que cada fundador publique 1 post propio por semana y comparta con texto propio los posts de la página. [DEFINIR: alcance de la regla de anonimato en perfiles personales.]
- Pedir que 3 a 5 personas del equipo comenten o compartan con su propio texto en la primera hora (no solo "like").
- Responder todos los comentarios dentro de las primeras horas, con respuestas que sigan la conversación (una pregunta de vuelta), no solo "¡Gracias!".
- Etiquetar personas o empresas solo si son relevantes al contenido; nunca etiquetar en masa. **Databricks:** etiquetarla en posts sobre la plataforma con contenido de valor (no en cada mención), porque puede ampliar el alcance si la comparten o comentan. Nunca etiquetar a clientes ni a empleadores anteriores.
- Reciclar: un buen caso puede volver como carrusel, como opinión y como hilo en X semanas después. El caso de la migración a Databricks da para al menos 4 piezas: velocidad, costos, nuevos negocios y aprendizajes.

## X (canal secundario)

**Qué premia la plataforma**
- Respuestas y conversación. Participar en hilos de otros (referentes de datos, IA y cloud en español) suma tanto como publicar.
- Posts con opinión clara y concisa.
- Hilos bien armados, con el primer post autosuficiente.

**Frecuencia y horarios**
- Si se usa: al menos 3 a 4 posts por semana; 1 a 2 por día si hay capacidad. X tolera más volumen que LinkedIn.
- Mismas franjas de mañana y mediodía, días hábiles.
- Complementar con 10 a 15 minutos diarios respondiendo a cuentas del público objetivo.
- Atajo realista: adaptar las ideas de opinión de LinkedIn a posts cortos (como el ejemplo 2 y el ejemplo 4 de `ejemplos.md`).

## Medir lo que importa (objetivo: leads)

Las métricas de vanidad (likes, impresiones) sirven para ajustar formatos, pero el éxito se mide con:
- Comentarios de personas del perfil objetivo (CTOs, gerentes de IT).
- Visitas a la página y nuevos seguidores que coinciden con ese perfil.
- Mensajes directos y consultas que mencionan un post.
- Clics al sitio (en posts con link en comentario).
- Reuniones exploratorias de 15 minutos agendadas.
- Origen de las consultas por eje (salud, Databricks, otras industrias): sirve para ajustar los porcentajes de `pilares.md` con datos reales.
- Posts de la página vs. posts de los perfiles de los fundadores: cuál genera más consultas.

Revisión sugerida: cada mes, identificar los 3 posts con más comentarios de calidad y repetir su pilar, formato y tipo de gancho.

## Señales de alerta al evaluar una idea
- No toca un dolor concreto del CTO → buscar otro ángulo.
- Solo habla de Analytix → reformular desde el problema del lector.
- Podría haberlo escrito cualquier consultora → agregar experiencia propia, un caso, un dato de salud o una opinión tomada.
- Es demasiado amplio ("la importancia de los datos") → achicarlo a una situación específica.
- Nombra a un cliente, a un fundador o a un empleador anterior → anonimizar.
- Presenta experiencia previa a Analytix como proyecto de Analytix → aclarar "antes de fundar Analytix...".
- Usa Databricks como sello ("somos partners 🚀") sin aportar criterio → contar qué aprendimos usándola.
