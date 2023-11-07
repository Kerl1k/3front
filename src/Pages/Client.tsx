import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MyModal from "../components/modal/MyModal";
import ClientModal from "../components/ClientModal";
import MyButton from "../components/button/MyButton";

interface Form {
  name: string;
  scale: string;
  color: string;
  url: string;
}

const Client = () => {
  const [filterr, setFilterr] = useState("");
  const [qwe, setQwe] = useState([
    {
      name: "qew",
      scale: "123",
      color: "RED",
      url: "https",
      status: "waiting",
    },
    {
      name: "qew",
      scale: "123",
      color: "RED",
      url: "https",
      status: "waiting",
    },
  ]);

  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      name: "",
      scale: "2000px",
      color: "RGB",
      url: "",
    },
  });
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});

  const submit: SubmitHandler<Form> = (data) => {
    setInfo(data);
  };

  const filter = (value: string) => {
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("name")} />
        <input type="radio" value={3000} {...register("scale")} />
        3000
        <input type="radio" value={2000} {...register("scale")} />
        2000
        <input type="radio" value={1000} {...register("scale")} />
        1000
        <input type="radio" value={500} {...register("scale")} />
        500
        <input type="text" {...register("color")} />
        <input type="text" {...register("url")} />
        <button onClick={() => setModal(true)}>Отправить</button>
      </form>
      <div>
        <input onChange={(e) => setFilterr(e.target.value)} type="text" />
        <MyButton onClick={() => filter(filterr)}>Посмотреть</MyButton>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <ClientModal info={info} />
      </MyModal>
    </div>
  );
};

export default Client;
