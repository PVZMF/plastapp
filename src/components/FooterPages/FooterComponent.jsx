//style
import Grid from "@mui/material/Grid";

// Components
import { GlobalContainer } from "../../global/styles/globalContainer";
import { FlexFooter } from "./styledFooterComponent";

const FooterComponent = ({ data, title }) => {

  return (
    <GlobalContainer>
      <h1>{title}</h1>
      <FlexFooter>
        <Grid container spacing={2} className="gird-container">
          <Grid item xs={6} className="image--div">
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
