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
      <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed break-words">
        { RenderFn() }
      </ul>
    </>
  )
}