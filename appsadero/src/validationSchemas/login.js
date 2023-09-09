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

export const passwordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(5, "Pass muy corta!")
    .max(1000, "Oops, demasiado!")
    .required("Contraseña requerida"),
});

//SE PUEDE SEPARAR ESTA VALIDACIÓN EMAIL & PASS POR UN LADO
