import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserData = () => {
	const [userAttributes, setUserAttributes] = useState({});
	const history = useHistory();

	return { userAttributes, setUserAttributes, history };
}

export default UserData;