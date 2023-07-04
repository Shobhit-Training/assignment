import { initializeIcons } from "@fluentui/react";
import { useState, useEffect } from "react";
import { cardDataProp, masterDataProp } from "../../models/models";
import axios from "axios";
import "./card.css";
import React from "react";

const CardsSection: React.FC = () => {
  const [data, setData] = useState<{
    apiData: cardDataProp | undefined | null;
    masterApiData: masterDataProp | undefined | null;
  }>({
    apiData: null,
    masterApiData: null,
  });

  const getDataforCards = async () => {
    const carData = await axios.get("./api.json");
    const masterData = await axios.get("./api2.json");

    setData({ apiData: carData?.data, masterApiData: masterData?.data });
  };
  useEffect(() => {
    getDataforCards();
    return () => {
      setData({ apiData: null, masterApiData: null });
    };
  }, []);

  const getValue = (key: number | undefined) => {
    let filterData = data?.masterApiData?.LevelValueMaster?.filter(function (
      el: any
    ) {
      return el.LevelValueKey === key;
    });

    return filterData![0].value || " ";
  };

  const getAverage = () => {
    let sum = 0;
    for (var key in data?.apiData?.LevelInfo) {
      // @ts-ignore
      let obj = data?.apiData.LevelInfo[key];

      let value = getValue(obj.LevelValueKey);
      sum += Number(value.split("%")[0]);
    }

    const average = sum / data?.apiData?.LevelInfo?.length!;

    return average + "%";
  };

  initializeIcons();
  return (
    <div className="main-wrapper">
      <div className="flex-container">
        {data?.apiData &&
          data?.apiData?.LevelInfo.map((level, index) => (
            <React.Fragment key={Math.random()}>
              <div
                data-testid="cardsection"
                className="flex-grow-1 flex-item"
                tabIndex={index + 1}
              >
                <div className="card-body">
                  <div
                    aria-labelledby={level.Name}
                    className="flex-grow-1 label"
                  >
                    {level.Name}
                  </div>
                  <div className="flex-container">
                    <div
                      aria-labelledby={getValue(level.LevelValueKey)}
                      className="value"
                    >
                      {getValue(level.LevelValueKey)}
                    </div>
                    <div aria-labelledby={"Medium"} className="value-label">
                      Medium
                    </div>
                  </div>
                </div>
              </div>
              {index <= 1 && (
                <div className="flex-item custom-flex-item">+</div>
              )}
            </React.Fragment>
          ))}

        <div className="flex-item custom-flex-item">=</div>
        <div
          data-testid="overallCard"
          tabIndex={4}
          className="flex-grow-1 flex-item"
        >
          <div className="card-body">
            <div aria-labelledby={"Overall"} className="flex-grow-1 label">
              Overall
            </div>
            <div className="flex-container overall">
              <div aria-labelledby={getAverage()} className="value">
                {getAverage()}
              </div>
              <div aria-labelledby={"Medium"} className="value-label">
                Medium
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
