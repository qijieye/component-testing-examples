import { expect, test } from 'vitest'


import './my-component'

test('should render component correctly', async () => {
    const cmp = document.createElement('my-component');
    
    cmp.setAttribute('first', 'Stencil');
    cmp.setAttribute('last', `'Don't call me a framework' JS`);

    document.body.appendChild(cmp);

    // Ensure hydration is complete
    await customElements.whenDefined('my-component');
    await new Promise((resolve) => requestAnimationFrame(resolve));

    console.log('Final Shadow DOM:', cmp.shadowRoot?.innerHTML);

    expect(cmp.shadowRoot?.querySelector("div").innerHTML)
        .toBe(`Hello, World! I'm Stencil 'Don't call me a framework' JS`);

})