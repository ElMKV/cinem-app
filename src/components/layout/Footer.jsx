function Footer () {
    return (
      <footer className="page-footer #7e57c2 deep-purple lighten-1">
        <div className="container">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/ElMKV?tab=repositories"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    );
}

export {Footer}