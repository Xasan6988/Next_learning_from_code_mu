import { notFound } from 'next/navigation';
import prods from '../../prods';
import Child from '@/components/Child/Child';

export default async function DetailProd({params}: {params: Promise<{id: number}>}) {
  const {id} = await params;

  const detailProd = prods.find((prod) => prod.id === Number(id));

  if (!detailProd) return notFound();


  return (
    <div>
      <h1>{detailProd.name}</h1>
      <p>{detailProd.desc}</p>
      <p>{detailProd.cost}</p>


      <Child text='boba' />
    </div>
  )
}
