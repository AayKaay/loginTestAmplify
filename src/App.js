import React, {useState} from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, {Auth} from 'aws-amplify';
import List from "./List";

function App() {
  const [email,setEmail] = useState("")
  const funcc = async () => {
    let user = await Auth.currentAuthenticatedUser();
    console.log(user)
    const { email } = user.attributes;
    setEmail(email)
  }
  //funcc()
  return (
    <div>
      <header>
        <div className="signoutButton">
          <AmplifySignOut />
        </div>
        <div>
          <h3 id="userName"> Welcome {email} </h3>          
        </div>      
      </header>
      <div className="app">
        <div id="AppName">
              A todo List
        </div>
        <List></List>

      </div>
      
    </div>
  );
}

export default withAuthenticator(App, true);