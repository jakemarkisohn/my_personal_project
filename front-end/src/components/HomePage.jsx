import { useContext } from "react";
import { userContext } from "../App";


export const HomePage = () => {
  const { user } = useContext(userContext);
  
  return (
    <div>
      <h1>Welcome to Recipe Radar!</h1>
      {/* <h1>Welcome {user ? `${user.first_name}` : null}</h1> */}           
    </div>
  );
};
