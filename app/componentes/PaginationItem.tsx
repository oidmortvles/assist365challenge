"use client"
import styles from './PaginationItem.module.css';

type PaginationItemProps = {
    num:number;
    action?: () => void;
    actual:number;
}

const PaginationItem: React.FC <PaginationItemProps> = ({num,actual, action}) =>{

    const selected = `${styles.paginationItem} ${actual === num ? styles.selected : ''}`.trim();

    return(
        <button className={selected} onClick={action}>
            {num}
        </button>
    )
}

export default PaginationItem;