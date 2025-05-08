import styles from './CardReserve.module.css';

interface CardReserveProps{
    "reserva": string;
    "pasajero": string;
    "destino": string;
    "estado": string;
    "fechaRegreso": string;
}

/* ICONS */
const Pin : React.FC = () =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.pin}>
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
    )
}

const Calendar : React.FC = () =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.calendar}>
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3h16zM3 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-5a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2z"/>
        </svg>
    )
}
/* ICONS */



const CardReserveStatus : React.FC <CardReserveProps> = ({reserva, pasajero, destino, estado, fechaRegreso}) =>{
    return(
        <figure className={styles.cardReserve}>
            
            <header className={styles.header}>
                <p>Code: {reserva}</p>
                <div className={styles.group}>
                    
                    <p>State: {estado.toUpperCase()}</p>
                </div>
            </header>


            <h3>{pasajero}</h3>
            
            <section className={styles.status}>
                <div className={styles.group}>
                    <Pin/>
                    <p>Destino: <span className={styles.bold}>{destino}</span></p>
                </div>
                
                <div className={styles.group}>
                    <Calendar/>
                    <p>Regreso: <span className={styles.bold}>{fechaRegreso}</span></p>            
                </div>
            </section>
        </figure>
    )
}

export default CardReserveStatus;