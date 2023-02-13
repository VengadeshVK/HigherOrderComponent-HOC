import React from "react";
import WithAuth from "../hoc/WithAuth";

const Profile=()=>{
    return <h1>Profile loaded</h1>
}

export default WithAuth(Profile)