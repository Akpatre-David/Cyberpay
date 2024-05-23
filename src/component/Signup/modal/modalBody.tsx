import React, { FC, PropsWithChildren, useCallback, useState } from "react";
import style from "./modalBody.module.css";
import { Button } from "antd";

interface ButtonProps extends PropsWithChildren {
  handleButtonOk: () => void;
  handleButtonCancel: () => void;
}

const ModalBody: FC<ButtonProps> = ({ handleButtonOk, handleButtonCancel }) => {
  const handleOk = useCallback(() => {
    handleButtonOk();
  }, [handleButtonOk]);

  const handleCancel = useCallback(() => {
    handleButtonCancel();
  }, [handleButtonCancel]);
  return (
    <>
      <section className={style.container}>
        <section className={style.leftSide}>
          <div className={style.firstDiv}>
            <span>1.</span>
            <span>Summary</span>
          </div>

          <div className={style.firstDiv}>
            <span>2.</span>
            <span>Use of communication services</span>
          </div>

          <div className={style.firstDiv}>
            <span>3.</span>
            <span>No unlawful or prohibited use</span>
          </div>

          <div className={style.firstDiv}>
            <span>4.</span>
            <span>Termination/ Access restriction</span>
          </div>
        </section>

        {/* This is for the right side of the div */}
        <section className={style.rightSide}>
          <div>
            <p> Summary</p>

            <p>
              By registering with us, you agree that you will not use CyberPay
              in connection with any <br />
              product, service, transaction or activity that disregard these
              terms and conditions.
            </p>
          </div>

          <div className={style.second}>
            <p>Use of communication services</p>

            <p>
              The CyberPay Web Site may contain bulletin board services, chat
              areas, news groups, forums, communities, personal web pages,
              calendars, and/or other message or communication facilities
              designed to enable you to receive and communicate with the public
              at large or with a group (collectively, "Communication Services").
              You agree to the use and receipt of the Communication Services.
              Receive email messages and material that are proper and related to
              the particular Communication Service. By way of example, and not
              as a limitation, you agree that when using a Communication
              Service, you may not: Defame, abuse, harass, stalk, threaten or
              otherwise violate the legal rights (such as rights of privacy and
              publicity) of others. Publish, post, upload, distribute or
              disseminate any inappropriate, profane, defamatory, infringing,
              obscene, indecent or unlawful topic, name, material or
              information. Use of communication services The CyberPay Web Site
              may contain bulletin board services, chat areas, news groups,
              forums, communities, personal web pages, calendars, and/or other
              message or communication facilities designed to enable you to
              receive and communicate with the public at large or with a group
              (collectively, "Communication Services"). You agree to the use and
              receipt of the Communication Services. Receive email messages and
              material that are proper and related to the particular
              Communication Service. By way of example, and not as a limitation,
              you agree that when using a Communication Service, you may not:
              Defame, abuse, harass, stalk, threaten or otherwise violate the
              legal rights (such as rights of privacy and publicity) of others.
              Publish, post, upload, distribute or disseminate any
              inappropriate, profane, defamatory, infringing, obscene, indecent
              or unlawful topic, name, material or information.
            </p>
          </div>
        </section>
      </section>
      <section className={style.footer}>
        <Button className={style.declineButton} onClick={handleOk}>
          Decline
        </Button>

        <Button className={style.acceptButton} onClick={handleButtonCancel}>
          Agree and Continue
        </Button>
      </section>
    </>
  );
};

export default ModalBody;
