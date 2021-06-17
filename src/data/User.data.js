import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserData = () => {
	const [userAttributes, setUserAttributes] = useState({});
	const history = useHistory();

	useEffect(() => {
		console.log('attributes changed:', userAttributes); //DELETEME
	}, [userAttributes])

	return { userAttributes, setUserAttributes, history };
}

export default UserData;