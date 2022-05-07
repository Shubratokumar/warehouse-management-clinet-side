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
                Q - 01: What is the difference between authorization and
                authentication ?
              </h4>
              <hr />
              <div className="fs-5 fst-italic justified">
                <span className="answer">Answer : </span>
                In the digital world, authentication and authorization
                accomplish these same goals. Authentication is used to verify
                that users really are who they represent themselves to be.
                <br />
                <span className="oranged">Authentication :</span>
                <ul>
                  <li>Authentication verifies who the user is.</li>
                  <li>
                    Authentication is the first step of a good identity and
                    access management process.
                  </li>
                  <li>
                    Authentication is visible to and partially changeable by the
                    user.
                  </li>
                </ul>
                <span className="oranged">Authorization :</span>
                <ul>
                  <li>
                    Authorization determines what resources a user can access.
                  </li>
                  <li>
                    Authorization always takes place after authentication.
                  </li>
                  <li>
                    Authorization isn’t visible to or changeable by the user.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h4 className="fs-3">
                Q - 02: Why are you using firebase? What other options do you
                have to implement authentication?
              </h4>
              <hr />
              <div className="fs-5 fst-italic justified">
                <span className="answer">Answer : </span>
                <p>
                  Basically i'm using Firebase for authentication. Firebase is
                  Google’s application development platform. It has a lot of
                  different products that cover much of what’s needed to build
                  mobile, web app. Firebase can be used when you do not want to
                  spend a lot of time developing your own backend. It can be
                  used for rapid development. I have been using it in my apps in
                  production. You will not have to take care of servers, etc,
                  Google will take care of it for you.
                </p>
                <br />
                <p>
                  I may implement following technologies as an alternative of
                  Firebase authentication.{" "}
                </p>
                <ul>
                  <li>Auth0</li>
                  <li>MongoDB</li>
                  <li>Passport</li>
                  <li>Okta</li>
                  <li>JSON Web Token</li>
                  <li>Amazon Cognito</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h4 className="fs-3">
                Q - 03: What other services does firebase provide other than
                authentication?
              </h4>
              <hr />
              <div className="fs-5 fst-italic justified">
                <span className="answer">Answer : </span>
                <p>
                  Firebase is originally developed by Firebase inc and later
                  acquired by Google. It provides different kinds of services
                  that help you to develop high-quality mobile and web
                  applications to grow your business. It is compatible with Web,
                  iOS, Android, and OS X clients. With Firebase, developers
                  don’t need to worry about the backend programming,
                  Authentication, API development, database (real-time
                  cloud-hosted NoSQL database and cloud firestore), File
                  storage, etc. Firebase provides all the services with very
                  efficient and fast performance.
                </p>
                <p>
                  There are many services which Firebase provides, Most useful
                  of them are as followings:
                </p>
                <ul>
                  <li>Cloud Firestore</li>
                  <li>Cloud Functions</li>
                  <li>Hosting</li>
                  <li>Google Analytics</li>
                  <li>Predictions</li>
                  <li>Cloud Messaging</li>
                  <li>Dynamic Links</li>
                  <li>Remote Config</li>
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
