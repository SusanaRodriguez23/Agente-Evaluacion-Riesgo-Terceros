/*                 IMPORTAR CONFIG                       */

import { N8N_WEBHOOK_URL } from './config.js';


/*                 MODO OSCURO                          */

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


/*              ABRIR Y CERRAR CHAT                     */

const openChatBtn = document.getElementById("openChat");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const pageContent = document.getElementById("pageContent");

openChatBtn.addEventListener("click", () => {
  chatBox.style.display = "flex";
  pageContent.classList.add("blur");
  chatBox.setAttribute("aria-hidden", "false");
});

closeChat.addEventListener("click", () => {
  chatBox.style.display = "none";
  pageContent.classList.remove("blur");
  chatBox.setAttribute("aria-hidden", "true");
  while (messages.children.length > 1) {
    messages.removeChild(messages.lastChild);
  }
});

/*          MENSAJERÍA Y CONEXIÓN A N8N                 */

const sendBtn = document.getElementById("sendChat");
const chatInput = document.getElementById("chatInput");
const messages = document.getElementById("messages");

let isSending = false;

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const txt = chatInput.value.trim();
  if (!txt || isSending) return;

  isSending = true;
  chatInput.value = "";

  addMessage(txt, "user");
  const typingMsg = addMessage("…", "bot");

  const nombreProveedorMatch = txt.match(/proveedor (\w+)/i);
  const nombreProveedor = nombreProveedorMatch ? nombreProveedorMatch[1] : "";

  // Usar la URL de config.js
  fetch(N8N_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      pregunta: txt,
      nombre_proveedor: nombreProveedor
    })
  })
    .then(async response => {
      if (!response.ok) throw new Error("HTTP error " + response.status);
      return response.json();
    })
    .then(data => {
      typingMsg.textContent = data.respuesta || "No tengo información al respecto.";
    })
    .catch(() => {
      typingMsg.textContent = "Error al conectar con el servidor.";
    })
    .finally(() => {
      isSending = false;
    });
}

/*           FUNCIÓN PARA AGREGAR MENSAJES              */

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = type === "user" ? "msg-user" : "msg-bot";
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}
