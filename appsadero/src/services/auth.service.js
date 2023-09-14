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
