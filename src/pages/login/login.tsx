import { useContext, useState } from "react";

import { Button, ButtonRoute } from "../../components/styles/button/button";
import { Input } from "../../components/styles/input/input";
import { Section } from "../../components/styles/section/section";
import { H1, H3, P } from "../../components/styles/texts/texts";
import { Context, IFormValuesLogin } from "../../context";

import { RiEyeOffLine, RiEyeLine } from "react-icons/ri";
import { GrUser } from "react-icons/gr";
import { BiError } from "react-icons/bi";

import Lottie from "react-lottie";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../providers/shema";
import Load from "../../animated/load.json";
import { toast } from "react-toastify";
import axios from "axios";
import { LoginRequest, messageError, messageSucess, url } from "../../providers/request/requestLogin";

export const Login = () => {
    const [click, setClick] = useState(false);


    const { isClick, navigate } = useContext(Context);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValuesLogin>({
        resolver: yupResolver(schemaLogin),
    });

    const onSubmit = (data: IFormValuesLogin) => {
        console.log(data);
        axios
        .post(url + "/user/login", {
            email: data.email,
            password: data.password,
        })
        .then((res) => {
            localStorage.setItem("@token", res.data.token);
            localStorage.setItem("@id", res.data.id);
            messageSucess();
            navigate("/home");
        })
        .catch((err) => {
            console.log(err);
            messageError();
        });
        
    };

    const Options = {
        loop: true,
        autoplay: true,
        animationData: Load,
    };

    return (
        <Section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <H1>Falqon</H1>
                <H3>Login in account</H3>
                <fieldset>
                    <label>
                        <Input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        {errors.email ? (
                            <BiError style={{ color: "red" }} />
                        ) : (
                            <GrUser />
                        )}
                    </label>
                    <label>
                        <Input
                            type={click ? "text" : "password"}
                            placeholder="Password"
                            {...register("password")}
                        />
                        {click && !errors.email ? (
                            <RiEyeLine onClick={() => isClick()} />
                        ) : !click && !errors.email ? (
                            <RiEyeOffLine onClick={() => isClick()} />
                        ) : (
                            ""
                        )}
                        {errors.email && <BiError style={{ color: "red" }} />}
                    </label>
                </fieldset>

                <Button type="submit">Log in</Button>

                <Lottie
                    options={Options}
                    style={{
                        width: "4rem",
                        height: "3.8rem",
                        marginTop: "-2rem",
                    }}
                />
                <P>Create an account:</P>
                <P style={{ color: "#F9B9F2" }}>
                    {errors.email
                        ? errors.email.message
                        : errors.password && errors.password.message}
                </P>
            </form>
            <div>
                <ButtonRoute onClick={() => navigate("/register")}>
                    Register
                </ButtonRoute>
            </div>
        </Section>
    );
};
