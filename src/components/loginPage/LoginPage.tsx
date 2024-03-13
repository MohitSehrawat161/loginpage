import React, { useState } from "react";
import TextBox, { TextBoxTypes } from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import notify from "devextreme/ui/notify";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/authentication";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const emailHandler = (newValue: string) => {
    setEmail(newValue);
  };
  const passHandler = (newValue: string) => {
    setPass(newValue);
  };
  const showError = (message: string, type: string) => {
    notify(
      {
        message: message,
        width: 230,
        position: {
          at: "bottom",
          my: "bottom",
          of: "#container",
        },
      },
      type,
      5000
    );
  };
  const loginHandler = () => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser, "clicked");
    let user;
    if (storedUser !== null) user = JSON.parse(storedUser);
    console.log(user);
    if (!user) {
      console.log("inside if");
      showError("User does not exist", "error");
      return;
    }
    let [fltUser] = user.filter((e: any) => {
      return e.email === email;
    });
    console.log(fltUser);

    if (!email || !pass) {
      showError("All fields are Mandatory", "error");
    } else if (fltUser?.email !== email) {
      showError("User Does Not Exist", "error");
    } else if (fltUser?.pass !== pass) {
      showError("Wrong Password", "error");
    } else {
      dispatch(authActions.email(email));
      dispatch(authActions.isLoggedIn());

      navigate("/home");
    }
  };

  return (
    <React.Fragment>
      <h1>Login</h1>
      <div className="form">
        <form>
          <TextBox
            placeholder="Enter Your Email"
            className="inputField"
            showClearButton={true}
            onValueChange={emailHandler}
          />
          <TextBox
            placeholder="Enter Password"
            className="inputField"
            showClearButton={true}
            onValueChange={passHandler}
          />

          <Button onClick={loginHandler} className="button" text="Login" />
        </form>

        <Link to={"/"}>
          <Button className="btn" text="Create An Account" />{" "}
        </Link>
      </div>
    </React.Fragment>
  );
}
