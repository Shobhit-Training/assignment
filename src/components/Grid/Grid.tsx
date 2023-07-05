import React, { useState, useEffect } from "react";
import { DetailsList } from "@fluentui/react";
import { SelectBox } from "../SelectBox/SelectBox";

const items: any = [
  {
    codeId: "willingess of the networking and security teams",
    name: "Customer Cloud Maturity",
    initialAssessment: 1,
  },
  {
    codeId: "Readiness of the customer support",
    name: "Customer Cloud Maturity",
    initialAssessment: 1,
  },
  {
    codeId: "Precession of the work estimation",
    name: "Delivery approach and  Duration Match the customer Support",
    initialAssessment: 2,
  },
  {
    codeId: "Fit Out Delivery modal and customer estimation",
    name: "Delivery approach and  Duration Match the customer Support",
    initialAssessment: 2,
  },
  {
    codeId: "Understanding of customer It enviornment process",
    name: "Delivery approach and  Duration Match the customer Support",
    initialAssessment: 2,
  },
  {
    name: "Scope and Complexity",
    codeId: "Understanding of each offering scenarion",
    initialAssessment: 3,
  },
  {
    name: "Scope and Complexity",
    codeId: "Complexity Level",
    initialAssessment: 3,
  },
];

const columns = [
  {
    key: "column1",
    name: "Criteria",
    fieldName: "codeId",
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
      return (
        <span aria-labelledby={fieldContent} tabIndex={index}>
          {fieldContent}
        </span>
      );
  }
}
const GridData: React.FC = () => {
  const [group, setGroup] = useState<any[]>([]);

  useEffect(() => {
    const data = [...items]
      .sort((a, b) => a.initialAssessment - b.initialAssessment)
      .reduce((acc, cur) => {
        const { initialAssessment, name } = cur;
        const group = {
          key: initialAssessment,
          name: `${name}`,
          startIndex: 0,
          count: 1,
        };
        if (acc.length === 0) {
          acc.push(group);
          return acc;
        } else if (acc[acc.length - 1].key !== cur.initialAssessment) {
          const { count, startIndex } = acc[acc.length - 1];
          acc.push({
            ...group,
            startIndex: count + startIndex,
          });
          return acc;
        }
        acc[acc.length - 1].count++;
        return acc;
      }, []);

    setGroup(data);
  }, []);
  return (
    <div data-is-scrollable={true}>
      <div className={`s-Grid-col ms-sm9 ms-xl9 `}>
        <DetailsList
          role="list"
          items={items}
          groups={group}
          columns={columns}
          onRenderItemColumn={renderItemColumn}
          selectionMode={0}
          compact={true}
        />
      </div>
    </div>
  );
};

export default GridData;
