import React from "react";

interface ISwitchForms {
  children: Array<JSX.Element>;
  value: string;
}

export const SwitchForms: React.FC<ISwitchForms> = ({
  children,
  value,
}): JSX.Element | null => {
  return children.find((child) => child.props[`data-value`] === value) ?? null;
};
