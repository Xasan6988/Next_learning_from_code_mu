import Link from 'next/link';
import prods from '../prods';

export default function List() {
  const prodsList = prods.map((prod) => <li key={prod.id}><Link href={`/prod_with_detail/detail/${prod.id}`}>{prod.name}</Link></li>);

  return (
    <ul>{prodsList}</ul>
  )
}
