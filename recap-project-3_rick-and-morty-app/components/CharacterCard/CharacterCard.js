import { fetchCharacters } from "../../index.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

export async function CharacterCard() {
  const characters = await fetchCharacters();

  characters.forEach((character) => {
    const { image, name, status, type, episode } = character;

    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src=${image}
        alt=${name}
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">${status}</dt>
        <dd class="card__info-description">Alive</dd>
        <dt class="card__info-title">${type}</dt>
        <dd class="card__info-description"></dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${episode.length}</dd>
      </dl>
    </div>`;
    cardContainer.appendChild(card);
  });
}
