 async function fetchData(){
    let response= await fetch('https://countriesnow.space/api/v0.1/countries')
    let data=await response.json();
  for(let i=0;i<data.data.length;i++){
    document.getElementById('country').innerHTML+=`<option> ${data.data[i].country}</option>`
  }
}
fetchData();