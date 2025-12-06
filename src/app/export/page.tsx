import posts from "./posts"
import prods from "./prods"

export default function Page() {
  const itemPostLists = posts?.map((post) => <li key={post}>{post}</li>)
  const itemProdsRows = prods?.map((row) => {
    return <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.cost}</td>
    </tr>
  })

  return <div>
    <ul>
      {itemPostLists}
    </ul>


    <table>
      {itemProdsRows}
    </table>
  </div>
}
