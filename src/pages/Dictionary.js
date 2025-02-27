import React, { useEffect, useState } from 'react';
import axios from "axios";
import { apiUrl } from "../utils/utils";
import  Word from "../components/Word";


const Dictionary = () => {

   const [word, setWord] = useState([]);

   //initiate variable with useState
   const [query, setQuery] = useState("Discovery");


   //Hente data fra api
   useEffect(() => {
      axios.get(`${apiUrl}en/${query}`).then((res) => setWord(res.data));
   }, [])

   // if statement: hvis det er data, vis en p-tag med ordet

   return (
      <>
         <h1>DICTIONARY</h1>

         {word.length < 1 ? (
            <p>no data yet</p>
         ): (
            <div>
               {word.map((item, idx) => (
                  <Word key={idx} {...item}/>
               ))}
            </div>
         )}
      </>
   );
};

export default Dictionary;
