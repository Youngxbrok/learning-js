 let Notes = [];
let noteID = 0;
let editingNoteID = null;

window.addEventListener("DOMContentLoaded", () => {
  Notes = readLocal();
  renderNote();
  applyTheme();
});

// Mostrar el diálogo para nueva nota
const showModal = () => {
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
  editingNoteID = null;
  document.getElementById("noteDialog").showModal();
};

// Cerrar el modal
const closeNote = () => {
  document.getElementById("noteDialog").close();
  editingNoteID = null;
};

// Guardar nota 
const addNote = () => {
  let title = document.getElementById("noteTitle").value.trim();
  let content = document.getElementById("noteContent").value.trim();
  let dialog = document.getElementById("noteDialog");

  if (title === "" || content === "") {
    alert("Note motherfucking title and motherfucking content required.");
    return;
  }

  if (editingNoteID !== null) {
    Notes = Notes.map((note) =>
      note.id === editingNoteID ? { ...note, title, content } : note
    );
  } else {
    noteID = Notes.length > 0 ? Notes[Notes.length - 1].id + 1 : 0;
    Notes.push({ id: noteID, title, content });
  }

  saveLocal();
  renderNote();
  dialog.close();
  editingNoteID = null;
};

// Eliminar nota
const deleteNote = (idDelete) => {
  Notes = Notes.filter((note) => note.id !== idDelete);
  saveLocal();
  renderNote();
};

// Editar nota
const editNote = (id) => {
  const noteToEdit = Notes.find((note) => note.id === id);
  if (!noteToEdit) return;

  document.getElementById("dialogTitle").innerText = "Edit this motherfucking note";
  document.getElementById("noteTitle").value = noteToEdit.title;
  document.getElementById("noteContent").value = noteToEdit.content;
  editingNoteID = id;

  const dialog = document.getElementById("noteDialog");
  dialog.showModal(); 
};


// Renderizar notas
const renderNote = () => {
  const container = document.getElementById("notesContainer");
  container.innerHTML = Notes.map(
    (note) => `
    <div class="note-card">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-content">${note.content}</p>
      <div class="note-actions">
        <button class="edit-btn" onclick="editNote(${note.id})">
          <span class="material-symbols-outlined">edit</span>
        </button>
        <button class="delete-btn" onclick="deleteNote(${note.id})">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>`
  ).join("");
};

// Guardar y leer del almacenamiento local
const saveLocal = () => {
  localStorage.setItem("Notes", JSON.stringify(Notes));
};

const readLocal = () => {
  const saved = localStorage.getItem("Notes");
  return saved ? JSON.parse(saved) : [];
};

// Tema claro/oscuro
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
};

const applyTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark-theme");
  }
}; 

