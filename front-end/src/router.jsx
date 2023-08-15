import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import App from "./App";
// import AllRecipeBookPage from "./components/AllRecipeBookPage"
// import FindRecipePage from "./components/FindRecipePage"
// import MakeRecipePage from "./components/MakeRecipePage"
// import RecipePage from "./components/RecipePage"
// import SingleRecipePage from "./components/SingleRecipePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        children: [
            {
                index: true,
                element: <RegisterPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "home",
                element: <HomePage />
            }

        ]
    }
]);

export default router
