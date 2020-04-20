import React from 'react'
import { Chart } from 'react-charts'

const MyChart=({donne}) => {
    //console.log(donne.length)
    const data = React.useMemo(
        () => [
            {
                label: 'Gardes Index',
                data: donne
            }
        ],
        []
    )
    const series = React.useMemo(
        () => ({
          type: 'line'
        }),
        []
      )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'right' }
        ],
        []
    )
    
    const primaryCursor = React.useMemo(
        () => ({
          render: props => (
            <span style={{ fontSize: '1rem' }}>
              <span role="img" aria-label="icon">
                🕑
              </span>{' '}
              {(props.formattedValue || '').toString()}
            </span>
          )
        }),
        []
      )
      const secondaryCursor = React.useMemo(
        () => ({
          render: props => (
            <span style={{ fontSize: '1rem' }}>
              <span role="img" aria-label="icon">
                $
              </span>{' '}
              {(props.formattedValue || '').toString()}
            </span>
          )
        }),
        []
      )
    
    return (
        <div
            style={{
                width: '1000px',
                height: '400px'
            }}
        >
            <Chart data={data}  axes={axes} series={series} primaryCursor={primaryCursor}
          secondaryCursor={secondaryCursor}  />
        </div>
    )
}

export default MyChart;