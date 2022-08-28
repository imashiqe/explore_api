const loadUsers = ( ) => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');

    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        
        <h3>User Name: ${user.name.first}</h3>
        <h4>Email : ${user.email}</h4>
        <h4>Location : ${user.location.city}</h4>
        
        `;

        usersContainer.appendChild(userDiv);
    }
}



loadUsers();