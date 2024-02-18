"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemeContext_1 = require("./ThemeContext");
const Header_1 = __importDefault(require("./Header"));
const Ad_1 = __importDefault(require("./Ad"));
const AdDesigner_1 = __importDefault(require("./AdDesigner"));
const Votes_1 = __importDefault(require("./Votes"));
const ThemeToggle_1 = __importDefault(require("./ThemeToggle"));
require("./App.css");
const App = () => {
    return (<ThemeContext_1.ThemeProvider>
      <div className="App">
        <Header_1.default user="Chirpus"/>
        <ThemeToggle_1.default /> 
        <Ad_1.default flavor="Vanilla" fontSize={24} darkTheme={false}/>
        <Ad_1.default flavor="Chocolate" fontSize={30} darkTheme={true}/>
        <Ad_1.default flavor="Strawberry" fontSize={28} darkTheme={false}/>
        <AdDesigner_1.default />
        <Votes_1.default />
      </div>
    </ThemeContext_1.ThemeProvider>);
};
exports.default = App;
