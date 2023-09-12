//import EncryptedStorage from "react-native-encrypted-storage";
//import EncryptedStorage from "react-native-encrypted-storage/lib/typescript/EncryptedStorage";
import { api } from "./api";

 export const loginWeb = async (email, password) => {
  try {
    const { data } = await api.post("/auth/login", { email, password });
/*     localStorage.setItem("token", data.userDetails.token);
    localStorage.setItem("first_name", data.userDetails.first_name);
    localStorage.setItem("nickname", data.userDetails.nickname);
    return true; */
    if (data){
      const { data } = await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
          token: data.userDetails.token,
          first_name: data.userDetails.first_name,
          nickname: data.userDetails.nickname,
        })
      );
      console.log('Yep')
    }else{
      console.log('errorrrr')
    }
  } catch (err) {
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

export const userSignup = async (first_name, nickname, email, password) => {
  try {
    await api.post("/auth/signup", {
      first_name: first_name,
      nickname: nickname,
      email: email,
      password: password,
    });
    return true;
    //localStorage.setItem('token', data.token)
  } catch (err) {
    return err;
  }
};
