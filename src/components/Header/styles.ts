import * as CSS from 'csstype'

export const headerWrapperStyle: CSS.Properties= {
    position: 'fixed',
    top: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    fontSize: '2rem',
    fontWeight:'bold',
    paddingTop: '1rem',
    zIndex: '10',
}

export const headerLogoutButtonStyle: CSS.Properties= {
    position: 'fixed',
    top: '2rem',
    right: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
}

export const headerAdminLogoutButtonStyle: CSS.Properties= {
    position: 'fixed',
    top: '1rem',
    right: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
}

export const userAvatarStyle: CSS.Properties= {
    position: 'fixed',
    top: '0.5rem',
    left: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
}