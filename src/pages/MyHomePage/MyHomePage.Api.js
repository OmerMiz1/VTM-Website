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
/*
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
    const partitionKey = 'sid';
    const sortKey = 'author';

    const [isLoading, setLoading] = useState(true);


    // MOCK get all my summary and set it on the state
    const fetchSummaries = () => {
        setLoading(true);
        // console.log('fetch all my summaries...');

        // MOCK
        setTimeout(() => {
            //uid#time_stamp
            setMySummaries(MockData);
            setLoading(false);
        }, 200);
    }

    const getSummaries = async () => {
        return API.get(apiName, path+'/sid1', {
            "queryStringParameters": {
                author: "author1"
            }
        });
    }

    // TODO consider using PUT instead of POST
    const createSummary = async (summary) => {
        // TODO: set sid, createdTime, editTime
        // summary['sid'] = generateSid(summary.uid);
        
        return await API.post(apiName, path, {body: summary});
    }

    //MOCK update summary
    const updateSummary = (sid , updateSummary) => {
        //MOCK edit summary
        const newSummary = updateSummary ? updateSummary: 
        {
            sid: sid,
            favorite: false,
            title: 'this is edit mock',
            tags: ['edit', 'mock'],
            createdTime:'16/11/2021',
            editTime: 'Now',
            likes: 0,
            autorName:'Shon Pozner',
            url: 'https://www.google.com/',
        }
        
        setMySummaries(prev => prev.map(item => (item.sid === sid ? newSummary : item)));
        setMyFilterSummaries(prev => prev.map(item => (item.sid === sid ? newSummary : item)));
    }

    //MOCK delete summary and all the notes.. 
    const deleteSummary = (sid) => {
        console.log(`api - delete sid`, sid); // DELETEME
        
        // fronted delete -
        const newSummaries = [...mySummaries].filter(summary => summary.sid !== sid);
        const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.sid !== sid);
        setMyFilterSummaries(newSummariesFilter);
        setMySummaries(newSummaries);
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

    //DELETEME
    useEffect(async () => {
        //MOCK
        fetchSummaries();
        // let user = await Auth.currentAuthenticatedUser();
        // console.log(user);

        getSummaries()
        .then(response => console.log('Received summaries:', response))
        .catch(error => console.log('Error getting summaries:', error));
        
        // createSummary('sid1', 'author1', 'url1', 'title1', ['tag1', 'tag2'], ['note1', 'note2']) // MOCK
    }, []);

    return {
        isLoading, setLoading,
        deleteSummary, updateSummary, ShareSummary, toggleFavorite
    }

    // TODO implement
    const addSummary = (sid, summary) => {}
    const generateSid = (uid) => {
        /**
         * taken from: https://stackoverflow.com/questions/37072341/how-to-use-auto-increment-for-primary-key-id-in-dynamodb
         */
        const CUSTOMEPOCH = 1300000000000; // artificial epoch
        let shardId = Math.floor(Math.random() * 64)
        let ts = new Date().getTime() - CUSTOMEPOCH; // limit to recent
        let randid = Math.floor(Math.random() * 512);
        ts = (ts * 64);   // bit-shift << 6
        ts = ts + shardId;
        return (ts * 512) + randid;
    }
} 


export default MyHomePageApi;