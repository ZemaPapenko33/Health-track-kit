import React from "react";

interface ISwitchForms {
  children: Array<JSX.Element>;
  id: number;
}

export const SwitchForms: React.FC<ISwitchForms> = ({
  children,
  id,
}): JSX.Element | null => {
  return children.find((child) => child.props[`data-id`] === id) ?? null;
};

export default SwitchForms;
