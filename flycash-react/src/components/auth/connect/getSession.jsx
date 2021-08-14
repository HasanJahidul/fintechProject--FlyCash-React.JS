
// export const getUser = () => {
//     const userStr = sessionStorage.getItem("email");

//     if(userStr) return JSON.parse(userStr);
//     else return null;
// }

export const getEmail = () => {
    return sessionStorage.getItem("email") || null;
}

export const setUserSession = (email) => {
    return sessionStorage.setItem("email", email);
   // sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
    return sessionStorage.removeItem("email");
    //sessionStorage.removeItem("user");
}