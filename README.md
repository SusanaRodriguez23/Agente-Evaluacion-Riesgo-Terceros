# Caso 13: Agente de Evaluación de Riesgo de Terceros

**Proyecto IA - Evaluador de Riesgo de Proveedores y Terceros**  
Evaly es un asistente diseñado para evaluar el riesgo de proveedores y terceros de manera rápida y confiable, integrando una base de conocimiento, reglas de riesgo y consultas a herramientas externas.
---

## 📄 Descripción del Caso
- **Caso:** 13 - Agente de Evaluación de Riesgo de Terceros
- **Componente / Rol del Agente:** Evaluador de Riesgo de Proveedores y Terceros
- **Función principal:** Determinar el nivel de riesgo de proveedores basado en información de certificaciones y manejo de datos sensibles.
---
## ⚙️ Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/SusanaRodriguez23/Agente-Evaluacion-Riesgo-Terceros.git
```
2. Abrir Visual Studio Code:
- Abre VS Code.
- Selecciona Archivo → Abrir carpeta y busca la carpeta donde clonaste el proyecto (Agente-Evaluacion-Riesgo-Terceros).

3. Instalar extensión "Live Server" (opcional pero recomendado):
- En VS Code, ve a Extensiones (Ctrl+Shift+X) y busca Live Server.
- Instálala y reinicia VS Code si es necesario.

4. Abrir el proyecto en el navegador:
- Haz clic derecho sobre index.html → Abrir con Live Server.
- Esto abrirá tu proyecto en el navegador y podrás interactuar con Evaly.

5. Editar y guardar cambios:
- Cada vez que modifiques HTML, CSS o JS y guardes, Live Server actualizará automáticamente la página.

---
## ⚙️ Configuración de n8n
1. Los workflows de n8n están disponibles en la carpeta "workflows" del repositorio.

2. Configurar el webhook en Evaly:
- Crea un archivo llamado config.js.
- Asegúrate de que N8N_WEBHOOK_URL apunte a la URL del webhook online de tu n8n:
``` js
export const N8N_WEBHOOK_URL = "https://tu-n8n-online.com/webhook/...";
```
3. Guardar y probar el chat:
- Haz clic en Evaly, escribe tu pregunta y verifica que reciba respuesta desde el webhook de n8n.
  
❓ Preguntas de Prueba

🔹 Tool (Certificaciones de proveedores)
- ¿El proveedor SecureCloud está certificado en ISO 27001 actualmente?
- ¿TechNova tiene vigente su auditoría SOC 2 Type II?
- ¿DataPlus cuenta con alguna certificación de seguridad actualmente?
- ¿El proveedor FortifyCloud mantiene cumplimiento PCI-DSS?
- ¿Cuál es el estado de certificación de GlobalData?

🔹 RAG 
- ¿Es considerado alto riesgo cuando un proveedor almacena datos PII fuera de la UE?
- ¿Cuándo se considera riesgo alto en la transmisión de datos PII?
- ¿Cuándo se clasifica como riesgo alto la pérdida de información personal en la nube?
- ¿Qué situaciones implican riesgo alto al compartir datos PII con terceros no certificados?

🔹 Sin contexto
- ¿Cómo puedo reducir el consumo de memoria RAM en Windows 11?
- ¿Qué lenguajes se usan para crear videojuegos?
- ¿Cuál es el mejor entrenamiento para aumentar masa muscular?
- ¿Cuál es la temperatura máxima del Sol?
![Evaly, asistente evaluador](img/Evaly.png)
