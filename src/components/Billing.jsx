import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

export default function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionReverse}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
}
