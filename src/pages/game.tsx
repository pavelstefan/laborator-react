import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GridElement from '../components/GridElement';
import { GRID_SIZE } from '../utils/constants';
import { incrementGames, updateMoves } from '../store/game.slice';
import { Link } from 'react-router-dom';

const data = [
    [1, 2, 14, 4],
    [4, 1, 5, 2],
    [5, 10, 12, 12],
    [10, 14, 16, 16]
];

const ELEMENTS_TO_DISCOVER = 8;

const Game = () => {
    const [isFinshed, setIsFinished] = useState<boolean>(false);
    const [gridState, setGridState] = useState<boolean[]>(new Array(GRID_SIZE * GRID_SIZE).fill(false));
    const [moves, setMoves] = useState<number>(0);
    const selectedRef = useRef<{ val: number; position: number }[]>([]);
    const discoveredElements = useRef<number>(0);
    const dispatch = useDispatch();

    const handleClick = (index: number) => {
        const newState = [...gridState];
        newState[index] = !newState[index];
        setGridState(newState);
    }

    const playAgain = () => {
        selectedRef.current = [];
        discoveredElements.current = 0;

        setMoves(0);
        setGridState(new Array(GRID_SIZE * GRID_SIZE).fill(false));
        setIsFinished(false);
    }

    const header = (
        <div className="d-flex justify-content-between">
            <h4>Score: {moves}</h4>
            <Link to="/profile" >go to profile</Link>
        </div>
    );

    useEffect(() => {
        if (isFinshed) {
            dispatch(updateMoves(moves));
        }
    }, [isFinshed, moves, dispatch]);

    if (isFinshed) {
        return (
            <>
                {header}
                <div className="d-flex justify-content-center">
                    <h1>You finshed the game using {moves} moves</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={playAgain}>Start</button>
                </div>


            </>
        )
    }

    return (
        <>
            {header}
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
                                            setMoves(moves + 1);
                                            const [first, seccond] = selectedRef.current;
                                            if (first.val !== seccond.val) {
                                                const newState = [...gridState];
                                                newState[first.position] = false;
                                                newState[seccond.position] = false;
                                                setTimeout(() => {
                                                    setGridState(newState);
                                                }, 500);

                                            } else {
                                                discoveredElements.current++;
                                                if (discoveredElements.current === ELEMENTS_TO_DISCOVER) {
                                                    dispatch(incrementGames());
                                                    setIsFinished(true);
                                                }
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