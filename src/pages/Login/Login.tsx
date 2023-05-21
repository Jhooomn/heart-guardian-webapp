import React, { useState } from "react";
import "./Login.scss";
import { Card } from "primereact/card";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

export type LoginProps = {
  message?: string;
};

const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="card">
      <Card title="Heart Guardian">
        <div className="image-container">
          <img src="/login.png" alt="Your Image" />
        </div>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="card flex justify-content-center">
              <InputText
                value={username}
                placeholder="Usuario"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="card flex justify-content-center">
              <Password
                value={password}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                feedback={false}
              />
            </div>
            <Button type="submit" label="Iniciar Sesion" />
          </form>
          <div className="card flex justify-content-center">
            <Button label="Registrarse" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;