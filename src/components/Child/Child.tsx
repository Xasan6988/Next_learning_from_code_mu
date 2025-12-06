
interface IChildProps {
  text: string
}
export default function Child({ text }: IChildProps) {
  return (
    <div>
      <h1>Child with text:</h1>
      <p>{text}</p>
    </div>
  )
}
