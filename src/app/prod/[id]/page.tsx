const prods = [
	{
		id: 1,
		name: 'prod1',
		cost: 100,
	},
	{
		id: 2,
		name: 'prod2',
		cost: 200,
	},
	{
		id: 3,
		name: 'prod3',
		cost: 300,
	},
];

export default async function Page({params}: {params: Promise<{id: number}>}) {
  const {id} = await params;

  if (id >= prods.length) {
    return (
      <div>
        <h1>Prod not found</h1>
      </div>
    )
  }

  const selectedProd = prods[id - 1];

  return (
    <div>
      <h1>Name: {selectedProd.name}</h1>
      <h2>Cost: {selectedProd.cost}</h2>
    </div>
  )
}
