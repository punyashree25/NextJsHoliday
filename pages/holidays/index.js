import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'

export default function Holidays() {
  return (
    <Layout holidays>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <Link href={`/`}><a>Back to home</a></Link>
        <br />
        <Link href={`/holidays/id`}><a>Next page</a></Link>
      </main>
    </Layout>
  )
}
