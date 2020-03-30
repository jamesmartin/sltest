import Link from 'next/link'

export default function Index() {
  return(
    <div>
      <Link href="/about" as={`${process.env.ASSET_PREFIX}/about`}>
        <a>About</a>
      </Link>
      <p>Hello, Next.js</p>
    </div>
  )
}
