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
//   margin: ["0", "10px", "20px"],
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

