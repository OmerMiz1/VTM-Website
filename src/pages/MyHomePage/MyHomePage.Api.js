import {useState, useEffect} from 'react';
import Amplify, {API, Auth} from 'aws-amplify';
import {MockData} from './MySummary.mock';
import { string } from 'yup';

// FIXME take out hardcoded config!
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
    // const path = '/summary';
    const path = '';
    const partitionKeyName = 'uid';
    const sortKeyName = 'createTime';
    const summaryIdName = 'sid';
    // const uidAttributeName = 'website';
    const uidAttributeName = 'sub';

    const [isLoading, setLoading] = useState(true);
    let curError = null

    const fetchSummaries = (uid) => {
        console.log('fetchSummaries, path:', `/${uid}`); //DELETEME
        setLoading(true);
        let libPath = '/' + uid
        API.get(apiName, libPath)
        .then(summaries => {
            console.log(`summaries:`,  summaries) //DELETEME
            setMySummaries(summaries);
            setLoading(false);
        })
        .catch(error => {
            console.log('error fetching summaries:', error)
            curError = error
        });
    }

    const getSummaries = (uid) => {
    }

    const getSummary = (sid) => {
        console.log('getSummary'); //DELETEME

        //TODO finish implementation
        API.get(apiName, `${path}/${sid}`)
    }

    const addSummary = async (summary) => {
        console.log('addSummary:', summary) //DELETEME
        
        const uid = (await Auth.currentAuthenticatedUser()).attributes[uidAttributeName];
        console.log(`${path}/${JSON.stringify(uid)}`)//DELETEME
        
        API.post(apiName, `${path}/${uid}`, {body: summary})
        .then(response => {
            console.log('post response: ', response)
            setMySummaries([...mySummaries, summary]);
            setMyFilterSummaries([...myFilterSummaries, summary]);
        })
        .catch(error => console.log('error adding summary:', error))    
    }

    //TODO Remove sid (its already in summary's body)
    const updateSummary = (sid, summary) => {
        console.log('updateSummary')//DELETEME

        if (!summary[summaryIdName]) {
            console.log('error: invalid summary data', summary)//DELETEME
            return;
        }

        API.put(apiName, path, {body: summary})
        .then(response => {
            console.log('update summary response:', response) //DELETEME
            
            // Update Frontend
            setMySummaries(prev => prev.map(item => (item[summaryIdName] === summary[summaryIdName] ? summary : item)));
            setMyFilterSummaries(prev => prev.map(item => (item[summaryIdName] === summary[summaryIdName] ? summary : item)));
        })
        .catch(error => console.log('error update summary:', error))
    }

    const deleteSummary = (sid) => {
        console.log('deleteSummary')//DELETEME
        console.log('requesting to delete sid =', sid);
        if(!sid) {
            console.log('error: invalid summary id', sid)
            return;
        }
        let msgBody = {
            body: {
                sid: sid
            }
        }
        API.del(apiName, path, msgBody)
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

    useEffect(() => {
        Auth.currentAuthenticatedUser()
        .then(response => {
            let uid = response['attributes'][uidAttributeName];
            fetchSummaries(uid);
        })
        .catch(error => console.log('error geting auth user:', error))
    }, []);

    return {
        isLoading, setLoading,
        deleteSummary, updateSummary, ShareSummary, toggleFavorite, addSummary
    }
} 


export default MyHomePageApi;