"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "@/services/api";
import Link from "next/link";

interface FilmeProps {
  params: {
    id: string;
  };
}

const Filme: React.FC<FilmeProps> = ({ params }) => {
  const { id } = params;
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "b13e9dbe6a594b6d52752d818420137c",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("nope");
        });
    }
    loadFilme();
    return () => {
      console.log("desmonte");
    };
  }, []);

  if (loading) {
    return (
      <h1 className="mt-20 flex items-center justify-center">
        Carregando detalhes do filme...
      </h1>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between gap-12 p-5">
      <article
        key={(filme as { id: number }).id}
        className="mt-5 w-fit max-w-lg md:mt-20"
      >
        <strong className="text-center text-3xl">
          {(filme as { title: string }).title}
        </strong>
        <img
          src={`http://image.tmdb.org/t/p/original/${(filme as { backdrop_path: string }).backdrop_path}`}
          alt={(filme as { title: string }).title}
          className="my-2 border-8 shadow-lg"
        />
        <span className="flex flex-col gap-2">
          <h3 className="pl-2 text-xl font-semibold">Sinopse:</h3>
          <p className="pl-2">{(filme as { overview: string }).overview}</p>
          <p className="text-right font-bold">
            ⭐ Avaliação: {(filme as { vote_average: number }).vote_average.toFixed(1)}/10
          </p>
        </span>
        <div className="flex justify-between mt-5 items-center">
          <Link href="" className="rounded border px-4 py-2 hover:border-purple-600 hover:bg-purple-600 duration-300">Trailer</Link>
          <Link href="" className="scale-110 hover:scale-125 active:scale-100 duration-300">❤️</Link>
        </div>
      </article>
      <Link
        href="/"
        className="mt-5 w-fit rounded bg-purple-600 px-6 py-3 font-semibold uppercase duration-300 hover:scale-105 hover:bg-purple-500 hover:shadow-md md:mt-20"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default Filme;
