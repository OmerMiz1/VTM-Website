import {useState, useEffect, useMemo} from 'react';
import {MockData} from './MySummary.data'

const MyHomePageApi = ()  => {
    const [mySummaries, setMySummaries] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // Cheacking if mySummaries is empty
    const isMySummaryEmpty =
        !mySummaries || (mySummaries && mySummaries.length === 0);


    //MOCK delete summary and all the notes.. 
    const deleteSummary = (id) => {
        console.log(`api - delete id`, id);
        // fronted delete -
        const newSummaries = [...mySummaries].filter(summary => summary.id !== id);
        setMySummaries(newSummaries);
    }

    //MOCK update summary 
    const editSummary = (id) => {
        //Mock edit summary
        const newSummary = {
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

        console.log(`api - edit id`, id, ' to ' ,newSummary);

        setMySummaries(prev => prev.map(item => (item.id === id ? newSummary : item)));


    }

    const ShareSummary = (id) => {
        console.log(`api - sharing id`, id)
    }


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
    const fetchServices = () => {
        setLoading(true);
        console.log('fetch all my summaries...');
        // mock the loading time
        setTimeout(
            () => {
                setMySummaries(MockData);
                setLoading(false);
            }, 100);
    }

    useEffect(() => {
        fetchServices();
      }, []);



    return {
        isMySummaryEmpty, mySummaries, isLoading,
        deleteSummary, editSummary, ShareSummary, toggleFavorite
    }
} 


export default MyHomePageApi;