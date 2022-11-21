import { Box, Button, Grid } from '@mui/material';
import {
  closeIconStyles,
  containerStyles,
  modalContainerStyles,
} from './modalStyles';

function Modal({
  open,
  handleClose,
  modalWidth = '80vw',
  modalMaxWidth,
  children,
}) {
  return open ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid
        item
        sx={{
          ...modalContainerStyles,
          width: modalWidth,
          maxWidth: modalMaxWidth,
        }}
      >
        {children}
        <Box
          sx={closeIconStyles}
          onClick={() => {
            handleClose(false);
          }}
        >
          {/* <AiOutlineCloseCircle size="25px" color="#000" /> */}
          <Button>بستن</Button>
        </Box>
      </Grid>
    </Grid>
  ) : null;
}

export default Modal;
