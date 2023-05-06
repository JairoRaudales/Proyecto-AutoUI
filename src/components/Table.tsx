import React, { useState, useEffect } from 'react';
import { TableItem } from './RegistrationForm';


type TableProps = {
  tableItems: TableItem[];
};

function Table({ tableItems }: TableProps) {
  const [tableData, setTableData] = useState<TableItem[]>([]);

  useEffect(() => {
    // Lógica para obtener y actualizar los datos de la tabla
  }, []);

  const handleAddItem = (item: TableItem) => {
    // Lógica para agregar un nuevo elemento a la tabla
  };

  const handleRemoveItem = (item: TableItem) => {
    setTableData([...tableData, item]);
  };
 


  return (
    <div className='container'>
          <table>
      <thead>
        <tr>
          <th>Tipo de carro</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año</th>
          <th>Precio</th>
          <th>Estado</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.tipo}</td>
            <td>{item.marca}</td>
            <td>{item.modelo}</td>
            <td>{item.anio}</td>
            <td>{item.precio}</td>
            <td>{item.estado}</td>
            <td>{item.color}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  );
}

export default Table;
 
/*  interface Table {
    tipo: string;
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
    estado: string;
    color: string;
}
  
  const [autos, setAutos] = useState<Table[]>([]);
  
  // función para manejar la presentación del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newAuto: Table = {
      tipo: form.tipo.value,
      marca: form.marca.value,
      modelo: form.modelo.value,
      anio: parseInt(form.anio.value),
      precio: parseInt(form.precio.value),
      estado: form.estado.value,
      color: form.color.value,
    };
    setAutos([...autos, newAuto]);
    form.reset();
  };
  
  // función para crear filas de tabla a partir de objetos de auto
  const renderAutoRow = (auto: Table) => (
    <tr key={`${auto.tipo}-${auto.marca}-${auto.modelo}`}>
      <td>{auto.tipo}</td>
      <td>{auto.marca}</td>
      <td>{auto.modelo}</td>
      <td>{auto.anio}</td>
      <td>{auto.precio.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
      <td>{auto.estado}</td>
      <td>{auto.color}</td>
    </tr>
  );
  
  // JSX para mostrar la tabla y el formulario
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {autos.map(renderAutoRow)}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        {/* los elementos de formulario van aquí */
/*         <button type="submit">Agregar registro</button>
      </form>
    </div>
  );

  export default Table;
 */
 
  