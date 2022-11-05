import * as yup from "yup";

export const schemaRegister = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
    })
    .required();

export const schemaLogin = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required(),
    })
    .required();

export const schemaTask = yup
    .object({
        name: yup.string().required(),
        description: yup.string().required(),
    })
    .required();
