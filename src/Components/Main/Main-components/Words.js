import React from "react";
import styles from "./Words.module.css";

const Words = () => {
  const namjestaj = "NAMJEŠTAJ PO";
  const vasojmjeri = "VAŠOJ MJERI";
  return (
    <div>
      <div className={styles.wordNamjestaj}>
        {namjestaj.split("").map((letter, index) => (
          <span key={index}>{letter !== " " ? letter : "\u00A0"}</span>
        ))}
      </div>
      <div className={styles.wordVasoj}>
        {vasojmjeri.split("").map((letter, index) => (
          <span key={index}>{letter !== " " ? letter : "\u00A0"}</span>
        ))}
      </div>
      <div className={styles.sentence}>
        <span>Naručite i Vi Vašu kuhinju iz snova !</span>
      </div>
    </div>
  );
};

export default Words;
