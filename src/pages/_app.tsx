import '@/styles/globals.css'
import '@/styles/_index.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
