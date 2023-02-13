import React from "react";

const isAuth = true

//here withAuth takes component as a props and also returns the component
export default function WithAuth(Component){
    return function(){
        if(!isAuth){
            return <>Not authenticated </>
        }
        return <Component />
    }
}