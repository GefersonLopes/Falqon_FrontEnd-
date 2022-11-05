import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import { messageError, messageSucess } from "./requestLogin";

export const CreateTaskRequest = (name: string, description: string) => {
    const url = "https://falqon.herokuapp.com";
    
    const id = localStorage.getItem("@id");
    const token = localStorage.getItem("@token");
    
    console.log(id);
    axios
        .post(
            url + "/tasks",
            {
                name: name,
                description: description,
                userId: id,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((res) => {
            console.log(res);
            messageSucess();
            ///const navigate = useNavigate();
            //navigate("/home");
        })
        .catch((err) => {
            console.log(err);
            messageError();
        });
};
