import React from 'react'
import { EmpleadoRow } from './EmpleadoRow'

export const EmpleadoList = ({empleados}) => {
  return (
    <ul className='list-unstyled'>
        {empleados.map((empleado) => (
           <EmpleadoRow empleado={empleado}/>
        ))}
    </ul>
  )
}
