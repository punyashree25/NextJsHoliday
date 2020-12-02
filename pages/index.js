import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <p className="description">
          Check holidays for different countries.
        </p>

        <Link href={`/holidays`}><a>Holidays Page</a></Link>
      </main>

    </Layout>
  )
}
