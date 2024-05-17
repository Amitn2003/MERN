import { useState } from "react";


function Home() {
  const [num, setNum] = useState(0);
    return (<>
      {num} <br/>
      <button onClick={()=>
        setNum(num+1)
      }>Increment++</button>
      <button onClick={()=>
        setNum(num-1)
      }>Decrement--</button>
      <button onClick={()=>
        setNum(0)
      }>ReSet</button>      
      </>
    );
  }  
  export default Home;