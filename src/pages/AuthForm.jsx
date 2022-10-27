import React, { useState } from "react";

export default function AuthForm() {
  // state
  const [errors, setErrors] = useState({
    email: {
      type: "kosong",
      msg: "Email harus di isi",
      show: false,
    },
    password: {
      type: "beda",
      msg: "password harus sama",
      show: false,
    },
  });

  // form handler
  const handleSubmit = (e) => {
    // cegah form untuk reload page
    e.preventDefault();

    // tangkap value dari element input yang ada di form
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password2 = e.target.password2.value;

    // validation
    if (!email || !password || !password2) {
      return setErrors({
        ...errors,
        email: {
          ...errors.email,
          show: true,
        },
      });
    }

    if (password != password2) {
      return alert("Password did not matched");
    }

    // tampilkan di console
    console.info({ email, password, password2 });
  };

  return (
    <div className="App">
      <form autoComplete="off" className="auth_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
          {errors.email.show && (
            <small style={{ color: "red" }}>{errors.email.msg}</small>
          )}
        </div>

        <div className="form_group">
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>

        <div className="form_group">
          <label htmlFor="password2">repeat password</label>
          <input type="password" id="password2" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
