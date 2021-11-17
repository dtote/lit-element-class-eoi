import { RickAndMortyCard } from "./components/RickAndMortyCard";

const CHARACTERS_URI = "https://rickandmortyapi.com/api/character";

const charactersData = [];

const request = () => {
  return fetch(CHARACTERS_URI)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach(element => {
        charactersData.push({
          name: element.name,
          photoUrl: element.image,
          episodes: element.episode
        });
      });
    });
};

async function buildCards() {
  await request();

  charactersData.forEach((character) => {
    const element = new RickAndMortyCard();
    element.setAttribute("name", character.name);
    element.setAttribute("photoUrl", character.photoUrl);
    element.setAttribute("episodes", element.episodes);
    document.body.appendChild(element);
  });
};
buildCards();
