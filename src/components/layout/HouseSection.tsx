import styles from "./houseSection.module.scss";
import RandomPixels from "../general/RandomPixels";
import { ReactNode } from "react";

export const HouseSection = ({children}: {children?: ReactNode}) => {
  return (
    <div id="houseSection" className={styles.houseSection}>
      <div className={styles.skyline}>
        <div className={styles.clouds}></div>
        <div className={styles.trees}></div>
      </div>
      <div className={styles.children}>{children}</div>
      <div className={styles.house}>
        <RandomPixels
          images={[
            "/assets/pixels/houses/house.png",
            "/assets/pixels/houses/big-house.png",
            "/assets/pixels/houses/plant-house.png",
            "/assets/pixels/houses/straw-house.png",
            "/assets/pixels/houses/tree-house.png",
            "/assets/pixels/houses/wooden-house.png",
          ]}
        />
      </div>
    </div>
  );
};
