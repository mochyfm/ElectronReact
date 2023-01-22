import './userInfo.css';

const UserInfo = ({ data }) => {

  return (
    <div>
      <header className="generalHeader infoHeader">Current Data</header>
      <section className="infoBody">
        <div className="fullInfo">
          <span className="tagInfo">ID:</span> {data.actor_id}
        </div>
        <div className="fullInfo">
          <span className="tagInfo">First Name: </span>
          {data.first_name}
        </div>
        <div className="fullInfo">
          <span className="tagInfo">Last Name: </span>
          {data.last_name}
        </div>
        <div className="fullInfo">
          <span className="tagInfo">Last Update: </span>
          {data.last_update.substring(0, 10)}
        </div>
      </section>
    </div>
  );
};

export default UserInfo;
