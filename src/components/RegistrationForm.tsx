import { useState , useEffect } from 'react';

export interface TableItem {
  tipo: string;
  marca: string;
  modelo: string;
  anio: number;
  precio: string;
  estado: string;
  color: string;
}

interface RegistrationFormProps {
  onAddItem: (item: TableItem) => void;
}

function RegistrationForm({ handleAddItem }: { handleAddItem: (item: TableItem) => void }){

  type DiccionarioDeArreglos = {
    [llave: string]: string[]
  };

  type CarType = "Turismo" |"sedan" | "hatchback" | "SUV" | "pickup" | "van";
  type ColorType = "Rojo" |"Negro" | "Blanco" | "Azul" | "Naranja" | "Verde";

  const carTypes: Record<CarType, string> = {
    Turismo: "Turismo",
    sedan: "Sedán",
    hatchback: "Hatchback",
    SUV: "SUV",
    pickup: "Pickup",
    van: "Van",
  };

  const colorTypes: Record<ColorType, string> = {
    Rojo: "Rojo",
    Negro: "Negro",
    Blanco: "Blanco",
    Azul: "Azul",
    Naranja: "Naranja",
    Verde: "Verde",
  };

  const [data, setData] = useState<DiccionarioDeArreglos>({});

  const [values, setValues] = useState<TableItem>({
    tipo: '',
    marca: '',
    modelo: '',
    anio: 0,
    precio: '',
    estado: '',
    color: '',
  });

 

  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState(0);
  const [precio, setPrecio] = useState('');
  const [estado, setEstado] = useState('');
  const [color, setColor] = useState('');

  const changeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMarca(e.target.value);
    setModelo("");
  }

  useEffect(() => {
    async function fetchData() {
        const data: DiccionarioDeArreglos = {
            "Toyota": ["Camry HEV.", "Corolla HEV.", "RAV4 HEV.", "Raize.", "Corolla Cross."],
            "Ford": ["Ford Focus", "Ford Fiesta.", "Ford Kuga.", "Ford Mondeo.", "Ford Mustang."],
            "Honda": ["Accord", "Civic", "CR-V.", "HR-V.", "NSX."],
            "JEEP": ["Grand Cherokee", "Grand Cherokee 4xe.", "Wrangler 4xe", "Wrangler.", "Cherokee."]
        };
        
        setData(data);
    }
    fetchData();
}, []);

  const handlePrecioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrecio(event.target.value);
  }
    return(
      <div className="form-container" >
        <header>
          <h2>Formulario para registrar nuevos autos</h2>
      </header>
      <hr/>
        <form >
        <div>
          <label  htmlFor="tipo">Tipo de carro:</label>
          <select>
          <option value="">Seleccione un Tipo de carro</option>
            {Object.entries(carTypes).map(([value, label]) => (
            <option key={value} value={value}>
             {label}
            </option>
             ))}
          </select>

          

        </div>
        <div>
          <label>Marca:</label>
          <select onChange={changeInput} >
                <option value="">Seleccione una Marca</option>
                {
                    Object.keys(data).map((key) => {
                        return (
                            <option value={key}>{key}</option>
                        )
                    })
                }
            </select>

        </div>
        <div>
          <label>Modelo:</label>
            <select onChange={(e) => setModelo(e.target.value)} >
                <option value="">Seleccione un Modelo</option>
                {
                    data[marca] && data[marca].map((modelo) => {
                        return (
                            <option value={modelo}>{modelo}</option>
                        )
                    })
                }
            </select>

        </div>
        <div>
          <label>Año:</label>
          <input type="number" name="anio" required />
        </div>
        <div>
          <label>Precio:</label>
          <input type="text"  name="precio"   value={precio} onChange={handlePrecioChange} required />
        </div>
        <div>
          <label>Estado:</label>
          <select name="estado" placeholder="Seleccione un estado"required >
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>
        <div>
          <label>Color:</label>
          <select>
          <option value="">Seleccione un Color</option>
            {Object.entries(colorTypes).map(([value, label]) => (
            <option key={value} value={value}>
             {label}
            </option>
             ))}
          </select>
        </div>
        <button type="submit"  className="agregar">Agregar </button>
      </form>
      </div>

    )
}

export default RegistrationForm;