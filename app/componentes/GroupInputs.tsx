"use client"

type groupInputsProps = {
    pasajero: string;
    reserva: string;
    definePasajero: (value: string) => void;
    defineReserva: (value: string) => void;
}

import styles from './GroupInputs.module.css';

const GroupInputs: React.FC <groupInputsProps> = ({pasajero,reserva, definePasajero, defineReserva }) => {

    const reserveChange = ( e:React.ChangeEvent<HTMLInputElement>) => {
        defineReserva(e.target.value);
        e.target.value !== "" && definePasajero("");
    }

    const pasengerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        definePasajero(e.target.value);
        e.target.value !== "" && defineReserva("");
    }

    return(
        <aside className={styles.groupInputs}>
            
            <div className={styles.inputBox}>
                <label htmlFor="reserva">Reserva</label>
                <input type='text' placeholder='Código de Reserva' value={reserva} onChange={(e) => reserveChange(e)} disabled={pasajero !== ""}/>

                <button className={styles.btnDelete} onClick={()=> defineReserva("")} style={{opacity: reserva? 1 : 0}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.iconDelete}>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>

            <div className={styles.inputBox}>
                <label htmlFor="pasajero">Pasajero</label>
                <input type='text' placeholder='Nombre o Apellido del Pasajero' value={pasajero} onChange={(e) => pasengerChange(e)} disabled={reserva !== ""}/>

                <button className={styles.btnDelete} onClick={()=> definePasajero("")} style={{opacity: pasajero ? 1: 0}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.iconDelete}>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </div>
        </aside>
    )
}

export default GroupInputs;