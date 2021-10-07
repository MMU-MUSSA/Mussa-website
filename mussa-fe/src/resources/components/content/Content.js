import React,{useState,useEffect} from "react"
import Banner from "./Banner"
import Science from "./Science"
import Events from "./Events"
import "../../styles/Content.css"

export default function Content(){
    useEffect(()=>{
        let cards = document.querySelectorAll(".eventsContainer .card");
        let divs = document.querySelectorAll(".card div");
        cards.forEach((card,index)=>{
            card.addEventListener("mousemove",(e)=>{
                card.style.marginTop = 0+"px";
                card.style.height = 100+"%";
                setTimeout(()=>{
                    divs[index].style.display = "flex";
                },500) 
            })

            card.addEventListener("mouseleave",(e)=>{
                card.style.marginTop = 25+"%";
                card.style.height = 120+"px";
                setTimeout(()=>{
                    divs[index].style.display = "none";
                },500)
            })
        })
    },[])
   
    return(
        <div className="content">
            <div className="container">
                <Banner/>
                <Science/>
            </div>
            <div className="eventsContainer">
                <Events value="first event" eventdate = "27/9/2021">
                    <div>This is the first event
                        to happen kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd </div>
                </Events>
                <Events value="second event" eventdate = "30/9/2021">
                    <div>
                        This is the second event to happen
                         kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd
                         kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                    </div>
                </Events>
                <Events value="third event" eventdate = "31/9/2021">
                   <div>This is the third event to happen
                   kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd
                   kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                        kdddddddddddd fffffffffff jjjjjjjjj  yyyyyyyyyy fddddd 
                   </div>
                </Events>
            </div>
        </div>
    )
}