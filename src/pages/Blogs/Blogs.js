import React from "react";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="container p-4">
        <h2 className="fs-1 text-center q-title ">Question and Answer :</h2>
        <div className="row gx-5 mt-4">
          <div className="col-sm-12 col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h4 className="fs-3">
                Q - 01:  Difference between Javascript and Node.js .
              </h4>
              <hr />
              <div className="fs-5 fst-italic justified">
                <span className="answer">Answer : </span>
                <p>
                JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic.
                </p>
                <br />
                <span className="oranged">Javascript :</span>
                <ul>
                  <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                  <li>
                  Javascript can only be run in the browsers.
                  </li>
                  <li>
                  It is basically used on the client-side.
                  </li>
                  <li>
                  It is designed to build network-centric applications.
                  </li>
                </ul>
                <span className="oranged">Node.js :</span>
                <ul>
                  <li>
                  NodeJS is a Javascript runtime environment.
                  </li>
                  <li>
                  We can run Javascript outside the browser with the help of NodeJS.
                  </li>
                  <li>
                  It is mostly used on the server-side.
                  </li>
                  <li>
                  It's designed for data-intensive real-time applications that run on several platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h4 className="fs-3">
                Q - 02: When should you use nodejs and when should you use mongodb ?
              </h4>
              <hr />
              <div className="fs-5 fst-italic justified">
                <span className="answer">Answer : </span>
                <p>
                  MongoDB and NodeJS are two different technologies. MonogDB is a NoSQL database system which gives one a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias. Nodejs is a Javascript engine that we can write any application we want by programming in the Javascript language. It runs our Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. MongoDB offers an API library that runs within a Nodejs application to give we programmatic access to MongoDB so we can create databases and then add, query, update or delete data from the MongoDB database. So, if we want to write some kind of stand-alone program or server in Javascript, then we can use nodejs for it. If our application needs the ability to persistently store data in a way that we can efficiently query or update it later, then we would typically use this form of database.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h4 className="fs-3">
                Q - 03: Difference between SQL and NoSQL .
              </h4>
              <hr />
              <div className="fs-5 fst-italic justified">
                <span className="answer">Answer : </span>
                <p>
                When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. The conventional database is SQL database system that uses tabular relational model to represent data and their relationship. The NoSQL database is the newer one database that provides a mechanism for storage and retrieval of data other than tabular relations model used in relational databases.
                </p>
                <br />
                <span className="oranged">SQL :</span>
                <ul>
                  <li>Databases are categorized as Relational Database Management System (RDBMS). </li>
                  <li>
                  SQL databases have fixed or static or predefined schema.
                  </li>
                  <li>
                  SQL databases are vertically scalable.
                  </li>
                </ul>
                <span className="oranged">NoSQL :</span>
                <ul>
                  <li>
                  NoSQL databases are categorized as Non-relational or distributed database system.
                  </li>
                  <li>
                  NoSQL databases have dynamic schema.
                  </li>
                  <li>
                  NoSQL databases are horizontally scalable.
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
