'use client'

import { useBaseCurrancy } from "@/hooks/useBaseCurrancy";
import styles from "@/styles/page.module.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RatesPage() {
    const baseCur = useBaseCurrancy();
    // const dispatch = useDispatch();
    // const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (baseCur) router.push(`/rates/${baseCur}`);
    }, [router, baseCur]);

    if (!baseCur) {
        return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Please select a base currency</h2>
        </div>
        )
    }
}