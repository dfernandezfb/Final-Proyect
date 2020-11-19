
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const AdminPage = () => {
    return(
        <>
        <h1> Bienvenido Administrador.</h1>
        <h3>En la tabla a continuación, se muestran los cursos presentes en nuestra plataforma.
         Al hacer click en ellos puede modificarlos o borrarlos. Si desea, puede agregar más actividades académicas con el boton "Crear"
        </h3>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
<Button type="button" class=" btn bg-color2 color6 p-1 my-1">
            Crear Curso
                  </Button>
                {/* <!-- Botón para editar  --> */}
                <Button class=" btn bg-color2 color6 p-1 my-1 edit-btn" >
            Editar 
                 </Button>
                {/* <!-- Botón para eliminar --> */}
                <Button class=" btn bg-color2 color6 p-1 my-1 " >
            Eliminar Curso
                </Button>
        </>
    );
}

export default AdminPage