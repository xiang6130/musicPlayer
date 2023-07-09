import { ReactComponent as UserSVG } from "./svgs/user.svg";

export default function Header(props) {
  return (
    <div className="header">
      <span className="logo">NKUST Music</span>
      <span className="user-profile">
        <UserSVG className="avatar" />
        {/* tips: 請勿於此直接寫死學號與姓名，請使用 props 傳入與顯示 */}
        <span className="name">{props.name}</span>
      </span>
    </div>
  );
}
