"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const react_1 = __importStar(require("react"));
const Node = (props) => {
    const { label, x, y, neighbor } = props;
    (0, react_1.useEffect)(() => {
        const canvas = document === null || document === void 0 ? void 0 : document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        if (neighbor) {
            let docs = document.querySelectorAll(`[id^="${neighbor}"]`);
            let arr = new Array([...docs]);
            const [nestedArray] = arr;
            const [positionString] = nestedArray;
            let positionArray = positionString.id.split(' ');
            ctx.beginPath();
            ctx.moveTo(positionArray[1], positionArray[2]);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(label, x - 10, y + 10);
    }, []);
    return react_1.default.createElement("div", { id: `${label} ${x} ${y}` });
};
exports.Node = Node;
//# sourceMappingURL=Node.js.map