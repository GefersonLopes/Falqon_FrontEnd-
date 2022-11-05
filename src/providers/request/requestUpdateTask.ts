import axios from "axios";
import { messageError, messageSucess, url } from "./requestLogin";

let token = localStorage.getItem("@token");
export const UpdateTaskRequest = (id: string, name: string, description: string) => {
    axios
        .patch(
            url + `/tasks/${id}`,
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
           
        })
        .catch((err) => {
            console.log(err);
            messageError();
        });
};
