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
const Canvas_1 = require("./Canvas");
const Node = (props) => {
    const { val } = props;
    (0, react_1.useEffect)(() => {
        var nodeNumber = document === null || document === void 0 ? void 0 : document.querySelectorAll('#node').length;
        const canvas = document === null || document === void 0 ? void 0 : document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(nodeNumber + 75, nodeNumber + 75, 50, 0, Math.PI * 2, true);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.font = '30px Arial';
        ctx.fillText(val, nodeNumber + 65, nodeNumber + 85);
    }, []);
    return (react_1.default.createElement("div", { id: "node" },
        react_1.default.createElement(Canvas_1.Canvas, null)));
};
exports.Node = Node;
//# sourceMappingURL=Node.js.map