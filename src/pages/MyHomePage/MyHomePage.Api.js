import {useState, useEffect} from 'react';
import {MockData} from './MySummary.mock'

const MyHomePageApi = (mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries)  => {
    
    const [isLoading, setLoading] = useState(true);

    //MOCK delete summary and all the notes.. 
    const deleteSummary = (id) => {
        console.log(`api - delete id`, id);
        // fronted delete -
        const newSummaries = [...mySummaries].filter(summary => summary.id !== id);
        const newSummariesFilter = [...myFilterSummaries].filter(summary => summary.id !== id);
        setMyFilterSummaries(newSummariesFilter);
        setMySummaries(newSummaries);

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
    }
        setMySummaries(prev => prev.map(item => (item.id === id ? newSummary : item)));
        setMyFilterSummaries(prev => prev.map(item => (item.id === id ? newSummary : item)));

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
        // console.log(`use effect fetchSummaries`);
        fetchSummaries();
      },[]);



    return {
        isLoading, setLoading,
        deleteSummary, editSummary, ShareSummary, toggleFavorite
    }
} 


export default MyHomePageApi;