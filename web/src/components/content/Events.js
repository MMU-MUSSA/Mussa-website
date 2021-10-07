import "../../styles/Events.css"
export default function Events(props){
  /*  let handlemouseover = (e)=>{
        let card = document.querySelector(".card");
        card.style.height = 300+"px";
    }*/
    return(<div className="card" >
        <b>{props.value}</b>
        <b>{props.eventdate}</b>
        {props.children}
        </div>)
}