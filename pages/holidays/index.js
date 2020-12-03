import Link from 'next/link'

export default function Holidays() {
  return (
    <main>
      <Link href={`/`}><a>Back to home</a></Link>
      <br />
      <Link href={`/holidays/id`}><a>Next page</a></Link>
    </main>
  )
}
