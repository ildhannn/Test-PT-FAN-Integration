import { useState, useRef } from 'react';


function Test() {
   const inkata = useRef();
   const [kata, setkata] = useState(0);

   const handleButton = (e) => {
      const text = inkata.current.value;
      setkata(text.split(" ").length);
   }

   return (
      <>
         <div style={{marginTop: "10px"}}>
            <textarea ref={inkata} /><br />
            <button onClick={handleButton}>Hitung kata</button>
            <p>{kata} Kata.</p>
         </div>
      </>
   )
}

export default Test;