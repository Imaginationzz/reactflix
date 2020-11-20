import React, { PureComponent } from "react";
import SingleMovie from "./singleMovie";

export default class Gallery extends PureComponent {
  state = {
    key: "apikey=ad2a416a&s=",
    title: [],
    url: "http://www.omdbapi.com/?",
    resultTitle: "",
    img: "",
    result: [],
  };

  arrayMovie = [];

  fetcher = async (title) => {
    title = this.array[this.array.length - 1];

    try {
      let response = await fetch(this.state.url + this.state.key + title);
      let result = await response.json();
      //console.log(result, "dddddd");
      this.arrayMovie.push(result);
      this.setState({ result: [...this.state.result, result.Search] });
      console.log(this.state.result);
      return result;
    } catch (error) {}
  };

  array = [];

  updateTitle = (e) => {
    // console.log(e)
    let titleSearch = e.currentTarget.value;
    this.array.push(titleSearch);
    // console.log(this.array)
  };

  render() {
    return (
      <div className="gallery">
        <input
          type="text"
          placeholder="Saga"
          id="search"
          onChange={this.updateTitle}
        />
        <input
          type="button"
          value="Add"
          onClick={() => {
            this.fetcher(this.state.title);
          }}
        />

        {this.state.result.map((movie, index) => {
          movie = movie.sort((a, b) => a.Year.localeCompare(b.Year));
          return (
            <div className="saga" key={index}>
              {movie.reverse().map((saga, index) => {
                return (
                  <SingleMovie
                    title={saga.Title}
                    img={saga.Poster}
                    key={index}
                    year={saga.Year}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
