import { useState, useRef } from 'react';
import GridElement from '../components/GridElement';
import { GRID_SIZE } from '../utils/constants';

const data = [
    [1, 2, 14, 4],
    [4, 1, 5, 2],
    [5, 10, 12, 12],
    [10, 14, 16, 16]
];

const Game = () => {
    const [gridState, setGridState] = useState<boolean[]>(new Array(GRID_SIZE * GRID_SIZE).fill(false));
    const selectedRef = useRef<{ val: number; position: number }[]>([]);

    const handleClick = (index: number) => {
        const newState = [...gridState];
        newState[index] = !newState[index];
        setGridState(newState);
    }

    return (
        <>
            <h1>Game</h1>
            {/* <Link to="/profile" >go to profile</Link> */}
            {
                data.map((row, rowIndex) => (
                    <div className="row" style={{ marginBottom: 10 }} key={`row-${rowIndex}`}>
                        {row.map((col, colIndex) => (
                            <div className="col" key={rowIndex * GRID_SIZE + colIndex}>
                                <GridElement
                                    logoIndex={col}
                                    visible={gridState[rowIndex * GRID_SIZE + colIndex]}
                                    onClick={() => {
                                        const position = rowIndex * GRID_SIZE + colIndex;
                                        handleClick(position);
                                        selectedRef.current.push({ position, val: col });
                                        if (selectedRef.current.length === 2) {
                                            const [first, seccond] = selectedRef.current;
                                            if (first.val !== seccond.val) {
                                                const newState = [...gridState];
                                                newState[first.position] = false;
                                                newState[seccond.position] = false;
                                                setTimeout(() => {
                                                    setGridState(newState);
                                                }, 500);

                                            }
                                            selectedRef.current = [];
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ))
            }
        </>
    );
};

export default Game;