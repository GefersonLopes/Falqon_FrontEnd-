import { createContext, ReactNode, useEffect } from "react";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export interface IFormCreateTasks {
    name: string;
    description: string;
}

export interface IFormValuesLogin {
    email: string;
    password: string;
}
export interface IFormValuesRegister {
    name: string;
    email: string;
    password: string;
}
interface INode {
    children: ReactNode;
}

interface ITask {
    id: string;
    name: string;
    description: string;
};


interface IPropsGlobal {
    click: boolean;
    setClick: (values: boolean) => void;
    isClick: () => void;
    tasks:ITask[];
    setTasks:(value: any) => void;
    navigate: NavigateFunction;
    goHome:() => void;
    close: boolean;
    setClose: (value: boolean) => void;
    clickClose: () => void;
    idTask: string;
    setIdTask: (value: string) => void;

}

export const Context = createContext({} as IPropsGlobal);

export const GlobalProvider = ({ children }: INode) => {
    const [click, setClick] = useState(false);
    const [close, setClose] = useState(false);
    const [idTask , setIdTask ] = useState("");
    const [ tasks, setTasks] = useState([]);
    
    const clickClose = () => setClose(!close);
    const isClick = () => setClick(!click);
    
    const navigate = useNavigate();
    const goHome = () => navigate("/home");

    
    

    return (
        <Context.Provider
            value={{
                click,
                setClick,
                isClick,
                tasks,
                setTasks,
                navigate,
                goHome,
                close,
                setClose,
                clickClose,
                idTask,
                setIdTask,
        
            }}
        >
            {children}
        </Context.Provider>
    );
};
