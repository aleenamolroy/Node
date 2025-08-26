import users from "../models/userModle";

export const getAllusers=()=>{
    return users;
}

 export const adduser=(name)=>{
    id=users.length()+1
    const newuser={id,name}
    users.push(newuser)
    return newuser;
 }