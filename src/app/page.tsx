'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import api from '@/services/api'

export default function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "b13e9dbe6a594b6d52752d818420137c",
          language: "pt-BR",
          page: 1,
        }
      })
      setFilmes(response.data.results.slice(0,6))
      setLoading (false)
    }

    loadFilmes();

  }, [])

  if (loading){
    return (
      <h1 className='flex justify-center items-center mt-20'>Carregando filmes...</h1>
    )
  }

  return (
    <main className="mt-12 flex flex-col w-full justify-center items-center">
      <h1>Sujeito PrimeFlix</h1>
      
      <div className='lista-filmes w-full flex flex-wrap gap-12 mt-12 justify-center'>
        {filmes.map((filme) => {
          return (
            <article key={filme.id} className='cursor-pointer nothover hover:scale-110 duration-300'>
              <Link href={`/filme/${filme.id}`}>
              <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} className='mb-2 max-w-56 border-8 shadow-lg' />
              <strong>{filme.title}</strong>
              </Link>
            </article>
          )
        })}
      </div>
    </main>
  );
}
