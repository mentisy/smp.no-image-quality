// Configuration
const linkText = 'Åpne bilde i full størrelse';
const figureSelector = 'figure.media.image';

// All <figure> elements that contain the classes .media and .image
const figures = document.querySelectorAll(figureSelector);

figures.forEach(figure=> {
    // Find the image the figure contains and get the URL without search params ?hey=1 etc.
    const image = figure.querySelector('img');
    const url = new URL(image.src);
    const abbreviatedUrl = url.origin + url.pathname;

    // Create a link with text and the href as formatted in abbreviatedUrl
    const link = document.createElement('a');
    link.href = abbreviatedUrl;
    link.target = '_blank';
    link.innerText = linkText;

    // Create a link container to space around the link
    const linkContainer = document.createElement('div');
    linkContainer.style.margin = '1rem';
    linkContainer.appendChild(link);

    // Add link and link container after the figure
    figure.after(linkContainer);
});
