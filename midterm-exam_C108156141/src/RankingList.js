import React from "react";
import RankingListItem from "./RankingListItem";
import { transferTimeToHumanize } from "./utils";

// tips: 計算歌曲總長度時間可善用 array.reduce() 方法進行加總

const RankingList = (props) => {
  return (
    <div className="ranking-list list">
      <div className="title">
        {/* tips: 善用 utils.js 的 transferTimeToHumanize 方法轉換歌曲時間的顯示格式 */}
        音樂榜
        <span className="total">
          （總長度{" "}
          {transferTimeToHumanize(
            props.tracks
              .map((track) => track.musicTime)
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              })
          )}
          ）
        </span>
      </div>
      {/* tips，傳入歌曲資料與適當的 callback */}
      {props.tracks.map((track) => (
        <RankingListItem
          key={track.id}
          track={track}
          onClickF={props.onClickF}
          onClickU={props.onClickU}
          onClickL={props.onClickL}
        />
      ))}
    </div>
  );
};

export default RankingList;
