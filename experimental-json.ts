// export const cssMap = {
//   "align-content": [
//     "flex-start",
//     "flex-end",
//     "center",
//     "space-between",
//     "space-around",
//     "stretch",
//   ],
//   "align-items": ["flex-start", "flex-end", "center", "baseline", "stretch"],
//   "align-self": [
//     "auto",
//     "flex-start",
//     "flex-end",
//     "center",
//     "baseline",
//     "stretch",
//   ],
//   animation: ["none", "slide-in", "fade-in", "zoom-in"],
//   background: [
//     "#ffffff",
//     "#000000",
//     "linear-gradient(to right, #000000, #ffffff)",
//   ],
//   "background-attachment": ["scroll", "fixed"],
//   "background-blur": ["none", "blur(1px)", "blur(2px)", "blur(5px)"],
//   "background-clip": ["border-box", "padding-box", "content-box"],
//   "background-color": ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"],
//   "background-image": ["none", "url('image.png')"],
//   "background-opacity": ["0.1", "0.5", "1"],
//   "background-position": ["top", "bottom", "left", "right", "center"],
//   "background-repeat": ["repeat", "repeat-x", "repeat-y", "no-repeat"],
//   "background-size": ["auto", "cover", "contain"],
//   border: ["1px solid #000000", "2px dashed #ff0000"],
//   "border-color": ["#000000", "#ff0000", "#00ff00", "#0000ff"],
//   "border-radius": ["0", "4px", "50%"],
//   "border-style": ["none", "solid", "dashed", "dotted", "double"],
//   "border-width": ["0", "1px", "2px", "3px"],
//   "box-decoration-break": ["slice", "clone"],
//   "box-shadow": ["none", "1px 1px 2px #000000", "2px 2px 4px #000000"],
//   "box-sizing": ["content-box", "border-box"],
//   "break-after": ["auto", "avoid", "always"],
//   "break-before": ["auto", "avoid", "always"],
//   "break-inside": ["auto", "avoid", "always"],
//   clear: ["none", "left", "right", "both"],
//   color: ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"],
//   "column-count": ["auto", "2", "3", "4"],
//   "column-gap": ["normal", "10px", "20px"],
//   "column-rule-color": ["#000000", "#ff0000", "#00ff00", "#0000ff"],
//   "column-rule-style": ["none", "solid", "dashed", "dotted", "double"],
//   "column-rule-width": ["medium", "thin", "thick"],
//   "column-span": ["none", "all"],
//   "column-width": ["auto", "200px", "300px"],
//   content: [
//     "normal",
//     "open-quote",
//     "close-quote",
//     "no-open-quote",
//     "no-close-quote",
//   ],
//   cursor: ["auto", "pointer", "text", "crosshair"],
//   display: ["block", "inline", "inline-block", "flex"],
//   fill: ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"],
//   filter: ["none", "blur(1px)", "brightness(50%)", "grayscale(100%)"],
//   flex: ["none", "1", "0 1 auto", "2"],
//   "flex-basis": ["auto", "100px", "200px"],
//   "flex-direction": ["row", "row-reverse", "column", "column-reverse"],
//   "flex-flow": ["row nowrap", "row wrap", "column nowrap", "column wrap"],
//   "flex-grow": ["0", "1"],
//   "flex-shrink": ["0", "1"],
//   "flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
//   float: ["none", "left", "right"],
//   font: ["italic small-caps bold 20px/1.5 Arial, sans-serif"],
//   "font-family": ["Arial, sans-serif", "Times New Roman, serif"],
//   "font-size": ["12px", "14px", "16px"],
//   "font-smoothing": ["antialiased", "subpixel-antialiased"],
//   "font-style": ["normal", "italic", "oblique"],
//   "font-variant": ["normal", "small-caps"],
//   "font-weight": ["normal", "bold", "bolder", "lighter"],
//   gap: ["0", "10px", "20px"],
//   grid: ["none", "1fr", "repeat(2, 1fr)", "auto-flow dense"],
//   "grid-area": ["auto", "1 / 1 / 2 / 2"],
//   "grid-auto-columns": ["auto", "minmax(100px, auto)"],
//   "grid-auto-flow": ["row", "column", "dense"],
//   "grid-auto-rows": ["auto", "minmax(100px, auto)"],
//   "grid-column": ["1 / 2", "span 2 / span 3"],
//   "grid-column-end": ["auto", "span 2"],
//   "grid-column-gap": ["0", "10px", "20px"],
//   "grid-column-start": ["auto", "span 2"],
//   "grid-gap": ["0", "10px", "20px"],
//   "grid-row": ["1 / 2", "span 2 / span 3"],
//   "grid-row-end": ["auto", "span 2"],
//   "grid-row-gap": ["0", "10px", "20px"],
//   "grid-row-start": ["auto", "span 2"],
//   "grid-template": [
//     "none",
//     "repeat(2, 1fr) / auto-flow",
//     "repeat(2, 1fr) / repeat(3, 1fr)",
//   ],
//   "grid-template-areas": ["none", "'header header' 'content sidebar'"],
//   "grid-template-columns": ["none", "1fr 2fr 1fr"],
//   "grid-template-rows": ["none", "auto 100px"],
//   height: ["auto", "100px", "200px"],
//   "justify-content": [
//     "flex-start",
//     "flex-end",
//     "center",
//     "space-between",
//     "space-around",
//   ],
//   "justify-items": ["start", "end", "center", "stretch"],
//   "justify-self": ["auto", "start", "end", "center", "stretch"],
//   left: ["auto", "0", "10px", "20px"],
//   "letter-spacing": ["normal", "1px", "2px"],
//   "line-break": ["auto", "loose", "normal", "strict"],
//   "line-height": ["normal", "1", "1.5", "2"],
//   "list-style": ["none", "disc", "circle", "square"],
//   "list-style-image": ["none", "url('image.png')"],
//   "list-style-position": ["outside", "inside"],
//   "list-style-type": ["disc", "circle", "square", "decimal", "lower-roman"],
//   ["0", "10px", "20px"],
//   "margin-bottom": ["0", "10px", "20px"],
//   "margin-left": ["0", "10px", "20px"],
//   "margin-right": ["0", "10px", "20px"],
//   "margin-top": ["0", "10px", "20px"],
//   "max-height": ["none", "100px", "200px"],
//   "max-width": ["none", "100px", "200px"],
//   "min-height": ["0", "100px", "200px"],
//   "min-width": ["0", "100px", "200px"],
//   "object-fit": ["fill", "contain", "cover", "none", "scale-down"],
//   "object-position": ["center", "top", "right", "bottom", "left"],
//   opacity: ["0", "0.5", "1"],
//   order: ["1", "2", "3"],
//   outline: ["none", "1px solid #000000"],
//   overflow: ["visible", "hidden", "scroll", "auto"],
//   "overflow-x": ["visible", "hidden", "scroll", "auto"],
//   "overflow-y": ["visible", "hidden", "scroll", "auto"],
//   padding: ["0", "10px", "20px"],
//   "padding-bottom": ["0", "10px", "20px"],
//   "padding-left": ["0", "10px", "20px"],
//   "padding-right": ["0", "10px", "20px"],
//   "padding-top": ["0", "10px", "20px"],
//   position: ["static", "relative", "absolute", "fixed"],
//   resize: ["none", "both", "horizontal", "vertical"],
//   right: ["auto", "0", "10px", "20px"],
//   "row-gap": ["0", "10px", "20px"],
//   "scroll-behavior": ["auto", "smooth"],
//   "table-layout": ["auto", "fixed"],
//   "text-align": ["left", "right", "center", "justify"],
//   "text-decoration": ["none", "underline", "overline", "line-through"],
//   "text-indent": ["0", "10px", "20px"],
//   "text-overflow": ["clip", "ellipsis"],
//   "text-shadow": ["none", "1px 1px 2px #000000"],
//   "text-transform": ["none", "uppercase", "lowercase", "capitalize"],
//   top: ["auto", "0", "10px", "20px"],
//   transform: ["none", "rotate(45deg)", "scale(2)", "translateX(50%)"],
//   "transform-origin": ["center", "top", "right", "bottom", "left"],
//   transition: ["none", "width 0.5s ease-in-out", "opacity 1s linear"],
//   "transition-delay": ["0s", "0.5s", "1s"],
//   "transition-duration": ["0.5s", "1s", "2s"],
//   "transition-property": ["none", "width", "opacity"],
//   "transition-timing-function": ["ease", "ease-in", "ease-out", "ease-in-out"],
//   "user-select": ["auto", "none", "text"],
//   "vertical-align": ["baseline", "top", "middle", "bottom"],
//   visibility: ["visible", "hidden", "collapse"],
//   "white-space": ["normal", "nowrap", "pre", "pre-wrap", "pre-line"],
//   width: ["auto", "100px", "200px"],
//   "word-break": ["normal", "break-all", "keep-all", "break-word"],
//   "word-spacing": ["normal", "1px", "2px"],
//   "word-wrap": ["normal", "break-word"],
//   "writing-mode": ["horizontal-tb", "vertical-rl", "vertical-lr"],
//   "z-index": ["auto", "1", "10", "100"],
// };

// experimental API

// export const ok = {
//   "align-items": {
//     equivalentTailwindKey: "items",
//     match: [
//       {
//         css: "center",
//         tailwind: "center",
//       },
//       {
//         css: "baseline",
//         tailwind: "baseline",
//       },
//       {
//         css: "stretch",
//         tailwind: "stretch",
//       },
//       {
//         css: "flex-start",
//         tailwind: "start",
//       },
//       {
//         css: "flex-end",
//         tailwind: "end",
//       },
//     ],
//   },
// };
//

export const api = {
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
            partial: ["my-[10px]"],
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
            partial: ["my-[14px]"],
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
            partial: ["my-[2px]"],
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
            partial: ["my-[6px]"],
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
            partial: ["mx-[10px]"],
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
            partial: ["mx-[14px]"],
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
            partial: ["mx-[2px]"],
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
            partial: ["mx-[6px]"],
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
            partial: ["mt-[10px]"],
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
            partial: ["mt-[14px]"],
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
            partial: ["mt-[2px]"],
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
            partial: ["mt-[6px]"],
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
            partial: ["mr-[10px]"],
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
            partial: ["mr-[14px]"],
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
            partial: ["mr-[2px]"],
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
            partial: ["mr-[6px]"],
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
            partial: ["mb-[10px]"],
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
            partial: ["mb-[14px]"],
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
            partial: ["mb-[2px]"],
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
            partial: ["mb-[6px]"],
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
            partial: ["ml-[10px]"],
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
            partial: ["ml-[14px]"],
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
            partial: ["ml-[2px]"],
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
            partial: ["ml-[6px]"],
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
            partial: ["py-[10px]"],
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
            partial: ["py-[14px]"],
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
            partial: ["py-[2px]"],
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
            partial: ["py-[6px]"],
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
            partial: ["px-[10px]"],
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
            partial: ["px-[14px]"],
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
            partial: ["px-[2px]"],
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
            partial: ["px-[6px]"],
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
            partial: ["pt-[10px]"],
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
            partial: ["pt-[14px]"],
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
            partial: ["pt-[2px]"],
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
            partial: ["pt-[6px]"],
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
            partial: ["pr-[10px]"],
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
            partial: ["pr-[14px]"],
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
            partial: ["pr-[2px]"],
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
            partial: ["pr-[6px]"],
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
            partial: ["pb-[10px]"],
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
            partial: ["pb-[14px]"],
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
            partial: ["pb-[2px]"],
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
            partial: ["pb-[6px]"],
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
            partial: ["pl-[10px]"],
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
            partial: ["pl-[14px]"],
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
            partial: ["pl-[2px]"],
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
            partial: ["pl-[6px]"],
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
};
