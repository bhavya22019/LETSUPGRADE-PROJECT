
let cards=[
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Vp8eZtsf77UuG8SB-H1CMFcdeCzkLA12Jg&usqp=CAU",
value:1,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Vp8eZtsf77UuG8SB-H1CMFcdeCzkLA12Jg&usqp=CAU",
value:1,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7H5oSE0aemkgkKyQgz2ARp3clagTPZIPFA&usqp=CAU",
value:2,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7H5oSE0aemkgkKyQgz2ARp3clagTPZIPFA&usqp=CAU",
value:2,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8I9NBhyMmuETZ-L3BJBB1UeEQlgEkimx_Lw&usqp=CAU",
value:3,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8I9NBhyMmuETZ-L3BJBB1UeEQlgEkimx_Lw&usqp=CAU",
value:3,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToH5SmlcA4gPx8OoH7GAiflx9IwPNnZzlEnA&usqp=CAU",
value:4,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToH5SmlcA4gPx8OoH7GAiflx9IwPNnZzlEnA&usqp=CAU",
value:4,
status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId_7wDaA9XdZkiuA-fEdnFGQSHTlN4XcJTw&usqp=CAU",
	value:5,
	status:"closed"
},
{
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTId_7wDaA9XdZkiuA-fEdnFGQSHTlN4XcJTw&usqp=CAU",
	value:5,
	status:"closed"
}
]

for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}


let cardsCopy=cards;




function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(cards);

}
