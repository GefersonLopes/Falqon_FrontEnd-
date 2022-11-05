import {
    Button,
    ButtonDell,
    ButtonEdit,
} from "../../components/styles/button/button";
import { H1, H3, P } from "../../components/styles/texts/texts";
import { Main } from "./styledHome";
import { MdDelete, MdEdit } from "react-icons/md";
import { Form } from "../../components/home/formCreateTask/form";
import { useNavigate } from "react-router-dom";
import { FormEdit } from "../../components/home/formEditTask/FormEdit";
import { ListTaskRequest } from "../../providers/request/requestListTasks";
import { useContext, useState } from "react";
import { Context } from "../../context";
import { DellTaskRequest } from "../../providers/request/requestDellTask";

export const Home = () => {
    const { close, clickClose, setIdTask } = useContext(Context);
    const navigate = useNavigate();
    const { tasks } = useContext(Context);
    localStorage.setItem("@tasks", JSON.stringify(tasks));
    ListTaskRequest();

    return (
        <Main>
            <section>
                <div className="content_ridth"></div>
                <Button
                    onClick={() => {
                        localStorage.clear();
                        navigate("/");
                    }}
                    style={{
                        width: "4rem",
                        marginLeft: "10vh",
                        marginTop: "1rem",
                    }}
                >
                    Exit
                </Button>
                <H1>Tasks</H1>
                <Form />
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <ButtonEdit onClick={() => {
                                clickClose()
                                setIdTask(task.id);
                            }}>
                                <MdEdit />
                            </ButtonEdit>
                            <div>
                                <P>{task.description}</P>
                                <H3>{task.name}</H3>
                            </div>
                            <ButtonDell
                                onClick={() => {
                                    DellTaskRequest(task.id);
                                }}
                            >
                                <MdDelete />
                            </ButtonDell>
                        </li>
                    ))}
                </ul>
                <div className="content_left"></div>
            </section>
            {close && <FormEdit />}
        </Main>
    );
};
