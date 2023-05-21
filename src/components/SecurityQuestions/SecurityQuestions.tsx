import React, { useState } from "react";
import "./SecurityQuestions.scss";

import { TabView, TabPanel } from "primereact/tabview";
import { SelectButton } from "primereact/selectbutton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export type SecurityQuestionsProps = {
  message?: string;
};

const SecurityQuestions: React.FC<SecurityQuestionsProps> = () => {
  const options = ["Si", "No"];
  const [firstQuestion, setFirstQuestion] = useState(options[1]);
  const [secondtQuestion, setSecondQuestion] = useState(options[1]);
  const [thirdQuestion, setThirdQuestion] = useState(options[1]);

  const [firstQuestionHidden, setFirstQuestionHidden] = useState(false);
  const [secondtQuestionHidden, setSecondQuestionHidden] = useState(true);
  const [thirdQuestionHidden, setThirdQuestionHidden] = useState(true);
  const MySwal = withReactContent(Swal);

  const notifyEmergencyContact = () => {
    console.log("notify to emergency contact");
  };

  const handleFirstQ = (value: any) => {
    setFirstQuestion(value);
    setSecondQuestionHidden(false);
  };

  const handleSecondQ = (value: any) => {
    setSecondQuestion(value);
    setThirdQuestionHidden(false);
  };

  const handleThirdQ = (value: any) => {
    setThirdQuestion(value);
    if (value === options[0]) {
      notifyEmergencyContact();
      MySwal.fire({
        position: "center",
        icon: "warning",
        title: "Tu contacto de emergencia ha sido notificado",
        showConfirmButton: true,
        timer: 2500,
      });
    }
  };

  return (
    <div className="card">
      <TabView>
        <TabPanel header="Pregunta I" disabled={firstQuestionHidden}>
          <p className="m-0">
            If two mind readers are reading each other's minds, whose mind are
            they actually reading?
          </p>
          <div className="card flex justify-content-center">
            <SelectButton
              value={firstQuestion}
              onChange={(e) => handleFirstQ(e.value)}
              options={options}
            />
          </div>
        </TabPanel>
        <TabPanel header="Pregunta II" disabled={secondtQuestionHidden}>
          <p className="m-0">Can you cry underwater?</p>
          <div className="card flex justify-content-center">
            <SelectButton
              value={secondtQuestion}
              onChange={(e) => handleSecondQ(e.value)}
              options={options}
            />
          </div>
        </TabPanel>
        <TabPanel header="Pregunta III" disabled={thirdQuestionHidden}>
          <p className="m-0">If a tomato is a fruit, is ketchup a smoothie?</p>
          <div className="card flex justify-content-center">
            <SelectButton
              value={thirdQuestion}
              onChange={(e) => handleThirdQ(e.value)}
              options={options}
            />
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default SecurityQuestions;
