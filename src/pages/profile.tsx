import { useSelector } from 'react-redux';
import { gamesSelector, averageMovesSelector } from '../store/game.slice';
import { profileSelector } from '../store/user.slice';
import { Link } from 'react-router-dom';

const Profile = () => {
    const numberOfGames = useSelector(gamesSelector);
    const averageMoves = useSelector(averageMovesSelector);
    const user = useSelector(profileSelector);
    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>Profile</h3>
                <Link to="/game" >go to game</Link>
            </div>

            <ul className="list-group">
                <li className="list-group-item"><span>Games played: {numberOfGames}</span></li>
                <li className="list-group-item"><span>Average moves: {averageMoves}</span></li>
                <li className="list-group-item"><span>Email: {user.email}</span></li>
                <li className="list-group-item"><span>Name: {user.firstName} {user.lastName}</span></li>
            </ul>
        </>
    );
};

export default Profile;