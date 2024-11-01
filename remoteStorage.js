let names = [];
const BASE_URL = "https://remotestorage-ab7d6-default-rtdb.europe-west1.firebasedatabase.app/";


async function onloadFunc() {
    // putData("./namen/44", {"name":"Kevin"} )
    let userResponse = await getAllUsers("namen");
    

    let userKeysArray = Object.keys(userResponse)
    
    for (let index = 0; index < userKeysArray.length; index++) {
        names.push(
            {
                id: userKeysArray[index],
                name: userResponse[userKeysArray[index]]
            }
        )
        
    }
    
    console.log(userKeysArray)
    await addEditSingleUser()
}

async function putData(path = "", data = {}) {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

async function addEditSingleUser(id = 44, user = { name: "Gustav" }) {
    putData(`namen/${id}`, user);
}

async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();
}











// fetch methoden


// async function loadData(path = "") {
//     let response = await fetch(BASE_URL + path + ".json");
//     return responseToJson = await response.json();
// }

// async function postData(path = "", data = {}) {
//     let response = await fetch(BASE_URL + path + ".json", {
//         method: "POST",
//         header: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     });
//     return responseToJson = await response.json();
// }

// async function deleteData(path = "") {
//     let response = await fetch(BASE_URL + path + ".json", {
//         method: "DELETE",
//     });
//     return responseToJson = await response.json();
// }

// async function putData(path = "", data = {}) {
//     let response = await fetch(BASE_URL + path + ".json", {
//         method: "PUT",
//         header: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data)
//     });
//     return responseToJson = await response.json();
// }
