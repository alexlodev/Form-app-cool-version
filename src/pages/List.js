import React from "react";
import Sidebar from "../components/sidebar";
import { withRouter } from "react-router";
import swal from "sweetalert";
import useFetchData from "../constants/listData";
import "./styles/global.css";
import "./styles/list.css";

const List = typeList => {
  const { list, error } = useFetchData(typeList.location.typeList);
  if (error) {
    return swal({
      title: error.message
    });
  }
  console.log(list);

  return (
    <>
      <Sidebar />
      <div className="listWrapper">
        <h2>{typeList.location.typeList}</h2>
        {list.map(element => (
          <>
            <div className="item">
              <h3>
                <b>Nombre:</b> {element.name} {element.lastName}
              </h3>
              <p>
                <b>Correo electrónico:</b>
                {element.email}
              </p>
              <p>
                <b>Número:</b>
                {element.number}
              </p>
              <p>
                <b>Número extra:</b>
                {element.exNumber}
              </p>
              <p>
                <b>Número de cedula:</b>
                {element.id}
              </p>
              <p>
                <b>Dirección:</b>
                {element.direction}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default withRouter(List);
