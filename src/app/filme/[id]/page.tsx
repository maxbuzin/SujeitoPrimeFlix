import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '@/services/api';

interface FilmeProps {
  params: {
    id: string;
  };
}

const Filme: React.FC<FilmeProps> = ({ params }) => {
    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "b13e9dbe6a594b6d52752d818420137c",
                    language: "pt-BR",
                }
            })
            .then ((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {

            })
        }
        loadFilme()
        return () => {

        }
    }, [])

  const { id } = params;
  const [filme, setFilme] = useState ({})
  const [loading, setLoading] = useState(true)

  return <div>Filme ID: {id}</div>;
};

export default Filme;
