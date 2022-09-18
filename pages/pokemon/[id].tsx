import { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import { pokemonDetails } from "../../lib/fetcher";
import useSWR from "swr";
import Loading from "../../components/Loading";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    pokemonDetails
  );
  console.log(data);
  if (!data) <Loading />;
  return <h1>{id}</h1>;
};

export default Pokemon;
