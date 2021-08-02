import React from 'react';
import MySummaries from './MySummaries';
import Discover from './Discover';
import { useParams } from 'react-router-dom';
import SharedWithMe from './SharedWithMe';

function TagView() {

    const { page } = useParams();

    return (
        page === "mySummaries" ?
        <MySummaries></MySummaries>:
        page === "Discover" ?
        <Discover></Discover>:
        <SharedWithMe></SharedWithMe>
    )
}

export default TagView