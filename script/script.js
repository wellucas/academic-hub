import { BASE_CARDS } from "./resource.js";

const searchCards = (query) => {
  const flashcardsGrid = document.getElementById("flashcards-grid");

  const filteredCards = BASE_CARDS.filter((card) => {
    const question = card.pergunta.toLowerCase();
    return question.includes(query.toLowerCase());
  });

  flashcardsGrid.innerHTML = filteredCards
    .map((card) => `
      <article class="flashcard-item" data-id="${card.id}">
        <span class="category">${card.categoria}</span>
        <h2 class="question">${card.pergunta}</h2>
        <p class="answer-preview">${card.resposta}</p>
      </article>
    `)
    .join("");
};