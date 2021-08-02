import { useEffect, useContext} from 'react';
import SummaryApi from '../../../api/Summary';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import { UserContext } from '../../../utils/context/UserContext';

function SharedWithMeLogic() {
	const { getSummariesSharedWithRemote } = SummaryApi();
	const { 
		setLoading,
		setSharedSummaries,
	} = useContext(SummariesContext);
	const { userAttributes } = useContext(UserContext);

	const getSummariesSharedWith = () => {
		setLoading(true);
		
		getSummariesSharedWithRemote(userAttributes.username)
			.then(response => {
				setSharedSummaries(response.data);
				setLoading(false);
			})
			.catch(error => {
				console.log(`error:`, error);
				setLoading(false);
			});
	}

	useEffect(() => {
        getSummariesSharedWith()
	}, []);


    return ( {} )
}

export default SharedWithMeLogic
