export const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Cooking-recipes
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Переключатель навигации"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100 gap-3">
            <li class="nav-item">
              <a class="nav-link" href="triangles/index.html">
                Өчпочмаки
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="meat-soup/index.html">
                Суп с фрикадельками / Лапша
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="borsch/index.html">
                Борщ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
