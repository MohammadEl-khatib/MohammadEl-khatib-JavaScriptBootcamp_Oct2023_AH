"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemeContext_1 = require("./ThemeContext");
const ThemeToggle = () => {
    const { toggleTheme } = (0, ThemeContext_1.useTheme)();
    return (<button onClick={toggleTheme}>Toggle Theme</button>);
};
exports.default = ThemeToggle;
