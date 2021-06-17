import React, {useState} from 'react';
import SummaryApi from '../../../../api/Summary';
// Validation
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { ChangePasswordSchema } from '../../../../validation/ChangePasswordValidation';
import styled from 'styled-components';

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

	const accessTypeKey = "accessType";
	const friendsKey = "allowFriend";

	// Access Types
	const privateType = 1;
	const friendsType = 2;
	const customType = 3;
	const publicType = 4;
	

	// TODO
	const submitEditAccess = (data) => {
		console.log('submitEditAccess', data);
		editAccess(sid, data);
        close();
	}

	return (
		<form onSubmit={handleSubmit(submitEditAccess)}>

			<SectionForm>
                <label><input checked={acc[0] === "private" ? "checked" : ""}  onClick={() => setAcc(['private'])}
                type="radio" name="access" value="private"{...register("access")} />private</label>
                <label><input type="checkbox" name="friends" value={true} {...register("friends")} />friends</label>

            </SectionForm>

            <SectionForm>
            <label><input checked={acc[0] === "public" ? "checked" : ""}   onClick={() => setAcc(['public'])}
            type="radio" name="access" value="public" {...register("access")}/>public</label>
            </SectionForm>

            <SectionForm>
            <label><input checked={acc[0] === "custom" ? "checked" : ""} onClick={() => setAcc(['custom'])}
             type="radio" name="access" value="custom" {...register("access")} />custom</label>
            <TextInput name="customText" placeholder="Enter Names " defaultValue={acc[0] === "custom" && acc.length > 1 ? {acc} : ""} {...register("customText")} />
            </SectionForm>

			<ButtonInput value="Save" type="submit"/>

		</form>
	)
}

export default EditAccessForm;
