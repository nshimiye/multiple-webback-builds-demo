document.write(`<main><h1>Hello World</h1><p></p></main>`);

import('./shared').then(({ createWelcomeMessage }) => {
    document.querySelector('main p').textContent = createWelcomeMessage();
})
