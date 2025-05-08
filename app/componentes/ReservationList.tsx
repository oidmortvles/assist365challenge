"use client"
import CardReserveStatus from './CardReserveStatus';
import styles from './ReservationList.module.css';


type ReserveListProps = {
    reserva: string;
    pasajero:string;
    destino:string;
    estado:string;
    fecha_regreso:string;
}

type ReserveArray={
    reservesList: ReserveListProps[];
    totalResults: number;
    loading: boolean;
}

const ReservationList : React.FC <ReserveArray> = ({reservesList, totalResults, loading}) =>{    

    return(
        <article className={styles.reserves}>  
          <p className={styles.results}>Encontramos <span>{totalResults}</span> resultados!</p>     
          
          <div className={styles.list}>
            {
              reservesList.length === 0 && !loading ? (
                  <p className={styles.warningMessage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
                    </svg> 
                    No hubo conicidencias
                  </p>
              )
              :
              null
            }

            {
              loading? (
                  <p className={styles.warningMessage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
                    </svg>
                    Cargando resultados
                  </p>
              )
              :
              (
                reservesList.map((reserva: ReserveListProps)=>{
                  return(
                    reserva.estado==="activa"  &&    
                          <CardReserveStatus
                            key={reserva.reserva} 
                            pasajero={reserva.pasajero} 
                            reserva={reserva.reserva} 
                            destino={reserva.destino} 
                            estado={reserva.estado} 
                            fechaRegreso={reserva.fecha_regreso}  
                          />
                  )})
              )  
            }
          </div> 
      </article>
    )
}

export default ReservationList;