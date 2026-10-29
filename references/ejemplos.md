# Ejemplos de referencia

> Los ejemplos 1 y 2 son PROVISORIOS, escritos para fijar el estilo inicial. El ejemplo 3 se basa en un caso real del equipo. Reemplazarlos por posts reales aprobados por Analytix a medida que se publiquen. Si hay ejemplos aprobados, priorizarlos sobre cualquier otra pauta.

## Ejemplo 1 · Pilar: Casos y aprendizajes · LinkedIn
> Situación ilustrativa: sirve como referencia de estilo, no publicar tal cual. Para publicarlo, reemplazar por un caso real y completar [DATO].

Un gerente de IT nos dijo: "Necesitamos un dashboard nuevo".

Después de dos reuniones entendimos que el problema no era el dashboard. Era que el reporte de ventas se armaba a mano, con datos de tres sistemas distintos, y llegaba con [DATO] días de atraso.

Un dashboard más lindo sobre datos viejos no iba a cambiar nada.

Lo que hicimos:
→ Centralizamos las fuentes en un data warehouse.
→ Automatizamos la carga diaria.
→ Recién ahí, armamos la visualización.

Resultado: el equipo comercial pasó de mirar el mes pasado a mirar ayer.

La lección que repetimos en casi todos los proyectos de datos: antes de hablar de herramientas, conviene preguntar cuánto tarda hoy un dato en llegar a quien decide.

¿Cuánto tarda en tu empresa?

#DataEngineering #Analytics

## Ejemplo 2 · Pilar: Opinión · X

La mayoría de los pilotos de IA no fallan por el modelo.

Fallan porque nadie definió qué número del negocio tenían que mover.

Si no podés decir qué KPI cambia, todavía no tenés un caso de uso. Tenés una demo.

## Ejemplo 3 · Pilar: Casos y aprendizajes · Ejes: Databricks + Salud · LinkedIn
> Basado en experiencia real del equipo, previa a Analytix. Por eso se presenta como "antes de fundar Analytix".

Antes de fundar Analytix, nos tocó migrar a Databricks toda la arquitectura de datos que sostenía una operación regional de datos de salud en LATAM. Era 2017 y la plataforma todavía no era la opción obvia que es hoy.

El proceso más pesado tardaba 4 días. Después de la migración, 2 horas.

Pero la velocidad no fue lo que más nos enseñó ese proyecto. Fue el costo.

Pasamos de pagar infraestructura todo el tiempo a pagar solo por lo que se procesaba. Y aprendimos que la plataforma sola no baja la factura: lo que la baja es cómo se gestionan los clusters. Bien configurada, la diferencia es enorme. Mal configurada, puede salir más cara que el sistema que reemplaza.

El tercer resultado fue el de mayor impacto: con los datos listos en horas y no en días, aparecieron nuevas formas de explotarlos y nuevos servicios para ofrecer.

Hoy acompañamos a empresas que están empezando ese mismo camino. La pregunta que hacemos al principio es siempre la misma: ¿qué podrías hacer con tus datos si estuvieran listos mañana y no la semana que viene?

#Databricks #DataEngineering #Lakehouse

## Ejemplo 4 · Pilar: Opinión · Eje: Salud · X

En salud, un dato mal integrado no es un problema de reporting.

Es una receta que no valida, una auditoría que no cierra o un riesgo regulatorio.

Por eso la trazabilidad no se agrega al final del proyecto. Se diseña desde el primer pipeline.
