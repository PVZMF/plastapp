import React, { useEffect, useState } from "react";
import Input from "./Input";
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
  const [indexJob, setIndexJob] = useState(1);
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
    setIsSending(true);
    applyJob(data)
      .then((res) => {
        console.log("res post", res);
        setIsSending(false);
      })
      .catch((error) => {
        setIsSending(false);
        console.log(error)
      });
  };
  if (loading) {
    return <Spinner />;
  }
  const handleChange = (e) =>{
    setIndexJob(e.target.value-1);
  }
  return (
    <div className={style.jobs}>
      {console.log(indexJob)}
      <div className={style.title}>
        <h3>فرصت های شغلی</h3>
      </div>

      <div className={style.jobsBox}>
        <div className={style.imageBox}>
          <img src={jobs[indexJob].thumbnail} alt="career opportunity" />
        </div>
        {isSending ? (
          <Spinner />
        ) : (
          <div className={style.formBox}>
            <div dangerouslySetInnerHTML={{ __html: jobs[indexJob].description }}></div>
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
                <select onChange={handleChange} name="job">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Career_Opportunity;
