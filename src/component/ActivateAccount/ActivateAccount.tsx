import React from "react";
import style from "./ActivateAccount.module.css";
import { Card } from "../../customs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AcctivateAccount = () => {
  return (
    <section className={style.container}>
      <Card>
              <div>
                  
          <div className={style.logocontainer}>
            <IoIosCheckmarkCircleOutline size={33} className={style.icon} />
                  </div>
                  
          <div  className={style.header}>
            <p>verify email</p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AcctivateAccount;
