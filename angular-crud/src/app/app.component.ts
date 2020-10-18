import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    employeeArray: Employee[] = [
       {id: 1, nombre: "Pedro Almeida", pais: "Argentina"},
       {id: 2, nombre: "Luis Paez", pais: "Argentina"},
       {id: 3, nombre: "María Lozada", pais: "Argentina"}
   ];

   selectedEmployee: Employee = new Employee();


   openForEdit(employee: Employee){
       this.selectedEmployee = employee;

   }

   addOrEdit(){
     if(this.selectedEmployee.id === 0 ){
           this.selectedEmployee.id = this.employeeArray.length + 1;
           this.employeeArray.push(this.selectedEmployee);
     }

     this.selectedEmployee = new Employee();

   }
   delete(){
       swal
     .fire({
        title: "Eliminar Empleado",
        text: "¿Está seguro de querer eliminarlo?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Si, Eliminar",
        cancelButtonText: "Cancelar",
        cancelButtonColor: '#d33',
    })
    .then(resultado => {
        if (resultado.value) {
            this.employeeArray = this.employeeArray.filter(x => x !== this.selectedEmployee);
            this.selectedEmployee = new Employee();
        } else {
            // Dijeron que no
            console.log("La operación fue cancelada");
        }
        this.selectedEmployee = new Employee();
    });
   }
}
