import React from "react";
import SwitchForms from "./FormsSwitch";
import FoodForms from "../FoodForm/FoodForms";
import WaterForms from "../WaterForm/WaterForms";
import MoodForm from "../MoodForm/MoodForm";
import SleepForm from "../SleepForm/SleepForm";

interface IForms {
  id: number;
}

const Forms: React.FC<IForms> = ({ id }) => {
  return (
    <SwitchForms id={id}>
      <FoodForms data-id={1} />
      <WaterForms data-id={2} />
      <MoodForm data-id={3} />
      <SleepForm data-id={4} />
    </SwitchForms>
  );
};

export default Forms;
