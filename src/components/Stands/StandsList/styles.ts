import * as CSS from 'csstype'

export const standListStyleThreeColumns: CSS.Properties= {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    gridColumnGap: '1.5rem',
    gridRowGap: '0.5rem',
    justifyItems: 'center',
    padding: '4rem'
}

export const standListStyleFourColumns: CSS.Properties= {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto auto',
    gridColumnGap: '1.5rem',
    gridRowGap: '0.5rem',
    justifyItems: 'center',
    padding: '4rem'
}