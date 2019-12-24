import React from "react";
import classes from "./Style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector(state => state.postReducer.users);
  return (
    <>
      <header style={classes.homepageHeader}>
        <div style={classes.logo}>Exceed Team</div>
      </header>
      <main>
        <section style={classes.sectionCards}>
          <div className="container section" style={classes.sectionContainer}>
            {users.length
              ? users.map(item => (
                  <div className="col s12 m4 l2 pull-l2" key={item.id}>
                    <div className="card">
                      <div className="card-image">
                        <img src={item.file || item.pic} alt={item.pic} />
                        <span className="card-title">{item.devname}</span>
                      </div>
                      <div className="card-content">
                        <p>
                          <strong className="card-text">Skype:</strong>{" "}
                          {item.skype}
                          <br />
                          <strong className="card-text">Telephone:</strong>
                          {item.telephone}
                          <br />
                          <strong className="card-text">E-mail:</strong>{" "}
                          {item.email}
                          <br />
                          <strong className="card-text">Status:</strong>{" "}
                          {item.status}
                        </p>
                      </div>
                      <div className="card-action">
                        <Link to={`/about/${item.id}`}>About</Link>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
