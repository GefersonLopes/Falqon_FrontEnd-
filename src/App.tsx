import "./App.css";
import { UseRoutes } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context";

function App() {
    return (
        <>
            <GlobalProvider>
                <UseRoutes />
                <ToastContainer />
            </GlobalProvider>
        </>
    );
}

export default App;
