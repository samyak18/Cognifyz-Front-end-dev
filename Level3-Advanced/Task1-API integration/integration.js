const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const postsContainer = document.getElementById('postsContainer');

const postColors = ['#ffcc00', '#0099cc', '#ff6666', '#66cc66', '#cc99ff']; // Add more colors if needed

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.style.backgroundColor = postColors[index % postColors.length]; 
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
    });
