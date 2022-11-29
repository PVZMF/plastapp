import React, { useEffect, useState } from "react";
import Input from "./Input";
import JobImg from "../../assets/imgs/shop_1.jpg";
// Icons
import { ImUserTie } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import Spinner from "../../components/Spinner/Spinner";
// Style
import style from "./careerOpportunity.module.css";
import axios from "axios";
import { getJobs } from "../../api/api";
const Career_Opportunity = () => {
  const data = "";
  const [jobs, setJobs] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    getJobs()
      .then((results) => {
        setLoading(false);
        console.log(results);
        setJobs(results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(1111);
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={style.jobs}>
      <div className={style.title}>
        <h3>فرصت های شغلی</h3>
      </div>

      <div className={style.jobsBox}>
        <div className={style.imageBox}>
          <img src={JobImg} alt="career opportunity" />
        </div>

        <div className={style.formBox}>
          <div></div>
          <hr />

          <form onSubmit={handleSubmit}>
            <Input
              name="first_name"
              title="نام و نام خانوادگی"
              icon={<ImUserTie />}
            />
            <Input name="last_name" title="نام خانوادگی" icon={<ImUserTie />} />
            <Input
              name="phone_number"
              title="شماره تماس"
              icon={<BsTelephoneFill />}
              type="tel"
            />
            <Input name="email" title="ایمیل" icon={<MdEmail />} type="email" />
            <Input
              name="description"
              title="توضیحات"
              icon={<TbCertificate />}
            />
            <div className={style.selectbox}>
              <label>انتخاب فرصت شغلی</label>
              <select name="job">
                {jobs.map((item) => (
                  <option value={item.id}>{item.title}</option>
                ))}
              </select>
            </div>

            <button>ارسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career_Opportunity;
