import './FormObra.css'

const FormObra = () => {



    return(
        
        <form name="obra_form" className="form" action="https://localhost:7212/api/obras" method="post">
                <h1>Registrar Obra</h1>
                <label>Centro de Negocio: </label>
                <select name="ce_ne" id="ce_ne" >
                    <option value="1001001">1001 - CO</option>
                    <option value="1001002">1002 - MP</option>
                    <option value="1001003">1003 - SB</option>
                    <option value="1001004">1004 - PA</option>
                    <option value="1001005">1005 - LF</option>
                </select><br/><br/>
                <label >Nombre obra: </label>
                <input className="campo" type="text" name="nombre_obra"  required/>
                <br/>
                <label >Empresa:  </label>
                <input className="campo" type="text" name="empresa"  required/>
                <br/>
                <label >Responsable: </label>
                <input className="campo" type="text" name="responsable"  required/>
                <br/>
                <label >Cliente: </label>
                <input className="campo" type="text" name="cliente"  required/>
                <br/>
                <label >Area: </label>
                <input className="campo" type="text" name="area"  required/>
                <br/>
                <label >Monto Neto: </label>
                <input className="campo" type="text" name="monto_neto"  required/>
                <br/>
                
                <input className="button" type="submit" value="Registrar"/>
        </form>
    )
}

export default FormObra;