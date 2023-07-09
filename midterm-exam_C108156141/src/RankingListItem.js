import { Component } from "react";
import { ReactComponent as PlaySVG } from "./svgs/play.svg";
import { ReactComponent as FavoriteSVG } from "./svgs/favorite.svg";
import { ReactComponent as FavoriteFillSVG } from "./svgs/favorite-fill.svg";
import { ReactComponent as LikeSVG } from "./svgs/like.svg";
import { ReactComponent as DislikeSVG } from "./svgs/dislike.svg";
import { transferTimeToHumanize } from "./utils";
import TrackCover1 from "./imgs/track1.jpg";

export default class RankingListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadTime: props.track.downloadTime,
      favorite: props.track.favorite,
    };
  }

  // tips，處理下載剩餘時間倒數功能
  componentDidMount() {
    this.timerId = setInterval(() => {
      if (this.state.downloadTime > 0) {
        this.setState((preState) => ({
          downloadTime: preState.downloadTime - 1,
        }));
      } else {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  // tips，處理下載剩餘時間倒數功能
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const musicTime = transferTimeToHumanize(this.props.track.musicTime);
    let favorite;
    if (this.props.track.favorite) {
      favorite = (
        <FavoriteFillSVG
          className="favorite-icon icon checked"
          onClick={(e) => this.props.onClickF(this.props.track.id, false, e)}
        />
      );
    } else {
      favorite = (
        <FavoriteSVG
          className="favorite-icon icon"
          onClick={(e) => this.props.onClickF(this.props.track.id, true, e)}
        />
      );
    }

    return (
      <div className="ranking-list-item list-item">
        <span>
          <PlaySVG className="play-icon icon" />
        </span>
        <span className="track-wrapper">
          <img
            className="album-cover"
            src={this.props.track.albumCover}
            alt="album-cover"
          />
          <span className="column">
            <span className="label">{this.props.track.name}</span>
            <span className="label">{this.props.track.singer}</span>
          </span>
        </span>
        <span className="download">
          {/* tips，歌曲 "下載尚未完成" 時顯示下方內容，進行下載剩餘秒數倒數 */}

          {this.state.downloadTime > 0 && (
            <span className="loading">
              下載中...（剩 {this.state.downloadTime} 秒）
            </span>
          )}
          {/* tips，歌曲 "下載完成" 時顯示下方內容 */}
          <span className="completed">下載完成</span>
        </span>
        <span className="like-wrapper">
          {/* tips，點選此 icon 時，增加歌曲的 Like 數 */}
          <LikeSVG
            className="like-icon icon"
            onClick={() => this.props.onClickU(this.props.track.id)}
          />
          <span className="count">{this.props.track.likeCount}</span>
          {/* tips，點選此 icon 時，減少歌曲的 Like 數 */}
          <DislikeSVG
            className="dislike-icon icon"
            onClick={() =>
              this.props.onClickL(
                this.props.track.id,
                this.props.track.likeCount
              )
            }
          />
        </span>

        <span>
          {/* tips，當此歌曲 "已加入" 我的最愛時，顯示下方綠色愛心內容，點選此 icon 時，將歌曲移除我的最愛 */}
          {favorite}
          {/* tips，當此歌曲 "未加入" 我的最愛時，顯示下方空心愛心內容，點選此 icon 時，將歌曲加入我的最愛*/}
        </span>
        {/* tips: 善用 utils.js 的 transferTimeToHumanize 方法轉換歌曲時間的顯示格式 */}
        <span className="track-length">{musicTime}</span>
      </div>
    );
  }
}
