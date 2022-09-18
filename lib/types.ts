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

type movesType = {
  move: { name: string; url: string };
};

type typesData = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
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
  weight: number;
  moves: movesType[];
  species: { name: string };
  types: typesData[];
  abilities: abilitiesType[];
  stats: { stat: { name: string; url: string } };
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
