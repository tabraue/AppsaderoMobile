//import EncryptedStorage from "react-native-encrypted-storage";

import { api } from "./api";

export const loginWeb = async (info) => {
  console.log('info de login web',info)
  try {
    console.log('e n el try', typeof info.email)
/*     let email = info.email
    let password = info.password */ 
    const { data } = await api.post("/auth/login", {
      email: info.email,
      password: info.password
    });

    if (data){
      console.log('esto es data si algun dia llega', data)
      return data
    }
    

   /* localStorage.setItem("token", data.userDetails.token);
    localStorage.setItem("first_name", data.userDetails.first_name);
    localStorage.setItem("nickname", data.userDetails.nickname);
    return true;*/

/*     if (data){
      const { data } = await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
          token: data.userDetails.token,
          first_name: data.userDetails.first_name,
          nickname: data.userDetails.nickname,
        })
      );
      console.log('Yep', data)
    }else{
      console.log('errorrrr')
    } */
  } catch (err) {
    console.log('error de aqui', err)
    console.error(err)
    return false;
  }
};

/* export const userLogin = async () => {
  try {
    const { data } = await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
          token: data.userDetails.token,
          first_name: data.userDetails.first_name,
          nickname: data.userDetails.nickname,
        })
      );
  
      console.log("brava", data);

    

  } catch (err) {
    console.error(err);
    return false;
  }
}; */

export const userSignup = async (variables) => {
  console.log('principio del servicio', variables)
  try {
    console.log('dentro del try')
    const {data} = await api.post("/auth/signup", {
      first_name: variables.first_name,
      nickname: variables.nickname,
      email: variables.email,
      password: variables.password,
    });
    console.log('Crema!!')
    return data;
    //localStorage.setItem('token', data.token)
  } catch (err) {
    console.error(err)
    return false;
    
  }
};
