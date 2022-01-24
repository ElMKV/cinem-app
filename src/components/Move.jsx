function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
      <div id={id} className="card move ">
        <div className="card-image waves-effect waves-block waves-light">
          {poster === "N/A" ? (
            <img
              className="activator"
              src={`https://dummyimage.com/300x470/7e57c2/&text=${title}`}
            />
          ) : (
            <img className="activator" src={poster} />
          )}
        </div>
        <div className="card-content ">
          <span className="card-title activator grey-text text-darken-4">
            {title}
          </span>
          <p>
            {year} <span className="rig ht">{type}</span>
          </p>
        </div>
      </div>
    );

}

export { Movie }