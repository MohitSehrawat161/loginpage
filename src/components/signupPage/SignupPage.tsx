import React, { useState, ChangeEventHandler } from "react";
import TextBox, { TextBoxTypes } from "devextreme-react/text-box";
import "devextreme/dist/css/dx.light.css";
import "./SignupPage.scss";
import { Button } from "devextreme-react/button";
import { Link } from "react-router-dom";
import notify from "devextreme/ui/notify";
import {
  Validator,
  EmailRule,
  StringLengthRule,
} from "devextreme-react/validator";

export default function SignupPage() {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [cnfPassValue, setCnfPassValue] = useState("");

  const handleInputChange = (newValue: string) => {
    console.log(newValue, "newValue");
    setInputValue(newValue);
  };
  const emailHandler = (newValue: string) => {
    console.log(newValue, "email");
    setEmailValue(newValue);
  };

  const passHandler = (newValue: string) => {
    setPassValue(newValue);
  };
  const cpassHandler = (newValue: string) => {
    setCnfPassValue(newValue);
  };
  console.log(inputValue);
  const showError = (message: string, type: string) => {
    notify(
      {
        message: message,
        width: 230,
        position: {
          at: "top right",
          my: "top right",
          of: "#container",
        },
      },
      type,
      5000
    );
  };
  const signUpHandler = () => {
    let users: any = localStorage.getItem("user");
    if (users) {
      users = JSON.parse(users);
    } else users = [];
    console.log(users);
    let arr = [...users];
    const obj = {
      name: inputValue,
      email: emailValue,
      pass: passValue,
      cnfPass: cnfPassValue,
    };
    arr.push(obj);
    console.log(arr, "all users");
    if (cnfPassValue !== passValue) {
      showError("Password do not match", "error");
      return;
    } else if (!inputValue || !emailValue || !passValue || !cnfPassValue) {
      showError("All fields are Mandatory", "error");

      return;
    } else if (passValue.length < 5) {
      showError("Password should be greater then 5 characters", "error");
      return;
    }

    localStorage.setItem("user", JSON.stringify(arr));
    showError("Account Created! You can login Now", "success");
  };

  return (
    <React.Fragment>
      <h1>Sign UP</h1>
      <div className="form">
        <TextBox
          placeholder="Enter full name here..."
          className="inputField"
          value={inputValue}
          onValueChange={handleInputChange}
        />
        <TextBox
          placeholder="Enter Your Email"
          className="inputField"
          showClearButton={true}
          value={emailValue}
          onValueChange={emailHandler}
        >
          <Validator>
            <EmailRule message="Invalid Email" />
          </Validator>
        </TextBox>
        <TextBox
          placeholder="Enter Password"
          className="inputField"
          showClearButton={true}
          onValueChange={passHandler}
          mode="password"
        >
          <Validator>
            <StringLengthRule
              min={5}
              message="Password should be greater then 5 characters"
            />
          </Validator>
        </TextBox>
        <TextBox
          placeholder="Confirm password"
          className="inputField"
          showClearButton={true}
          onValueChange={cpassHandler}
          mode="password"
        />
        <Button onClick={signUpHandler} className="button" text="Sign Up" />
        <br />
        Already Have An Account?
        <Link to={"/login"}>
          <Button text="Login" />
        </Link>
      </div>
    </React.Fragment>
  );
}
