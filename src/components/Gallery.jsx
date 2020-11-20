import React, { PureComponent } from "react";
import SingleMovie from "./singleMovie";

export default class Gallery extends PureComponent {
  state = {
    key: "apikey=ad2a416a&s=",
    title: "",
    url: "http://www.omdbapi.com/?",
    resultTitle: "",
    img: "",
    result: [],
    result2: [],
    result3: [],
    title2: "",
    title3: "",
  };

  // componentDidMount = async ()=>{
  //         try {
  //             let response = await fetch(this.state.url+this.state.key+this.state.title)
  //             let result = await response.json()
  //             this.setState({result: result.Search})
  //             return result
  //         } catch (error) {

  //         }
  // }

  fetcher = async (title) => {
    try {
      let response = await fetch(this.state.url + this.state.key + title);
      let result = await response.json();
      this.setState({ result: result.Search });
      console.log(this.state.result);
      return result;
    } catch (error) {}
  };

  fetcher2 = async (title) => {
    try {
      let response = await fetch(this.state.url + this.state.key + title);
      let result2 = await response.json();
      this.setState({ result2: result2.Search });
      console.log(this.state.result);
      return result2;
    } catch (error) {}
  };

  fetcher3 = async (title) => {
    try {
      let response = await fetch(this.state.url + this.state.key + title);
      let result3 = await response.json();
      this.setState({ result3: result3.Search });
      console.log(this.state.result);
      return result3;
    } catch (error) {}
  };

  updateTitle = (e) => {
    // console.log(e)
    let titleSearch = e.currentTarget.value;
    this.setState({ title: titleSearch });
  };

  updateTitle2 = (e) => {
    // console.log(e)
    let titleSearch = e.currentTarget.value;
    this.setState({ title2: titleSearch });
  };

  updateTitle3 = (e) => {
    // console.log(e)
    let titleSearch = e.currentTarget.value;
    this.setState({ title3: titleSearch });
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
        <div className="saga">
          {this.state.result.map((movie, index) => {
            return (
              <SingleMovie title={movie.Title} img={movie.Poster} key={index} />
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Saga"
          id="search"
          onChange={this.updateTitle2}
        />
        <input
          type="button"
          value="Add"
          onClick={() => {
            this.fetcher2(this.state.title2);
          }}
        />
        <div className="saga">
          {this.state.result2.map((movie, index) => {
            return (
              <SingleMovie title={movie.Title} img={movie.Poster} key={index} />
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Saga"
          id="search"
          onChange={this.updateTitle3}
        />
        <input
          type="button"
          value="Add"
          onClick={() => {
            this.fetcher3(this.state.title3);
          }}
        />
        <div className="saga">
          {this.state.result3.map((movie, index) => {
            return (
              <SingleMovie title={movie.Title} img={movie.Poster} key={index} />
            );
          })}
        </div>
      </div>
    );
  }
}
