interface ListProps<T> {
  // items: (string | number )[]
  items: T[]
}
const List = <T,>({items}: ListProps<T>) => {
  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item as React.ReactNode}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
