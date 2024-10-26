
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import CurrentTime from './components/CurrentTime'

export default function Home() {
  return (
    <main>
      <h1>hello this is the hoeme page </h1>
      <Link href="/users">to users page</Link>
      <ProductCard/>
      <CurrentTime/>
    </main>
  )
}
