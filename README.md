# skills

Marketing de Analytix Code Groove.

## Skill `analytix-social-content`

Skill de Claude para escribir y planificar contenido de LinkedIn y X para Analytix: posts, hilos, carruseles y calendarios, orientados a conseguir leads entre CTOs y gerentes de IT de LATAM.

```
skills/ (este repo)
├── SKILL.md                          # Instrucciones principales: flujo, reglas, formato de entrega
├── references/
│   ├── empresa.md                    # Servicios, historia, fundadores (anonimizados), Databricks, cliente ideal
│   ├── voz-y-tono.md                 # Cómo habla Analytix
│   ├── pilares.md                    # Pilares de contenido y ejes transversales
│   ├── playbook-redes.md             # Formatos, frecuencia, horarios, distribución, métricas
│   └── ejemplos.md                   # Posts de referencia
├── build.sh                          # Empaqueta la skill
└── analytix-social-content.skill     # Paquete generado (no editar a mano)
```

### Editar y empaquetar

1. Editá `SKILL.md` o los archivos de `references/`.
2. Regenerá el paquete:

   ```bash
   ./build.sh
   ```

3. Subí el `.skill` generado a Claude.

El `.skill` es un zip generado a partir de los archivos fuente: los cambios se hacen siempre en los `.md`, nunca dentro del zip.

### Marcas pendientes

Las referencias usan `[CONFIRMAR]`, `[DEFINIR]`, `[VALIDAR]` y `[OPCIONAL]` para decisiones abiertas. La skill las trata como no decididas y las informa en "Pendientes" de cada post. Para listarlas:

```bash
grep -rn "\[\(CONFIRMAR\|DEFINIR\|VALIDAR\|OPCIONAL\)" .
```
