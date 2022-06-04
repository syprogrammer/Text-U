import React from 'react'

export default function About() {
    
  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "40rem" }}>
          <img
            className="card-img-top"
            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            alt="Card  cap"
            style={{ width: 100, margin: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              Syprogrammer
            </h5>
            <p className="card-text">
              This is my first React js project soon i will also able to create
              more amazing projects web development languages i leared are :-
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Html</li>
            <li className="list-group-item">Css</li>
            <li className="list-group-item">Javascript</li>
            <li className="list-group-item">React js</li>
          </ul>
          <div className="card-body">
            <a href="https://github.com/syprogrammer" className="card-link">
              Mygithub
            </a>
            <a href="https://github.com/syprogrammer" className="card-link">
              other projects
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}
