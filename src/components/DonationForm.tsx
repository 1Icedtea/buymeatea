"use client";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./styles.css";

export default function DonationForm() {
  const [amountInValue, setAmountInValue] = useState("");
  const [amount, setAmount] = useState(1);

  useEffect((): void => {
    if (amountInValue) {
      const intVal = parseInt(amountInValue);
      if (intVal > 5 && intVal <= 100) {
        setAmount(intVal);
      } else {
        setAmount(1);
      }
    }
  }, [amountInValue]);

  return (
    <form>
      <div>
        <FontAwesomeIcon icon={faLeaf} />
        <span>x</span>
        <button
          onClick={() => {
            setAmount(1);
            setAmountInValue("1");
          }}
          className={`amountBtn ` + (amount === 1 ? "active" : "")}
        >
          1
        </button>
        <button
          onClick={() => {
            setAmount(10);
            setAmountInValue("10");
          }}
          className={`amountBtn ` + (amount === 10 ? "active" : "")}
        >
          10
        </button>
        <button
          onClick={() => {
            setAmount(50);
            setAmountInValue("50");
          }}
          className={`amountBtn ` + (amount === 50 ? "active" : "")}
        >
          50
        </button>
        <input
          type="number"
          id="donationAmount"
          placeholder="Any $ amount helps!"
          onChange={(ev) => setAmountInValue(ev.target.value)}
          value={amountInValue}
        />
      </div>
    </form>
  );
}
