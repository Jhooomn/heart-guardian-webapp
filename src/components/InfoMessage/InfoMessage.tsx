import React, { useState } from "react";
import "./InfoMessage.scss";
import { Message } from "primereact/message";

export type InfoMessageProps = {
  actualBpm: number;
  userAvgBpm: number;
};

const InfoMessage: React.FC<InfoMessageProps> = (props: InfoMessageProps) => {
  const [actualBpm, setActualBpm] = useState(props.actualBpm);
  const [userAvgBpm, setUserAvgBpm] = useState(props.userAvgBpm);

  if (actualBpm === userAvgBpm) {
    return (
      <>
        <Message severity="success" text="Te encuentras en un nivel estable" />
      </>
    );
  }
  if (actualBpm < userAvgBpm) {
    return (
      <>
        <Message
          severity="warn"
          text="Tu ritmo cardiaco está por debajo de lo normal"
        />
      </>
    );
  }
  if (actualBpm > userAvgBpm) {
    return (
      <>
        <Message
          severity="error"
          text="Tu ritmo cardiaco está por encima de lo normal"
        />
      </>
    );
  }
  return <></>;
};

export default InfoMessage;
