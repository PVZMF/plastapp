import React, { useEffect, useState } from "react";
import Input from "./Input";
import JobImg from "../../assets/imgs/shop_1.jpg";
import { applyJob } from "../../api/api";
// Icons
import { ImUserTie } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FaRegFileAlt } from "react-icons/fa";
import Spinner from "../../components/Spinner/Spinner";
// Style
import style from "./careerOpportunity.module.css";
import { getJobs } from "../../api/api";
const Career_Opportunity = () => {
  const [jobs, setJobs] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // setLoading(true);
    getJobs()
      .then((results) => {
        setLoading(false);
        setJobs(results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataform = new FormData(e.target);
    const data = Object.fromEntries(dataform.entries());
    console.log(data);
    setIsSending(true);
    applyJob(data)
      .then((res) => {
        console.log("res post", res);
        setIsSending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsSending(false);
      });
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
        {isSending ? (
          <Spinner />
        ) : (
          <div className={style.formBox}>
            <div></div>
            <hr />

            <form
              // method="POST"
              // action="https://plastapp.iran.liara.run/job/apply/"
              enctype="multipart/form-data"
              // charset="utf-8"
              onSubmit={handleSubmit}
            >
              <Input name="first_name" title="نام" icon={<ImUserTie />} />
              <Input
                name="last_name"
                title="نام خانوادگی"
                icon={<ImUserTie />}
              />
              <Input
                name="phone_number"
                title="شماره تماس"
                icon={<BsTelephoneFill />}
                type="tel"
              />
              <Input
                name="email"
                title="ایمیل"
                icon={<MdEmail />}
                type="email"
              />
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
              <Input
                name="resume"
                title="رزومه"
                icon={<FaRegFileAlt />}
                type="file"
                placeholder="بارگذاری رزومه"
              />

              <button type="submit">ارسال</button>
            </form>
            <p style={{ color: "red" }}>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career_Opportunity;
