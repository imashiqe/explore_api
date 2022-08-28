function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

/*
1. get the container element where you want to add the new element
2. Create Child Elemnt
3. set innerText or innerHTML
4. appendChild
*/

function displayPost(posts){
    const postContainer = document.getElementById   ('post-container');
   for(const post of posts){
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    console.log(post)
    postDiv.innerHTML = `

    <h4>User-${post.userId}</h4>
    <h5>Title:  ${post.title}</h5>

    <p> Description : ${post.body}</p>
    
    `;
    postContainer.appendChild(postDiv);
   }
}
loadPost();

function PatchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
