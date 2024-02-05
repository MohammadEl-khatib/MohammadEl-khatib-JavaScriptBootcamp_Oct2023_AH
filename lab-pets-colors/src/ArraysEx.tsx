import React, { useState } from 'react';
import { Pet } from './Pet';

const ArraysEx: React.FC = () => {
    const [colors, setColors] = useState<string[]>(["red", "orange", "yellow"]);
    const [pets, setPets] = useState<Pet[]>([
        { name: 'Fluffer Nutters', type: 'cat', id: 1 },
        { name: 'Mocha', type: 'dog', id: 2 },
        { name: 'Sophie', type: 'hamster', id: 3 },
    ]);

    const addColor = (color: string): void => {
        setColors([...colors, color]);
    };

    const deletePet = (petId: number): void => {
        setPets(pets.filter(pet => pet.id !== petId));
    };

    return (
        <div>
            <h1>Arrays Exercise</h1>
            <section>
                <h2>Colors</h2>
                <ol>
                    {colors.map((color, index) => (
                        <li key={index}>{color}</li>
                    ))}
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
                        {pets.map(pet => (
                            <tr key={pet.id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <button onClick={() => deletePet(pet.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default ArraysEx;
