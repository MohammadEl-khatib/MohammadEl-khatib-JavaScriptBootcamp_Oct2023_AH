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
const ArraysEx = () => {
    const [colors, setColors] = (0, react_1.useState)(["red", "orange", "yellow"]);
    const [pets, setPets] = (0, react_1.useState)([
        { name: 'Fluffer Nutters', type: 'cat', id: 1 },
        { name: 'Mocha', type: 'dog', id: 2 },
        { name: 'Sophie', type: 'hamster', id: 3 },
    ]);
    const addColor = (color) => {
        setColors([...colors, color]);
    };
    const deletePet = (petId) => {
        setPets(pets.filter(pet => pet.id !== petId));
    };
    return (<div>
            <h1>Arrays Exercise</h1>
            <section>
                <h2>Colors</h2>
                <ol>
                    {colors.map((color, index) => (<li key={index}>{color}</li>))}
                </ol>
                <button onClick={() => addColor('green')}>Add Green</button>
                <button onClick={() => addColor('blue')}>Add Blue</button>
                <button onClick={() => addColor('violet')}>Add Violet</button>
            </section>
            
            <section>
                <h2>Pets</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.map(pet => (<tr key={pet.id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <button onClick={() => deletePet(pet.id)}>Delete</button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </section>
        </div>);
};
exports.default = ArraysEx;
