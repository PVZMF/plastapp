import { Box, Typography } from "@mui/material";

const LeftSection = ({ aboutUsData }) => {
  function createElement(el) {
    return { __html: el };
  }

  return (
    <>
      <Box>
        <Typography variant="h5" component="h1" color="#005078">
          درباره پلاست اپ
        </Typography>
        <Typography
          variant="body1"
          component="h1"
          dangerouslySetInnerHTML={createElement(aboutUsData?.about)}
        ></Typography>
      </Box>
      <Box>
        <Typography variant="h5" component="h1" color="#005078">
          توضیحات پلاست اپ
        </Typography>
        <Typography
          variant="body1"
          component="h1"
          dangerouslySetInnerHTML={createElement(aboutUsData?.explanation)}
        ></Typography>
      </Box>
    </>
  );
};

export default LeftSection;
