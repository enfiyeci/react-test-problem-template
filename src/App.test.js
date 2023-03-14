import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from  "./App.stories"

const { Primary} = composeStories(stories);

test(' checks that the button initially displays click me', () => {
    render(<Primary/>);
    const clickButton =expect(screen.getByText(/click me/i)); 
    expect(clickButton).toBeInTheDocument;
  });

  test(' check that clicking the button changes its text to thanks', () => {
    render(<Primary/>);
   
    const clickButton =screen.getByText(/click me/i)
    fireEvent.click(clickButton);
    const thanksButton =expect(screen.getByText(/thanks/i));
     // Hello world is already defined in the story args!
    expect(thanksButton).toBeInTheDocument;
  });


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library