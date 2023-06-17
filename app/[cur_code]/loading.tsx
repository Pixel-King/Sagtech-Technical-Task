import styles from "@/styles/loading.module.scss"
import spiner from "@/public/spiner.png"
import Image from "next/image"

export default function Loading() {
  return (
    <div className={styles.loading}>
        <Image src={spiner} alt="loading" className={styles.spinner}/>
    </div>
  );
}