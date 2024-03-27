import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [wrongPassword, setWrongPassword] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();

    const formdata = new FormData(event.target);
    const username = formdata.get("username");
    const password = formdata.get("password");
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        setWrongPassword(false);
        console.log(response.json());
      } else {
        setWrongPassword(true);
      }
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username </label>
        <input id="Username" name="username" />
        <div></div>
        <label htmlFor="Password">Password </label>
        <input id="Password" name="password" />
        <div />
        <button type="submit">Submit</button>
        <Link to={"/register"}> Register</Link>
        <div>
          {wrongPassword ? <div>hello, your password is not right</div> : null}
        </div>
      </form>
    </>
  );
}
