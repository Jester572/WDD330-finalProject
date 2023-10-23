export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');
    const footerTemplate = await loadTemplate('../partials/footer.html');
    const headerElement = document.querySelector('#main_header');
    const footerElement = document.querySelector('#main_footer');
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}



export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML('afterbegin', template);
    if (callback) {
        callback(data);
    }

}