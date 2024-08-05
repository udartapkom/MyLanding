'use client'
// Данный компонент нужно продумать более детально и убрать повторы кода
import { v4 as uuidv4 } from 'uuid';
import styles from './RunningRowSection.module.scss';
import RunningLine from "@/components/RunningLine/RunningLine";
import RunningCard from "@/components/RunningCard/RunningCard";
import {
    ReactIcon,
    NextIcon,
    NodeIcon,
    SaasIcon,
    MongoIcon,
    ReduxIcon,
    TSIcon,
    JSIcon,
    NPMIcon
} from "@/ui-lib/icons";
const RunningRowSection = () => {
    return (
        <section className={styles.RunningRowSection}>
            <h2 className={styles.RunningRowSection_header}>Применяемые технологии</h2>
            <RunningLine
                speed={20}
                stopOnHover={true}
                fontSize={24}
                direction={'right'}
                overlay={true}
                overlayColor={'#0e192f'}
                distanceCards={40}
            >
                <RunningCard
                    text={'React'}>
                    <ReactIcon />
                </RunningCard>
                <RunningCard
                    text={'Next'}>
                    <NextIcon />
                </RunningCard>
                <RunningCard
                    text={'NodeJS'}>
                    <NodeIcon />
                </RunningCard>
                <RunningCard
                    text={'SAAS'}>
                    <SaasIcon />
                </RunningCard>
                <RunningCard
                    text={'MongoDB'}>
                    <MongoIcon />
                </RunningCard>
                <RunningCard
                    text={'Redux'}>
                    <ReduxIcon />
                </RunningCard>
                <RunningCard
                    text={'TypeScript'}>
                    <TSIcon />
                </RunningCard>
                <RunningCard
                    text={'JavaScript'}>
                    <JSIcon />
                </RunningCard>
                <RunningCard
                    text={'NPM'}>
                    <NPMIcon />
                </RunningCard>
                {/*<span>Первый элемент прокрутки</span>*/}
                {/*<span>Второй элемент прокрутки</span>*/}
            </RunningLine>
            <RunningLine
                speed={40}
                stopOnHover={true}
                fontSize={18}
                direction={'left'}
                overlay={true}
                overlayColor={'#0e192f'}
                distanceCards={40}
            >
                <RunningCard
                    text={'React'}>
                    <ReactIcon />
                </RunningCard>
                <RunningCard
                    text={'Next'}>
                    <NextIcon />
                </RunningCard>
                <RunningCard
                    text={'NodeJS'}>
                    <NodeIcon />
                </RunningCard>
                <RunningCard
                    text={'SAAS'}>
                    <SaasIcon />
                </RunningCard>
                <RunningCard
                    text={'MongoDB'}>
                    <MongoIcon />
                </RunningCard>
                <RunningCard
                    text={'Redux'}>
                    <ReduxIcon />
                </RunningCard>
                <RunningCard
                    text={'TypeScript'}>
                    <TSIcon />
                </RunningCard>
                <RunningCard
                    text={'JavaScript'}>
                    <JSIcon />
                </RunningCard>
                <RunningCard
                    text={'NPM'}>
                    <NPMIcon />
                </RunningCard>
                {/*<span>Первый элемент прокрутки</span>*/}
                {/*<span>Второй элемент прокрутки</span>*/}
            </RunningLine>
        </section>
    )
}
export default RunningRowSection;