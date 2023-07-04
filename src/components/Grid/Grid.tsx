import React from "react";
import { DetailsList } from "@fluentui/react";

import { SelectBox } from "../SelectBox/SelectBox";

const operations: any = [
  {
    criteria: "willingess of the networking and security teams",
  },
  {
    criteria: "Readiness of the customer support",
  },
];

const columns = [
  {
    key: "column1",
    name: "Criteria",
    fieldName: "criteria",
    minWidth: 100,
    maxWidth: 300,
    isResizable: true,
  },
  {
    key: "column2",
    name: "Confidence Level",
    fieldName: "confidence_level",
    minWidth: 100,
    maxWidth: 300,
    isResizable: true,
  },
];
function renderItemColumn(item?: any, index?: number, column?: any) {
  const fieldContent = item[column.fieldName] as string;

  switch (column.key) {
    case "column2":
      return <SelectBox></SelectBox>;

    default:
      return <span>{fieldContent}</span>;
  }
}
const GridData: React.FC = () => {
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-sm9 ms-xl9 `}>
        <DetailsList
          role="list"
          items={operations}
          columns={columns}
          onRenderItemColumn={renderItemColumn}
          selectionMode={0}
        />
      </div>
    </div>
  );
};

export default GridData;
