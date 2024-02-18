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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ThemeContext_1 = require("./ThemeContext");
const Ad_1 = __importDefault(require("./Ad"));
require("./AdDesigner.css");
const AdDesigner = () => {
    const [flavor, setFlavor] = (0, react_1.useState)('Strawberry');
    const { isDarkTheme } = (0, ThemeContext_1.useTheme)();
    const [fontSize, setFontSize] = (0, react_1.useState)(44);
    return (<div className="ad-designer">
      <h2>Ad Designer</h2>

      <Ad_1.default flavor={flavor} fontSize={fontSize} darkTheme={isDarkTheme}/>

      <div>
        <p>What to Support</p>
        <button onClick={() => setFlavor('Chocolate')} disabled={flavor === 'Chocolate'}>Chocolate</button>
        <button onClick={() => setFlavor('Vanilla')} disabled={flavor === 'Vanilla'}>Vanilla</button>
        <button onClick={() => setFlavor('Strawberry')} disabled={flavor === 'Strawberry'}>Strawberry</button>
      </div>

    </div>);
};
exports.default = AdDesigner;
