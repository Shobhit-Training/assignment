import { rest } from "msw";

export const handlers = [
  rest.get("./api.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        LevelInfo: [
          {
            Name: "Customer Maturity",
            LevelValueKey: 2,
          },
          {
            Name: "Delivery Maturity and Quality",
            LevelValueKey: 3,
          },
          {
            Name: "Scope and Change Management",
            LevelValueKey: 4,
          },
        ],
      })
    );
  }),

  rest.get("./api2.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        LevelValueMaster: [
          {
            LevelValueKey: 1,
            value: "30%",
          },
          {
            LevelValueKey: 2,
            value: "40%",
          },
          {
            LevelValueKey: 3,
            value: "50%",
          },
          {
            LevelValueKey: 4,
            value: "60%",
          },
          {
            LevelValueKey: 5,
            value: "70%",
          },
        ],
      })
    );
  }),
];
