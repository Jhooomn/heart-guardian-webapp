import React, { useState } from "react";
import "./SignUp.scss";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";

export type SignUpProps = {
  message?: string;
};

export type EmergencyContact = {
  name: string;
  lastName: string;
  email: string;
  relation: string;
  telephone: string;
  age: string;
};

export type UserInfo = {
  name: string;
  lastName: string;
  email: string;
  age: string;
  telephone: string;
  password: string;
  emergencyContact: EmergencyContact;
};

const SignUp: React.FC<SignUpProps> = () => {
  const navigate = useNavigate();
  // user
  const [uName, setUName] = useState("");
  const [uLastName, setULastname] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uAge, setUAge] = useState("");
  const [uTelephone, setUTelephone] = useState("");
  const [uPassword, setUPassword] = useState("");

  //emergency contact
  const [eName, seteName] = useState("");
  const [eLastName, seteLastname] = useState("");
  const [eEmail, seteEmail] = useState("");
  const [eRelation, seteRelation] = useState("");
  const [eTelephone, seteTelephone] = useState("");
  const [eAge, seteAge] = useState("");

  const relationship = [
    { name: "Madre", code: "MA" },
    { name: "Padre", code: "PA" },
    { name: "Hermano/Hermana", code: "HM" },
    { name: "Pareja", code: "PR" },
    { name: "Doctor", code: "DOC" },
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const user: UserInfo = {
      name: uName,
      lastName: uLastName,
      email: uEmail,
      age: uAge,
      telephone: uTelephone,
      password: uPassword,
      emergencyContact: {
        name: eName,
        lastName: eLastName,
        email: eEmail,
        relation: eRelation,
        telephone: eTelephone,
        age: eAge,
      },
    };
    console.log(user);
    navigate("/login");
  };
  return (
    <Card title="Registrar Usuario">
      <div>
        <div className="card flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="columns">
              <div className="column">
                <Card subTitle="Información Personal">
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Nombre"
                      type="text"
                      onChange={(e) => setUName(e.target.value)}
                      value={uName}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Apellido"
                      type="text"
                      onChange={(e) => setULastname(e.target.value)}
                      value={uLastName}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Correo Electrónico"
                      type="email"
                      onChange={(e) => setUEmail(e.target.value)}
                      value={uEmail}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Teléfono"
                      onChange={(e) => setUTelephone(e.target.value)}
                      value={uTelephone}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Edad"
                      onChange={(e) => setUAge(e.target.value)}
                      value={uAge}
                    />
                  </div>
                  <div className="container">
                    <Password
                      placeholder="Contraseña"
                      value={uPassword}
                      onChange={(e) => setUPassword(e.target.value)}
                      feedback={false}
                      className="input-personal-data"
                    />
                  </div>
                </Card>
              </div>
              <div className="column">
                <Card subTitle="Contacto de Emergencia">
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Nombre"
                      type="text"
                      onChange={(e) => seteName(e.target.value)}
                      value={eName}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Apellido"
                      type="text"
                      onChange={(e) => seteLastname(e.target.value)}
                      value={eLastName}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Correo Electrónico"
                      type="email"
                      onChange={(e) => seteEmail(e.target.value)}
                      value={eEmail}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Teléfono"
                      onChange={(e) => seteTelephone(e.target.value)}
                      value={eTelephone}
                    />
                  </div>
                  <div className="container">
                    <InputText
                      className="input-personal-data"
                      placeholder="Edad"
                      onChange={(e) => seteAge(e.target.value)}
                      value={eAge}
                    />
                  </div>
                  <div className="container">
                    <Dropdown
                      value={eRelation}
                      onChange={(e) => seteRelation(e.value)}
                      options={relationship}
                      optionLabel="name"
                      placeholder="Selecciona Parentezco"
                      className="input-personal-data"
                    />
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <div className="columns">
                <div className="column"></div>
                <div className="column">
                  <Button type="submit">Guardar</Button>
                </div>
                <div className="column"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default SignUp;
