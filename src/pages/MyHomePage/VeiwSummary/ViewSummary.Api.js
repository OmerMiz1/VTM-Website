import {MockData} from './VeiwSummary.mock';

  

//MOCK fetch all the notes that much to summary id  
export const  fetchNotes = (id, setNotes, setLoading) => {
    console.log(`fech all the notes of summay id - `, id);
    setLoading(true);
    // mock the loading time
    setTimeout(
        () => {
            const dataNotes = MockData.filter( item => {
                return(
                    item.summaryId ===id
                )
            });
            setNotes(dataNotes);
            setLoading(false);
        }, 2000);
};


