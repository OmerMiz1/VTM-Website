import {useState} from 'react';


const CardSummaryApi = (favorites) => {

    const [isFavorite, setIsFavorite] = useState(favorites);


    //MOCK send to database change favorite..
    //TODO אולי לשלוח רק אחרי כמה דקות את כל הישוניים  
    const toggleIsFavorite = (summaryId) => {
        console.log(`toggleIs Favorite... now summay id: ` + summaryId + ' is - ' + isFavorite);
        setIsFavorite(!isFavorite);
    }


    const deleteSummary = (id) => {
        console.log(`delete id`, id)

    }


    

    return {
        toggleIsFavorite, isFavorite
        
    }
}

 
export default CardSummaryApi;