import {useState, useEffect} from 'react';
import Amplify, {API, Storage} from 'aws-amplify';
import {MockData} from './MySummary.mock';

// FIXME take out hardcoded config!
const awsmobile = {
    "aws_project_region": "eu-central-1",
    "aws_cognito_identity_pool_id": "eu-central-1:086c2808-388a-4fa4-a4b6-187b9f7b2bec",
    "aws_cognito_region": "eu-central-1",
    "aws_user_pools_id": "eu-central-1_pry0ETHtR",
    "aws_user_pools_web_client_id": "6mss0vu7320s4fk1onch4eosmr",
    "oauth": {},
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

const MyHomePageApi = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries)  => {
    const apiName = 'SummaryAPI';
    const path = '/summary';
    const partitionKey = 'sid';
    const sortKey = 'author';


    const [isLoading, setLoading] = useState(true);
    // const [summaryId, setSummaryId] = useState('');
    // const [summaryAuthor, setSummaryAuthor] = useState('');

    // TODO consider using PUT instead of POST
    const postSummary = async (sid, author, url, title, tags, summary) => {
        let msgBody = {
            body: {
                sid: sid,
                author: author,
                url: url,
                title: title,
                tags: tags,
                summary: summary
            }
        };

        return await API.post(apiName, path, msgBody);
    }



    //MOCK update summary
    const editSummary = (id , updateSummary) => {
        //Mock edit summary
        const newSummary = updateSummary ? updateSummary: 
        {
            id: id,
            favorite: false,
            title: 'this is edit mock',
            tags: ['edit', 'mock'],
            createdTime:'16/11/2021',
            editTime: 'Now',
            likes: 0,
            autorName:'Shon Pozner',
            url: 'https://www.google.com/',
        }
        
        setMySummaries(prev => prev.map(item => (item.id === id ? newSummary : item)));
        setMyFilterSummaries(prev => prev.map(item => (item.id === id ? newSummary : item)));
    }
    //MOCK delete summary and all the notes.. 
    const deleteSummary = (id) => {
        console.log(`api - delete id`, id); // DELETEME
        
        // fronted delete -
        const newSummaries = [...mySummaries].filter(summary => summary.id !== id);
        const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.id !== id);
        setMyFilterSummaries(newSummariesFilter);
        setMySummaries(newSummaries);
    }

    const ShareSummary = (id) => {
        console.log(`api - sharing id`, id)
    }
    //MOCK need add send to data the toggle
    const toggleFavorite = (id) => {
        console.log(`api - toggle Favorite id`, id);

        const updateSummaries = [...mySummaries].map((summary) => {
            if (summary.id === id) {
                summary.favorite = !summary.favorite
            };
            return summary;
        });

        setMySummaries(updateSummaries);
    }


    // MOCK get all my summary and set it on the state
    const fetchSummaries = async () => {
        setLoading(true);
        // console.log('fetch all my summaries...');

        // MOCK
        setTimeout(() => {
                setMySummaries(MockData);
                setLoading(false);
        }, 200);

        API
        .get(apiName, path+'/'+partitionKey).then((response) => console.log(response))
        .then(response => console.log(response))
        .catch(error => {
            console.log('error get summary:', error)
        });

        let msgBody = {
            body: {
                sid: 'sid2',
                author: 'author2',
                url: 'url2',
                summary: [
                    [1, 'note1'],
                    [2, 'note2']
                ]
            }
        };

        await postSummary('sid2', 'author2', 'url2', msgBody);
    }

    //DELETEME
    useEffect(() => {
        fetchSummaries();
        postSummary('sid1', 'author1', 'url1', 'title1', ['tag1', 'tag2'], ['note1', 'note2']) // MOCK
    }, []);



    return {
        isLoading, setLoading,
        deleteSummary, editSummary, ShareSummary, toggleFavorite
    }

    // TODO implement
    const addSummary = (id, summary) => {}
} 


export default MyHomePageApi;