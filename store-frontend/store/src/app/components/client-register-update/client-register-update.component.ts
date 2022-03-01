import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-register-update',
  templateUrl: './client-register-update.component.html',
  styleUrls: ['./client-register-update.component.css']
})
export class ClientRegisterUpdateComponent implements OnInit {

  client_title: String;
  client_subtitle: String;
  client_id: String | null;
  submit_name: String;
 
  constructor( private activatedRoute: ActivatedRoute) { 
    this.client_title = "CLIENTES"
    this.client_subtitle = "Registrar cliente nuevo"
    this.submit_name = "REGISTRAR";
   
    this.client_id = this.activatedRoute.snapshot.paramMap.get('id');
    
  }
    

  ngOnInit(): void {
    this.loadClientForm();
  }

  loadClientForm(){
    if (this.client_id !== null){
      this.client_subtitle = "Actualizar cliente";
      this.submit_name = "ACTUALIZAR";
    }
  }

  

}
