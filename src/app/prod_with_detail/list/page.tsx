import prods from '../prods';

export default function List() {
  const prodsList = prods.map((prod) => <li key={prod.id}>{prod.name}</li>);

  return (
    <ul>{prodsList}</ul>
  )
}
