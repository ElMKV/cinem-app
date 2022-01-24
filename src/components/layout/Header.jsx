
function Header() {

    return (
      <nav className="#7e57c2 deep-purple lighten-1">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/ElMKV?tab=repositories">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export { Header }