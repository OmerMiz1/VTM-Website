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

const NoteApi = (notes, setNotes, setLoading) => {
	const apiName = "SummaryAPI";
	const notesPath = "/note";
	const summaryIdKeyName = "sid";
	const createdKeyName = "createTime";
	const editedKeyName = "editTime";
	const noteIdKeyName = "nid";

	const fetchNotes = (sid) => {
		console.log(`fetchNotes`, sid);
		setLoading(true);

		const queryParams = {
			queryStringParameters: {
				sid: JSON.stringify(sid)
			}
		}

		API.get(apiName, notesPath, queryParams)
		.then(notes => {
			console.log(`notes:`, notes) //DELETEME
			setNotes(notes);
			setLoading(false);
		})
		.catch(error => {
			console.log('error getting notes:', error) //DELETEME
		});
	};

	const addNote = async (note) => {
		console.log(`addNote`, note);

		API.post(apiName, notesPath, { body: note })
			.then(response => {
				console.log('post response: ', response) //DELETEME

				// Update front-end
				note[noteIdKeyName] = response.data[noteIdKeyName];
				note[createdKeyName] = response.data[createdKeyName];
				note[editedKeyName] = response.data[createdKeyName];
				console.log('added note:', note)
				setNotes([...notes, note]);
			})
			.catch(error => {
				console.log(error) // DELETEME
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
			const newNotes = [...notes].filter(n => n.nid !== note.nid);
			setNotes(newNotes);
		})
		.catch(err => console.log(err))
	};

	const updateNote = (note) => {
		console.log(`updateNote`, note); //DELETEME

		if (!note[summaryIdKeyName] || typeof (note[createdKeyName]) !== typeof (1)) {
			console.log('invalid note object', note)//DELETEME
			return;
		}

		API.patch(apiName, notesPath, { body: note })
		.then(response => {
			console.log(`update note response:`, response); //DELETEME

			// Update front-end
			setNotes(prev => prev.map(item => (item.nid === note.nid ? note : item)));
		})
		.catch(error => console.log(error))

	};

	return {
		updateNote, addNote, deleteNote, fetchNotes
	}
}

export default NoteApi
