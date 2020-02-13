import React from 'react';
import ReactDOM from 'react-dom';
import Piechart from '../piechart';

describe('PieChart', () => {
  it('Renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Piechart />, div);
  });
});
;