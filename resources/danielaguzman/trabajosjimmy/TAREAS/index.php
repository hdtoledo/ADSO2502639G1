<!doctype html>
<html lang="es">
  <head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="stylesheet" href="http://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
	<link href="https://unpkg.com/vanilla-datatables@latest/dist/vanilla-dataTables.min.css" rel="stylesheet" type="text/css">


    

    <title>Alumnos</title>
  </head>
  
  <body>
  
  	<?php require 'config.php'; ?>

  	<div class="container-fluid">
  		<div class="col-md-12 mb-2 mt-2">
  			<div class="row justify-content-center">
  				<button class="btn btn-primary " data-toggle="modal" data-target="#exampleModal"><i class="fa-solid fa-circle-plus"></i> Adicionar nuevo Alumno</button>
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-md-12">
				<table class="table mt -10"  id="tabla">
				  <thead>
				    <tr>
					      <th scope="col">id</th>
					      <th scope="col">Nombre</th>
				          <th scope="col">Descripcion</th>
				          <th scope="col">Fecha_inicio</th>
						  <th scope="col">Fecha_final</th>
						  <th scope="col">Nom_alumno</th>
				           <th scope="col">Opciones</th>
				    </tr>
				  </thead>
				  <body>
			  		<?php 

			  		$liatarusuarios = "SELECT * FROM alumnos ORDER BY id DESC";
			  		$liatarusuarios = $pdo->query($liatarusuarios);

			  		if ($liatarusuarios->rowCount() > 0) {
			  			foreach ($liatarusuarios->fetchAll() as $alumnos) {
			  				echo '<tr>';
			  				echo '<td>'.$alumnos['id'].'</td>';
			  				echo '<td>'.$alumnos['Nombre'].'</td>';
			  				echo '<td>'.$alumnos['Descripcion'].'</td>';
			  				echo '<td>'.$alumnos['Fecha_inicio'].'</td>';
							echo '<td>'.$alumnos['Fecha_final'].'</td>';
							echo '<td>'.$alumnos['Nom_alumno'].'</td>';
			  				echo '<td><button class="btn btn-primary" data-toggle="modal" data-target="#modal2'.$alumnos['id'].'"> <i class="fa-solid fa-pen-to-square"></i> Editar</button>		  			
				      	 			  <a href="excluir.php?id='.$alumnos['id'].'"><button onclick="return confirm(\'Esta seguro que desea eliminar?\');" type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Eliminar</button></a></td>';			  			
			  				echo '<tr>';

							echo '<!-- Modal Editar -->

								<div class="modal fade" id="modal2'.$alumnos['id'].'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <h5 class="modal-title" id="exampleModalLabel">Editar usuário</h5>
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
								      </div>
								      <div class="modal-body">
									    <form action="editar.php" method="post" class="form-signin">
									      <input id="id" class="form-control" value="'.$alumnos['id'].'" name="id" type="hidden"> 									    
									      <input type="text" class="form-control" placeholder="Nombre" name="Nombre" value="'.$alumnos['Nombre'].'" required autofocus>    
									      <input type="text" class="form-control" placeholder="Descripcion" name="Descripcion" value="'.$alumnos['Descripcion'].'" required>
										  <input type="date" class="form-control" placeholder="Fecha_inicio" name="Fecha_inicio" value="'.$alumnos['Fecha_inicio'].'" required>
										  <input type="date" class="form-control" placeholder="Fecha_final" name="Fecha_final" value="'.$alumnos['Fecha_final'].'" required>
										  <input type="text" class="form-control" placeholder="Nom_alumno" name="Nom_alumno" value="'.$alumnos['Nom_alumno'].'" required>
									      <button class="btn btn-lg btn-primary btn-block" type="submit">Actualizar datos</button>
									    </form>
								      </div>
								    </div>
								  </div>
								</div>	

								<!-- Modal Editar -->';		  				
			  			}
			  		}
			  		?>
				  </body>
				</table>
			</div>	
		</div>	
	</div>

	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-floppy-disk"></i> Ingresar  Alumno</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">	      	
			<form method="post" action="inserir.php" class="form-signin">
				<input type="text" class="form-control" placeholder="Nombre" name="Nombre" required autofocus>      
				<input type="text" class="form-control" placeholder="Descripcion" name="Descripcion" required>
				<input type="date" class="form-control" placeholder="Fecha_inicio" name="Fecha_inicio" required>
				<input type="date" class="form-control" placeholder="Fecha_final" name="Fecha_final" required>
				<input type="text" class="form-control" placeholder="Nom_alumno" name="Nom_alumno" required>
				<button class="btn btn-lg btn-primary btn-block" type="submit"><i class="fa-solid fa-floppy-disk"></i> Ingresar Alumno</button>
			
			</form>
	      </div>
	    </div>
	  </div>
	</div>	

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script src="http://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/vanilla-datatables@latest/dist/vanilla-dataTables.min.js" type="text/javascript"></script>
     <script>
		var tabla =document.querySelector("#tabla")
		var datatable= new DataTable(tabla)
	 </script> 	
	
	

  </body>
</html>