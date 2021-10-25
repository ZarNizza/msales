import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId = "101635466215-fh6lne58ufo4g1ih03gt4o1c10vsbqs8.apps.googleusercontent.com";

export function Login(props) {
  const onSuccess = (res) => {
    props.setLogged(true);
    alert("OK, Logged in");
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    alert("! Failed to login");
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="LogIn"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

