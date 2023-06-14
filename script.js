const container = document.getElementById('container');


const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => { return resp.json() })
        .then(result => {
            container.innerHTML = '';
            
            result.forEach(data => {
                container.innerHTML +=
           

            `<div id=${data.id} class="data">
            <div class="first">
            <button>${data.id}</button>
             <h3>${data.name}</h3>
             
             <p>${data.email}</p>
            </div>
             <div class="details">
                 
                     <h3>Profile Details</h3>
                        <p>User name:-  ${  data.username}</p>
                        <p>city:-${data.address.city}</p>
                        
                        <p> Website:- ${data.website}</p>
                        <p>contact no:-${data.phone}</p>
                   
                        <p>company name:- ${data.company.name}</p>

                         
                        
                 </div>
               </div> 
                
         </div>
            `
            })
        })
}

getUsers();