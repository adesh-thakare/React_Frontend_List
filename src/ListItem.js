import "./ListItem.css";

const ListItem = () => {
  return (
    <div className="list-item">
      <div className="leading-content">
        <div className="avatar">
          <div className="status" />
        </div>
      </div>
      <div className="middle-content-wrapper">
        <div className="middle-content">
          <b className="jenny-appleseed">Jenny Appleseed</b>
          <div className="jennyappleseedexamplecom">
            jenny.appleseed@example.com
          </div>
        </div>
      </div>
      <div className="trailing-content">
        <img className="xcircle-icon" alt="" src="/xcircle.svg" />
      </div>
    </div>
  );
};

export default ListItem;
