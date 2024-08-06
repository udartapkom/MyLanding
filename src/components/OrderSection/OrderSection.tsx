import styles from './OrderSection.module.scss';
import Image from "next/image";
import orderGirl from '@public/backgrounds/orderGirl.jpg';
import {UniversalInput} from '@/ui-lib/inputs';
const OrderSection = () => {
    return(
        <section className={styles.OrderSection}>
            <Image
                src={orderGirl}
                alt='девушка'
                width={0}
                height={0}
                style={{
                    borderRadius: '15px',
                    width: "100%",
                    height: "auto",
                    }}
            />
            <UniversalInput
                placeholder={'Имя'}
            />
        </section>
    )
}
export default OrderSection;