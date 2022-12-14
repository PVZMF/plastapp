export const containerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    bgcolor: 'rgba(179, 179, 179, .2)',
    backdropFilter: 'blur(5px)',
    zIndex: '21',
  },
  modalContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: '8px 15px',
    // minHeight: "50vh",
    minHeight: '30vh',
    maxHeight: '80vh',
    minwidth: '320px',
    // bgcolor: "#096caa",
    bgcolor: '#fff',
    borderRadius: '5px',
  },
  closeIconStyles = {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    color: '#69a9ff',
    cursor: 'pointer',

    '> button': {
      height: '35px',
      border: '2px solid #69a9ff',
    },
  };
