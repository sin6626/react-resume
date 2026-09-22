export const SinList = ({ items }: { items: string[] }) => {
  const RenderFn = () => {
    return items.map((item, index) => {
      return (
        <li className="" key={index}>
          {item}
        </li>
      )
    })

  }

  return (
    <>
      <ul className="list-disc pl-5">
        { RenderFn() }
      </ul>
    </>
  )
}