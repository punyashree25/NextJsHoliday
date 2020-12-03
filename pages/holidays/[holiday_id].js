import Link from 'next/link'

export default function Holiday() {
  return (
    <main>
    <Link href={`/`}><a>Back to home</a></Link>
      <br />
      <Link href={`/holidays`}><a>Back to holidays</a></Link>
    </main>
  )
}
