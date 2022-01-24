import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
    year: null,
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(
        this.state.search,
        this.state.type,
        this.state.year
      );
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => (
        { type: event.target.dataset.type }
      ),
      () => {
        this.props.searchMovies(
          this.state.search,
          this.state.type,
          this.state.year
        );
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            placeholder="Поиск"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
            className="validate"
          ></input>
          <button
            className="btn deep-purple pulse search-btn"
            onClick={() =>
              this.props.searchMovies(
                this.state.search,
                this.state.type,
                this.state.year
              )
            }
          >
            Поиск
          </button>
          <div className="checkbox-table">
            <label>
              <input
                name="type"
                type="checkbox"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === "all"}
              />
              <span>Все</span>
            </label>
            <label>
              <input
                name="type"
                type="checkbox"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
              />
              <span>Фильмы</span>
            </label>
            <label>
              <input
                name="type"
                type="checkbox"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span>Сериалы</span>
            </label>
            <div className="input-field col s3">
              <input
                id="year"
                type="text"
                class="validate"
                value={this.state.year}
                onChange={(e) => this.setState({ year: e.target.value })}
                onKeyDown={this.handleKey}
              />
              <label for="year">Год</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
