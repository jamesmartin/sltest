import Link from 'next/link'

export default function About() {
  return(
    <div>
      <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
        <a>Home</a>
      </Link>
      <p>About</p>
    </div>
  )
}
