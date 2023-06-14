const container = document.getElementById('container');


const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => { return resp.json() })
        .then(result => {
            container.innerHTML = '';
            
            result.forEach(data => {
                container.innerHTML +=
            `<div id=${data.id} class="data">
                <h3>Name: ${data.name}</h3>
                <p>"username": "Bret"</p>
                <p>"email": "Sincere@april.biz"</p>
                <div class="details">
                    <div class="address">
                        <p>"address":
                            "street": "Kulas Light",
                            "suite": "Apt. 556",
                            "city": "Gwenborough",
                            "zipcode": "92998-3874",
                            "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                            }</p>
                    </div>
                    <div class="phone">
                        <h5>"phone": "1-770-736-8031 x56442",</h5>
                        <h6>"website": "hildegard.org"</h6>
                    </div>
                    <div class="company">
                        <h4>"company": {
                            ${data.company.name},
                            "catchPhrase": "Multi-layered client-server neural-net",
                            "bs": "harness real-time e-markets"
                            }</h4>
                    </div>
            </div>`
            })
        })
}

getUsers();