import React from "react";
import { ComboBox, IComboBoxOption, IComboBoxStyles } from "@fluentui/react";

const options: IComboBoxOption[] = [
  { key: "A", text: "Medium" },
  { key: "B", text: "High" },
  { key: "C", text: "Low" },
];
// Optional styling to make the example look nicer
const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 200 } };

export const SelectBox: React.FunctionComponent = () => {
  return (
    <div>
      <ComboBox
        role="select"
        defaultSelectedKey="A"
        label=""
        options={options}
        styles={comboBoxStyles}
        calloutProps={{ doNotLayer: true }}
      />
      <div style={{ height: "2em" }} />
    </div>
  );
};
