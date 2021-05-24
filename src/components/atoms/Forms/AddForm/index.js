import React, {useContext} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {SummariesContext} from '../../../../utils/context/SummariesContext';


import img1 from '../../../../images/illustrations/1MassesWisdom.png'; 
import img2 from '../../../../images/illustrations/Tacking_note1.png'; 
import img3 from '../../../../images/illustrations/Sending emails_Monochromatic.png';
import img4 from '../../../../images/illustrations/SendSummaries.png';




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

function AddForm({close}) {
  const {addSummary} = useContext(SummariesContext);
 
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      data["uid"] = "uid";
      //TODO change to backformat..
      data["tags"] = createTagsArrays(data.tags);
      data["createdTime"] = getNowDate();
      data["editTime"] = getNowDate();
      data["likes"] = parseInt(data.likes);

      addSummary(data);
      close(); 
  }

  const createTagsArrays = (str) => {
    let tags = str.split(" ");
    return tags

  }


  const getNowDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  } 



  return (
    <Contaner onSubmit={handleSubmit(onSubmit)}>
        <div>
            <LableText>Sid</LableText>
            <input defaultValue={Math.floor(Math.random() * 10000).toString()} placeholder='1' type='text' name='sid' {...register("sid")} />
        </div>
        <div>
              {/* name of the filde is autorName -> not author */}
             <LableText>author</LableText>
             <input  defaultValue='author' placeholder='author' type='text' name='autorName'  {...register("autorName")}></input>
         </div>
         <div>
             {/* url -> if not valid open new window of this page */}
             <LableText>url</LableText>
             <input defaultValue='url' placeholder='url' type='text' name='url' {...register("url")}></input>
         </div>
         <div>
             <LableText>title</LableText>
             <input  defaultValue='Title' placeholder='Title' type='text' name='title' {...register("title")}></input>
         </div>
         <div>
            {/* tag - must be array...  -> split spase with createTagsArrays */}
             <LableText>tags</LableText>
             <input  placeholder='tags' type='text' defaultValue='tags' name='tages' {...register("tags")}></input>
         </div>
         <div>
              {/* Likes - must be int */}
             <LableText>Likes</LableText>
             <input  placeholder='0' type='number' defaultValue={0} name='likes' {...register('likes')}></input>
         </div>

         <div>
           {/* imgUrl - Choosing an image, in practice one should think about the method of preserving the image */}
            <LableText>imgUrl</LableText>
            <select {...register("imgUrl")}>
              <option value={img1}>MassesWisdom</option>
              <option value={img2}>Tacking_note1</option>
              <option value={img3}>Sending emails</option>
              <option value={img4}>SendSummaries</option>
            </select>
         </div>

         <div>
          {/* favorite true or false */}
             <LableText>favorite</LableText>
             <input type='checkbox' defaultValue={0} name='favorite' {...register("favorite")}></input>
         </div>
      
      <input type="submit" />
    </Contaner>
  );
}

export default AddForm;
