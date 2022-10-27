import React from "react";
import { useForm } from "react-hook-form";

export default function Profile() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  // console.log(watch("fullname"));

  // handle submit
  const handleProfile = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form
        autoComplete="off"
        className="auth_form"
        onSubmit={handleSubmit(handleProfile)}
      >
        <div className="form_group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <small style={{ color: "red" }}>Full Name is mandatory</small>
          )}
        </div>

        <div className="form_group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", { required: true, min: 17, max: 40 })}
          />
          {errors?.age?.type == "required" && (
            <small style={{ color: "red" }}>Usia wajib di isi</small>
          )}
          {errors?.age?.type == "min" && (
            <small style={{ color: "red" }}>Usia wajib harus 17</small>
          )}
          {errors?.age?.type == "max" && (
            <small style={{ color: "red" }}>Usia wajib max 40</small>
          )}
        </div>

        <div className="form_group">
          <label htmlFor="status">Status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="menikah">Married</option>
            <option value="lajang">Single</option>
          </select>
        </div>

        <div className="form_group">
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            id="address"
            {...register("address")}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
