import React from "react";
import FavoriteListItem from "./FavoriteListItem";
import { transferTimeToHumanize } from "./utils";

// tips: 計算歌曲總長度時間可善用 array.reduce() 方法進行加總
const FavoriteList = (props) => {
  let totalTime = null;
  if (props.tracks.length >= 1) {
    totalTime = props.tracks
      .map((track) => track.musicTime)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
  }
  const timeOut = transferTimeToHumanize(totalTime);

  return (
    <div className="favorite-list list">
      <div className="title">
        我的最愛
        {/* tips: 善用 utils.js 的 transferTimeToHumanize 方法轉換歌曲時間的顯示格式 */}
        <span className="total">
          （總長度 {totalTime == null ? "" : timeOut}）
        </span>
      </div>
      {/* tips，傳入歌曲資料與適當的 callback */}
      {props.tracks.map((track) => (
        <FavoriteListItem
          key={track.id}
          track={track}
          onClickD={props.onClickD}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
