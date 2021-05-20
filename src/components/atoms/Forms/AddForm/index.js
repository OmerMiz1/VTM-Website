import React, {useContext} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {SummariesContext} from '../../../../utils/context/SummariesContext';

const Contaner = styled.form`
  display: block;
  position: absolute;
  top: 50px;
  z-index: 100;
  right: 99px;
  background: gray;
  height: auto;
  width: auto;
  margin: 10px;
`;

const LableText = styled.label`
  font-size: 18px;
  margin: 10px;
`;

function AddForm() {
  const {addSummary} = useContext(SummariesContext);
 
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log('form data is -> ',data);
      addSummary(data); 
  }

  return (
    <Contaner onSubmit={handleSubmit(onSubmit)}>
        <div>
            <LableText>Sid</LableText>
            <input defaultValue='Sid' placeholder='Sid' type='text' name='sid' {...register("Sid")} />
        </div>

        <div>
             <LableText>author</LableText>
             <input  defaultValue='author' placeholder='author' type='text' name='author'  {...register("author")}></input>
         </div>

         <div>
             <LableText>url</LableText>
             <input defaultValue='url' placeholder='url' type='text' name='url' {...register("url")}></input>
         </div>

         <div>
             <LableText>title</LableText>
             <input  defaultValue='Title' placeholder='Title' type='text' name='title' {...register("title")}></input>
         </div>

         <div>
             <LableText>tags</LableText>
             <input  placeholder='tags' type='text' defaultValue='tags' name='tages' {...register("tags")}></input>
         </div>
      
      <input type="submit" />
    </Contaner>
  );
}

export default AddForm;
