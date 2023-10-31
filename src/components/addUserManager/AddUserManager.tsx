import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Form {
  login: string;
  password: string;
}

const AddUserManager = () => {
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const submit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Добавление менеджера</h1>
        Login:
        <input type="text" {...register("login")} />
        Password:
        <input type="text" {...register("password")} />
        <button>Отправить</button>
      </form>
    </div>
  );
};

export default AddUserManager;
