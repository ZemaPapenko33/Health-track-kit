import React from "react";
import { SwitchForms } from "./FormsSwitch";
import { FoodForms } from "../FoodForm/FoodForms";
import { WaterForms } from "../WaterForm/WaterForms";
import { MoodForm } from "../MoodForm/MoodForm";
import { SleepForm } from "../SleepForm/SleepForm";

interface IForms {
  value: string;
}

export const Forms: React.FC<IForms> = ({ value }) => {
  return (
    <SwitchForms value={value}>
      <FoodForms data-value={"food"} />
      <WaterForms data-value={"water"} />
      <MoodForm data-value={"mood"} />
      <SleepForm data-value={"sleep"} />
    </SwitchForms>
  );
};
