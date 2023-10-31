import React from "react";
import MyButton from "./button/MyButton";

const ClientModal = ({ info }: any) => {
  return (
    <div>
      <h1>Подтвердите правильность введенных данных</h1>
      <div>
        <div>
          Имя:
          {info.name}
        </div>
        <div>
          Масштаб:
          {info.scale}
        </div>
        <div>
          Цвет:
          {info.color}
        </div>
        <div>
          (Тут будет файл)
          {info.url}
        </div>
      </div>
      <MyButton onClick={() => console.log(info)}>Подтвердить</MyButton>
    </div>
  );
};

export default ClientModal;
