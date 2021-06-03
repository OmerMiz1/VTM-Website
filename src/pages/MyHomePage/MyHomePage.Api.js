import {useState, useEffect} from 'react';
import Amplify, {API, Auth} from 'aws-amplify';
import {MockData} from './MySummary.mock';
import { string } from 'yup';
// TODO no user -> logout, homepage

// FIXME
const awsmobile = {
	"aws_project_region": "eu-central-1",
	"aws_cognito_identity_pool_id": "eu-central-1:37578e1c-c060-4359-9096-d7a534c07a84",
	"aws_cognito_region": "eu-central-1",
	"aws_user_pools_id": "eu-central-1_gxX97wEqr",
	"aws_user_pools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o",
	"aws_dynamodb_all_tables_region": "eu-central-1",
	"aws_dynamodb_table_schemas": [
		{
			"tableName": "SummaryDB-staging",
			"region": "eu-central-1"
		}
	],
	"aws_cloud_logic_custom": [
		{
			"name": "SummaryAPI",
			"endpoint": "https://smzqyqgrt0.execute-api.eu-central-1.amazonaws.com/staging",
			"region": "eu-central-1"
		}
	]
};
Amplify.configure(awsmobile)

/* DELETEME
Summary: 
{
	sid: INT,
	uid: STRING,
	autorName: STRING,
	url: STRING,
	title: STRING,
	createdTime: STRING,
	editTime: STRING,
	tags: [STRING],
	imgUrl: STRING,
	likes: INT,
	favorite: BOOL,
} 
 */
const MyHomePageApi = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries)  => {
	const apiName = 'SummaryAPI';
	const summaryPath = '/summary';
	const libraryPath = '/library';
	const myLibraries = 'mylibraries'
	const summaryIdKeyName = 'sid';
	const uidKeyName = 'sub';

	const [isLoading, setLoading] = useState(true);
	
	//TODO lid
	const getSummaries = async (uid) => {
		console.log('fetchSummaries, path:', `/${uid}`); //DELETEME
		setLoading(true);

		API.get(apiName, `${libraryPath}/${uid}`)
		.then(summaries => {
			console.log(`summaries:`,  summaries) //DELETEME
			setMySummaries(summaries);
			setLoading(false);
		})
		.catch(error => {
			console.log('error fetching summaries:', error) //DELETEME
		});
	}

	const getSummary = async (sid) => {
		console.log('getSummary, path:', `${summaryPath}`); //DELETEME
		const myInit = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}
		console.log(`path: ${summaryPath}\nQueryParams: ${JSON.stringify(myInit.queryStringParameters)}`)
		API.get(apiName, summaryPath, myInit)
		.then(response => {
			console.log(`response`, response) //DELETEME
			return response;
		})
		.catch(error => console.log(error))
	}

	const addSummary = async (summary) => {
		console.log('addSummary:', summary) //DELETEME
		const uid = (await Auth.currentAuthenticatedUser()).attributes[uidKeyName];
		console.log(`${uid}`)//DELETEME
		
		//TODO lid (summary.lid)
		API.post(apiName, summaryPath, {body: summary})
		.then(response => {
			console.log('post response: ', response) //DELETEME
			
			// Update front-end
			summary[summaryIdKeyName] = response.data
			setMySummaries([...mySummaries, summary]);
			setMyFilterSummaries([...myFilterSummaries, summary]);
		})
		.catch(error => {
			console.log('error adding summary:', error) // DELETEME
		})
	}

	//TODO remove sid param
	const updateSummary = (summary) => {
		console.log('updateSummary')//DELETEME

		if (!summary[summaryIdKeyName]) {
			console.log('error: sid missing', summary)//DELETEME
			return;
		}
		// summary[summaryIdKeyName] = JSON.stringify(summary[summaryIdKeyName])
		
		API.put(apiName, summaryPath, {body: summary})
		.then(response => {
			console.log('update summary response:', response) //DELETEME
			
			// Update Frontend
			setMySummaries(prev => prev.map(item => (item[summaryIdKeyName] === summary[summaryIdKeyName] ? summary : item)));
			setMyFilterSummaries(prev => prev.map(item => (item[summaryIdKeyName] === summary[summaryIdKeyName] ? summary : item)));
		})
		.catch(error => {
			console.log('error update summary:', error) //DELETEME
		})
	}

	const deleteSummary = (sid) => {
		console.log('delete summary sid: ', sid); //DELETEME

		if(typeof(sid) !== 'string') {
			console.log('error: invalid sid.\nExpected: string\tFound:', typeof(sid)) //DELETEME
			return;
		}

		const queryParams = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}

		API.del(apiName, summaryPath, queryParams)
		.then(response => {
			console.log(`delete response:`, response)//DELETEME

			// Fronted delete
			const newSummaries = [...mySummaries].filter(summary => summary.sid !== sid);
			const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.sid !== sid);
			setMyFilterSummaries(newSummariesFilter);
			setMySummaries(newSummaries);
		})
		.catch(error => console.log(error))
	}

	//TODO implement
	const ShareSummary = (sid) => {
		console.log(`ShareSummary`, sid)//DELETEME
	}

	//MOCK need add send to data the toggle
	const toggleFavorite = (sid) => {
		console.log(`toggleFavorite`, sid); //DELETEME

		const updateSummaries = [...mySummaries].map((summary) => {
			if (summary.sid === sid) {
				summary.favorite = !summary.favorite
			};
			return summary;
		});

		setMySummaries(updateSummaries);
	}

	const getMyLibraries = async () => {
		console.log('getMyLibraries'); //DELETEME
		setLoading(true);

		API.get(apiName, `${libraryPath}/${myLibraries}`)
		.then(summaries => {
			console.log(`summaries:`,  summaries) //DELETEME
			setMySummaries(summaries);
			setLoading(false);
		})
		.catch(error => {
			console.log('error getting libraries:', error) //DELETEME
		});
	}

	useEffect(async () =>  {
		// Auth.currentAuthenticatedUser()
		// .then(response => {
		//     let uid = response['attributes'][uidKeyName];
		//     getSummaries(uid);
		// })
		// .catch(error => console.log('error geting auth user:', error))

		// let getResult = await getSummary("U2FsdGVkX18SNWCRj19ypy5s6uaqOUtGMmAw/AqZzjGVHfWtglDZkV25/kzUFt7P1fO16yvE9xKR8C7tzv+R1cckGoNOnYNUAaz8qx0rKgVTgf2k7Il8XY7MEGAC3ZMG")
		// console.log(getResult)

		let libraryResult = await getMyLibraries();
		console.log(libraryResult)
	}, []);

	return {
		isLoading, setLoading,
		deleteSummary, updateSummary, ShareSummary, toggleFavorite, addSummary
	}
} 


export default MyHomePageApi;