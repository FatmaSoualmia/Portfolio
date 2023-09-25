import { useState } from "react";
import { useForm } from "react-hook-form";
import countries from '../data/Countries'

function Registration() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [country, setCountry] = useState("");

const handleCountry=(event)=> {
    setCountry(event.target.value);
  }

  const [formType, setFormType] = useState("none");

  const handleFormToggle = (type) => {
    setFormType(type);
  };

  // Password confirmation validation
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const passwordMatchError =
    password !== confirmPassword ? "Passwords do not match" : "";

 

  // Check if username exists (dummy check)
  const isUsernameExists = (username) => {
    // Replace with your actual logic to check if the username exists
    const existingUsernames = ["existingUser1", "existingUser2"]; // Sample existing usernames
    return existingUsernames.includes(username);
  };

  return (
    <div>
      <p className="contact-title">JOIN US HERE</p>
      <button className="contact-btn" onClick={() => handleFormToggle("sign")}>
        SIGN UP
      </button>
      <button className="contact-btn" onClick={() => handleFormToggle("log")}>
        LOGIN
      </button>
      {formType === "sign" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex gap-3 flex-column mx-3"
        >
          <label htmlFor="firstName">
            <input
              {...register("firstName", { required: "First Name is required" })}
              className="form-input"
              name="firstName"
              type="text"
              id="firstName"
              placeholder="First Name ..."
            />
          </label>
          <span className="error-messg">{errors.firstName?.message}</span>

          <label htmlFor="lastName">
            <input
              {...register("lastName", { required: "Last Name is required" })}
              className="form-input"
              name="lastName"
              type="text"
              id="lastName"
              placeholder="Last Name ..."
            />
          </label>
          <span className="error-messg">{errors.lastName?.message}</span>
          <label htmlFor="username">
            <input
              {...register("userName", { required: "Username is required" })}
              className="form-input"
              name="userName"
              type="text"
              id="userName"
              placeholder="Choose User Name ..."
            />
          </label>
          {formType === "sign" && isUsernameExists(watch("userName")) && (
            <span  className="error-messg">Username already exists</span>
          )}

          <label htmlFor="password">
            <input
              {...register("password", { required: "Password is required" })}
              className="form-input"
              name="password"
              type="password"
              id="password"
              placeholder="Password ..."
            />
          </label>
          <label htmlFor="confirmpassword">
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              className="form-input"
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password ..."
            />
          </label>
          <span className="error-messg">{passwordMatchError || errors.confirmPassword?.message}</span>

          <label htmlFor="email">
            <input
              {...register("email", { required: "Email is required" })}
              className="form-input"
              name="email"
              type="email"
              id="email"
              placeholder="Email ..."
            />
          </label>
          <span className="error-messg">{errors.email?.message}</span>

          <label htmlFor="age">
            <input
              {...register("age", { required: "Age is required" })}
              className="form-input"
              name="age"
              type="number"
              id="age"
              placeholder="Age ..."
            />
          </label>
          <label htmlFor="country">
            <select
              {...register("country", { required: "Country is required" })}
              onChange={handleCountry} 
              className="form-input form-select"
              name="country"
              value={country}
              id="country"
            >
              <option value="">
                Select a Country
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>
          <span className="error-messg">{errors.country?.message}</span>

          <input className="form-input" type="submit" id="submit" />
        </form>
      )}
      {formType === "log" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex gap-3 flex-column mx-3"
        >
          <label htmlFor="username">
            <input
              {...register("username", { required: "Username is required" })}
              className="form-input"
              name="username"
              type="text"
              id="username"
              placeholder="User Name ..."
            />
          </label>
          <label htmlFor="password">
            <input
              {...register("password", { required: "Password is required" })}
              className="form-input"
              name="password"
              type="password"
              id="password"
              placeholder="Password ..."
            />
          </label>
          <input
            className="form-input"
            type="submit"
            id="submit"
            value="Login"
          />
        </form>
      )}
    </div>
  );
}

export default Registration;
