import  React , {useState} from "react"
import sculptureList  from "../SculptureData"



const SculptureList = () => {
  const [index , setIndex] = useState(0);//variable state 
  const sculpture = sculptureList[index];
  const [ ShowMore , setShowMore]= useState(false);



  //create event next button 
  const handleClicNext=(e)=>

  {
     e.stopPropagation();
    if(index +1 < sculptureList.length){ // 0<12
        setIndex(prevIndex => prevIndex +1);// index=index+1
    }
    else{
setIndex(0);// back to index 0
    }

  }
  // create event for button hidden or show description
   const handleClickMore=(e)=>
    {
  e.stopPropagation();
  setShowMore(!ShowMore);

}
 
  
  return (
    <div className="container">
    <section>
    
    <div className="top-container">
    <button onClick={ handleClicNext }> Next </button>
    <h4>{ sculpture.name} of the { sculpture.artist} </h4>
    <h5> ({index + 1} to {sculptureList.length}) 
    </h5>
    </div>
    <button onClick={handleClickMore}>
       {( ShowMore ? "Hide" :"Show")} Details
       </button>
     { ShowMore && <p>{sculpture.description} </p>}
    </section>
    <img src={sculpture.url} alt={sculpture.alt}/>
      
    </div>
  )
}

export default SculptureList
