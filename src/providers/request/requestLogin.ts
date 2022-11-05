import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context";

export const messageSucess = () =>
    toast.success("Login successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

export const messageError = () =>
    toast.error("error in login", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

export const url = "https://falqon.herokuapp.com";

export const LoginRequest = (email: string, password: string) => {
    const { tasks, setTasks } = useContext(Context);
    axios
        .post(url + "/user/login", {
            email: email,
            password: password,
        })
        .then((res) => {
            localStorage.setItem("@token", res.data.token);
            localStorage.setItem("@id", res.data.id);
            messageSucess();
        })
        .catch((err) => {
            console.log(err);
            messageError();
        });
};
