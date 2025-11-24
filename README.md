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
❓ Preguntas de Prueba
🔹 Tool (Certificaciones de proveedores)
- ¿El proveedor SecureCloud está certificado en ISO 27001 actualmente?
- ¿TechNova tiene vigente su auditoría SOC 2 Type II?
- ¿DataPlus cuenta con alguna certificación de seguridad actualmente?
- ¿El proveedor FortifyCloud mantiene cumplimiento PCI-DSS?
- ¿Cuál es el estado de certificación de GlobalData?

🔹 RAG (Alto riesgo)
- ¿Es considerado alto riesgo cuando un proveedor almacena datos PII fuera de la UE?
- ¿Cuándo se considera riesgo alto en la transmisión de datos PII?
- ¿Cuándo se clasifica como riesgo alto la pérdida de información personal en la nube?
- ¿Qué situaciones implican riesgo alto al compartir datos PII con terceros no certificados?

🔹 Sin contexto
- ¿Cómo puedo reducir el consumo de memoria RAM en Windows 11?
- ¿Qué lenguajes se usan para crear videojuegos?
- ¿Cuál es el mejor entrenamiento para aumentar masa muscular?
- ¿Cuál es la temperatura máxima del Sol?
