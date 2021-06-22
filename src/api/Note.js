import Amplify, { API } from 'aws-amplify';

const awsmobile = {
	"aws_project_region": "eu-central-1",
	"aws_cognito_identity_pool_id": "eu-central-1:37578e1c-c060-4359-9096-d7a534c07a84",
	"aws_cognito_region": "eu-central-1",
	"aws_user_pools_id": "eu-central-1_gxX97wEqr",
	"aws_user_pools_web_client_id": "fe7d5qhf1c1difm5mqq9j279o",
	"aws_cloud_logic_custom": [
		{
			"name": "SummaryAPI",
			"endpoint": "https://smzqyqgrt0.execute-api.eu-central-1.amazonaws.com/staging",
			"region": "eu-central-1"
		}
	]
};
Amplify.configure(awsmobile)

// notes, setNotes, setLoading
const NoteApi = () => {
	const apiName = "SummaryAPI";
	const notesPath = "/note";
	const summaryIdKeyName = "sid";
	const createdKeyName = "createTime";
	const editedKeyName = "editTime";
	const noteIdKeyName = "nid";

	const fetchNotes = (sid) => {
		console.log(`fetchNotes`, sid);
		// setLoading(true);

		const queryParams = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}

		API.get(apiName, notesPath, queryParams)
		.then(notes => {
			console.log(`notes:`, notes) //DELETEME
            return notes;
			// setNotes(notes); //DELETEME
			// setLoading(false); //DELETEME
		})
		.catch(error => {
			console.log('error getting notes:', error); //DELETEME
            return 'error';
		});
	};

	const addNote = (note) => {
		 console.log(`addNote`, note);

        API.post(apiName, notesPath, { body: note })
			.then(response => {
                return response;	
			})
			.catch(error => {
				console.log(error) // DELETEME
                return "error"; //TODO rename error handel
			});
	};

	const deleteNote = (note) => {
		console.log(`deleteNote`, note);

		const queryParams = {
			queryStringParameters: {
				[summaryIdKeyName]: JSON.stringify(note[summaryIdKeyName]),
				[createdKeyName]: JSON.stringify(note[createdKeyName])
			}
		}
		console.log(`queryParams:`, queryParams)

		API.del(apiName, notesPath, queryParams)
		.then(response => {
			console.log(response);

			// Update front-end
			// const newNotes = [...notes].filter(n => n.nid !== note.nid);
			// setNotes(newNotes);
		})
		.catch(error => {
            console.log(error) // DELETEME
            return "error"; //TODO rename error handel
        });
	};

	const updateNote = (note) => {
		console.log(`updateNote`, note); //DELETEME

		if (!note[summaryIdKeyName] || typeof (note[createdKeyName]) !== typeof (1)) {
			console.log('invalid note object', note)//DELETEME
			return 'error'; //TODO rename error handel
		}

		API.patch(apiName, notesPath, { body: note })
		.then(response => {
			console.log(`update note response:`, response); //DELETEME
            return response;
			// Update front-end
			// setNotes(prev => prev.map(item => (item.nid === note.nid ? note : item)));
		})
		.catch(error => {
            console.log(error);
            return 'error'; //TODO rename error handel

        })

	};

	return {
		fetchNotes, updateNote, addNote, deleteNote
	}
}

export default NoteApi
