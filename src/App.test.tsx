import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  const renderAppComponent = () => {
    render(<App />);
    return {
      h1: screen.getByRole('heading')
    }
  }
  it('should be disabled by default', () => {
    const { h1  } = renderAppComponent();
    expect(h1).toHaveTextContent('Hello World')
    expect(screen.getByText("Bulma")).toBeInTheDocument();
  });
})



