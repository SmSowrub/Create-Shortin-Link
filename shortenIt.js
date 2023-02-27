const shortenIt= async(link)=>{
    const URL =`https://api.shrtco.de/v2/shorten?url=${link}
    `
    const res =await fetch(URL);
    const data =await res.json();
    DisplayShorten(data);
}

const DisplayShorten =shorten=>{
    console.log(shorten);
    const ShowDisplayLInk=document.getElementById('ShowLInk');
    ShowDisplayLInk.innerHTML=`<a href="${shorten.result.full_short_link3}">${shorten.result.full_short_link3
    }</a>`
}


document.getElementById('CopyBtn').addEventListener('click', function(){
    const InputValue=document.getElementById('inputSearch').value;
    // console.log(InputValue);
    shortenIt(InputValue)
})

