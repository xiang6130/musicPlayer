import React, { Component } from "react";
import Header from "./Header";
import RankingList from "./RankingList";
import FavoriteList from "./FavoriteList";
import tracks from "./datas";
import "./App.css";
import "./fonts/BebasNeue/BebasNeue-Regular.ttf";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: tracks,
    };
  }

  // tips，處理加入或移除我的最愛功能
  handleToggleFavorite = (id, isfavorite, e) => {
    e.preventDefault();
    const newtrack = this.state.tracks.map((track) => {
      return track.id === id ? { ...track, favorite: isfavorite } : track;
    });

    this.setState({
      tracks: newtrack,
    });
  };

  // tips，處理移除我的最愛功能
  handleRemoveFavorite = (id, unfavorite, e) => {
    e.preventDefault();
    const newtrack = this.state.tracks.map((track) => {
      return track.id === id ? { ...track, favorite: unfavorite } : track;
    });

    this.setState({
      tracks: newtrack,
    });
  };

  // tips，處理增加 like 計數功能
  handleIncreaseLikeCount = (id) => {
    this.setState((preState) => {
      return {
        tracks: preState.tracks.map((track) => {
          return track.id === id
            ? { ...track, likeCount: track.likeCount + 1 }
            : track;
        }),
      };
    });
  };

  // tips，處理減少 like 計數功能
  handleDecreaseLikeCount = (id, likeCount) => {
    if (likeCount > 0) {
      this.setState((preState) => {
        return {
          tracks: preState.tracks.map((track) => {
            return track.id === id
              ? { ...track, likeCount: track.likeCount - 1 }
              : track;
          }),
        };
      });
    }
  };

  render() {
    const favorite = this.state.tracks.filter(
      (track) => track.favorite === true
    );
    return (
      <div className="app">
        <Header name="C108156141 王俊翔" />
        <div className="main">
          {/* tips，傳入歌曲資料及相關事件的傳遞 */}
          <RankingList
            tracks={this.state.tracks}
            onClickF={this.handleToggleFavorite}
            onClickU={this.handleIncreaseLikeCount}
            onClickL={this.handleDecreaseLikeCount}
          />
          {/* tips，傳入歌曲資料及相關事件的傳遞 */}
          <FavoriteList
            tracks={favorite}
            onClickD={this.handleRemoveFavorite}
          />
        </div>
      </div>
    );
  }
}
