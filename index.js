const greetings = {
  Chinese: "你好，@。",
  "Chinese (informal)": "嗨，@！",
  Spanish: "Hola, @.",
  English: "Hello, @.",
  "English (informal)": "Hey, @!",
  Hindi: "नमस्ते, @।",
  "Hindi (informal)": "अरे, @!",
  Portuguese: "Olá, @.",
  "Portuguese (informal)": "Ei, @!",
  Russian: "Привет, @.",
  Japanese: "こんにちは、 @。",
  "Japanese (informal)": "ねえ、@！",
  Korean: "안녕, @.",
  French: "Bonjour, @.",
  "French (informal)": "Salut, @!",
  German: "Hallo, @."
};

const output = document.getElementById("output");

function handleNameChange(name) {
  console.log(name);
  document.title = `Hey, ${name}!`;
  output.innerHTML = "";
  for (let [lang, greeting] of Object.entries(greetings)) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${lang}</td>
      <td>${greeting.replace("@", name)}</td>
    `;
    output.appendChild(tr);
  }
}

handleNameChange("Steve");
