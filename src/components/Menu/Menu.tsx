import Link from 'next/link';

export default function Menu() {
  return <nav>
    <Link href="/">home</Link>
    <Link href="/about">about</Link>
    <Link href="/price">price</Link>
    <Link href="/contacts">contacts</Link>
  </nav>

}
