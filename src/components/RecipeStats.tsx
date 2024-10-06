type Props = {
  imageURL: string
  name: string
  timings: string[]
  ingredients: {
    header: string
    list: string[]
  }
}

export const RecipeStats = (props: Props) => {
  return (
    <>
      <h1 class="mt-4 mb-1">{props.name}</h1>
      <h5 class="card-subtitle mb-4 text-muted">
        {props.timings.map((timing, index, timings) => (
          <>
            {timing}
            {index !== timings.length - 1 && <br />}
          </>
        ))}
      </h5>
      <img
        class="w-100 max-width-500 mb-4 rounded-3"
        src={props.imageURL}
        alt={props.name}
      />

      <div class="card-header fs-5 fw-semibold">{props.ingredients.header}</div>
      <ul class="list-group list-group-flush max-width-400">
        {props.ingredients.list.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}
