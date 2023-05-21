import React from "react";
import "./Welcome.scss";
import { Image } from "primereact/image";
import { useNavigate } from "react-router-dom";

import { ProgressSpinner } from "primereact/progressspinner";

export type WelcomeProps = {
  message?: string;
};

const Welcome: React.FC<WelcomeProps> = () => {
	const navigate = useNavigate();

	setTimeout((event: any) => {
		navigate("/login")
	}, 4000);

  return (
    <>
      <div className="heart">
        <Image src="logo.jpg" alt="Bouncing Image" className="bounce-image" />
      </div>
      <div className="spinner-container">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          animationDuration="8s"
        />
      </div>
    </>
  );
};

export default Welcome;
