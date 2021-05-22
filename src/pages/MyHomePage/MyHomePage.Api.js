import {useState, useEffect} from 'react';
import {MockData} from './MySummary.mock'

const MyHomePageApi = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries)  => {
    
    const [isLoading, setLoading] = useState(true);

    //MOCK delete summary and all the notes.. 
    const deleteSummary = (sid) => {
        console.log(`api - delete sid`, sid);
        // fronted delete -
        const newSummaries = [...mySummaries].filter(summary => summary.sid !== sid);
        const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.sid !== sid);
        setMyFilterSummaries(newSummariesFilter);
        setMySummaries(newSummaries);

    }

    //MOCK update summary 
    const editSummary = (sid , updateSummary) => {

        //Mock edit summary
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
        console.log(`api - edit sid`, sid, ' to ' ,newSummary);
        setMySummaries(prev => prev.map(item => (item.sid === sid ? newSummary : item)));
        setMyFilterSummaries(prev => prev.map(item => (item.sid === sid ? newSummary : item)));

        

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

    // TODO add 
    const addSummary = (newSummary) => {
        console.log(`add summay -> `, newSummary );

        setMySummaries([...mySummaries, newSummary]); 
        setMyFilterSummaries( [...myFilterSummaries, newSummary]);
    }


    // MOCK get all my summary and set it on the state
    const fetchSummaries = () => {
        setLoading(true);
        // console.log('fetch all my summaries...');
        // mock the loading time
        setTimeout(
            () => {
                setMySummaries(MockData);
                setLoading(false);
            }, 200);
    }

    useEffect(() => {
        console.log(`use effect fetchSummaries`);
        fetchSummaries();
      },[]);



    return {
        isLoading, setLoading, addSummary,
        deleteSummary, editSummary, ShareSummary, toggleFavorite
    }
} 


export default MyHomePageApi;