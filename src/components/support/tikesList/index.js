import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Storage from "../../../service/Storage.js";
// Style
import { FlexMainTikesList } from "./styledMainTikesList.js";
import Ticket from "./Ticket.js";

const TikesListComponent = ({ list }) => {
  const st = Storage();
  const [ticket, setTicket] = useState("");
  useEffect(() => {
    axios
      .get("https://plastapp.iran.liara.run/ticket/list/", {
        headers: {
          Authorization: `Bearer ${st.accessToken}`,
        },
      })
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => {
        setTicket("");
      });
  }, []);
  const [search, setSearch] = useState("");
  const [newitems, setNewitems] = useState([]);

  useEffect(() => {
    setNewitems([]);
  }, [search]);

  return (
    <FlexMainTikesList>
      <div className="box-ticket">
        <div className="header-tikes">
          <h4>لیست درخواست های پشتیبانی</h4>
        </div>

        <div className="search-ticket">
          <input
            type={"text"}
            placeholder="جستجو در عنوان..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <Link to={"/support/newticket"}>ثبت درخواست جدید</Link>
          </button>
        </div>

        <div className="box-list-ticket">
          <div className="list-ticket">
            <div className="titles">
              <div>
                <h5>عنوان</h5>
              </div>
              <div>
                <h5>شماره</h5>
              </div>
              <div>
                <h5>تاریخ ثبت</h5>
              </div>
              <div>
                <h5>تاریخ به روزرسانی</h5>
              </div>
              <div>
                <h5>وضعیت</h5>
              </div>
            </div>

            {ticket
              ? [...ticket].reverse().map((item, index) => {
                  return (
                    <Link to={`/support/ticketsList/${item.id}`}>
                      <Ticket data={item} />
                    </Link>
                  );
                })
              : ""}

            {/* {newitems.length === 0 && <div className='notFound'><h3>چیزی یافت نشد</h3></div>} */}
          </div>
        </div>
      </div>
    </FlexMainTikesList>
  );
};

export default TikesListComponent;
