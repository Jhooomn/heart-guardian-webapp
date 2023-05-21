import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import "./Home.css";
import HeartRate from "../../components/HeartRate/HeartRate";

import { Divider } from "primereact/divider";
import InfoMessage from "../../components/InfoMessage/InfoMessage";
import SecurityQuestions from "../../components/SecurityQuestions/SecurityQuestions";

export type HomeProps = {
  message?: string;
};

const Home: React.FC<HomeProps> = () => {
  const user_avg = 86;

  const [bpm] = useState(100);
  const [isSecurityQuestionsHidden, setIsSecurityQuestionsHidden] =
    useState(true);

  const header = (
    <div className="image-container-home">
      <img src="/logo_remove.png" alt="Your Image" />
    </div>
  );

  useEffect(() => {
    const isSecQuestionsHidden = () => {
      return bpm === user_avg;
    };
    setIsSecurityQuestionsHidden(isSecQuestionsHidden);
  }, [bpm]);

  return (
    <div className="card flex justify-content-center">
      <Card
        title="Heart Guardian"
        subTitle="Estamos cuidando de ti..."
        header={header}
        className="md:w-25rem"
      >
        <Divider />
        <div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column">
                <HeartRate bpm={bpm} />
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
        <Divider />
        <InfoMessage actualBpm={bpm} userAvgBpm={user_avg}></InfoMessage>
        <Divider />
        <div hidden={isSecurityQuestionsHidden}>
          <SecurityQuestions />
        </div>
      </Card>
    </div>
  );
};

export default Home;
