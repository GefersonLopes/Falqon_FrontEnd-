import { FormStyled } from ".";
import { Button } from "../../styles/button/button";
import { Input } from "../../styles/input/input";

import { IFormCreateTasks } from "../../../context";
import { schemaTask } from "../../../providers/shema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { CreateTaskRequest } from "../../../providers/request/resquestCreateTask";
import { ListTaskRequest } from "../../../providers/request/requestListTasks";

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormCreateTasks>({
        resolver: yupResolver(schemaTask),
    });

    const onSubmit = (data: IFormCreateTasks) => {
        console.log(data);
        CreateTaskRequest(data.name,data.description);
    };
    
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>
                    <Input
                        type="text"
                        placeholder="insert is name"
                        {...register("name")}
                    />
                </label>
                <label>
                    <Input
                        type="text"
                        placeholder="insert is description"
                        {...register("description")}
                    />
                </label>
                <Button
                    type="submit"
                    style={{ width: "4rem", margin: "0.5rem" }}
                >
                    {" "}
                    create
                </Button>
            </fieldset>
        </FormStyled>
    );
};
