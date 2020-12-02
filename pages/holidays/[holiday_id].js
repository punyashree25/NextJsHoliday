import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../../components/Layout'

export default function Holidays() {
  return (
    <Layout holiday>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
      <Link href={`/`}><a>Back to home</a></Link>
        <br />
        <Link href={`/holidays`}><a>Back to holidays</a></Link>
      </main>
    </Layout>
  )
}
