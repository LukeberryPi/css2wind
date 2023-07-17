export const api = {
  layout: [],
  flexboxAndGrid: [
    {
      key: "align-items",
      match: [
        {
          css: "center",
          tailwind: {
            correct: ["items-center"],
          },
        },
        {
          css: "start",
          tailwind: {
            correct: ["items-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["items-end"],
          },
        },
        {
          css: "baseline",
          tailwind: {
            correct: ["items-baseline"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["items-stretch"],
          },
        },
      ],
    },
    {
      key: "justify-content",
      match: [
        {
          css: "center",
          tailwind: {
            correct: ["justify-center"],
          },
        },
        {
          css: "start",
          tailwind: {
            correct: ["justify-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["justify-end"],
          },
        },
        {
          css: "between",
          tailwind: {
            correct: ["justify-between"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["justify-stretch"],
          },
        },
        {
          css: "around",
          tailwind: {
            correct: ["justify-around"],
          },
        },
        {
          css: "evenly",
          tailwind: {
            correct: ["justify-evenly"],
          },
        },
        {
          css: "normal",
          tailwind: {
            correct: ["justify-normal"],
          },
        },
      ],
    },
    {
      key: "flex-direction",
      match: [
        {
          css: "column-reverse",
          tailwind: {
            correct: ["flex-col-reverse"],
          },
        },
        {
          css: "column",
          tailwind: {
            correct: ["flex-col"],
          },
        },
        {
          css: "row-reverse",
          tailwind: {
            correct: ["flex-row-reverse"],
          },
        },
        {
          css: "row",
          tailwind: {
            correct: ["flex-row"],
          },
        },
      ],
    },
    {
      key: "flex-wrap",
      match: [
        {
          css: "wrap",
          tailwind: {
            correct: ["flex-wrap"],
          },
        },
        {
          css: "wrap-reverse",
          tailwind: {
            correct: ["flex-wrap-reverse"],
          },
        },
        {
          css: "nowrap",
          tailwind: {
            correct: ["flex-nowrap"],
          },
        },
      ],
    },
    {
      key: "flex",
      match: [
        {
          css: "0 1 auto",
          tailwind: {
            correct: ["flex-initial"],
          },
        },
        {
          css: "1 1 0%",
          tailwind: {
            correct: ["flex-1"],
          },
        },
        {
          css: "1 1 auto",
          tailwind: {
            correct: ["flex-auto"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["flex-none"],
          },
        },
      ],
    },
    {
      key: "order",
      match: [
        {
          css: "1",
          tailwind: {
            correct: ["order-1"],
          },
        },
        {
          css: "2",
          tailwind: {
            correct: ["order-2"],
          },
        },
        {
          css: "3",
          tailwind: {
            correct: ["order-3"],
          },
        },
        {
          css: "4",
          tailwind: {
            correct: ["order-4"],
          },
        },
        {
          css: "5",
          tailwind: {
            correct: ["order-5"],
          },
        },
        {
          css: "6",
          tailwind: {
            correct: ["order-6"],
          },
        },
        {
          css: "7",
          tailwind: {
            correct: ["order-7"],
          },
        },
        {
          css: "8",
          tailwind: {
            correct: ["order-8"],
          },
        },
        {
          css: "9",
          tailwind: {
            correct: ["order-9"],
          },
        },
        {
          css: "10",
          tailwind: {
            correct: ["order-10"],
          },
        },
        {
          css: "11",
          tailwind: {
            correct: ["order-11"],
          },
        },
        {
          css: "12",
          tailwind: {
            correct: ["order-12"],
          },
        },
        {
          css: "-9999",
          tailwind: {
            correct: ["order-first"],
          },
        },
        {
          css: "9999",
          tailwind: {
            correct: ["order-last"],
          },
        },
        {
          css: "0",
          tailwind: {
            correct: ["order-none"],
          },
        },
      ],
    },
    {
      key: "flex-grow",
      match: [
        {
          css: "1",
          tailwind: {
            correct: ["grow"],
          },
        },
        {
          css: "0",
          tailwind: {
            correct: ["grow-0"],
          },
        },
      ],
    },
    {
      key: "flex-shrink",
      match: [
        {
          css: "1",
          tailwind: {
            correct: ["shrink"],
          },
        },
        {
          css: "0",
          tailwind: {
            correct: ["shrink-0"],
          },
        },
      ],
    },
    {
      key: "gap",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["gap-0"],
            partial: ["gap-[0px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["gap-px"],
            partial: ["gap-[1px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["gap-0.5"],
            partial: ["gap-[2px]", "gap-0,5"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["gap-1"],
            partial: ["gap-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["gap-1.5"],
            partial: ["gap-[6px]", "gap-1,5"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["gap-2"],
            partial: ["gap-[8px]"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["gap-2.5"],
            partial: ["gap-[10px]", "gap-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["gap-3"],
            partial: ["gap-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["gap-3.5"],
            partial: ["gap-[14px]", "gap-3,5"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["gap-4"],
            partial: ["gap-[16px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["gap-5"],
            partial: ["gap-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["gap-6"],
            partial: ["gap-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["gap-7"],
            partial: ["gap-[28px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["gap-8"],
            partial: ["gap-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["gap-9"],
            partial: ["gap-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["gap-10"],
            partial: ["gap-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["gap-12"],
            partial: ["gap-[48px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["gap-20"],
            partial: ["gap-[80px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["gap-40"],
            partial: ["gap-[160px]"],
          },
        },
        {
          css: "240px",
          tailwind: {
            correct: ["gap-60"],
            partial: ["gap-[240px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["gap-80"],
            partial: ["gap-[320px]"],
          },
        },
      ],
    },
    {
      key: "row-gap",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["gap-y-0"],
            partial: ["gap-y-[0px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["gap-y-px"],
            partial: ["gap-y-[1px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["gap-y-0.5"],
            partial: ["gap-y-[2px]", "gap-y-0,5"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["gap-y-1"],
            partial: ["gap-y-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["gap-y-1.5"],
            partial: ["gap-y-[6px]", "gap-y-1,5"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["gap-y-2"],
            partial: ["gap-y-[8px]"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["gap-y-2.5"],
            partial: ["gap-y-[10px]", "gap-y-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["gap-y-3"],
            partial: ["gap-y-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["gap-y-3.5"],
            partial: ["gap-y-[14px]", "gap-y-3,5"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["gap-y-4"],
            partial: ["gap-y-[16px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["gap-y-5"],
            partial: ["gap-y-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["gap-y-6"],
            partial: ["gap-y-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["gap-y-7"],
            partial: ["gap-y-[28px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["gap-y-8"],
            partial: ["gap-y-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["gap-y-9"],
            partial: ["gap-y-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["gap-y-10"],
            partial: ["gap-y-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["gap-y-12"],
            partial: ["gap-y-[48px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["gap-y-20"],
            partial: ["gap-y-[80px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["gap-y-40"],
            partial: ["gap-y-[160px]"],
          },
        },
        {
          css: "240px",
          tailwind: {
            correct: ["gap-y-60"],
            partial: ["gap-y-[240px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["gap-y-80"],
            partial: ["gap-y-[320px]"],
          },
        },
      ],
    },
    {
      key: "column-gap",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["gap-x-0"],
            partial: ["gap-x-[0px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["gap-x-px"],
            partial: ["gap-x-[1px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["gap-x-0.5"],
            partial: ["gap-x-[2px]", "gap-x-0,5"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["gap-x-1"],
            partial: ["gap-x-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["gap-x-1.5"],
            partial: ["gap-x-[6px]", "gap-x-1,5"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["gap-x-2"],
            partial: ["gap-x-[8px]"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["gap-x-2.5"],
            partial: ["gap-x-[10px]", "gap-x-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["gap-x-3"],
            partial: ["gap-x-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["gap-x-3.5"],
            partial: ["gap-x-[14px]", "gap-x-3,5"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["gap-x-4"],
            partial: ["gap-x-[16px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["gap-x-5"],
            partial: ["gap-x-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["gap-x-6"],
            partial: ["gap-x-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["gap-x-7"],
            partial: ["gap-x-[28px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["gap-x-8"],
            partial: ["gap-x-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["gap-x-9"],
            partial: ["gap-x-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["gap-x-10"],
            partial: ["gap-x-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["gap-x-12"],
            partial: ["gap-x-[48px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["gap-x-20"],
            partial: ["gap-x-[80px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["gap-x-40"],
            partial: ["gap-x-[160px]"],
          },
        },
        {
          css: "240px",
          tailwind: {
            correct: ["gap-x-60"],
            partial: ["gap-x-[240px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["gap-x-80"],
            partial: ["gap-x-[320px]"],
          },
        },
      ],
    },
    {
      key: "justify-items",
      match: [
        {
          css: "start",
          tailwind: {
            correct: ["justify-items-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["justify-items-end"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["justify-items-center"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["justify-items-stretch"],
          },
        },
      ],
    },
    {
      key: "justify-self",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["justify-self-auto"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["justify-self-center"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["justify-self-end"],
          },
        },
        {
          css: "start",
          tailwind: {
            correct: ["justify-self-start"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["justify-self-stretch"],
          },
        },
      ],
    },
    {
      key: "align-content",
      match: [
        {
          css: "normal",
          tailwind: {
            correct: ["content-normal"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["content-center"],
          },
        },
        {
          css: "flex-start",
          tailwind: {
            correct: ["content-start"],
          },
        },
        {
          css: "flex-end",
          tailwind: {
            correct: ["content-end"],
          },
        },
        {
          css: "space-between",
          tailwind: {
            correct: ["content-between"],
          },
        },
        {
          css: "space-around",
          tailwind: {
            correct: ["content-around"],
          },
        },
        {
          css: "space-evenly",
          tailwind: {
            correct: ["content-evenly"],
          },
        },
        {
          css: "baseline",
          tailwind: {
            correct: ["content-baseline"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["content-stretch"],
          },
        },
      ],
    },
    {
      key: "align-self",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["self-auto"],
          },
        },
        {
          css: "flex-start",
          tailwind: {
            correct: ["self-start"],
          },
        },
        {
          css: "flex-end",
          tailwind: {
            correct: ["self-end"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["self-center"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["self-stretch"],
          },
        },
        {
          css: "baseline",
          tailwind: {
            correct: ["self-baseline"],
          },
        },
      ],
    },
    {
      key: "place-content",
      match: [
        {
          css: "center",
          tailwind: {
            correct: ["place-content-center"],
          },
        },
        {
          css: "start",
          tailwind: {
            correct: ["place-content-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["place-content-end"],
          },
        },
        {
          css: "space-between",
          tailwind: {
            correct: ["place-content-between"],
          },
        },
        {
          css: "space-around",
          tailwind: {
            correct: ["place-content-around"],
          },
        },
        {
          css: "space-evenly",
          tailwind: {
            correct: ["place-content-evenly"],
          },
        },
        {
          css: "baseline",
          tailwind: {
            correct: ["place-content-baseline"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["place-content-stretch"],
          },
        },
      ],
    },
    {
      key: "place-items",
      match: [
        {
          css: "start",
          tailwind: {
            correct: ["place-items-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["place-items-end"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["place-items-center"],
          },
        },
        {
          css: "baseline",
          tailwind: {
            correct: ["place-items-baseline"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["place-items-stretch"],
          },
        },
      ],
    },
    {
      key: "place-self",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["place-self-auto"],
          },
        },
        {
          css: "start",
          tailwind: {
            correct: ["place-self-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["place-self-end"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["place-self-center"],
          },
        },
        {
          css: "stretch",
          tailwind: {
            correct: ["place-self-stretch"],
          },
        },
      ],
    },
  ],
  spacing: [
    {
      key: "margin",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["m-0"],
            partial: ["m-[0px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["m-0.5"],
            partial: ["m-[2px]", "m-0,5"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["m-1"],
            partial: ["m-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["m-1.5"],
            partial: ["m-[6px]", "m-1,5"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["m-2"],
            partial: ["m-[8px]"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["m-2.5"],
            partial: ["m-[10px]", "m-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["m-3"],
            partial: ["m-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["m-3.5"],
            partial: ["m-[14px]", "m-3,5"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["m-5"],
            partial: ["m-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["m-6"],
            partial: ["m-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["m-7"],
            partial: ["m-[28px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["m-8"],
            partial: ["m-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["m-9"],
            partial: ["m-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["m-10"],
            partial: ["m-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["m-12"],
            partial: ["m-[48px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["m-20"],
            partial: ["m-[80px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["m-40"],
            partial: ["m-[160px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["m-80"],
            partial: ["m-[320px]"],
          },
        },
      ],
    },
    {
      key: "margin-block",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["my-2.5"],
            partial: ["my-[10px]", "my-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["my-3"],
            partial: ["my-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["my-3.5"],
            partial: ["my-[14px]", "my-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["my-40"],
            partial: ["my-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["my-4"],
            partial: ["my-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["my-px"],
            partial: ["my-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["my-5"],
            partial: ["my-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["my-6"],
            partial: ["my-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["my-7"],
            partial: ["my-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["my-0.5"],
            partial: ["my-[2px]", "my-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["my-80"],
            partial: ["my-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["my-8"],
            partial: ["my-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["my-9"],
            partial: ["my-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["my-10"],
            partial: ["my-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["my-12"],
            partial: ["my-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["my-1"],
            partial: ["my-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["my-1.5"],
            partial: ["my-[6px]", "my-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["my-20"],
            partial: ["my-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["my-2"],
            partial: ["my-[8px]"],
          },
        },
      ],
    },
    {
      key: "margin-inline",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["mx-2.5"],
            partial: ["mx-[10px]", "mx-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["mx-3"],
            partial: ["mx-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["mx-3.5"],
            partial: ["mx-[14px]", "mx-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["mx-40"],
            partial: ["mx-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["mx-4"],
            partial: ["mx-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["mx-px"],
            partial: ["mx-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["mx-5"],
            partial: ["mx-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["mx-6"],
            partial: ["mx-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["mx-7"],
            partial: ["mx-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["mx-0.5"],
            partial: ["mx-[2px]", "mx-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["mx-80"],
            partial: ["mx-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["mx-8"],
            partial: ["mx-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["mx-9"],
            partial: ["mx-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["mx-10"],
            partial: ["mx-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["mx-12"],
            partial: ["mx-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["mx-1"],
            partial: ["mx-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["mx-1.5"],
            partial: ["mx-[6px]", "mx-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["mx-20"],
            partial: ["mx-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["mx-2"],
            partial: ["mx-[8px]"],
          },
        },
      ],
    },
    {
      key: "margin-top",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["mt-2.5"],
            partial: ["mt-[10px]", "mt-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["mt-3"],
            partial: ["mt-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["mt-3.5"],
            partial: ["mt-[14px]", "mt-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["mt-40"],
            partial: ["mt-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["mt-4"],
            partial: ["mt-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["mt-px"],
            partial: ["mt-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["mt-5"],
            partial: ["mt-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["mt-6"],
            partial: ["mt-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["mt-7"],
            partial: ["mt-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["mt-0.5"],
            partial: ["mt-[2px]", "mt-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["mt-80"],
            partial: ["mt-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["mt-8"],
            partial: ["mt-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["mt-9"],
            partial: ["mt-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["mt-10"],
            partial: ["mt-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["mt-12"],
            partial: ["mt-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["mt-1"],
            partial: ["mt-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["mt-1.5"],
            partial: ["mt-[6px]", "mt-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["mt-20"],
            partial: ["mt-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["mt-2"],
            partial: ["mt-[8px]"],
          },
        },
      ],
    },
    {
      key: "margin-right",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["mr-2.5"],
            partial: ["mr-[10px]", "mr-2.5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["mr-3"],
            partial: ["mr-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["mr-3.5"],
            partial: ["mr-[14px]", "mr-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["mr-40"],
            partial: ["mr-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["mr-4"],
            partial: ["mr-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["mr-px"],
            partial: ["mr-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["mr-5"],
            partial: ["mr-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["mr-6"],
            partial: ["mr-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["mr-7"],
            partial: ["mr-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["mr-0.5"],
            partial: ["mr-[2px]", "mr-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["mr-80"],
            partial: ["mr-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["mr-8"],
            partial: ["mr-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["mr-9"],
            partial: ["mr-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["mr-10"],
            partial: ["mr-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["mr-12"],
            partial: ["mr-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["mr-1"],
            partial: ["mr-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["mr-1.5"],
            partial: ["mr-[6px]", "mr-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["mr-20"],
            partial: ["mr-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["mr-2"],
            partial: ["mr-[8px]"],
          },
        },
      ],
    },
    {
      key: "margin-bottom",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["mb-2.5"],
            partial: ["mb-[10px]", "mb-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["mb-3"],
            partial: ["mb-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["mb-3.5"],
            partial: ["mb-[14px]", "mb-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["mb-40"],
            partial: ["mb-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["mb-4"],
            partial: ["mb-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["mb-px"],
            partial: ["mb-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["mb-5"],
            partial: ["mb-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["mb-6"],
            partial: ["mb-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["mb-7"],
            partial: ["mb-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["mb-0.5"],
            partial: ["mb-[2px]", "mb-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["mb-80"],
            partial: ["mb-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["mb-8"],
            partial: ["mb-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["mb-9"],
            partial: ["mb-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["mb-10"],
            partial: ["mb-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["mb-12"],
            partial: ["mb-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["mb-1"],
            partial: ["mb-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["mb-1.5"],
            partial: ["mb-[6px]", "mb-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["mb-20"],
            partial: ["mb-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["mb-2"],
            partial: ["mb-[8px]"],
          },
        },
      ],
    },
    {
      key: "margin-left",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["ml-2.5"],
            partial: ["ml-[10px]", "ml-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["ml-3"],
            partial: ["ml-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["ml-3.5"],
            partial: ["ml-[14px]", "ml-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["ml-40"],
            partial: ["ml-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["ml-4"],
            partial: ["ml-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["ml-px"],
            partial: ["ml-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["ml-5"],
            partial: ["ml-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["ml-6"],
            partial: ["ml-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["ml-7"],
            partial: ["ml-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["ml-0.5"],
            partial: ["ml-[2px]", "ml-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["ml-80"],
            partial: ["ml-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["ml-8"],
            partial: ["ml-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["ml-9"],
            partial: ["ml-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["ml-10"],
            partial: ["ml-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["ml-12"],
            partial: ["ml-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["ml-1"],
            partial: ["ml-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["ml-1.5"],
            partial: ["ml-[6px]", "ml-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["ml-20"],
            partial: ["ml-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["ml-2"],
            partial: ["ml-[8px]"],
          },
        },
      ],
    },
    {
      key: "padding",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["p-0"],
            partial: ["p-[0px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["p-0.5"],
            partial: ["p-[2px]", "p-0,5"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["p-1"],
            partial: ["p-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["p-1.5"],
            partial: ["p-[6px]", "p-1,5"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["p-2"],
            partial: ["p-[8px]"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["p-2.5"],
            partial: ["p-[10px]", "p-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["p-3"],
            partial: ["p-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["p-3.5"],
            partial: ["p-[14px]", "p-3,5"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["p-5"],
            partial: ["p-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["p-6"],
            partial: ["p-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["p-7"],
            partial: ["p-[28px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["p-8"],
            partial: ["p-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["p-9"],
            partial: ["p-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["p-10"],
            partial: ["p-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["p-12"],
            partial: ["p-[48px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["p-20"],
            partial: ["p-[80px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["p-40"],
            partial: ["p-[160px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["p-80"],
            partial: ["p-[320px]"],
          },
        },
      ],
    },
    {
      key: "padding-block",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["py-2.5"],
            partial: ["py-[10px]", "py-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["py-3"],
            partial: ["py-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["py-3.5"],
            partial: ["py-[14px]", "py-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["py-40"],
            partial: ["py-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["py-4"],
            partial: ["py-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["py-px"],
            partial: ["py-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["py-5"],
            partial: ["py-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["py-6"],
            partial: ["py-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["py-7"],
            partial: ["py-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["py-0.5"],
            partial: ["py-[2px]", "py-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["py-80"],
            partial: ["py-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["py-8"],
            partial: ["py-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["py-9"],
            partial: ["py-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["py-10"],
            partial: ["py-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["py-12"],
            partial: ["py-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["py-1"],
            partial: ["py-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["py-1.5"],
            partial: ["py-[6px]", "py-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["py-20"],
            partial: ["py-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["py-2"],
            partial: ["py-[8px]"],
          },
        },
      ],
    },
    {
      key: "padding-inline",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["px-2.5"],
            partial: ["px-[10px]", "px-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["px-3"],
            partial: ["px-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["px-3.5"],
            partial: ["px-[14px]", "px-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["px-40"],
            partial: ["px-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["px-4"],
            partial: ["px-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["px-px"],
            partial: ["px-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["px-5"],
            partial: ["px-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["px-6"],
            partial: ["px-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["px-7"],
            partial: ["px-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["px-0.5"],
            partial: ["px-[2px]", "px-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["px-80"],
            partial: ["px-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["px-8"],
            partial: ["px-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["px-9"],
            partial: ["px-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["px-10"],
            partial: ["px-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["px-12"],
            partial: ["px-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["px-1"],
            partial: ["px-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["px-1.5"],
            partial: ["px-[6px]", "px-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["px-20"],
            partial: ["px-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["px-2"],
            partial: ["px-[8px]"],
          },
        },
      ],
    },
    {
      key: "padding-top",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["pt-2.5"],
            partial: ["pt-[10px]", "pt-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["pt-3"],
            partial: ["pt-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["pt-3.5"],
            partial: ["pt-[14px]", "pt-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["pt-40"],
            partial: ["pt-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["pt-4"],
            partial: ["pt-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["pt-px"],
            partial: ["pt-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["pt-5"],
            partial: ["pt-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["pt-6"],
            partial: ["pt-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["pt-7"],
            partial: ["pt-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["pt-0.5"],
            partial: ["pt-[2px]", "pt-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["pt-80"],
            partial: ["pt-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["pt-8"],
            partial: ["pt-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["pt-9"],
            partial: ["pt-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["pt-10"],
            partial: ["pt-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["pt-12"],
            partial: ["pt-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["pt-1"],
            partial: ["pt-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["pt-1.5"],
            partial: ["pt-[6px]", "pt-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["pt-20"],
            partial: ["pt-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["pt-2"],
            partial: ["pt-[8px]"],
          },
        },
      ],
    },
    {
      key: "padding-right",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["pr-2.5"],
            partial: ["pr-[10px]", "pr-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["pr-3"],
            partial: ["pr-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["pr-3.5"],
            partial: ["pr-[14px]", "pr-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["pr-40"],
            partial: ["pr-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["pr-4"],
            partial: ["pr-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["pr-px"],
            partial: ["pr-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["pr-5"],
            partial: ["pr-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["pr-6"],
            partial: ["pr-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["pr-7"],
            partial: ["pr-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["pr-0.5"],
            partial: ["pr-[2px]", "pr-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["pr-80"],
            partial: ["pr-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["pr-8"],
            partial: ["pr-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["pr-9"],
            partial: ["pr-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["pr-10"],
            partial: ["pr-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["pr-12"],
            partial: ["pr-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["pr-1"],
            partial: ["pr-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["pr-1.5"],
            partial: ["pr-[6px]", "pr-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["pr-20"],
            partial: ["pr-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["pr-2"],
            partial: ["pr-[8px]"],
          },
        },
      ],
    },
    {
      key: "padding-bottom",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["pb-2.5"],
            partial: ["pb-[10px]", "pb-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["pb-3"],
            partial: ["pb-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["pb-3.5"],
            partial: ["pb-[14px]", "pb-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["pb-40"],
            partial: ["pb-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["pb-4"],
            partial: ["pb-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["pb-px"],
            partial: ["pb-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["pb-5"],
            partial: ["pb-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["pb-6"],
            partial: ["pb-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["pb-7"],
            partial: ["pb-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["pb-0.5"],
            partial: ["pb-[2px]", "pb-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["pb-80"],
            partial: ["pb-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["pb-8"],
            partial: ["pb-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["pb-9"],
            partial: ["pb-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["pb-10"],
            partial: ["pb-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["pb-12"],
            partial: ["pb-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["pb-1"],
            partial: ["pb-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["pb-1.5"],
            partial: ["pb-[6px]", "pb-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["pb-20"],
            partial: ["pb-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["pb-2"],
            partial: ["pb-[8px]"],
          },
        },
      ],
    },
    {
      key: "padding-left",
      match: [
        {
          css: "10px",
          tailwind: {
            correct: ["pl-2.5"],
            partial: ["pl-[10px]", "pl-2,5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["pl-3"],
            partial: ["pl-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["pl-3.5"],
            partial: ["pl-[14px]", "pl-3,5"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["pl-40"],
            partial: ["pl-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["pl-4"],
            partial: ["pl-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["pl-px"],
            partial: ["pl-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["pl-5"],
            partial: ["pl-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["pl-6"],
            partial: ["pl-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["pl-7"],
            partial: ["pl-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["pl-0.5"],
            partial: ["pl-[2px]", "pl-0,5"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["pl-80"],
            partial: ["pl-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["pl-8"],
            partial: ["pl-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["pl-9"],
            partial: ["pl-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["pl-10"],
            partial: ["pl-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["pl-12"],
            partial: ["pl-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["pl-1"],
            partial: ["pl-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["pl-1.5"],
            partial: ["pl-[6px]", "pl-1,5"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["pl-20"],
            partial: ["pl-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["pl-2"],
            partial: ["pl-[8px]"],
          },
        },
      ],
    },
  ],
  sizing: [
    {
      key: "height",
      match: [
        {
          css: "100%",
          tailwind: {
            correct: ["h-full"],
          },
        },
        {
          css: "100vh",
          tailwind: {
            correct: ["h-screen"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["h-2.5"],
            partial: ["h-[10px]"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["h-3"],
            partial: ["h-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["h-3.5"],
            partial: ["h-[14px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["h-40"],
            partial: ["h-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["h-4"],
            partial: ["h-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["h-px"],
            partial: ["h-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["h-5"],
            partial: ["h-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["h-6"],
            partial: ["h-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["h-7"],
            partial: ["h-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["h-0.5"],
            partial: ["h-[2px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["h-80"],
            partial: ["h-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["h-8"],
            partial: ["h-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["h-9"],
            partial: ["h-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["h-10"],
            partial: ["h-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["h-12"],
            partial: ["h-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["h-1"],
            partial: ["h-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["h-1.5"],
            partial: ["h-[6px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["h-20"],
            partial: ["h-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["h-2"],
            partial: ["h-[8px]"],
          },
        },
        {
          css: "auto",
          tailwind: {
            correct: ["h-auto"],
          },
        },
        {
          css: "fit-content",
          tailwind: {
            correct: ["h-fit"],
          },
        },
        {
          css: "max-content",
          tailwind: {
            correct: ["h-max"],
          },
        },
        {
          css: "min-content",
          tailwind: {
            correct: ["h-min"],
          },
        },
      ],
    },
    {
      key: "min-height",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["min-h-0"],
            partial: ["min-h-[0px]"],
          },
        },
        {
          css: "100%",
          tailwind: {
            correct: ["min-h-full"],
          },
        },
        {
          css: "100vh",
          tailwind: {
            correct: ["min-h-screen"],
          },
        },
        {
          css: "fit-content",
          tailwind: {
            correct: ["min-h-fit"],
          },
        },
        {
          css: "max-content",
          tailwind: {
            correct: ["min-h-max"],
          },
        },
        {
          css: "min-content",
          tailwind: {
            correct: ["min-h-min"],
          },
        },
      ],
    },
    {
      key: "max-height",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["max-h-0"],
            partial: ["max-h-[0px]"],
          },
        },
        {
          css: "100%",
          tailwind: {
            correct: ["max-h-full"],
          },
        },
        {
          css: "100vh",
          tailwind: {
            correct: ["max-h-screen"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["max-h-2.5"],
            partial: ["max-h-[10px]"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["max-h-3"],
            partial: ["max-h-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["max-h-3.5"],
            partial: ["max-h-[14px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["max-h-40"],
            partial: ["max-h-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["max-h-4"],
            partial: ["max-h-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["max-h-px"],
            partial: ["max-h-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["max-h-5"],
            partial: ["max-h-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["max-h-6"],
            partial: ["max-h-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["max-h-7"],
            partial: ["max-h-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["max-h-0.5"],
            partial: ["max-h-[2px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["max-h-80"],
            partial: ["max-h-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["max-h-8"],
            partial: ["max-h-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["max-h-9"],
            partial: ["max-h-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["max-h-10"],
            partial: ["max-h-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["max-h-12"],
            partial: ["max-h-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["max-h-1"],
            partial: ["max-h-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["max-h-1.5"],
            partial: ["max-h-[6px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["max-h-20"],
            partial: ["max-h-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["max-h-2"],
            partial: ["max-h-[8px]"],
          },
        },
        {
          css: "fit-content",
          tailwind: {
            correct: ["max-h-fit"],
          },
        },
        {
          css: "max-content",
          tailwind: {
            correct: ["max-h-max"],
          },
        },
        {
          css: "min-content",
          tailwind: {
            correct: ["max-h-min"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["max-h-none"],
          },
        },
      ],
    },
    {
      key: "width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["w-0"],
            partial: ["w-[0px]"],
          },
        },
        {
          css: "100%",
          tailwind: {
            correct: ["w-full"],
          },
        },
        {
          css: "100vw",
          tailwind: {
            correct: ["w-screen"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["w-2.5"],
            partial: ["w-[10px]"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["w-3"],
            partial: ["w-[12px]"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["w-3.5"],
            partial: ["w-[14px]"],
          },
        },
        {
          css: "160px",
          tailwind: {
            correct: ["w-40"],
            partial: ["w-[160px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["w-4"],
            partial: ["w-[16px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["w-px"],
            partial: ["w-[1px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["w-5"],
            partial: ["w-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["w-6"],
            partial: ["w-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["w-7"],
            partial: ["w-[28px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["w-0.5"],
            partial: ["w-[2px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["w-80"],
            partial: ["w-[320px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["w-8"],
            partial: ["w-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["w-9"],
            partial: ["w-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["w-10"],
            partial: ["w-[40px]"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["w-12"],
            partial: ["w-[48px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["w-1"],
            partial: ["w-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["w-1.5"],
            partial: ["w-[6px]"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["w-20"],
            partial: ["w-[80px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["w-2"],
            partial: ["w-[8px]"],
          },
        },
        {
          css: "auto",
          tailwind: {
            correct: ["w-auto"],
          },
        },
        {
          css: "fit-content",
          tailwind: {
            correct: ["w-fit"],
          },
        },
        {
          css: "max-content",
          tailwind: {
            correct: ["w-max"],
          },
        },
        {
          css: "min-content",
          tailwind: {
            correct: ["w-min"],
          },
        },
      ],
    },
    {
      key: "min-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["min-w-0"],
            partial: ["min-w-[0px]"],
          },
        },
        {
          css: "100%",
          tailwind: {
            correct: ["min-w-full"],
          },
        },
        {
          css: "max-content",
          tailwind: {
            correct: ["min-w-max"],
          },
        },
        {
          css: "min-content",
          tailwind: {
            correct: ["min-w-min"],
          },
        },
      ],
    },
    {
      key: "max-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["max-w-0"],
            partial: ["max-w-[0px]"],
          },
        },
        {
          css: "100%",
          tailwind: {
            correct: ["max-w-full"],
          },
        },
        {
          css: "1024px",
          tailwind: {
            correct: ["max-w-5xl", "max-w-screen-lg"],
            partial: ["max-w-[1024px]"],
          },
        },
        {
          css: "1152px",
          tailwind: {
            correct: ["max-w-6xl"],
            partial: ["max-w-[1152px]"],
          },
        },
        {
          css: "1280px",
          tailwind: {
            correct: ["max-w-7xl", "max-w-screen-xl"],
            partial: ["max-w-[1280px]"],
          },
        },
        {
          css: "1536px",
          tailwind: {
            correct: ["max-w-screen-2xl"],
            partial: ["max-w-[1536px]"],
          },
        },
        {
          css: "320px",
          tailwind: {
            correct: ["max-w-xs"],
            partial: ["max-w-[320px]"],
          },
        },
        {
          css: "448px",
          tailwind: {
            correct: ["max-w-md"],
            partial: ["max-w-[448px]"],
          },
        },
        {
          css: "512px",
          tailwind: {
            correct: ["max-w-lg"],
            partial: ["max-w-[512px]"],
          },
        },
        {
          css: "576px",
          tailwind: {
            correct: ["max-w-xl"],
            partial: ["max-w-[576px]"],
          },
        },
        {
          css: "640px",
          tailwind: {
            correct: ["max-w-screen-sm"],
            partial: ["max-w-[640px]"],
          },
        },
        {
          css: "65ch",
          tailwind: {
            correct: ["max-w-prose"],
            partial: ["max-w-[65ch]"],
          },
        },
        {
          css: "672px",
          tailwind: {
            correct: ["max-w-2xl"],
            partial: ["max-w-[672px]"],
          },
        },
        {
          css: "768px",
          tailwind: {
            correct: ["max-w-3xl", "max-w-screen-md"],
            partial: ["max-w-[768px]"],
          },
        },
        {
          css: "fit-content",
          tailwind: {
            correct: ["max-w-fit"],
          },
        },
        {
          css: "max-content",
          tailwind: {
            correct: ["max-w-max"],
          },
        },
        {
          css: "min-content",
          tailwind: {
            correct: ["max-w-min"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["max-w-none"],
          },
        },
      ],
    },
  ],
  typography: [
    {
      key: "font-style",
      match: [
        {
          css: "italic",
          tailwind: {
            correct: ["italic"],
          },
        },
        {
          css: "normal",
          tailwind: {
            correct: ["not-italic"],
          },
        },
      ],
    },
    {
      key: "font-weight",
      match: [
        {
          css: "100",
          tailwind: {
            correct: ["font-thin"],
          },
        },
        {
          css: "200",
          tailwind: {
            correct: ["font-extralight"],
          },
        },
        {
          css: "300",
          tailwind: {
            correct: ["font-light"],
          },
        },
        {
          css: "400",
          tailwind: {
            correct: ["font-normal"],
          },
        },
        {
          css: "500",
          tailwind: {
            correct: ["font-medium"],
          },
        },
        {
          css: "600",
          tailwind: {
            correct: ["font-semibold"],
          },
        },
        {
          css: "700",
          tailwind: {
            correct: ["font-bold"],
          },
        },
        {
          css: "800",
          tailwind: {
            correct: ["font-extrabold"],
          },
        },
        {
          css: "900",
          tailwind: {
            correct: ["font-black"],
          },
        },
      ],
    },
    {
      key: "font-variant-numeric",
      match: [
        {
          css: "normal",
          tailwind: {
            correct: ["normal-nums"],
          },
        },
        {
          css: "ordinal",
          tailwind: {
            correct: ["ordinal"],
          },
        },
        {
          css: "slashed-zero",
          tailwind: {
            correct: ["slashed-zero"],
          },
        },
        {
          css: "lining-nums",
          tailwind: {
            correct: ["lining-nums"],
          },
        },
        {
          css: "oldstyle-nums",
          tailwind: {
            correct: ["oldstyle-nums"],
          },
        },
        {
          css: "proportional-nums",
          tailwind: {
            correct: ["proportional-nums"],
          },
        },
        {
          css: "tabular-nums",
          tailwind: {
            correct: ["tabular-nums"],
          },
        },
        {
          css: "diagonal-fractions",
          tailwind: {
            correct: ["diagonal-fractions"],
          },
        },
        {
          css: "stacked-fractions",
          tailwind: {
            correct: ["stacked-fractions"],
          },
        },
      ],
    },
    {
      key: "letter-spacing",
      match: [
        {
          css: "-0.05em",
          tailwind: {
            correct: ["tracking-tighter"],
          },
        },
        {
          css: "-0.025em",
          tailwind: {
            correct: ["tracking-tight"],
          },
        },
        {
          css: "0em",
          tailwind: {
            correct: ["tracking-normal"],
          },
        },
        {
          css: "0.025em",
          tailwind: {
            correct: ["tracking-wide"],
          },
        },
        {
          css: "0.05em",
          tailwind: {
            correct: ["tracking-wider"],
          },
        },
        {
          css: "0.1em",
          tailwind: {
            correct: ["tracking-widest"],
          },
        },
      ],
    },
    {
      key: "line-height",
      match: [
        {
          css: "12px",
          tailwind: {
            correct: ["leading-3"],
            partial: ["leading-[12px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["leading-4"],
            partial: ["leading-[16px]"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["leading-5", "leading-tight"],
            partial: ["leading-[20px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["leading-6", "leading-normal"],
            partial: ["leading-[24px]"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["leading-7"],
            partial: ["leading-[28px]"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["leading-8"],
            partial: ["leading-[32px]"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["leading-9"],
            partial: ["leading-[36px]"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["leading-10"],
            partial: ["leading-[40px]"],
          },
        },
        {
          css: "1",
          tailwind: {
            correct: ["leading-none"],
          },
        },
        {
          css: "1.25",
          tailwind: {
            correct: ["leading-snug"],
          },
        },
        {
          css: "1.375",
          tailwind: {
            correct: ["leading-snug"],
          },
        },
        {
          css: "1.5",
          tailwind: {
            correct: ["leading-normal"],
          },
        },
        {
          css: "1.625",
          tailwind: {
            correct: ["leading-relaxed"],
          },
        },
        {
          css: "2",
          tailwind: {
            correct: ["leading-loose"],
          },
        },
      ],
    },
    {
      key: "list-style-type",
      match: [
        {
          css: "none",
          tailwind: {
            correct: ["list-none"],
          },
        },
        {
          css: "disc",
          tailwind: {
            correct: ["list-disc"],
          },
        },
        {
          css: "decimal",
          tailwind: {
            correct: ["list-decimal"],
          },
        },
      ],
    },
    {
      key: "list-style-position",
      match: [
        {
          css: "inside",
          tailwind: {
            correct: ["list-inside"],
          },
        },
        {
          css: "outside",
          tailwind: {
            correct: ["list-outside"],
          },
        },
      ],
    },
    {
      key: "text-align",
      match: [
        {
          css: "left",
          tailwind: {
            correct: ["text-left"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["text-center"],
          },
        },
        {
          css: "right",
          tailwind: {
            correct: ["text-right"],
          },
        },
        {
          css: "justify",
          tailwind: {
            correct: ["text-justify"],
          },
        },
        {
          css: "start",
          tailwind: {
            correct: ["text-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["text-end"],
          },
        },
      ],
    },
    {
      key: "text-decoration-line",
      match: [
        {
          css: "underline",
          tailwind: {
            correct: ["underline"],
          },
        },
        {
          css: "overline",
          tailwind: {
            correct: ["overline"],
          },
        },
        {
          css: "line-through",
          tailwind: {
            correct: ["line-through"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["no-underline"],
          },
        },
      ],
    },
    {
      key: "text-decoration-style",
      match: [
        {
          css: "solid",
          tailwind: {
            correct: ["decoration-solid"],
          },
        },
        {
          css: "double",
          tailwind: {
            correct: ["decoration-double"],
          },
        },
        {
          css: "dotted",
          tailwind: {
            correct: ["decoration-dotted"],
          },
        },
        {
          css: "dashed",
          tailwind: {
            correct: ["decoration-dashed"],
          },
        },
        {
          css: "wavy",
          tailwind: {
            correct: ["decoration-wavy"],
          },
        },
      ],
    },
    {
      key: "text-decoration-thickness",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["decoration-auto"],
          },
        },
        {
          css: "from-font",
          tailwind: {
            correct: ["decoration-from-font"],
          },
        },
        {
          css: "0px",
          tailwind: {
            correct: ["decoration-0"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["decoration-1"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["decoration-2"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["decoration-4"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["decoration-8"],
          },
        },
      ],
    },
    {
      key: "text-underline-offset",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["underline-offset-auto"],
          },
        },
        {
          css: "0px",
          tailwind: {
            correct: ["underline-offset-0"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["underline-offset-1"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["underline-offset-2"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["underline-offset-4"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["underline-offset-8"],
          },
        },
      ],
    },
    {
      key: "text-transform",
      match: [
        {
          css: "uppercase",
          tailwind: {
            correct: ["uppercase"],
          },
        },
        {
          css: "lowercase",
          tailwind: {
            correct: ["lowercase"],
          },
        },
        {
          css: "capitalize",
          tailwind: {
            correct: ["capitalize"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["normal-case"],
          },
        },
      ],
    },
    {
      key: "text-indent",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["indent-0"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["indent-px"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["indent-0.5"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["indent-1"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["indent-1.5"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["indent-2"],
          },
        },
        {
          css: "10px",
          tailwind: {
            correct: ["indent-2.5"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["indent-3"],
          },
        },
        {
          css: "14px",
          tailwind: {
            correct: ["indent-3.5"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["indent-4"],
          },
        },
        {
          css: "20px",
          tailwind: {
            correct: ["indent-5"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["indent-6"],
          },
        },
        {
          css: "28px",
          tailwind: {
            correct: ["indent-7"],
          },
        },
        {
          css: "32px",
          tailwind: {
            correct: ["indent-8"],
          },
        },
        {
          css: "36px",
          tailwind: {
            correct: ["indent-9"],
          },
        },
        {
          css: "40px",
          tailwind: {
            correct: ["indent-10"],
          },
        },
        {
          css: "44px",
          tailwind: {
            correct: ["indent-11"],
          },
        },
        {
          css: "48px",
          tailwind: {
            correct: ["indent-12"],
          },
        },
        {
          css: "56px",
          tailwind: {
            correct: ["indent-14"],
          },
        },
        {
          css: "64px",
          tailwind: {
            correct: ["indent-16"],
          },
        },
        {
          css: "80px",
          tailwind: {
            correct: ["indent-20"],
          },
        },
        {
          css: "96px",
          tailwind: {
            correct: ["indent-24"],
          },
        },
      ],
    },
    {
      key: "white-space",
      match: [
        {
          css: "normal",
          tailwind: {
            correct: ["whitespace-normal"],
          },
        },
        {
          css: "nowrap",
          tailwind: {
            correct: ["whitespace-nowrap"],
          },
        },
        {
          css: "pre",
          tailwind: {
            correct: ["whitespace-pre"],
          },
        },
        {
          css: "pre-line",
          tailwind: {
            correct: ["whitespace-pre-line"],
          },
        },
        {
          css: "pre-wrap",
          tailwind: {
            correct: ["whitespace-pre-wrap"],
          },
        },
        {
          css: "break-spaces",
          tailwind: {
            correct: ["whitespace-break-spaces"],
          },
        },
      ],
    },
  ],
  backgrounds: [
    {
      key: "background-attachment",
      match: [
        {
          css: "fixed",
          tailwind: {
            correct: ["bg-fixed"],
          },
        },
        {
          css: "local",
          tailwind: {
            correct: ["bg-local"],
          },
        },
        {
          css: "scroll",
          tailwind: {
            correct: ["bg-scroll"],
          },
        },
      ],
    },
    {
      key: "background-clip",
      match: [
        {
          css: "border-box",
          tailwind: {
            correct: ["bg-clip-border"],
          },
        },
        {
          css: "padding-box",
          tailwind: {
            correct: ["bg-clip-padding"],
          },
        },
        {
          css: "content-box",
          tailwind: {
            correct: ["bg-clip-content"],
          },
        },
        {
          css: "text",
          tailwind: {
            correct: ["bg-clip-text"],
          },
        },
      ],
    },
    {
      key: "background-position",
      match: [
        {
          css: "bottom",
          tailwind: {
            correct: ["bg-bottom"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["bg-center"],
          },
        },
        {
          css: "left",
          tailwind: {
            correct: ["bg-left"],
          },
        },
        {
          css: "left bottom",
          tailwind: {
            correct: ["bg-left-bottom"],
          },
        },
        {
          css: "left top",
          tailwind: {
            correct: ["bg-left-top"],
          },
        },
        {
          css: "right",
          tailwind: {
            correct: ["bg-right"],
          },
        },
        {
          css: "right bottom",
          tailwind: {
            correct: ["bg-right-bottom"],
          },
        },
        {
          css: "right top",
          tailwind: {
            correct: ["bg-right-top"],
          },
        },
        {
          css: "top",
          tailwind: {
            correct: ["bg-top"],
          },
        },
      ],
    },
    {
      key: "background-repeat",
      match: [
        {
          css: "repeat",
          tailwind: {
            correct: ["bg-repeat"],
          },
        },
        {
          css: "no-repeat",
          tailwind: {
            correct: ["bg-no-repeat"],
          },
        },
        {
          css: "repeat-x",
          tailwind: {
            correct: ["bg-repeat-x"],
          },
        },
        {
          css: "repeat-y",
          tailwind: {
            correct: ["bg-repeat-y"],
          },
        },
        {
          css: "round",
          tailwind: {
            correct: ["bg-repeat-round"],
          },
        },
        {
          css: "space",
          tailwind: {
            correct: ["bg-repeat-space"],
          },
        },
      ],
    },
    {
      key: "background-size",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["bg-auto"],
          },
        },
        {
          css: "cover",
          tailwind: {
            correct: ["bg-cover"],
          },
        },
        {
          css: "contain",
          tailwind: {
            correct: ["bg-contain"],
          },
        },
      ],
    },
  ],
  borders: [
    {
      key: "border-radius",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["rounded-none"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["rounded-sm"],
            partial: ["rounded-[2px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["rounded"],
            partial: ["rounded-[4px]"],
          },
        },
        {
          css: "6px",
          tailwind: {
            correct: ["rounded-md"],
            partial: ["rounded-[6px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["rounded-lg"],
            partial: ["rounded-[8px]"],
          },
        },
        {
          css: "12px",
          tailwind: {
            correct: ["rounded-xl"],
            partial: ["rounded-[12px]"],
          },
        },
        {
          css: "16px",
          tailwind: {
            correct: ["rounded-2xl"],
            partial: ["rounded-[16px]"],
          },
        },
        {
          css: "24px",
          tailwind: {
            correct: ["rounded-3xl"],
            partial: ["rounded-[24px]"],
          },
        },
        {
          css: "9999px",
          tailwind: {
            correct: ["rounded-full"],
            partial: ["rounded-[9999px]"],
          },
        },
      ],
    },
    {
      key: "border-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["border-0"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["border"],
            partial: ["border-[1px]"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["border-2"],
            partial: ["border-[2px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["border-4"],
            partial: ["border-[4px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["border-8"],
            partial: ["border-[8px]"],
          },
        },
      ],
    },
    {
      key: "border-top-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["border-t-0"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["border-t-2"],
            partial: ["border-t-[2px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["border-t-4"],
            partial: ["border-t-[4px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["border-t-8"],
            partial: ["border-t-[8px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["border-t"],
            partial: ["border-t-[1px]"],
          },
        },
      ],
    },
    {
      key: "border-right-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["border-r-0"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["border-r-2"],
            partial: ["border-r-[2px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["border-r-4"],
            partial: ["border-r-[4px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["border-r-8"],
            partial: ["border-r-[8px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["border-r"],
            partial: ["border-r-[1px]"],
          },
        },
      ],
    },
    {
      key: "border-bottom-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["border-b-0"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["border-b-2"],
            partial: ["border-b-[2px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["border-b-4"],
            partial: ["border-b-[4px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["border-b-8"],
            partial: ["border-b-[8px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["border-b"],
            partial: ["border-b-[1px]"],
          },
        },
      ],
    },
    {
      key: "border-left-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["border-l-0"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["border-l-2"],
            partial: ["border-l-[2px]"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["border-l-4"],
            partial: ["border-l-[4px]"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["border-l-8"],
            partial: ["border-l-[8px]"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["border-l"],
            partial: ["border-l-[1px]"],
          },
        },
      ],
    },
    {
      key: "border-style",
      match: [
        {
          css: "solid",
          tailwind: {
            correct: ["border-solid"],
          },
        },
        {
          css: "dashed",
          tailwind: {
            correct: ["border-dashed"],
          },
        },
        {
          css: "dotted",
          tailwind: {
            correct: ["border-dotted"],
          },
        },
        {
          css: "double",
          tailwind: {
            correct: ["border-double"],
          },
        },
        {
          css: "hidden",
          tailwind: {
            correct: ["border-hidden"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["border-none"],
          },
        },
      ],
    },
    {
      key: "outline-width",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["outline-0"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["outline-1"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["outline-2"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["outline-4"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["outline-8"],
          },
        },
      ],
    },
    {
      key: "outline-style",
      match: [
        {
          css: "solid",
          tailwind: {
            correct: ["outline"],
          },
        },
        {
          css: "dashed",
          tailwind: {
            correct: ["outline-dashed"],
          },
        },
        {
          css: "dotted",
          tailwind: {
            correct: ["outline-dotted"],
          },
        },
        {
          css: "double",
          tailwind: {
            correct: ["outline-double"],
          },
        },
      ],
    },
    {
      key: "outline-offset",
      match: [
        {
          css: "0px",
          tailwind: {
            correct: ["outline-offset-0"],
          },
        },
        {
          css: "1px",
          tailwind: {
            correct: ["outline-offset-1"],
          },
        },
        {
          css: "2px",
          tailwind: {
            correct: ["outline-offset-2"],
          },
        },
        {
          css: "4px",
          tailwind: {
            correct: ["outline-offset-4"],
          },
        },
        {
          css: "8px",
          tailwind: {
            correct: ["outline-offset-8"],
          },
        },
      ],
    },
  ],
  effects: [
    {
      key: "opacity",
      match: [
        {
          css: "0",
          tailwind: {
            correct: ["opacity-0"],
          },
        },
        {
          css: "0.05",
          tailwind: {
            correct: ["opacity-5"],
          },
        },
        {
          css: "0.1",
          tailwind: {
            correct: ["opacity-10"],
          },
        },
        {
          css: "0.2",
          tailwind: {
            correct: ["opacity-20"],
          },
        },
        {
          css: "0.25",
          tailwind: {
            correct: ["opacity-25"],
          },
        },
        {
          css: "0.3",
          tailwind: {
            correct: ["opacity-30"],
          },
        },
        {
          css: "0.4",
          tailwind: {
            correct: ["opacity-40"],
          },
        },
        {
          css: "0.5",
          tailwind: {
            correct: ["opacity-50"],
          },
        },
        {
          css: "0.6",
          tailwind: {
            correct: ["opacity-60"],
          },
        },
        {
          css: "0.7",
          tailwind: {
            correct: ["opacity-70"],
          },
        },
        {
          css: "0.75",
          tailwind: {
            correct: ["opacity-75"],
          },
        },
        {
          css: "0.8",
          tailwind: {
            correct: ["opacity-80"],
          },
        },
        {
          css: "0.9",
          tailwind: {
            correct: ["opacity-90"],
          },
        },
        {
          css: "0.95",
          tailwind: {
            correct: ["opacity-95"],
          },
        },
        {
          css: "1",
          tailwind: {
            correct: ["opacity-100"],
          },
        },
      ],
    },
    {
      key: "mix-blend-mode",
      match: [
        {
          css: "normal",
          tailwind: {
            correct: ["mix-blend-normal"],
          },
        },
        {
          css: "multiply",
          tailwind: {
            correct: ["mix-blend-multiply"],
          },
        },
        {
          css: "screen",
          tailwind: {
            correct: ["mix-blend-screen"],
          },
        },
        {
          css: "overlay",
          tailwind: {
            correct: ["mix-blend-overlay"],
          },
        },
        {
          css: "darken",
          tailwind: {
            correct: ["mix-blend-darken"],
          },
        },
        {
          css: "lighten",
          tailwind: {
            correct: ["mix-blend-lighten"],
          },
        },
        {
          css: "color-dodge",
          tailwind: {
            correct: ["mix-blend-color-dodge"],
          },
        },
        {
          css: "color-burn",
          tailwind: {
            correct: ["mix-blend-color-burn"],
          },
        },
        {
          css: "hard-light",
          tailwind: {
            correct: ["mix-blend-hard-light"],
          },
        },
        {
          css: "soft-light",
          tailwind: {
            correct: ["mix-blend-soft-light"],
          },
        },
        {
          css: "difference",
          tailwind: {
            correct: ["mix-blend-difference"],
          },
        },
        {
          css: "exclusion",
          tailwind: {
            correct: ["mix-blend-exclusion"],
          },
        },
        {
          css: "hue",
          tailwind: {
            correct: ["mix-blend-hue"],
          },
        },
        {
          css: "saturation",
          tailwind: {
            correct: ["mix-blend-saturation"],
          },
        },
        {
          css: "color",
          tailwind: {
            correct: ["mix-blend-color"],
          },
        },
        {
          css: "luminosity",
          tailwind: {
            correct: ["mix-blend-luminosity"],
          },
        },
        {
          css: "plus-lighter",
          tailwind: {
            correct: ["mix-blend-plus-lighter"],
          },
        },
      ],
    },
    {
      key: "background-blend-mode",
      match: [
        {
          css: "normal",
          tailwind: {
            correct: ["bg-blend-normal"],
          },
        },
        {
          css: "multiply",
          tailwind: {
            correct: ["bg-blend-multiply"],
          },
        },
        {
          css: "screen",
          tailwind: {
            correct: ["bg-blend-screen"],
          },
        },
        {
          css: "overlay",
          tailwind: {
            correct: ["bg-blend-overlay"],
          },
        },
        {
          css: "darken",
          tailwind: {
            correct: ["bg-blend-darken"],
          },
        },
        {
          css: "lighten",
          tailwind: {
            correct: ["bg-blend-lighten"],
          },
        },
        {
          css: "color-dodge",
          tailwind: {
            correct: ["bg-blend-color-dodge"],
          },
        },
        {
          css: "color-burn",
          tailwind: {
            correct: ["bg-blend-color-burn"],
          },
        },
        {
          css: "hard-light",
          tailwind: {
            correct: ["bg-blend-hard-light"],
          },
        },
        {
          css: "soft-light",
          tailwind: {
            correct: ["bg-blend-soft-light"],
          },
        },
        {
          css: "difference",
          tailwind: {
            correct: ["bg-blend-difference"],
          },
        },
        {
          css: "exclusion",
          tailwind: {
            correct: ["bg-blend-exclusion"],
          },
        },
        {
          css: "hue",
          tailwind: {
            correct: ["bg-blend-hue"],
          },
        },
        {
          css: "saturation",
          tailwind: {
            correct: ["bg-blend-saturation"],
          },
        },
        {
          css: "color",
          tailwind: {
            correct: ["bg-blend-color"],
          },
        },
        {
          css: "luminosity",
          tailwind: {
            correct: ["bg-blend-luminosity"],
          },
        },
      ],
    },
  ],
  filters: [
    {
      key: "filter",
      match: [
        {
          css: "blur(0)",
          tailwind: {
            correct: ["blur-none"],
            partial: ["blur-[0px]"],
          },
        },
        {
          css: "blur(4px)",
          tailwind: {
            correct: ["blur-sm"],
            partial: ["blur-[4px]"],
          },
        },
        {
          css: "blur(8px)",
          tailwind: {
            correct: ["blur"],
            partial: ["blur-[8px]"],
          },
        },
        {
          css: "blur(12px)",
          tailwind: {
            correct: ["blur-md"],
            partial: ["blur-[12px]"],
          },
        },
        {
          css: "blur(16px)",
          tailwind: {
            correct: ["blur-lg"],
            partial: ["blur-[16px]"],
          },
        },
        {
          css: "blur(24px)",
          tailwind: {
            correct: ["blur-xl"],
            partial: ["blur-[24px]"],
          },
        },
        {
          css: "blur(40px)",
          tailwind: {
            correct: ["blur-2xl"],
            partial: ["blur-[40px]"],
          },
        },
        {
          css: "blur(64px)",
          tailwind: {
            correct: ["blur-3xl"],
            partial: ["blur-[64px]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "brightness(0)",
          tailwind: {
            correct: ["brightness-0"],
            partial: ["brightness-[0]"],
          },
        },
        {
          css: "brightness(0.5)",
          tailwind: {
            correct: ["brightness-50"],
            partial: ["brightness-[0.5]"],
          },
        },
        {
          css: "brightness(0.75)",
          tailwind: {
            correct: ["brightness-75"],
            partial: ["brightness-[0.75]"],
          },
        },
        {
          css: "brightness(0.9)",
          tailwind: {
            correct: ["brightness-90"],
            partial: ["brightness-[0.9]"],
          },
        },
        {
          css: "brightness(0.95)",
          tailwind: {
            correct: ["brightness-95"],
            partial: ["brightness-[0.95]"],
          },
        },
        {
          css: "brightness(1)",
          tailwind: {
            correct: ["brightness-100"],
            partial: ["brightness-[1]"],
          },
        },
        {
          css: "brightness(1.05)",
          tailwind: {
            correct: ["brightness-105"],
            partial: ["brightness-[1.05]"],
          },
        },
        {
          css: "brightness(1.1)",
          tailwind: {
            correct: ["brightness-110"],
            partial: ["brightness-[1.1]"],
          },
        },
        {
          css: "brightness(1.25)",
          tailwind: {
            correct: ["brightness-125"],
            partial: ["brightness-[1.25]"],
          },
        },
        {
          css: "brightness(1.5)",
          tailwind: {
            correct: ["brightness-150"],
            partial: ["brightness-[1.5]"],
          },
        },
        {
          css: "brightness(2)",
          tailwind: {
            correct: ["brightness-200"],
            partial: ["brightness-[2]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "contrast(0)",
          tailwind: {
            correct: ["contrast-0"],
            partial: ["contrast-[0]"],
          },
        },
        {
          css: "contrast(0.5)",
          tailwind: {
            correct: ["contrast-50"],
            partial: ["contrast-[0.5]"],
          },
        },
        {
          css: "contrast(0.75)",
          tailwind: {
            correct: ["contrast-75"],
            partial: ["contrast-[0.75]"],
          },
        },
        {
          css: "contrast(1)",
          tailwind: {
            correct: ["contrast-100"],
            partial: ["contrast-[1]"],
          },
        },
        {
          css: "contrast(1.25)",
          tailwind: {
            correct: ["contrast-125"],
            partial: ["contrast-[1.25]"],
          },
        },
        {
          css: "contrast(1.5)",
          tailwind: {
            correct: ["contrast-150"],
            partial: ["contrast-[1.5]"],
          },
        },
        {
          css: "contrast(2)",
          tailwind: {
            correct: ["contrast-200"],
            partial: ["contrast-[2]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "grayscale(0)",
          tailwind: {
            correct: ["grayscale-0"],
            partial: ["grayscale-[0]"],
          },
        },
        {
          css: "grayscale(100%)",
          tailwind: {
            correct: ["grayscale"],
            partial: ["grayscale-[100%]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "hue-rotate(0deg)",
          tailwind: {
            correct: ["hue-rotate-0"],
            partial: ["hue-rotate-[0deg]"],
          },
        },
        {
          css: "hue-rotate(15deg)",
          tailwind: {
            correct: ["hue-rotate-15"],
            partial: ["hue-rotate-[15deg]"],
          },
        },
        {
          css: "hue-rotate(30deg)",
          tailwind: {
            correct: ["hue-rotate-30"],
            partial: ["hue-rotate-[30deg]"],
          },
        },
        {
          css: "hue-rotate(60deg)",
          tailwind: {
            correct: ["hue-rotate-60"],
            partial: ["hue-rotate-[60deg]"],
          },
        },
        {
          css: "hue-rotate(90deg)",
          tailwind: {
            correct: ["hue-rotate-90"],
            partial: ["hue-rotate-[90deg]"],
          },
        },
        {
          css: "hue-rotate(180deg)",
          tailwind: {
            correct: ["hue-rotate-180"],
            partial: ["hue-rotate-[180deg]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "invert(0)",
          tailwind: {
            correct: ["invert-0"],
            partial: ["invert-[0]"],
          },
        },
        {
          css: "invert(100%)",
          tailwind: {
            correct: ["invert"],
            partial: ["invert-[100%]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "saturate(0)",
          tailwind: {
            correct: ["saturate-0"],
            partial: ["saturate-[0]"],
          },
        },
        {
          css: "saturate(0.5)",
          tailwind: {
            correct: ["saturate-50"],
            partial: ["saturate-[0.5]"],
          },
        },
        {
          css: "saturate(1)",
          tailwind: {
            correct: ["saturate-100"],
            partial: ["saturate-[1]"],
          },
        },
        {
          css: "saturate(1.5)",
          tailwind: {
            correct: ["saturate-150"],
            partial: ["saturate-[1.5]"],
          },
        },
        {
          css: "saturate(2)",
          tailwind: {
            correct: ["saturate-200"],
            partial: ["saturate-[2]"],
          },
        },
      ],
    },
    {
      key: "filter",
      match: [
        {
          css: "sepia(0)",
          tailwind: {
            correct: ["sepia-0"],
            partial: ["sepia-[0]"],
          },
        },
        {
          css: "sepia(100%)",
          tailwind: {
            correct: ["sepia"],
            partial: ["sepia-[100%]"],
          },
        },
      ],
    },
  ],
  transitionsAndAnimation: [
    {
      key: "transition-duration",
      match: [
        {
          css: "0s",
          tailwind: {
            correct: ["duration-0"],
            partial: ["duration-[0s]"],
          },
        },
        {
          css: "75ms",
          tailwind: {
            correct: ["duration-75"],
            partial: ["duration-[75ms]"],
          },
        },
        {
          css: "100ms",
          tailwind: {
            correct: ["duration-100"],
            partial: ["duration-[100ms]"],
          },
        },
        {
          css: "150ms",
          tailwind: {
            correct: ["duration-150"],
            partial: ["duration-[150ms]"],
          },
        },
        {
          css: "200ms",
          tailwind: {
            correct: ["duration-200"],
            partial: ["duration-[200ms]"],
          },
        },
        {
          css: "300ms",
          tailwind: {
            correct: ["duration-300"],
            partial: ["duration-[300ms]"],
          },
        },
        {
          css: "500ms",
          tailwind: {
            correct: ["duration-500"],
            partial: ["duration-[500ms]"],
          },
        },
        {
          css: "700ms",
          tailwind: {
            correct: ["duration-700"],
            partial: ["duration-[700ms]"],
          },
        },
        {
          css: "1000ms",
          tailwind: {
            correct: ["duration-1000"],
            partial: ["duration-[1000ms]"],
          },
        },
      ],
    },
    {
      key: "transition-timing-function",
      match: [
        {
          css: "linear",
          tailwind: {
            correct: ["ease-linear"],
            partial: ["ease-[linear]"],
          },
        },
        {
          css: "cubic-bezier(0.4, 0, 1, 1)",
          tailwind: {
            correct: ["ease-in"],
            partial: ["ease-[cubic-bezier(0.4, 0, 1, 1)]"],
          },
        },
        {
          css: "cubic-bezier(0, 0, 0.2, 1)",
          tailwind: {
            correct: ["ease-out"],
            partial: ["ease-[cubic-bezier(0, 0, 0.2, 1)]"],
          },
        },
        {
          css: "cubic-bezier(0.4, 0, 0.2, 1)",
          tailwind: {
            correct: ["ease-in-out"],
            partial: ["ease-[cubic-bezier(0.4, 0, 0.2, 1)]"],
          },
        },
      ],
    },
    {
      key: "transition-delay",
      match: [
        {
          css: "0s",
          tailwind: {
            correct: ["delay-0"],
            partial: ["delay-[0s]"],
          },
        },
        {
          css: "75ms",
          tailwind: {
            correct: ["delay-75"],
            partial: ["delay-[75ms]"],
          },
        },
        {
          css: "100ms",
          tailwind: {
            correct: ["delay-100"],
            partial: ["delay-[100ms]"],
          },
        },
        {
          css: "150ms",
          tailwind: {
            correct: ["delay-150"],
            partial: ["delay-[150ms]"],
          },
        },
        {
          css: "200ms",
          tailwind: {
            correct: ["delay-200"],
            partial: ["delay-[200ms]"],
          },
        },
        {
          css: "300ms",
          tailwind: {
            correct: ["delay-300"],
            partial: ["delay-[300ms]"],
          },
        },
        {
          css: "500ms",
          tailwind: {
            correct: ["delay-500"],
            partial: ["delay-[500ms]"],
          },
        },
        {
          css: "700ms",
          tailwind: {
            correct: ["delay-700"],
            partial: ["delay-[700ms]"],
          },
        },
        {
          css: "1000ms",
          tailwind: {
            correct: ["delay-1000"],
            partial: ["delay-[1000ms]"],
          },
        },
      ],
    },
  ],
  transforms: [
    {
      key: "transform",
      match: [
        {
          css: "scale(0)",
          tailwind: {
            correct: ["scale-0"],
            partial: ["scale-[0]"],
          },
        },
        {
          css: "scale(0.5)",
          tailwind: {
            correct: ["scale-50"],
            partial: ["scale-[0.5]"],
          },
        },
        {
          css: "scale(0.75)",
          tailwind: {
            correct: ["scale-75"],
            partial: ["scale-[0.75]"],
          },
        },
        {
          css: "scale(0.9)",
          tailwind: {
            correct: ["scale-90"],
            partial: ["scale-[0.9]"],
          },
        },
        {
          css: "scale(0.95)",
          tailwind: {
            correct: ["scale-95"],
            partial: ["scale-[0.95]"],
          },
        },
        {
          css: "scale(1)",
          tailwind: {
            correct: ["scale-100"],
            partial: ["scale-[1]"],
          },
        },
        {
          css: "scale(1.05)",
          tailwind: {
            correct: ["scale-105"],
            partial: ["scale-[1.05]"],
          },
        },
        {
          css: "scale(1.1)",
          tailwind: {
            correct: ["scale-110"],
            partial: ["scale-[1.1]"],
          },
        },
        {
          css: "scale(1.25)",
          tailwind: {
            correct: ["scale-125"],
            partial: ["scale-[1.25]"],
          },
        },
        {
          css: "scale(1.5)",
          tailwind: {
            correct: ["scale-150"],
            partial: ["scale-[1.5]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "scaleY(0)",
          tailwind: {
            correct: ["scale-y-0"],
            partial: ["scale-y-[0]"],
          },
        },
        {
          css: "scaleY(0.5)",
          tailwind: {
            correct: ["scale-y-50"],
            partial: ["scale-y-[0.5]"],
          },
        },
        {
          css: "scaleY(0.75)",
          tailwind: {
            correct: ["scale-y-75"],
            partial: ["scale-y-[0.75]"],
          },
        },
        {
          css: "scaleY(0.9)",
          tailwind: {
            correct: ["scale-y-90"],
            partial: ["scale-y-[0.9]"],
          },
        },
        {
          css: "scaleY(0.95)",
          tailwind: {
            correct: ["scale-y-95"],
            partial: ["scale-y-[0.95]"],
          },
        },
        {
          css: "scaleY(1)",
          tailwind: {
            correct: ["scale-y-100"],
            partial: ["scale-y-[1]"],
          },
        },
        {
          css: "scaleY(1.05)",
          tailwind: {
            correct: ["scale-y-105"],
            partial: ["scale-y-[1.05]"],
          },
        },
        {
          css: "scaleY(1.1)",
          tailwind: {
            correct: ["scale-y-110"],
            partial: ["scale-y-[1.1]"],
          },
        },
        {
          css: "scaleY(1.25)",
          tailwind: {
            correct: ["scale-y-125"],
            partial: ["scale-y-[1.25]"],
          },
        },
        {
          css: "scaleY(1.5)",
          tailwind: {
            correct: ["scale-y-150"],
            partial: ["scale-y-[1.5]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "scaleX(0)",
          tailwind: {
            correct: ["scale-x-0"],
            partial: ["scale-x-[0]"],
          },
        },
        {
          css: "scaleX(0.5)",
          tailwind: {
            correct: ["scale-x-50"],
            partial: ["scale-x-[0.5]"],
          },
        },
        {
          css: "scaleX(0.75)",
          tailwind: {
            correct: ["scale-x-75"],
            partial: ["scale-x-[0.75]"],
          },
        },
        {
          css: "scaleX(0.9)",
          tailwind: {
            correct: ["scale-x-90"],
            partial: ["scale-x-[0.9]"],
          },
        },
        {
          css: "scaleX(0.95)",
          tailwind: {
            correct: ["scale-x-95"],
            partial: ["scale-x-[0.95]"],
          },
        },
        {
          css: "scaleX(1)",
          tailwind: {
            correct: ["scale-x-100"],
            partial: ["scale-x-[1]"],
          },
        },
        {
          css: "scaleX(1.05)",
          tailwind: {
            correct: ["scale-x-105"],
            partial: ["scale-x-[1.05]"],
          },
        },
        {
          css: "scaleX(1.1)",
          tailwind: {
            correct: ["scale-x-110"],
            partial: ["scale-x-[1.1]"],
          },
        },
        {
          css: "scaleX(1.25)",
          tailwind: {
            correct: ["scale-x-125"],
            partial: ["scale-x-[1.25]"],
          },
        },
        {
          css: "scaleX(1.5)",
          tailwind: {
            correct: ["scale-x-150"],
            partial: ["scale-x-[1.5]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "rotate(0deg)",
          tailwind: {
            correct: ["rotate-0"],
            partial: ["rotate-[0deg]"],
          },
        },
        {
          css: "rotate(1deg)",
          tailwind: {
            correct: ["rotate-1"],
            partial: ["rotate-[1deg]"],
          },
        },
        {
          css: "rotate(2deg)",
          tailwind: {
            correct: ["rotate-2"],
            partial: ["rotate-[2deg]"],
          },
        },
        {
          css: "rotate(3deg)",
          tailwind: {
            correct: ["rotate-3"],
            partial: ["rotate-[3deg]"],
          },
        },
        {
          css: "rotate(6deg)",
          tailwind: {
            correct: ["rotate-6"],
            partial: ["rotate-[6deg]"],
          },
        },
        {
          css: "rotate(12deg)",
          tailwind: {
            correct: ["rotate-12"],
            partial: ["rotate-[12deg]"],
          },
        },
        {
          css: "rotate(45deg)",
          tailwind: {
            correct: ["rotate-45"],
            partial: ["rotate-[45deg]"],
          },
        },
        {
          css: "rotate(90deg)",
          tailwind: {
            correct: ["rotate-90"],
            partial: ["rotate-[90deg]"],
          },
        },
        {
          css: "rotate(180deg)",
          tailwind: {
            correct: ["rotate-180"],
            partial: ["rotate-[180deg]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "translateX(0px)",
          tailwind: {
            correct: ["translate-x-0"],
            partial: ["translate-x-[0px]"],
          },
        },
        {
          css: "translateX(1px)",
          tailwind: {
            correct: ["translate-x-px"],
            partial: ["translate-x-[1px]"],
          },
        },
        {
          css: "translateX(4px)",
          tailwind: {
            correct: ["translate-x-1"],
            partial: ["translate-x-[4px]"],
          },
        },
        {
          css: "translateX(8px)",
          tailwind: {
            correct: ["translate-x-2"],
            partial: ["translate-x-[8px]"],
          },
        },
        {
          css: "translateX(12px)",
          tailwind: {
            correct: ["translate-x-3"],
            partial: ["translate-x-[12px]"],
          },
        },
        {
          css: "translateX(16px)",
          tailwind: {
            correct: ["translate-x-4"],
            partial: ["translate-x-[16px]"],
          },
        },
        {
          css: "translateX(24px)",
          tailwind: {
            correct: ["translate-x-6"],
            partial: ["translate-x-[24px]"],
          },
        },
        {
          css: "translateX(32px)",
          tailwind: {
            correct: ["translate-x-8"],
            partial: ["translate-x-[32px]"],
          },
        },
        {
          css: "translateX(40px)",
          tailwind: {
            correct: ["translate-x-10"],
            partial: ["translate-x-[40px]"],
          },
        },
        {
          css: "translateX(48px)",
          tailwind: {
            correct: ["translate-x-12"],
            partial: ["translate-x-[48px]"],
          },
        },
        {
          css: "translateX(80px)",
          tailwind: {
            correct: ["translate-x-20"],
            partial: ["translate-x-[80px]"],
          },
        },
        {
          css: "translateX(160px)",
          tailwind: {
            correct: ["translate-x-40"],
            partial: ["translate-x-[160px]"],
          },
        },
        {
          css: "translateX(240px)",
          tailwind: {
            correct: ["translate-x-60"],
            partial: ["translate-x-[240px]"],
          },
        },
        {
          css: "translateX(320px)",
          tailwind: {
            correct: ["translate-x-80"],
            partial: ["translate-x-[320px]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "translateY(0px)",
          tailwind: {
            correct: ["translate-y-0"],
            partial: ["translate-y-[0px]"],
          },
        },
        {
          css: "translateY(1px)",
          tailwind: {
            correct: ["translate-y-px"],
            partial: ["translate-y-[1px]"],
          },
        },
        {
          css: "translateY(4px)",
          tailwind: {
            correct: ["translate-y-1"],
            partial: ["translate-y-[4px]"],
          },
        },
        {
          css: "translateY(8px)",
          tailwind: {
            correct: ["translate-y-2"],
            partial: ["translate-y-[8px]"],
          },
        },
        {
          css: "translateY(12px)",
          tailwind: {
            correct: ["translate-y-3"],
            partial: ["translate-y-[12px]"],
          },
        },
        {
          css: "translateY(16px)",
          tailwind: {
            correct: ["translate-y-4"],
            partial: ["translate-y-[16px]"],
          },
        },
        {
          css: "translateY(24px)",
          tailwind: {
            correct: ["translate-y-6"],
            partial: ["translate-y-[24px]"],
          },
        },
        {
          css: "translateY(32px)",
          tailwind: {
            correct: ["translate-y-8"],
            partial: ["translate-y-[32px]"],
          },
        },
        {
          css: "translateY(40px)",
          tailwind: {
            correct: ["translate-y-10"],
            partial: ["translate-y-[40px]"],
          },
        },
        {
          css: "translateY(48px)",
          tailwind: {
            correct: ["translate-y-12"],
            partial: ["translate-y-[48px]"],
          },
        },
        {
          css: "translateY(80px)",
          tailwind: {
            correct: ["translate-y-20"],
            partial: ["translate-y-[80px]"],
          },
        },
        {
          css: "translateY(160px)",
          tailwind: {
            correct: ["translate-y-40"],
            partial: ["translate-y-[160px]"],
          },
        },
        {
          css: "translateY(240px)",
          tailwind: {
            correct: ["translate-y-60"],
            partial: ["translate-y-[240px]"],
          },
        },
        {
          css: "translateY(320px)",
          tailwind: {
            correct: ["translate-y-80"],
            partial: ["translate-y-[320px]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "skewX(0deg)",
          tailwind: {
            correct: ["skew-x-0"],
            partial: ["skew-x-[0deg]"],
          },
        },
        {
          css: "skewX(1deg)",
          tailwind: {
            correct: ["skew-x-1"],
            partial: ["skew-x-[1deg]"],
          },
        },
        {
          css: "skewX(2deg)",
          tailwind: {
            correct: ["skew-x-2"],
            partial: ["skew-x-[2deg]"],
          },
        },
        {
          css: "skewX(3deg)",
          tailwind: {
            correct: ["skew-x-3"],
            partial: ["skew-x-[3deg]"],
          },
        },
        {
          css: "skewX(6deg)",
          tailwind: {
            correct: ["skew-x-6"],
            partial: ["skew-x-[6deg]"],
          },
        },
        {
          css: "skewX(12deg)",
          tailwind: {
            correct: ["skew-x-12"],
            partial: ["skew-x-[12deg]"],
          },
        },
      ],
    },
    {
      key: "transform",
      match: [
        {
          css: "skewY(0deg)",
          tailwind: {
            correct: ["skew-y-0"],
            partial: ["skew-y-[0deg]"],
          },
        },
        {
          css: "skewY(1deg)",
          tailwind: {
            correct: ["skew-y-1"],
            partial: ["skew-y-[1deg]"],
          },
        },
        {
          css: "skewY(2deg)",
          tailwind: {
            correct: ["skew-y-2"],
            partial: ["skew-y-[2deg]"],
          },
        },
        {
          css: "skewY(3deg)",
          tailwind: {
            correct: ["skew-y-3"],
            partial: ["skew-y-[3deg]"],
          },
        },
        {
          css: "skewY(6deg)",
          tailwind: {
            correct: ["skew-y-6"],
            partial: ["skew-y-[6deg]"],
          },
        },
        {
          css: "skewY(12deg)",
          tailwind: {
            correct: ["skew-y-12"],
            partial: ["skew-y-[12deg]"],
          },
        },
      ],
    },
    {
      key: "transform-origin",
      match: [
        {
          css: "center",
          tailwind: {
            correct: ["origin-center"],
          },
        },
        {
          css: "top",
          tailwind: {
            correct: ["origin-top"],
          },
        },
        {
          css: "top right",
          tailwind: {
            correct: ["origin-top-right"],
          },
        },
        {
          css: "right",
          tailwind: {
            correct: ["origin-right"],
          },
        },
        {
          css: "bottom right",
          tailwind: {
            correct: ["origin-bottom-right"],
          },
        },
        {
          css: "bottom",
          tailwind: {
            correct: ["origin-bottom"],
          },
        },
        {
          css: "bottom left",
          tailwind: {
            correct: ["origin-bottom-left"],
          },
        },
        {
          css: "left",
          tailwind: {
            correct: ["origin-left"],
          },
        },
        {
          css: "top left",
          tailwind: {
            correct: ["origin-top-left"],
          },
        },
      ],
    },
  ],
  interactivity: [
    {
      key: "cursor",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["cursor-auto"],
          },
        },
        {
          css: "default",
          tailwind: {
            correct: ["cursor-default"],
          },
        },
        {
          css: "pointer",
          tailwind: {
            correct: ["cursor-pointer"],
          },
        },
        {
          css: "wait",
          tailwind: {
            correct: ["cursor-wait"],
          },
        },
        {
          css: "text",
          tailwind: {
            correct: ["cursor-text"],
          },
        },
        {
          css: "move",
          tailwind: {
            correct: ["cursor-move"],
          },
        },
        {
          css: "help",
          tailwind: {
            correct: ["cursor-help"],
          },
        },
        {
          css: "not-allowed",
          tailwind: {
            correct: ["cursor-not-allowed"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["cursor-none"],
          },
        },
        {
          css: "context-menu",
          tailwind: {
            correct: ["cursor-context-menu"],
          },
        },
        {
          css: "progress",
          tailwind: {
            correct: ["cursor-progress"],
          },
        },
        {
          css: "cell",
          tailwind: {
            correct: ["cursor-cell"],
          },
        },
        {
          css: "crosshair",
          tailwind: {
            correct: ["cursor-crosshair"],
          },
        },
        {
          css: "vertical-text",
          tailwind: {
            correct: ["cursor-vertical-text"],
          },
        },
        {
          css: "alias",
          tailwind: {
            correct: ["cursor-alias"],
          },
        },
        {
          css: "copy",
          tailwind: {
            correct: ["cursor-copy"],
          },
        },
        {
          css: "no-drop",
          tailwind: {
            correct: ["cursor-no-drop"],
          },
        },
        {
          css: "grab",
          tailwind: {
            correct: ["cursor-grab"],
          },
        },
        {
          css: "grabbing",
          tailwind: {
            correct: ["cursor-grabbing"],
          },
        },
        {
          css: "all-scroll",
          tailwind: {
            correct: ["cursor-all-scroll"],
          },
        },
        {
          css: "col-resize",
          tailwind: {
            correct: ["cursor-col-resize"],
          },
        },
        {
          css: "row-resize",
          tailwind: {
            correct: ["cursor-row-resize"],
          },
        },
        {
          css: "n-resize",
          tailwind: {
            correct: ["cursor-n-resize"],
          },
        },
        {
          css: "e-resize",
          tailwind: {
            correct: ["cursor-e-resize"],
          },
        },
        {
          css: "s-resize",
          tailwind: {
            correct: ["cursor-s-resize"],
          },
        },
        {
          css: "w-resize",
          tailwind: {
            correct: ["cursor-w-resize"],
          },
        },
        {
          css: "ne-resize",
          tailwind: {
            correct: ["cursor-ne-resize"],
          },
        },
        {
          css: "nw-resize",
          tailwind: {
            correct: ["cursor-nw-resize"],
          },
        },
        {
          css: "se-resize",
          tailwind: {
            correct: ["cursor-se-resize"],
          },
        },
        {
          css: "sw-resize",
          tailwind: {
            correct: ["cursor-sw-resize"],
          },
        },
        {
          css: "ew-resize",
          tailwind: {
            correct: ["cursor-ew-resize"],
          },
        },
        {
          css: "ns-resize",
          tailwind: {
            correct: ["cursor-ns-resize"],
          },
        },
        {
          css: "nesw-resize",
          tailwind: {
            correct: ["cursor-nesw-resize"],
          },
        },
        {
          css: "nwse-resize",
          tailwind: {
            correct: ["cursor-nwse-resize"],
          },
        },
        {
          css: "zoom-in",
          tailwind: {
            correct: ["cursor-zoom-in"],
          },
        },
        {
          css: "zoom-out",
          tailwind: {
            correct: ["cursor-zoom-out"],
          },
        },
      ],
    },
    {
      key: "pointer-events",
      match: [
        {
          css: "none",
          tailwind: {
            correct: ["pointer-events-none"],
          },
        },
        {
          css: "auto",
          tailwind: {
            correct: ["pointer-events-auto"],
          },
        },
      ],
    },
    {
      key: "resize",
      match: [
        {
          css: "none",
          tailwind: {
            correct: ["resize-none"],
          },
        },
        {
          css: "vertical",
          tailwind: {
            correct: ["resize-y"],
          },
        },
        {
          css: "horizontal",
          tailwind: {
            correct: ["resize-x"],
          },
        },
        {
          css: "both",
          tailwind: {
            correct: ["resize"],
          },
        },
      ],
    },
    {
      key: "scroll-behavior",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["scroll-auto"],
          },
        },
        {
          css: "smooth",
          tailwind: {
            correct: ["scroll-smooth"],
          },
        },
      ],
    },
    {
      key: "scroll-snap-align",
      match: [
        {
          css: "start",
          tailwind: {
            correct: ["snap-start"],
          },
        },
        {
          css: "end",
          tailwind: {
            correct: ["snap-end"],
          },
        },
        {
          css: "center",
          tailwind: {
            correct: ["snap-center"],
          },
        },
        {
          css: "none",
          tailwind: {
            correct: ["snap-align-none"],
          },
        },
      ],
    },
    {
      key: "scroll-snap-stop",
      match: [
        {
          css: "normal",
          tailwind: {
            correct: ["snap-normal"],
          },
        },
        {
          css: "always",
          tailwind: {
            correct: ["snap-always"],
          },
        },
      ],
    },
    {
      key: "user-select",
      match: [
        {
          css: "none",
          tailwind: {
            correct: ["select-none"],
          },
        },
        {
          css: "text",
          tailwind: {
            correct: ["select-text"],
          },
        },
        {
          css: "all",
          tailwind: {
            correct: ["select-all"],
          },
        },
        {
          css: "auto",
          tailwind: {
            correct: ["select-auto"],
          },
        },
      ],
    },
    {
      key: "will-change",
      match: [
        {
          css: "auto",
          tailwind: {
            correct: ["will-change-auto"],
          },
        },
        {
          css: "scroll-position",
          tailwind: {
            correct: ["will-change-scroll"],
          },
        },
        {
          css: "contents",
          tailwind: {
            correct: ["will-change-contents"],
          },
        },
        {
          css: "transform",
          tailwind: {
            correct: ["will-change-transform"],
          },
        },
      ],
    },
  ],
};
