import React, { PureComponent } from "react";
import SingleMovie from "./SingleMovie";

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

        {this.state.result.map((movie) => {
          return (
            <div className="saga">
              {movie.map((saga, index) => {
                return (
                  <SingleMovie
                    title={saga.Title}
                    img={saga.Poster}
                    key={index}
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
