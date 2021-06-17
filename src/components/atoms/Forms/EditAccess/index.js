import React, {useState} from 'react';

// Validation
import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";
// import { ChangePasswordSchema } from '../../../../validation/ChangePasswordValidation';
import styled from 'styled-components';
import { StringToNumber } from '../../../../utils/function/AccessTypeConverter';

const SectionForm = styled.div`
    padding: 5px 15px 0px 15px;
    justify-content: space-between;
    display: flex;
    text-align: center;
    flex-wrap: wrap;
`;
const ButtonInput = styled.input`
    justify-content: center;
    padding: 2px 15px;
    margin: 10px auto;
    align-items: center;
    display: block;
`;

const TextInput = styled.input`
    width: -webkit-fill-available;
    font-weight: 900;
    color: black;
`;

function EditAccessForm ({ sid, access, close, editAccess }) {
    const [acc, setAcc] = useState(access)
	const {register, handleSubmit} = useForm(); // Valdation state from ProfileUserSchema (schema)

	console.log(`acc UP`, acc);

	const accessKey = "access";
	const friendsKey = "allowFriends";
	const allowedUsersKey = "allowedUsers";

	const changeAccessType = (accessType) => {
		acc[accessKey] = accessType;
		let newAccess = acc;
		setAcc(newAccess);
		console.log('acc:', acc); //DELETEME
		// setAcc(prev => prev[accessKey] = accessType)
	}

	// TODO
	const submitEditAccess = (data) => {
		console.log('submitEditAccess', data); //DELETEME
		console.log('StringToNumber(data[accessTypeKey]):', StringToNumber(data[accessKey]));
		
		data[accessKey] = StringToNumber(data[accessKey]);

		editAccess(sid, data);
        close();
	}

	return (
		<form onSubmit={handleSubmit(submitEditAccess)}>
			<SectionForm>
                <label>
					<input 
					checked={(acc[accessKey] === 1)}
					onClick={() => changeAccessType(1)}
                	type="radio"
					name={accessKey}
					value={1}
					{...register(accessKey)}/>
					private
				</label>
                <label>
					<input 
					type="checkbox"
					name={friendsKey} 
					value={true} //FIXME
					{...register(friendsKey)}>
					</input>
					friends
				</label>
            </SectionForm>

            <SectionForm>
            <label>
				<input checked={acc[accessKey] === 3}
				onClick={() => changeAccessType(3)}
            	type="radio"
				name={accessKey}
				value={3}
				{...register(accessKey)}>
				</input>
				public
			</label>
            </SectionForm>

            <SectionForm>
            <label>
				<input 
				checked={acc[accessKey] === 2}
				onClick={() => changeAccessType(2)}
             	type="radio"
				name={accessKey}
				value={2}
			    {...register(accessKey)}>
				</input>
				custom
			</label>
            <TextInput name={allowedUsersKey} placeholder="Enter Names "
			 defaultValue={acc[accessKey] === 2 && acc[allowedUsersKey].length > 0 ? acc[accessKey] : ""} {...register(allowedUsersKey)} />
            </SectionForm>

			<ButtonInput value="Save" type="submit"/>

		</form>
	)
}

export default EditAccessForm;
