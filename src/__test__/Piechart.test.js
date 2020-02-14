import React from 'react';
import ReactDOM from 'react-dom';
import Piechart from '../piechart';
import { render } from '@testing-library/react';
describe('PieChart', () => {
  it('Renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Piechart />, div);
  });
});
;