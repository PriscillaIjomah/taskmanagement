import "./register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// const url = "https://chowfinder.onrender.com/api/sign-up";
const url = " https://taskto-do.onrender.com/api/v1/user/signup";

const schema = yup.object().shape({
  firstName: yup.string().required("please fill up the user name field"),
  lastName: yup.string().required("please fill up the user name field"),
  email: yup.string().required("please fill up the email field"),
  // confirmEmail: yup.string().required("please fill up the confirm email field"),
  contact: yup.string().required().min(11).max(11),
  password: yup
    .string()
    .required("please fill up the  password field")
    .min(8)
    .max(32),
  confirmPassword: yup
    .string()
    .required("please fill up the confirm password field")
    .min(8)
    .max(32),
});

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   phoneNumber": "12345678901",
  //      "email": "john@example.com",
  //      "password

  const overSubmit = async (data) => {
    // //const myData = {}
    console.log(data);
    try {
      const response = await axios.post(url, {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.contact,
        password: data.password,
        confirmPassword: data.confirmPassword,
        email: data.email,
      });
      console.log(response.data);
    } catch (error) {
      (error) => console.log(error.message);
    }
    reset();
  };

  return (
    <div className="form-container">
      <form className="reg-form" onSubmit={handleSubmit(overSubmit)}>
        <div className="Reg-div">Registration Form</div>
        <section className="input-section">
          <input
            {...register("firstName")}
            type="text"
            placeholder="FIRST NAME"
          />
          <p>{errors.firstName?.message}</p>
        </section>
        <section className="input-section">
          <input
            {...register("lastName")}
            type="text"
            placeholder="LAST NAME"
          />
          <p>{errors.lastName?.message}</p>
        </section>
        <section className="input-section">
          <input
            {...register("email")}
            type="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder="Email"
          />
          <p>{errors.email?.message}</p>
        </section>
        {/* <input
          {...register("confirmEmail")}
          type="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          placeholder="Confirm Email"
        />
        <p>{errors.confirmEmail?.message}</p> */}
        <section className="input-section">
          <input {...register("contact")} type="text" placeholder="CONTACT" />
          <p>{errors.contact?.message}</p>
        </section>

        <section className="input-section">
          <input
            {...register("password")}
            type="password"
            placeholder="PASSWORD"
          />
          <p>{errors.password?.message}</p>
        </section>
        <section className="input-section">
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="CONFIRM PASSWORD"
          />
          <p>{errors.confirmPassword?.message}</p>
        </section>

        <div className="btn-div">
          <button className="regis" type="submit">
            Register
          </button>
          <Link to={"/login"} className="reg-btn-link">
            login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
