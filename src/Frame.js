import ListItem from "./ListItem";
import "./Frame.css";

const Frame = () => {
  return (
    <div className="frame-parent">
      <div className="arrowleft-parent">
        <img
          className="arrowleft-icon"
          loading="lazy"
          alt=""
          src="/arrowleft.svg"
        />
        <div className="you-have-12-team-members-wrapper">
          <div className="you-have-12">{`You have 12 Team Members `}</div>
        </div>
      </div>
      <div className="list-item-parent">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default Frame;
