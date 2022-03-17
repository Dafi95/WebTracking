import React, { useState, useEffect } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { getDatabase } from "firebase/database";
import auth from "./auth/config";
import "./styles.css";
import config from "./auth/config";


const database = getDatabase();

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setUser(user);
      } else {
        setAuthenticated(false);
      }
    });

    if (err) {
      setInterval(() => setErr(""), 10000);
    }
    if (success) {
      setInterval(() => setSuccess(""), 10000);
    }
  }, [err, success]);
  //create user
  const createUser = (email, pass) => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        setSuccess("Rejestracja powiodła się");
        setErr("");
      })
      .catch((err) => {
        setErr("Ups, coś poszło nie tak");
        setSuccess("");
      });
  };

  // login user

  const loginUser = (email, pass) => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        setAuthenticated(true);
        setUser(user);
        setSuccess("Zalogowany pomyślnie");
        setErr("");
      })
      .catch((err) => {
        setErr("Zły e-mail lub hasło");
        setSuccess("");
      });
  };

  //logoutUser
  const logoutUser = () => {
    auth
      .signOut()
      .then((user) => {
        if (user) {
          setAuthenticated(false);
          setUser({});
          setSuccess("Użytkownik wylogowany pomyślnie");
          setErr("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // set error

  const errorSetting = (error) => {
    setErr(error);
  };

  return (
    <div className="container">
      {err !== "" ? (
        <div
          className="alert"
          role="alert"
          style={{
            position: "absolute",
            zIndex: "999",
            right: "5%",
            top: "10%"
          }}
        >
          <strong>{err}</strong>
        </div>
      ) : null}
      {success !== "" ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
          style={{
            position: "absolute",
            zIndex: "999",
            right: "5%",
            top: "10%"
          }}
        >
          <strong>{success}</strong>
        </div>
      ) : null}
      <div className="row2">
        {!authenticated ? (
          <>
            <LoginForm loginUser={loginUser} errorSetting={errorSetting} />
            <RegisterForm createUser={createUser} errorSetting={errorSetting} />
          </>
        ) : (
          <>
            <h1>
              Zalogowany jako <span className="text-primary">{user.email} </span>{" "}
            </h1>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={logoutUser}
            >
              Wyloguj się
            </button>
          </>
        )}
      </div>
    </div>
  );
};

try {
  firebase.initializeApp(auth/config);
} catch (err) {}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore();

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {
  return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <CssBaseline />
          <div style={styles}>
            <AppBar />
            <Companies />
          </div>
        </ReactReduxFirebaseProvider>
      </Provider>
  );
}

render(<App />, document.getElementById("TableIP"));


export default App;
