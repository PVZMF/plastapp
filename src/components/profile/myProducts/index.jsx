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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyProducts = () => {
  const [open, setOpen] = React.useState(false);
  const [deleteState, setDeleteState] = React.useState("");

  const handleClickOpen = (id, title) => {
    setDeleteState({ id, title });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [off, setOff] = useState(0);
  const [listProducts, setListProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const userRole = useSelector((state) => state.auth.role);
 
  // ListProduct
  useEffect(() => {
    // setLoading(true);
    getListMyProduct().then((results) => {
      setListProducts(results);
    });
  }, [update]);

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
        toast.success("تخفیف با موفقیت حذف شد");
      })
      .catch(() => {
        //       if (AxiosError.response.status === 400) {
        //        
        toast.error("تخفیف موجود نیست");

        // }
      });
  };

  const deleteProductHandler = (id) => {
    deleteProduct(id)
      .then((res) => {
        setUpdate(!update);
        toast.success("با موفقیت حذف شد");
        setOpen(false);
      })
      .catch((err) => {
        toast.error("محصول حذف نشد");
      });
  };
  //Create Or Edit Discount
  const changeDiscountValue = (idP, idD) => {
    discountCreate({ product: idP, discount_amount: off })
      .then((res) => {
        setUpdate(!update);
        toast.success("تخفیف با موفقیت ایجاد شد");
      })
      .catch((err) => {
        if (err.status == 400) {
          discountUpdate({ product: idP, discount_amount: parseInt(off) }, idD)
            .then(() => {
              setUpdate(!update);
              toast.success("مقدار تخفیف با موفقیت تخفیف کرد");
            })

            .catch(() => {
              toast.error("مقدار تخفیف تغییر نکرد");
            });
        }
        if (err.status == 401) {
          toast.error("صفحه را رفرش کنید و دوباره درخواست بدهید");
        }
      });
    handleEdit(idP);
  };

  return (
    <div className={style.myproducts}>
      <div className={style.products}>
        <div className={style.header}>
          <h4>محصولات من</h4>
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
                <h4>محصول</h4>
              </th>
              <th>
                <h4>حذف محصول</h4>
              </th>
              <th>
                <h4>محدوده ارسال</h4>
              </th>
              <th>
                <h4>موجودی</h4>
              </th>
              <th>
                <h4>قیمت</h4>
              </th>
              <th>
                <h4>وضعیت</h4>
              </th>
              <th>
                <h4>تخفیف</h4>
              </th>
            </thead>

            <tbody>
              {listProducts?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <h3>{item.title}</h3>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      sx={{ width: "100%" }}
                      color="error"
                      onClick={() => {
                        handleClickOpen(item.id, item.title);
                      }}
                    >
                      حذف محصول
                    </Button>
                  </td>
                  <td>
                    <h3>{item.send_to_all_point ? "سرار کشور" : ""}</h3>
                  </td>
                  <td>
                    <h3>{toPersianNumber(item.inventory)}</h3>
                  </td>
                  <td>
                    <h3>{toPersianNumber(item.price)} تومان</h3>
                  </td>
                  <td>
                    <h3
                      className={item.credit_sale ? style.itis : style.noting}
                    >
                      {item.credit_sale ? "موجود در انبار" : "ناموجود"}
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
                          تومان
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
                          تایید
                        </button>
                      ) : (
                        <div>
                          <button
                            className={style.edit}
                            onClick={(e) => handleEdit(item.id)}
                          >
                            ویرایش
                          </button>
                          <button
                            className={style.edit}
                            style={{ background: "#ef5350", color: "white" }}
                            onClick={(e) => handleDelete(item.discount_id[0])}
                          >
                            حذف
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
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{ minWidth: "300px", fontSize: "20px", width: "100%" }}
          >
            آیا از حذف محصول{" "}
            <span style={{ color: "#3C76D2" }}>{deleteState.title}</span> مطمئن
            هستید؟
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
              خیر
            </Button>
            <Button
              variant="contained"
              onClick={() => deleteProductHandler(deleteState.id)}
            >
              بله
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ToastContainer />
    </div>
  );
};

export default React.memo(MyProducts);
