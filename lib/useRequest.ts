import useSWR from "swr";
import { initialDataType, ResponseType } from "./fetcher";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const limit = 16;
export default function useFetchPokemon<T>(name?: string | undefined) {
  const uri = name ? `${API_URL}/${name}` : `${API_URL}?limit=${limit}`;
  const { data, error, mutate } = useSWR<T>(uri, fetcher);

  return { data, error, mutate };
}
