import React, { useCallback, useRef } from "react";
import Sidebar from "../components/sidebar";
import { withRouter } from "react-router";
import swal from "sweetalert";
import FirebaseApp from "../constants/base";
import "./styles/form.css";

const Form = () => {
  let form = useRef();
  const handleSaveData = useCallback(async event => {
    event.preventDefault();
    const {
      name,
      lastName,
      number,
      exNumber,
      email,
      id,
      direction,
      type
    } = event.target.elements;

    const allData = {
      name: name.value,
      lastName: lastName.value,
      number: number.value,
      exNumber: exNumber.value,
      email: email.value,
      id: id.value,
      direction: direction.value,
      type: type.value
    };
    try {
      await FirebaseApp.database()
        .ref(type.value)
        .push(allData);

      swal({
        title: "Contacto guardado 😎",
        icon: "success",
        button: "Listo"
      });

      form.reset();
    } catch (error) {
      console.log(error);
      swal({
        title: "Error,👲🏼",
        icon: "error",
        button: "Listo"
      });
    }
  }, []);
  console.log(form);

  return (
    <>
      <Sidebar />
      <section className="formSection">
        <div className="titleForm">
          <h2>Formulario de ingreso de pacientes</h2>
        </div>
        <div className="formWrapper">
          <form ref={el => (form = el)} onSubmit={handleSaveData} name="form">
            <input
              id="name"
              name="name"
              placeholder="Nombre"
              type="text"
            ></input>
            <br />
            <input
              id="lastName"
              name="lastName"
              placeholder="Apellidos"
              type="text"
            ></input>
            <br />
            <input
              id="number"
              name="number"
              placeholder="Número "
              type="number"
            ></input>
            <br />
            <input
              id="exNumber"
              name="exNumber"
              placeholder="Número extra"
              type="number"
            ></input>
            <br />
            <input
              id="mail"
              name="email"
              placeholder="Correo electrónico"
              type="text"
            ></input>
            <br />
            <input
              id="id"
              name="id"
              placeholder="Número de cedula"
              type="number"
            ></input>
            <br />
            <textarea
              rows="4"
              id="direction"
              placeholder="Dirección"
              name="direction"
              type="text"
            ></textarea>
            <br />
            <label>Paciente de:</label> <br />
            <select name="type" id="type">
              <option value="Pacientes de ortodoncia">Ortodoncia</option>
              <option value="Pacientes de operatoria">Operatoria</option>
            </select>{" "}
            <br />
            <p>*Recuerde seleccionar correctamente el tipo de paciente*</p>
            <button type="submit"> Enviar </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default withRouter(Form);
