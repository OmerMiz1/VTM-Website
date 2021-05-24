import {useState, useEffect} from 'react';
import Amplify, {API, Auth} from 'aws-amplify';
import {MockData} from './MySummary.mock';
import { string } from 'yup';

// FIXME take out hardcoded config!
const awsmobile = {
    "aws_project_region": "eu-central-1",
    "aws_cognito_identity_pool_id": "eu-central-1:086c2808-388a-4fa4-a4b6-187b9f7b2bec",
    "aws_cognito_region": "eu-central-1",
    "aws_user_pools_id": "eu-central-1_pry0ETHtR",
    "aws_user_pools_web_client_id": "6mss0vu7320s4fk1onch4eosmr",
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
    const path = '/summary';
    const partitionKeyName = 'uid';
    const sortKeyName = 'createTime';

    const [isLoading, setLoading] = useState(true);

    const fetchSummaries = (pk=partitionKeyName) => {
        console.log('fetchSummaries'); //DELETEME
        setLoading(true);

        API.get(apiName, `${path}/${pk}`)
        .then(summaries => {
            console.log(`summaries: ${summaries}`)
            setMySummaries(summaries);
            setLoading(false);
        })
        .catch(error => {
            console.log('error fetching summaries:' + error.message)
        });
    }

    const getSummaries = (pk=partitionKeyName) => {
    }

    const getSummary = (sk, pk=partitionKeyName) => {
        console.log('getSummary'); //DELETEME
        API.get(apiName, `${path}/${pk}/${sk}`)
    }

    const addSummary = (summary) => {
        console.log('addSummary') //DELETEME

        API.post(apiName, `${path}/${partitionKeyName}`, {body: summary})
        .then(response => {
            console.log(`post response: ${response}`)
            setMySummaries([...mySummaries, summary]);
            setMyFilterSummaries([...myFilterSummaries, summary]);
        })
        .catch(error => console.log(`error adding summary: ${error.message}`))        
    }

    //MOCK remove all mock details
    const updateSummary = (sid='1e0f0d03-515a-4257-8ea5-2165dbae8485/1621788711255' , updatedSummary={}) => {
        console.log('updateSummary')//DELETEME

        let splitRes = sid.split('/');
        let uid = splitRes[0]
        let createTime = splitRes[1]

        //TODO fix mock values
        let newSummary = {
            sid: sid,
            uid: uid,
            favourite: false,
            title: 'title changed',
            tags: ['tag changed'],
            createTime: createTime,
            editTime: 'Now',
            likes: 0,
            authorName:'Shon Pozner',
            url: 'https://www.google.com/',
        };
        
        API.put(apiName, path, {body: newSummary})
        .then(response => {
            console.log(`update summary response: ${response}`) //DELETEME
            
            // Update Frontend
            setMySummaries(prev => prev.map(item => (item.sid === sid ? newSummary : item)));
            setMyFilterSummaries(prev => prev.map(item => (item.sid === sid ? newSummary : item)));
        })
        .catch(error => console.log(`error update summary: ${error}`))

        newSummary = {
            sid: sid,
            favorite: false,
            title: 'title changed',
            tags: ['tag changed'],
            createdTime: createTime,
            editTime: 'Now',
            likes: 0,
            autorName:'Shon Pozner',
            url: 'https://www.google.com/',
        };
    }

    //MOCK remove all mock details
    const deleteSummary = (sid='1e0f0d03-515a-4257-8ea5-2165dbae8485/1621788711255') => {
        console.log('deleteSummary')//DELETEME

        let splitRes = sid.split('/');
        let msgBody = {
            body: {
                uid: splitRes[0],
                createTime: splitRes[1]
                }
        }
        API.del(apiName, `${path}/${sid}`)
        .then(response => {
            console.log(`delete response: ${response}`)//DELETEME

            // Fronted delete
            const newSummaries = [...mySummaries].filter(summary => summary.sid !== sid);
            const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.sid !== sid);
            setMyFilterSummaries(newSummariesFilter);
            setMySummaries(newSummaries);
        })
        .catch(error => console.log(error))
    }

    const ShareSummary = (sid) => {
        console.log(`api - sharing sid`, sid)
    }

    //MOCK need add send to data the toggle
    const toggleFavorite = (sid) => {
        console.log(`api - toggle Favorite sid`, sid);

        const updateSummaries = [...mySummaries].map((summary) => {
            if (summary.sid === sid) {
                summary.favorite = !summary.favorite
            };
            return summary;
        });

        setMySummaries(updateSummaries);
    }

    useEffect(async () => {
        fetchSummaries(); //TODO uncomment
        deleteSummary();
    }, []);

    return {
        isLoading, setLoading,
        deleteSummary, updateSummary, ShareSummary, toggleFavorite, addSummary
    }
} 


export default MyHomePageApi;