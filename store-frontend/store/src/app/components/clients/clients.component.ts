import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 
  client_title: String;
  client_subtitle: String;
  clients_list: Client[];
  

  constructor(private clientService: ClientService, private router: Router) { 
    this.client_title = "CLIENTES"
    this.client_subtitle = "Lista de clientes"  
    this.clients_list = [];  
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.getClients().subscribe(data => {
      this.clients_list = data;      
      console.log(this.clients_list)
    }, error => {
      console.log(error);
      Swal.fire(
        'Hubo un error',
        'Comuníquese con soporte',
        'error'  
      );
      this.router.navigate(['/'])
    });
  }

  deleteClient(client_id: String){
    Swal.fire({
      title: '¿Seguro de eliminar el cliente?',
      text: "Acción que no se puede borrar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.deleteClient(client_id).subscribe(
          data => {
            Swal.fire({
              title:'Cliente eliminado',          
              icon: 'success'
            });
            this.getClients();
          },
          error =>{
            console.log(error);
            Swal.fire(
              'Hubo un error',
              'Comuníquese con soporte',         
            );
            this.router.navigate(['/']);
          });
        
      }
    });
    
  }

}
