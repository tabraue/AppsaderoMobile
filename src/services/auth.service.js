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
    return "Credenciales incorrectas";
  }
};

export const userSignup = async (values) => {
  try {
    const {data} = await api.post("/auth/signup", {
      first_name: values.first_name,
      nickname: values.nickname,
      email: values.email,
      password: values.password,
    });
    return data; 
    
    
  } catch (err) {

    throw new Error(err.response.data.message);
  }
};

    
/*      if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error(response.message);
    }
    //localStorage.setItem('token', data.token)
  } catch (err) {

    throw new Error(err.response.data.message);
  }
}; */


