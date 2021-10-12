import React, { Component } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.goSearch();
    }
    this.setState({ searchTerm: "" });
  };

  goSearch = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.searching(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.searching(searchTerm);

      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can not search movies.tvs..." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchContainer;
