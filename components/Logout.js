import React from "react";
import { GoogleLogout } from "react-google-login";

//const clientId = process.env['REACT_APP_GOOCALID'];
const clientId =
  "101635466215-fh6lne58ufo4g1ih03gt4o1c10vsbqs8.apps.googleusercontent.com";

function Logout(props) {
  const onSuccess = () => {
    props.setLogged(false);
    alert("OK, LogOut");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
