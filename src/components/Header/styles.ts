import * as CSS from 'csstype'

export const headerWrapperStyle: CSS.Properties= {
    position: 'fixed',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    fontSize: '2rem',
    fontWeight:'bold',
    paddingTop: '1rem',
    zIndex: '10',
    background: 'linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 72%)',
}

export const headerLogoutButtonStyle: CSS.Properties= {
    position: 'fixed',
    top: '1rem',
    right: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
}