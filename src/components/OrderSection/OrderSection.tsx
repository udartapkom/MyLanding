import styles from './OrderSection.module.scss';
import Image from "next/image";
import orderGirl from '@public/backgrounds/orderGirl.jpg';
import {FeedbackForm} from "@/components/Forms";
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
            <FeedbackForm />
        </section>
    )
}
export default OrderSection;