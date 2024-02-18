"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Header.css");
const Header = ({ user }) => {
    return (<header className="header">
      <h1>Ice Cream Wars</h1>
      <span style={{ float: 'right' }}>Welcome, {user}</span>
    </header>);
};
exports.default = Header;
