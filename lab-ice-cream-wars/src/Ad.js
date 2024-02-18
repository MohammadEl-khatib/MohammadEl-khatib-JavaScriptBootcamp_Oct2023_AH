"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Ad = ({ flavor, fontSize, darkTheme }) => {
    const adStyle = {
        color: darkTheme ? '#fff' : '#000',
        backgroundColor: darkTheme ? '#222' : '#fff',
        fontSize: `${fontSize}px`,
        padding: '20px',
        border: '3px solid #000',
        margin: '0 auto',
        width: '70%',
    };
    return (<div style={adStyle}>
      Vote For {flavor}
    </div>);
};
exports.default = Ad;
