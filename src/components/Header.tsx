import { Link } from "preact-router"

// TODO: Improve
export const Header = () => {
  return (
    <Link class="d-flex justify-content-center align-items-center p-4 navbar-brand bg-light overflow-x-hidden text-center" style={{ fontSize: '1.25rem' }} href="/recipes">
      <p class="m-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <span class="mx-4" key={index}>{index % 2 == 0 ? 'c0ok-recipes' : 'click to home'}</span>
        ))}
      </p>
    </Link>
  )
}
