import styled from "@emotion/styled";

export const FlexMainDiv = styled.div`
 
display: flex;
justify-content: center;
align-items: center;
padding:20px;

.container{
  padding: 50px 0;
  width: 100vw;
  display: flex;
  justifyContent: center;
  background: #69a9ff;
  padding:20px;
  margin-bottom:30px;
  width:95%;
  border-radius: 10px;
}
.item{
  padding: "15px 10px";
  width: "90%";
  background: "#69a9ff";
  borderRadius: "9px";
  padding: "15px 5px";
  width: "95%";

  "@media screen and (max-width: 892px)": {
    padding: "15px 5px",
    width: "95%",
  },
}
`;

// export const containerStyles = {
//     padding: "50px 0",
//     width: "100vw",
//     display: "flex",
//     justifyContent: "center",
//   },
//   contentStyles = {
//     padding: "15px 10px",
//     width: "90%",
//     background: "#69a9ff",
//     borderRadius: "9px",
//     "@media screen and (max-width: 892px)": {
//       padding: "15px 5px",
//       width: "95%",
//     },
//   };
