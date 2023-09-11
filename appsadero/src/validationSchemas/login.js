import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato email incorrecto")
    .required("Email requerido"),
  password: yup
    .string()
    .min(5, "Pass muy corta!")
    .max(1000, "Oops, demasiado!")
    .required("Contraseña requerida"), 
    
});

export const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato email incorrecto")
    .required("Email requerido"),
  password: yup
    .string()
    .min(5, "Pass muy corta!")
    .max(1000, "Oops, demasiado!")
    .required("Contraseña requerida")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "least 8 char: 1 minus, 1 mayus and 1 number"
    ),
  name: yup
    .string()
    .min(2, "Muy corto. Mínimo 2 carácteres")
    .required("Nombre requerido"),
  nickname: yup
    .string()
    .min(2, "Muy corto. Mínimo 2 carácteres")
    .required("Nickname requerido"),
});


export const passwordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(5, "Pass muy corta!")
    .max(1000, "Oops, demasiado!")
    .required("Contraseña requerida"),
});



//SE PUEDE SEPARAR ESTA VALIDACIÓN EMAIL & PASS POR UN LADO
