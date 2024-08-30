document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const textContainer = document.createElement('div');
    textContainer.className = 'text-item';

    const textTitle = document.createElement('h3');
    textTitle.textContent = title;
    textContainer.appendChild(textTitle);

    const textContent = document.createElement('p');
    textContent.textContent = content;
    textContainer.appendChild(textContent);

    document.getElementById('texts-container').appendChild(textContainer);

    document.getElementById('upload-form').reset();
});
