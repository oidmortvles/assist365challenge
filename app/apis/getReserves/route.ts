import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest){

    const { searchParams } = new URL(request.url);
    const APIURL = process.env.API_URL;

    const reserva = searchParams.get('reserva') || '';
    const pasajero = searchParams.get('pasajero') || '';
    const page = searchParams.get('page') || '';
    const pageSize = searchParams.get('pageSize') || '5';
    
    const filters = new URLSearchParams({
    ...(reserva && { reserva }),
    ...(pasajero && { pasajero }),
    ...(page && { page }),
    ...(pageSize && { pageSize }),
    }) //=> AYUDA DE IA, NO SABIA QUE SE PODIA REFACTORIZAR CON URLSearchParams

    const finalURL = `${APIURL}?${filters}`;
    
    try {
        const res = await fetch(finalURL);
        const data = await res.json();
    
        if (!res.ok) {
          console.error("Error en respuesta", data);
          return NextResponse.json(data, { status: res.status });
        }    
        return NextResponse.json(data);

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: true, message: "Error interno" }, { status: 500 });
      }
}