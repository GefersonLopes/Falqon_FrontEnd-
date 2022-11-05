import { useState } from "react";

import { Button, ButtonRoute } from "../../components/styles/button/button";
import { Input } from "../../components/styles/input/input";
import { Section } from "../../components/styles/section/section";
import { H1, H3, P } from "../../components/styles/texts/texts";

import { RiEyeOffLine, RiEyeLine } from "react-icons/ri";
import { GrUser } from "react-icons/gr";
import { BiRename } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IFormValuesRegister } from "../../context";
import { schemaRegister } from "../../providers/shema";
import { toast } from "react-toastify";
import { messageError, messageSucess, url } from "../../providers/request/requestLogin";
import axios from "axios";

export const Register = () => {
    const [click, setClick] = useState(false);
    const isClick = () => setClick(!click);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValuesRegister>({
        resolver: yupResolver(schemaRegister),
    });
    const onSubmit = (data: IFormValuesRegister) => {
        console.log(data);
        axios
        .post(url + "/user/register", {
            email: data.email,
            password: data.password,
        })
        .then((res) => {
            localStorage.setItem("@token", res.data.token);
            localStorage.setItem("@id", res.data.id);
            messageSucess();
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
            messageError();
        });
    };

    return (
        <Section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <H1>Falqon</H1>
                <H3>Register in account</H3>
                <fieldset>
                    <label>
                        <Input
                            type="text"
                            placeholder="Create Name"
                            {...register("name")}
                        />
                        <BiRename />
                    </label>
                    <label>
                        <Input
                            type="email"
                            placeholder="Create Email"
                            {...register("email")}
                        />
                        <GrUser />
                    </label>
                    <label>
                        <Input
                            type={click ? "text" : "password"}
                            placeholder="Create Password"
                            {...register("password")}
                        />
                        {click ? (
                            <RiEyeLine onClick={() => isClick()} />
                        ) : (
                            <RiEyeOffLine onClick={() => isClick()} />
                        )}
                    </label>
                </fieldset>

                <Button type="submit" onClick={() => navigate("/register")}>
                    Register
                </Button>
                <P>Log in account:</P>
                <P style={{color: "#F9B9F2"}}>
                    {errors.name
                        ? errors.name.message
                        : errors.email
                        ? errors.email.message
                        : errors.password && errors.password.message}
                </P>
            </form>
            <div>
                <ButtonRoute onClick={() => navigate("/")}>Log in</ButtonRoute>
            </div>
        </Section>
    );
};
