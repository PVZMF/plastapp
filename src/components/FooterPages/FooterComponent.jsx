//style
import {Typography,Grid} from "@mui/material";

// Components
import { GlobalContainer } from "../../global/styles/globalContainer";
import { FlexFooter } from "./styledFooterComponent";

const FooterComponent = ({ data, title }) => {

  return (
    <GlobalContainer>
      <Typography variant="h3" marginBottom={4}>{title}</Typography>
      <FlexFooter>
        <Grid container spacing={2} className="gird-container">
          <Grid item xs={6} className="image--div" >
            <img
              className="image--div--img"
              src={`https://plastapp.iran.liara.run/${data.image}`}
              alt="pic"
            />
          </Grid>
          <Grid item xs={6} className="description_div">
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
