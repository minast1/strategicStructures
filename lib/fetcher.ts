import axios, { AxiosResponse } from "axios";
export type pokeData = {
  name: string;
  url: string;
};
export type initialDataType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: pokeData[];
};

export type Pokadex = {
  name: string;
  id: number;
  ability: string;
  image: string;
};
interface abilitiesType {
  ability: {
    name: string;
  };
}
export interface ResponseType {
  id: number;
  abilities: abilitiesType[];
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
    back_shiny: string;
    front_shiny: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
    };
  };
}

export const getDetails = (data: pokeData[]) =>
  axios
    .all(data.map(({ url }) => axios.get(url)))

    .then((res) => res);

export const pokemonFetcher = (url: string) => {
  let promises: Promise<ResponseType>[] = [];
  for (let i = 1; i < 500; i++) {
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
