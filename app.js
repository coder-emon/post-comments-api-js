const loadComments = () =>{
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res => res.json())
    .then(comments => displayComments(comments))
}
const displayComments = (comments) =>{
    const commentsContainer = document.getElementById('comment-container');
    comments = comments.slice(0, 20);
    console.log(comments)
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentDiv.innerHTML = `
        <h3>Comment ID: ${comment.id}</h3>
        <h3>Post ID: ${comment.postId}</h3>
        <h4>Name: ${comment.name}</h4>
        <p>Email: ${comment.email}</p>
        <p>Comment: ${comment.body}</p>
        <button onclick="loadPost(${comment.postId})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View Post</button>
        `
        commentsContainer.appendChild(commentDiv)
        // console.log(comment)
    })
}
const loadPost = (id) =>{
    url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(post => postDisplay(post))
}
const postDisplay = (post) =>{
    const postContainer = document.getElementById('postDisplay');
    postContainer.innerHTML = `
        <h2>User ID: ${post.userId}</h2>
        <h3>ID: ${post.id}</h3>
        <h4>Title: ${post.title}</h4>
        <p><b>Post:</b> ${post.body}</p>
    `
    console.log(post)
}
loadComments();