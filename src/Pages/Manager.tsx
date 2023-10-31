import React, { useState } from "react";
import "../CSS/Manager.css";

const Manager = () => {
  const [info, setInfo] = useState([
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
  return (
    <div>
      Managar
      <h2>Ожидает отправки</h2>
      {info.map((inf) => (
        <div className="block_info">
          <div>
            Имя:
            {inf.name}
          </div>
          <div>
            Масштаб:
            {inf.scale}
          </div>
          <div>
            Цвет:
            {inf.color}
          </div>
          <div>
            (Тут будет файл)
            {inf.url}
          </div>
          <div>
            <select
              id="status"
              name="status"
              onChange={(e: any) =>
                setInfo([...info, { ...inf, status: e.target.value }])
              }
              defaultValue={inf.status}
            >
              <option value="На рассмотрении">Ожидает</option>
              <option value="Отправлен на печать">Ожидает подтверждения</option>
              <option value="Печать завершена">Ожидает оплаты</option>
              <option value="Готов к получению">Завершен</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manager;
