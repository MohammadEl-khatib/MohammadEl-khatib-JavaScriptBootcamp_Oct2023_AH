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
const react_1 = __importStar(require("react"));
require("./Votes.css");
const Votes = () => {
    const [votes, setVotes] = (0, react_1.useState)({ Chocolate: 0, Vanilla: 0, Strawberry: 0 });
    const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
    const addVote = (flavor) => {
        setVotes(Object.assign(Object.assign({}, votes), { [flavor]: votes[flavor] + 1 }));
    };
    const votePercentage = (flavor) => {
        if (totalVotes === 0)
            return '0';
        return ((votes[flavor] / totalVotes) * 100).toFixed(1);
    };
    return (<div className="votes">
      <h2>Vote Here</h2>
      {['Chocolate', 'Vanilla', 'Strawberry'].map((flavor) => (<div key={flavor}>
              <button onClick={() => addVote(flavor)}>{flavor}</button>
              <div className={`graph-bar ${flavor.toLowerCase()}`} style={{ width: `${votePercentage(flavor)}%` }}>
                  </div>

          </div>))}
      {totalVotes === 0 ? (<p>No votes yet.</p>) : (['Chocolate', 'Vanilla', 'Strawberry'].map((flavor) => (votes[flavor] > 0 && (<div key={flavor} className="vote-result">
              <span>{flavor}: </span>
              <span>{votes[flavor]} ({votePercentage(flavor)}%)</span>
              <div className={`graph-bar ${flavor.toLowerCase()}`} style={{ width: `${votePercentage(flavor)}%` }}></div>
            </div>))))}

      </div>);
};
exports.default = Votes;
