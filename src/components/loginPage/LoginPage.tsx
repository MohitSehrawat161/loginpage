import React from "react";
import TextBox, { TextBoxTypes } from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const goToSignupPage = () => {};
  return (
    <React.Fragment>
      <h1>Login</h1>
      <div className="form">
        <form>
          <TextBox
            placeholder="Enter Your Email"
            className="inputField"
            showClearButton={true}
          />
          <TextBox
            placeholder="Enter Password"
            className="inputField"
            showClearButton={true}
          />

          <Button className="button" text="Sign Up" />
        </form>

        <Link to={"/"}>
          <Button onClick={goToSignupPage} text="Create An Account" />{" "}
        </Link>
      </div>
    </React.Fragment>
  );
}
