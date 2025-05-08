import PaginationItem from './PaginationItem';
import styles from './PaginationNav.module.css';

type PaginationNavProps={
    cantItems:number;
    actualPage:number;
    goToPage: (newPage: number) => void;
}

const PaginationNav : React.FC <PaginationNavProps> = ({cantItems,actualPage, goToPage}) =>{

    return(
        <nav className={styles.pagination}>
            {Array.from({ length: cantItems }, (_, index) => (
                <PaginationItem key={index} num={index +1} action={()=>goToPage(index+1)}  actual={actualPage}/>
            ))}
        </nav> 
    )
}

export default PaginationNav;