let seatCount=0;
let ticketPrice=0;
const seatButton=document.querySelectorAll(".seatButton");
let selectSeat= document.querySelector(".seatLeft")
let seatLeft = parseInt(selectSeat.innerText.split(" ")[0]);
console.log(seatLeft);
for (const seat of seatButton) {
    seat.addEventListener("click",function(){
        
            

        
        if(this.classList.contains("bg-slate-300")){
            seatCount++;
            if(seatCount<=4){
                this.classList.remove("bg-slate-300");
            this.classList.add("bg-green-500");
            
            console.log(seatCount);
           
            selectSeat.innerText=(seatLeft-seatCount)+" Seats Left";
            let buttonValue=this.innerText;
            console.log(buttonValue);
            document.querySelector(".tableBody").innerHTML += `
            <tr class="border-t border-b">
                <td class="accessSeat px-6 py-2">${buttonValue}</td>
                <td class="px-6 py-2">Economy</td>
                <td class="px-12 py-2">550</td>
            </tr>
        `;
        ticketPrice+=550;
        document.querySelector(".ticketPrice").innerText="BDT  "+ticketPrice;
        const grandTotal=document.querySelector(".grandTotal");
        grandTotal.innerHTML="BDT  "+ticketPrice;


        document.querySelector(".seatIncrease").innerText=seatCount;

        let couponInputBtn=document.querySelector(".couponInputBtn");
        
        couponInputBtn.addEventListener("click",function(){
            let couponInput= document.querySelector(".couponInput").value;
            console.log(couponInput);

            if(couponInput==="NEW15"){
                discountPrice=(ticketPrice*15)/100;
                document.querySelector(".afterDiscount").innerText="BDT  "+discountPrice;
                        
                grandTotal.innerText="BDT "+(ticketPrice-discountPrice);
                document.querySelector("#inputField").style.display="none";
            }

             else if(couponInput==="Couple 20"){
                discountPrice=(ticketPrice*20)/100;
                document.querySelector(".afterDiscount").innerText="BDT  "+discountPrice;
                        
                document.querySelector(".grandTotal").innerText="BDT "+(ticketPrice-discountPrice);
                document.querySelector("#inputField").style.display="none";
            }
            else{
                alert("Invalid Coupon Code");
            }
            

            
            
            
       
        })

        
       
        


        
            }
            
            else{
                alert("You can not buy more then 4 tickets");
            }

       
       

        
           
            


        }
        else{
            this.classList.remove("bg-green-500");
            this.classList.add("bg-slate-300");
            seatCount--;
            selectSeat.innerText=(seatLeft-seatCount)+" Seats Left";
        }
        
        
    })

    
}
