import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-4/5'>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, mas a página que você está procurando não existe.</p>
      <Link href='/' className='mt-20 bg-purple-600 px-6 py-3 rounded hover:bg-purple-500 duration-300 hover:shadow-md hover:scale-105 uppercase font-semibold'>Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFoundPage;
