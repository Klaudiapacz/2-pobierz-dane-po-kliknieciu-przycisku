console.log(`AJAX WARSZTAT POBIERZ WYDARZENIE PO KLIKNIĘCIU`);

let btnGetData = document.getElementById('get-data');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title: ${data.pTitle}`;
            pBody.innerText = `Body:  ${data.pBody}`;

            //to do zmienić na budowanie w divie 
            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

        })

        .catch(error => {
            console.log(error);
        });
}

btnGetData.addEventListener('click', getData);