import { api } from "./api"

export const tryLogin = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password })
      localStorage.setItem('token', data.userDetails.token)
      localStorage.setItem('first_name', data.userDetails.first_name)
      localStorage.setItem('nickname', data.userDetails.nickname)
      return true
    } catch (err) {
      return false
    }
  }
  
  export const userSignup = async (first_name, nickname, email, password) => {
    try {
      await api.post('/auth/signup', {
        first_name: first_name,
        nickname: nickname,
        email: email,
        password: password,
      })
      return true
      //localStorage.setItem('token', data.token)
    } catch (err) {
      return err
    }
  }
  

  /*
  export function PokemonScreen({ route }) {
  const { name } = route.params;

  const { isLoading, isError, data, error } = useQuery("pokemon", () =>
    getPokemonsById(name)
  );
  
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }




  */