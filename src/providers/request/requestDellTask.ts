import axios from "axios";
import { useEffect } from "react";


const url = "https://falqon.herokuapp.com";

export const DellTaskRequest = (id: string) => {
        axios
        .delete(url + `/tasks/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhbHFvbkBnbWFpbC5jb20iLCJpYXQiOjE2Njc1OTU2ODgsImV4cCI6MTY2NzY4MjA4OH0.EIQ_sNSnD2HP5ywH0jR9zi55cQrereyab7GdTIKdsms"}`,
            },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
    
};
