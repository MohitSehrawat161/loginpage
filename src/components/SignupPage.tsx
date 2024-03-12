import React from "react"
import TextBox, { TextBoxTypes } from 'devextreme-react/text-box';
import 'devextreme/dist/css/dx.light.css';
import './SignupPage.scss'
import { Button } from 'devextreme-react/button';


export default function SignupPage(){

    return(
        <React.Fragment>
        <h1>Sign UP</h1>
<form className="form">

        <TextBox
              placeholder="Enter full name here..."
              className="inputField"
              showClearButton={true}
              />
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
        <TextBox
              placeholder="Confirm password"
              className="inputField"
              showClearButton={true}
              />
             <Button
             className="button"
                text="Sign Up"
            />

              </form>

        </React.Fragment>
    )
}