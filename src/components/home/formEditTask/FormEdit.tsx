import { useContext, useState } from "react";
import { Div, FormEditStyles } from ".";
import { Context, IFormCreateTasks } from "../../../context";
import { schemaTask } from "../../../providers/shema";
import { Button } from "../../styles/button/button";
import { Input } from "../../styles/input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UpdateTaskRequest } from "../../../providers/request/requestUpdateTask";
import { messageSucess } from "../../../providers/request/requestLogin";

export const FormEdit = () => {
    const { close, clickClose, idTask } = useContext(Context);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormCreateTasks>({
        resolver: yupResolver(schemaTask),
    });

    const onSubmit = (data: IFormCreateTasks) => {
        console.log(data);
        UpdateTaskRequest(idTask, data.name, data.description);
        clickClose();
    }

    return (
        <>
            {close && (
                <Div>
                    <FormEditStyles onSubmit={handleSubmit(onSubmit)}>
                        <button className="close" onClick={() => clickClose()}>
                            X
                        </button>
                        <fieldset>
                            <label>
                                <Input placeholder="New name" {...register("name")} />
                            </label>
                            <label>
                                <Input placeholder="New Description" {...register("description")} />
                            </label>
                        </fieldset>
                        <Button>Edit task</Button>
                    </FormEditStyles>
                </Div>
            )}
        </>
    );
};
