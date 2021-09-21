import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  if(isAuthenticated== undefined){
    return (<div>hola</div>);
  }
  else{
    return (<div><JSONPretty data={user} />{JSON.stringify(user)}</div>);
  }
}

export default Profile