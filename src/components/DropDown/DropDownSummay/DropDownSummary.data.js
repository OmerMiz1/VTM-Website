import { useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import { useHistory, useParams } from "react-router-dom";
import { faShare, faTrash, faEdit, faEye, faLock } from '@fortawesome/free-solid-svg-icons'; // Icons

const DropDownSummaryData = () => {
	const { deleteSummary} = useContext(SummariesContext);
	let history = useHistory(); //FIXME? const
	let { page } = useParams(); //FIXME? const

	const viewSummary = (sid, title) => {
		history.push('/myHome/' + page + '/' + title + '/' + sid, sid);
	}


    const shareSummary = () => { /*TODO*/ }

	const confirmDelete = (sid) => {
		var ans = window.confirm("Are you sure you want to delete this summary?");
		if (ans === true) {
			deleteSummary(sid);
		}
	}

    if (page === 'discover'){
        return [
            {
                title: 'view',
                icon: faEye,
                function: viewSummary
            },
            {
                //TODO
                title: 'clone',
                icon: faEdit,
                function: viewSummary
            },
            {
                title: 'share',
                icon: faShare,
                function: shareSummary
            }
        ]
    };

	return [
		{
			title: 'view',
			icon: faEye,
			function: viewSummary
		},
		{
			title: 'edit',
			icon: faEdit,
			function: viewSummary
		},
        {
			title: 'access',
			icon: faLock,
			function: viewSummary
		},
        {
			title: 'Share',
			icon: faShare,
			function: shareSummary
		},
		{
			title: 'Delete',
			icon: faTrash,
			function: confirmDelete
		}
	];

}

export default DropDownSummaryData;

