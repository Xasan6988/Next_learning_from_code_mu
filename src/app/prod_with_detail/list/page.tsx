import Link from 'next/link';
import prods from '../prods';
import style from './list.module.css'

export default function List() {
  const prodsList = prods.map((prod) => <li key={prod.id} className='prod_li'><Link href={`/prod_with_detail/detail/${prod.id}`}>{prod.name}</Link></li>);

  return (
    <ul className={style.list}>{prodsList}</ul>
  )
}
