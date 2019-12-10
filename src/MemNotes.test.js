import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MemNotes from './MemNotes';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders memNotes app', () => {
  act(() => {
    render(<MemNotes />, container);
  });
  expect(container.textContent).toContain(Array(10).fill('note').join(''));

});
