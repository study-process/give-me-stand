import * as CSS from 'csstype'

export const headerWrapperStyle: CSS.Properties = {
    position: 'fixed',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    fontSize: '2rem',
    fontWeight:'bold',
    padding: '1rem 0 1rem 0',
    zIndex: '10',
    boxShadow: "0 0.25rem 0.5rem rgba(128,128,128,0.05)",
    backgroundColor: '#FFFFFF'
}

export const headerLogoutButtonStyle: CSS.Properties= {
    position: 'fixed',
    top: '1rem',
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
    top: '-0.25rem',
    left: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10',
}