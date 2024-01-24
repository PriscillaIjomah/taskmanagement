import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context";

const Privacy = () => {
  // const [user, setUser] = useState("");
  const { user } = useContext(AppContext);

  // useEffect(() => {
  //   setUser(2);
  // }, []);

  return <main>{user ? <Outlet /> : <Navigate to={"/login"} replace />}</main>;
};

export default Privacy;
