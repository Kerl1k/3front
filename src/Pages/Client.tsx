import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MyModal from "../components/modal/MyModal";
import ClientModal from "../components/ClientModal";

interface Form {
  name: string;
  scale: string;
  color: string;
  url: string;
}

const Client = () => {
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      name: "",
      scale: "2000px",
      color: "RGB",
      url: "",
    },
  });
  const [modal, setModal] = useState(false)
  const [info, setInfo] = useState({})

  const submit: SubmitHandler<Form> = (data) => {
    setInfo(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")} />
        <input type="radio" value={3000} {...register("scale")} />3000
        <input type="radio" value={2000} {...register("scale")} />2000
        <input type="radio" value={1000} {...register("scale")} />1000
        <input type="radio" value={500} {...register("scale")} />500
        <input type="text" {...register("color")} />
        <input type="text" {...register("url")} />
        <button onClick={()=> setModal(true)}>Отправить</button>
      </form>

      <MyModal visible={modal} setVisible={setModal}>
        <ClientModal info={info}/>
      </MyModal>
    </div>
  );
};

export default Client;
