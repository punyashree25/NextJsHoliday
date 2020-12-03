import '../styles/globals.css'
import App from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

export default function HolidayApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Website to check for world holidays upto past 5years."
        />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
