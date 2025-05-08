"use client"
import { useEffect, useState } from 'react';
import styles from './ContainerBooking.module.css';
import ReservationList from './ReservationList';
import PaginationNav from './PaginationNav';
import GroupInputs from './GroupInputs';


type BookingProps = {
    reserva: string;
    pasajero: string;
    destino: string;
    estado: string;
    fecha_regreso: string;
};

type Response = {
    total: number;
    page: number;
    pageSize: number;
    resultados: BookingProps[];
};

const ContainerBooking: React.FC = () => {

    const [reserves,setReserves] = useState<BookingProps[]>([]); //=> LISTADO RESERVAS
    const [rawData, setRawData] = useState <Response>({total: 0, page: 1, pageSize: 5, resultados:[]}); //=> DATOS CRUDOS
    const [loading,setLoading] = useState(false);

    /* FILTROS */
    const [pageActual,setPageActual] = useState(1);
    const [pasajero,setPasajero] = useState("");
    const [reserva,setReserva] = useState("");
    /* FILTROS */


    //=> CAMBIAR PÁGIA
    const updatePage = (newPage: number) => {
        setPageActual(newPage); 
    }


    useEffect(()=>{

      const fetchReservas = async () => {        
          
          setLoading(true);         
          
          const filters = new URLSearchParams({
              ...(reserva && { reserva }),
              ...(pasajero && { pasajero }),
              page: pageActual.toString(),
              pageSize: "5",
            }).toString(); //=> AYUDA DE IA, NO SABIA QUE SE PODIA REFACTORIZAR CON URLSearchParams
          
          const res = await fetch(`/apis/getReserves?${filters}`);
          const json = await res.json();
          setReserves(json.resultados);
          setRawData(json);
          setLoading(false);
      };
  
      fetchReservas();
    },[pasajero, reserva, pageActual]);


    const totalPages = Math.ceil(rawData && rawData.total / rawData.pageSize);


    return(
        <section className={styles.containerBooking}>            
            <header className={styles.headerBooking}>
              <GroupInputs pasajero={pasajero} definePasajero= {setPasajero} reserva={reserva} defineReserva={setReserva} />
              <PaginationNav cantItems={totalPages} actualPage={pageActual} goToPage={updatePage} />
            </header>

            <ReservationList reservesList={reserves} totalResults ={rawData.total} loading={loading}/>
        </section>

    )
}

export default ContainerBooking;