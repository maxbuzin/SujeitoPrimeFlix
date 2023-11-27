import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@/components/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='main'>
			<nav className='nav'>
				<Link href=''>
					<Button title='Favoritos' />
				</Link>
			</nav>
			<div className='hero'>
				<h1>PrimeFlix</h1>
				<a
					href='https://sujeitoprogramador.com'
					target='_blank'>
					by Sujeito Programador
				</a>
			</div>
			<section className='content'>Filmes</section>
			<footer>
				<p>Developed by</p>{' '}
				<a
					href='http://maxbuzin.com'
					target='_blank'>
					Max Buzin
				</a>
			</footer>
		</main>
	)
}
