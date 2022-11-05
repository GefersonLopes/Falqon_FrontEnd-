import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { messageError, messageSucess } from "./requestLogin";

const url = "https://falqon.herokuapp.com";

export const ListTaskRequest = () => {
    const id = localStorage.getItem("@id");
    const token = localStorage.getItem("@token");
    const { tasks, setTasks } = useContext(Context);
    useEffect(() => {
        axios
            .get(`${url}/tasks/${id}` , {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                //console.log(res.data)
                setTasks(res.data);
                return res;
                ///const navigate = useNavigate();
                //navigate("/home");
            })
            .catch((err) => {
                console.log(err);
            });
    }, [tasks]);
};
