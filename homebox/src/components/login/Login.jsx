import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./login.css";
const url = " https://taskto-do.onrender.com/api/v1/user/login";
import { useContext } from "react";
import { AppContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../loading/Loading";

const schema = yup.object().shape({
  email: yup.string().required("please fill up the email field"),
  // confirmEmail: yup.string().required("please fill up the confirm email field"),

  password: yup
    .string()
    .required("please fill up the  password field")
    .min(4)
    .max(32),
});

const Login = () => {
  const { updateUser, setShowAlert, loading, setLoading } =
    useContext(AppContext);

  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const overSubmit = async (data) => {
    // //const myData = {}
    setLoading(true);
    try {
      const response = await axios.post(url, {
        password: data.password,

        email: data.email,
      });
      localStorage.setItem("auser", JSON.stringify(response.data.data));
      updateUser(response.data.data);
      setShowAlert(true);
      Swal.fire({
        icon: "success",
        title: "Welcome",
        text: "You have sucesfully logged in",
        // icon: "question",
      });
      navigate("/task");
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "User does not exist.",
        // icon: "question",
      });
    }
    reset();
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="login-main">
      <form className="login-form" onSubmit={handleSubmit(overSubmit)}>
        <div className="log-div">Login Page</div>
        <section className="log-input-section">
          <input
            {...register("email")}
            type="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder="Email"
          />
          <p>{errors.email?.message}</p>
        </section>
        <section className="log-input-section">
          <input
            {...register("password")}
            type="password"
            placeholder="PASSWORD"
          />
          <p>{errors.password?.message}</p>
        </section>
        <div className="log-btn-div">
          <button className="sign" type="submit">
            Login
          </button>
          <Link to={"/register"} className="btn-link">
            signup
          </Link>
        </div>
      </form>
      {/* <SweetAlert
        show={showAlert}
        title="Success!"
        text="You have successfully logged in."
        icon="success"
        confirmButtonText="OK"
        onClose={() => setShowAlert(false)}
      /> */}
    </main>
  );
};

export default Login;
