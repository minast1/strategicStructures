import { ResponseType } from "./types";

export const pokemonDetails = (url: string) =>
  fetch(url).then((res) => res.json());

export const pokemonFetcher = (url: string) => {
  let promises: Promise<ResponseType>[] = [];
  for (let i = 1; i <= 800; i++) {
    let uri = `${url}/${i}`;
    promises.push(fetch(uri).then((res) => res.json()));
  }
  return Promise.all(promises).then((results) => {
    return results.map((data) => ({
      name: data.name,
      id: data.id,
      ability: data.abilities[0].ability.name,
      image: data.sprites.other["official-artwork"].front_default,
    }));
  });
};

//export default fetcher;
