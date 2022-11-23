//style
import {Typography,Grid} from "@mui/material";

// Components
import { GlobalContainer } from "../../global/styles/globalContainer";
import { FlexFooter } from "./styledFooterComponent";

const FooterComponent = ({ data, title }) => {

  return (
    <GlobalContainer>
      <Typography variant="h3" marginY={4} fontSize="clamp(2rem, 2vw, 3.2rem)">{title}</Typography>
      <FlexFooter>
        <Grid container spacing={2} className="gird-container">
          <Grid item lg={6}  className="image--div" sx={{display:{xs: "none", lg:"block"}}}>
            <img
              className="image--div--img"
              src={`https://plastapp.iran.liara.run/${data.image}`}
              alt="pic"
            />
          </Grid>
          <Grid item xs={12} lg={6} className="description_div">
            <div
              dangerouslySetInnerHTML={{__html:data.description}}
            ></div>
          </Grid>
        </Grid>
      </FlexFooter>
    </GlobalContainer>
  );
};
export default FooterComponent;
