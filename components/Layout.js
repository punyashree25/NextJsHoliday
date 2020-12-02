import Head from 'next/head'
import Header from './Header'

export const siteTitle = 'Next.js Holiday Search Website'

export default function Layout({ children, home }) {
  return (
    <div className='container'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Website to check for world holidays upto past 5years."
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main>
        { children }
      </main>
    </div>
  )
}
