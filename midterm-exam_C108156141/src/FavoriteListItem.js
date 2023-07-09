import React from "react";
import { ReactComponent as RemoveSVG } from "./svgs/remove.svg";
import { transferTimeToHumanize } from "./utils";
import TrackCover2 from "./imgs/track2.jpg";

const FavoriteListItem = (props) => {
  return (
    <div className="favorite-list list-item">
      <span>
        {/* tips，點選此 icon 時，將歌曲移除我的最愛 */}
        <RemoveSVG
          className="remove-icon icon"
          onClick={(e) => props.onClickD(props.track.id, false, e)}
        />
      </span>
      <span className="track-wrapper">
        <img
          className="album-cover"
          src={props.track.albumCover}
          alt="album-cover"
        />
        <span className="column">
          <span className="label">{props.track.name}</span>
          <span className="label">{props.track.singer}</span>
        </span>
      </span>
      {/* tips: 善用 utils.js 的 transferTimeToHumanize 方法轉換歌曲時間的顯示格式 */}
      <span className="track-length">
        {transferTimeToHumanize(props.track.musicTime)}
      </span>
    </div>
  );
};

export default FavoriteListItem;
