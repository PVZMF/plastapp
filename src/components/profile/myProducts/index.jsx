import React, { useEffect, useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import style from "./myProducts.module.css";
// import {listProduct} from "../../../api/api"
import {
  deleteProduct,
  discountCreate,
  discountDelete,
  discountUpdate,
  editProduct,
  getListMyProduct,
} from "../../../api/api";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError, AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { TransitionProps } from "@mui/material/transitions";
import { toPersianNumber } from "../../../functions/numbers";
import { ModeEditOutline } from "@mui/icons-material";
import { Box } from "@mui/material";
import { provinces } from "../../../assets/citiesName/CitiesName";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyProducts = () => {
  const [open, setOpen] = useState(false);//open dialog delete product
  const [openEdit, setOpenEdit] = useState(false);//open dialog edit product product
  const [deleteState, setDeleteState] = useState("");
  const [updateItemState, setUpdateItemState] = useState("");//when click set selected product
  const [off, setOff] = useState(0);
  const [listProducts, setListProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [cities, setCities] = useState([""]);
  const userRole = useSelector((state) => state.auth.role);
  const categories = useSelector(state=>state.dataStored.categorys)
  
  const handleClickOpen = (id, title) => {
    setDeleteState({ id, title });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit= (e) => {
    setOpenEdit(false);
    e.stopPropagation();
  };
 
  // ListProduct
  useEffect(() => {
    // setLoading(true);
    getListMyProduct().then((results) => {
      setListProducts(results);
      setLoading(false)
      console.log(listProducts)
    });
  }, []);

  const [edit, setEdit] = useState("");

  const handleEdit = (id) => {
   
    if (id === edit) {
      setEdit(null);
    } else {
      setEdit(id);
    }
  };

  //Delete Discount
  const handleDelete = (id) => {
   
    discountDelete(id)
      .then((res) => {
        setUpdate(!update);
        toast.success("?????????? ???? ???????????? ?????? ????");
      })
      .catch(() => {
        //       if (AxiosError.response.status === 400) {
        //        
        toast.error("?????????? ?????????? ????????");

        // }
      });
  };

  const deleteProductHandler = (id) => {
    deleteProduct(id)
      .then((res) => {
        setUpdate(!update);
        toast.success("???? ???????????? ?????? ????");
        setOpen(false);
      })
      .catch((err) => {
        toast.error("?????????? ?????? ??????");
      });
  };
  //Create Or Edit Discount
  const changeDiscountValue = (idP, idD) => {
    discountCreate({ product: idP, discount_amount: off })
      .then((res) => {
        setUpdate(!update);
        toast.success("?????????? ???? ???????????? ?????????? ????");
      })
      .catch((err) => {
        if (err.status == 400) {
          discountUpdate({ product: idP, discount_amount: parseInt(off) }, idD)
            .then(() => {
              setUpdate(!update);
              toast.success("?????????? ?????????? ???? ???????????? ?????????? ??????");
            })

            .catch(() => {
              toast.error("?????????? ?????????? ?????????? ????????");
            });
        }
        if (err.status == 401) {
          toast.error("???????? ???? ???????? ???????? ?? ???????????? ?????????????? ??????????");
        }
      });
    handleEdit(idP);
  };
const submitEditProduct=(e,id)=>{

  e.stopPropagation()
  e.preventDefault()
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());
  console.log("form data os",data)
  editProduct(id,data).then(()=>{

  })
  .catch(()=>{

  })
}
const openDialogEdit=(item)=>{
setOpenEdit(true)
setUpdateItemState(item)
console.log(item)
}

const handleCities = (e) => {
  setCities(
    provinces.filter((item) => item.name == e.target.value)[0].cities
  );
  setStateSelected(e.target.value);
};
console.log("categories",categories)
if(loading){
  return <h1>Loading</h1>
}

  return (
    <div className={style.myproducts}>
      <div className={style.products}>
        <div className={style.header}>
          <h4>?????????????? ????</h4>
          <Link to="/profile/addproduct">
            <button>
              <RiAddFill />
            </button>
          </Link>
        </div>

        <div className={style.boxtable}>
          <table>
            <thead>
              <th>
                <h4>??????????</h4>
              </th>
              <th>
                <h4>?????? ??????????</h4>
              </th>
              <th>
                <h4>???????????? ??????????</h4>
              </th>
              <th>
                <h4>????????????</h4>
              </th>
              <th>
                <h4>????????</h4>
              </th>
              <th>
                <h4>??????????</h4>
              </th>
              <th>
                <h4>??????????</h4>
              </th>
            </thead>

            <tbody>
              {listProducts?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h3>{item.title}</h3>
                  </td>
                  <td style={{color:"blue"}}>
                  <Box style={{display:"flex",justifyContent:"space-between",width:"100%",height:"100%",background:"green"}}
>

                    <Button
                      variant="contained"
                      sx={{ width: "100%",height:"100%" }}
                      color="error"
                      onClick={() => {
                        handleClickOpen(item.id, item.title);
                      }}
                    >
                      ?????? ??????????
                    </Button>
                <ModeEditOutline onClick={()=>{openDialogEdit(item)}}  sx={{width:"30px",height:"30px",color:"#ffc400"}}/>
                </Box>

                  </td>
                  <td>
                    <h3>{item.send_to_all_point ? "???????? ????????" : ""}</h3>
                  </td>
                  <td>
                    <h3>{toPersianNumber(item.inventory)}</h3>
                  </td>
                  <td>
                    <h3>{toPersianNumber(item.price)} ??????????</h3>
                  </td>
                  <td>
                    <h3
                      className={item.credit_sale ? style.itis : style.noting}
                    >
                      {item.credit_sale ? "?????????? ???? ??????????" : "??????????????"}
                    </h3>
                  </td>
                  <td>
                    <div className={style.box_offer_edit}>
                      {edit === item.id ? (
                        <>
                          <input
                            type="number"
                            value={off}
                            onChange={(e) => setOff(e.target.value)}
                          />
                        </>
                      ) : (
                        <h3>
                          {item.price_with_offer
                            ? toPersianNumber(
                                item.price - item.price_with_offer
                              )
                            : toPersianNumber(0)}{" "}
                          ??????????
                        </h3>
                      )}
                      {edit === item.id ? (
                        <button
                          className={style.edit}
                          onClick={() =>
                            changeDiscountValue(
                              item.id,
                              item.discount_id != null
                                ? item.discount_id[0]
                                : ""
                            )
                          }
                        >
                          ??????????
                        </button>
                      ) : (
                        <div>
                          <button
                            className={style.edit}
                            onClick={(e) => handleEdit(item.id)}
                          >
                            ????????????
                          </button>
                          <button
                            className={style.edit}
                            style={{ background: "#ef5350", color: "white" }}
                            onClick={(e) => handleDelete(item.discount_id[0])}
                          >
                            ??????
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot></tfoot>
          </table>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={(e)=>{handleClose(e)}}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{ minWidth: "300px", fontSize: "20px", width: "100%" }}
          >
            ?????? ???? ?????? ??????????{" "}
            <span style={{ color: "#3C76D2" }}>{deleteState.title}</span> ??????????
            ????????????
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              sx={{ marginLeft: "20px" }}
            >
              ??????
            </Button>
            <Button
              variant="contained"
              onClick={() => deleteProductHandler(deleteState.id)}
            >
              ??????
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
        open={openEdit}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
<DialogTitle>?????? ?????? ???? ???????? ???????????? ?????????? ???? ???????? ?????? ???????? ???????? ???? ???????????????? ?????????? ???????? ???? ????????</DialogTitle>
<DialogContent>
  {updateItemState!=[] ?

<Box component="form" onSubmit={(e )=>submitEditProduct(e, updateItemState.id)}>  

  <input name="shop" value={updateItemState.shop?.id} disabled placeholder="??????????????"/>
  <input name="title" value={updateItemState.title} placeholder="??????????"/>
  <input name="description" value={updateItemState.description} placeholder="??????????????"/>
  {/* <input name="category" placeholder="???????? ????????"/> */}
  <select>
    {categories?.map((item,index)=>{
      return (<option selected={updateItemState?.category.title==item.title} value={item.title}>{item.title}</option>)
    })}
  </select>
  <input name="feature" placeholder="????????????"/>
  <input name="price"value={updateItemState.price} placeholder="????????"/>
  <input name="sales_unit"value={updateItemState.shop?.name} disabled placeholder="???????? ????????"/>
  <input name="delivery_cost" value={updateItemState.delivery_cost} placeholder="?????????? ??????????"/>
  <input name="delivery_time"value={updateItemState.delivery_time} placeholder="???????? ??????????(??????)"/>
  <input name="transition"value={updateItemState.transition} placeholder="?????????? ??????????"/>
  <input name="image"type="file"/>
  <input name="inventory"value={updateItemState.inventory} placeholder="??????????"/>
  <label htmlFor="credit_sale">?????????? ???? ?????????? ????????</label>
  <input name="send_to_all_point"type="checkbox" checked={updateItemState.send_to_all_point} value={updateItemState.send_to_all_point} placeholder="?????????? ???? ?????? ?? ???????? ????????"/>
  <label htmlFor="credit_sale">???????? ??????????????</label>
  <input type="checkbox" name="credit_sale" checked={updateItemState.credit_sale} placeholder="???????? ??????????????"/>
  <select
                  style={{ width: "48%" }}
                  id="city1"
                  // className={styles.input1}
                  onChange={(e) => handleCities(e)}
                  name="state"
                   form="form"
                  required
                >
                  <option>???????????? ??????????</option>
                  {provinces.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  style={{ width: "48%" }}
                  // className={styles.input1}
                  name="city"
                  form="form"
                  required
                  onChange={(e) => {
                    setCitySelected(e.target.value);
                  }}
                >
                  <option>???????????? ??????</option>
                  {cities.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
<button style={{marginBottom:"10px",marginLeft:"15px" ,width:"60px",height:"40px",background:"red"}}variant="contained" color="error" onClick={(e)=>{handleCloseEdit(e)}}>????????????</button>
<button style={{marginBottom:"10px",marginLeft:"15px" ,width:"60px",height:"40px",background:"red"}}variant="contained"onClick={(e)=>{e.stopPropagation()}} type="submit">??????</button>
  </Box>
  :""}
 
</DialogContent>



        </Dialog>
      </div>
      <ToastContainer />
    </div>
  );
};

export default React.memo(MyProducts);
