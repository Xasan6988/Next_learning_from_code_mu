import { notFound } from 'next/navigation';

const prods = [
	{
		category: 'catg1',
		name: 'prod1',
		cost: 100,
	},
	{
		category: 'catg1',
		name: 'prod2',
		cost: 200,
	},
	{
		category: 'catg2',
		name: 'prod1',
		cost: 300,
	},
	{
		category: 'catg2',
		name: 'prod3',
		cost: 400,
	},
];

export default async function Page({params}: {params: Promise<{slugs: string[]}>}) {
  const [category, name] = (await params)?.slugs;

	const prod = prods.filter((prod) => prod.category === category).filter((prod) => prod.name === name)?.[0];

	if (!prod) return notFound();


  return (
    <div>
      <h1>Name: {prod.name}</h1>
      <h2>Cost: {prod.category}</h2>
    </div>
  )
}
