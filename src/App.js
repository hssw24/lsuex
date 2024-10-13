import React from 'react';

const words = [
    "Ma·ma", "Pa·pa", "O·ma", "O·pa", "Haus", "Ball", "Hund", "Kat·ze",
    "Au·to", "Baum", "Hut", "Maus", "Son·ne", "Mond", "Eis", "Na·se",
    "Ohr", "Kind", "Buch", "Brot", "Fisch", "Ap·fel", "Vo·gel", "Tisch",
    "Hand", "Fuß", "Bär", "Rot"
];

const WordTable = () => {
    return (
        <div style={{ marginLeft: '2.5cm' }}>
            <h1>Wortliste Leseübung 1</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    {words.map((word, index) => (
                        index % 4 === 0 ? (
                            <tr key={index}>
                                {words.slice(index, index + 4).map((w, i) => (
                                    <td key={i} style={{ border: '1px solid black', padding: '10px', textAlign: 'center', fontSize: '16pt' }}>
                                        {w}
                                    </td>
                                ))}
                            </tr>
                        ) : null
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WordTable;
