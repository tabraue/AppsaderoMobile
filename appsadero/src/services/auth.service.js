import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";


export const loginWeb = async (info) => {
  try {
    const { data } = await api.post("/auth/login", {
      email: info.email,
      password: info.password,
    });
    if (data) {
      await AsyncStorage.setItem("token", data.userDetails.token);
      await AsyncStorage.setItem("first_name", data.userDetails.first_name);
      await AsyncStorage.setItem("nickname", data.userDetails.nickname);
      return data;
    }
  } catch (err) {
    console.error("Error:", err);
    return 'Credenciales incorrectas';
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
  console.log('principio del servicio')
  try {
    console.log('dentro del try', variables)
    const {data} = await api.post("/auth/signup", {
      first_name: variables.first_name,
      nickname: variables.nickname,
      email: variables.email,
      password: variables.password,
    });
    
    console.log('Crema!!', data)
    return true
     
    
  } catch (err) {
    console.error('Error al registrar usuario', err)
    return false;
    
  }
};
