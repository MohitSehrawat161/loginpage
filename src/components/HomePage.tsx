import { useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import notify from "devextreme/ui/notify";

export default function HomePage() {
  let navigate = useNavigate();
  let email;

  email = useSelector((state: any) => state.auth.email);
  email = localStorage.getItem("user");
  if (email !== null) {
    email = JSON.parse(email).email;
  }
  if (!email) {
    console.log(email, "if ");
    navigate("/login");
  }
  notify(
    {
      message: "Logged in SuccessFull",
      width: 230,
      position: {
        at: "bottom",
        my: "bottom",
        of: "#container",
      },
    },
    "success",
    5000
  );
  return (
    <React.Fragment>
      <h1>Welcome!!</h1>
      <p>Your email: {email}</p>
    </React.Fragment>
  );
}
