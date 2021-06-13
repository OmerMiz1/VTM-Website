import React, {useState} from 'react';
import SummaryApi from '../../../../api/Summary';
// Validation
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { ChangePasswordSchema } from '../../../../validation/ChangePasswordValidation';


function EditAccessForm ({sid, access}) {
    const [acc, setAcc] = useState(access)



    const  {editAccess} = SummaryApi();

	// Valdation state from ProfileUserSchema (schema)
	const {register, handleSubmit} = useForm()


	// TODO
	const submitEditAccess = (data) => {
		console.log('submitEditAccess', data);
		editAccess(sid, data); 
	}

	return (
		<form onSubmit={handleSubmit(submitEditAccess)}>

            <label><input checked={acc[0] === "private" ? "checked" : ""}  onClick={() => setAcc(['private'])}
            type="radio" name="access" value="private"{...register("access")} />Private</label><br></br>
            <label><input checked={acc[0] === "public" ? "checked" : ""}   onClick={() => setAcc(['public'])}
            type="radio" name="access" value="public" {...register("access")}/>public</label>
            {/* <label><input type="radio" name="access" value="frinds" />Frinds</label> */}
            <div>
            <label><input checked={acc[0] === "custom" ? "checked" : ""} onClick={() => setAcc(['custom'])}
             type="radio" name="access" value="custom" {...register("access")} />Custom</label>
            <input name="customText" placeholder="Enter Names " defaultValue={acc[0] === "custom" && acc.length > 1 ? {acc} : ""} {...register("customText")} />
            </div>
            <label><input type="checkbox" name="frinds" value={true} {...register("frinds")} />Frinds</label><br></br>


			<input type="submit" />

		</form>
	)
}

export default EditAccessForm;
