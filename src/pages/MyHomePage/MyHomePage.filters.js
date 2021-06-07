import { useState, useEffect } from 'react';


const MyHomePageFilters = (mySummaries, setMyFilterSummaries) => {
	const [myFilterSummariesTags, setMyFilterSummariesTags] = useState([]);

	useEffect(() => {
		getAllFilterTags(mySummaries);
	}, [mySummaries])

	const getAllFilterTags = (summaries) => {
		const allTags = new Set();

		summaries.forEach((summary) => {
			summary.tags.forEach((tag) => {
				allTags.add(tag)
			})
		})
		setMyFilterSummariesTags(allTags)
	}

	const UnFilter = () => setMyFilterSummaries(mySummaries);

	// Filter summaries by all the data in the object
	const SearchFilterData = value => {
		const lowerCaseValue = value.toLowerCase().trim();

		if (!lowerCaseValue) {
			UnFilter();
		} else {
			const fillteredData = mySummaries.filter(item => {
				return Object.keys(item).some(key => {
					return item[key].toString().toLowerCase().includes(lowerCaseValue);
				});
			});
			setMyFilterSummaries(fillteredData); // save
		}
	}

	// Filter summaries by attribute and value
	const FilterDataByAttribute = (attribute, value) => {
		const lowerCaseValue = value.toLowerCase().trim();
		
		if (!lowerCaseValue) {
			UnFilter()
		} else {
			const fillteredData = mySummaries.filter(item => {
				return Object.keys(item).some(_ => {
					return item[attribute].toString().toLowerCase().includes(lowerCaseValue);
				});
			});
			setMyFilterSummaries(fillteredData);
		}
	}

	return {
		SearchFilterData,
		myFilterSummariesTags,
		FilterDataByAttribute,
		UnFilter
	}
}


export default MyHomePageFilters;