import { BASE_CARDS } from "./resource.js";

document.addEventListener("DOMContentLoaded", () => {
  const flashcardsGrid = document.getElementById("flashcards-grid");

   const cardsHTML = BASE_CARDS.map(card => `
      <article class="flashcard-item" data-id="${card.id}">
          <span class="category">${card.categoria}</span>
          <h2 class="question">${card.pergunta}</h2>
          <p class="answer-preview">${card.resposta}</p>
      </article>
  `).join("");

  flashcardsGrid.innerHTML = cardsHTML;
});  