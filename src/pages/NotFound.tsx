import { RoutableProps } from "preact-router"
import { FC } from "preact/compat"

export const NotFound: FC<RoutableProps> = () => {
  return <div class="d-flex flex-column justify-content-center align-items-center overflow-y-hidden text-center" style={{marginTop: '10rem'}}>
    <h1 class="display-1">404 Not Found</h1>
    <p>четыре.</p>
  </div>
}
