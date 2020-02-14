import React from 'react';
import PieChart from 'react-minimal-pie-chart';

class BudgetPie extends React.Component {
  render() {
    return (
      <PieChart
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
        label
        labelPosition={50}
        labelStyle={{
          fill: '#121212',
          fontFamily: 'sans-serif',
          fontSize: '5px'
        }}
        lengthAngle={360}
        lineWidth={100}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={50}
        rounded={false}
        startAngle={0}
        viewBoxSize={[
          100,
          100
        ]}
      />
    );
  }
}

export default BudgetPie;