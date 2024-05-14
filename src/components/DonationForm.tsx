"use client";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./styles.css";

export default function DonationForm() {
  const [amountInValue, setAmountInValue] = useState("");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (amountInValue) {
      const intValue = parseInt(amountInValue);
      if (intValue > 5 && intValue <= 1000) {
        setAmount(intValue);
      } else if (intValue === 1 || intValue === 10 || intValue === 50) {
        setAmount(intValue);
      } else {
        setAmount(1);
      }
    }
  }, [amountInValue]);

  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faLeaf} />
          <span>x</span>
          <button
            type="button"
            onClick={() => {
              setAmount(1);
              setAmountInValue("1");
            }}
            className={`amountBtn ` + (amount === 1 ? "active" : "")}
          >
            1
          </button>
          <button
            type="button"
            onClick={() => {
              setAmount(10);
              setAmountInValue("10");
            }}
            className={`amountBtn ` + (amount === 10 ? "active" : "")}
          >
            10
          </button>
          <button
            type="button"
            onClick={() => {
              setAmount(50);
              setAmountInValue("50");
            }}
            className={`amountBtn ` + (amount === 50 ? "active" : "")}
          >
            50
          </button>
        </div>
        <input
          className="userFormInput"
          type="number"
          placeholder="Any $ amount helps!"
          onChange={(ev) => setAmountInValue(ev.target.value)}
          value={amountInValue}
        />
        <input
          className="userFormInput"
          type="text"
          name="name"
          id=""
          placeholder="Tell us your name"
        />
        <textarea
          className="userFormInput"
          name="message"
          id=""
          placeholder="Say something nice"
        ></textarea>
        <button type="button" className="support-btn">
          Support ${amount}
        </button>
      </div>
    </form>
  );
}
