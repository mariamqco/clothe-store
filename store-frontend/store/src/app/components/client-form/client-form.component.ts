import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit { 

  @Input() submitName: any;

  clientForm: FormGroup; 
  lettersRegex = /^[A-Za-z\s]+$/
  numbersRegex = /^[0-9]*$/;  
  emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  current_url: String;
  client_id: String | null;

  constructor(private fb: FormBuilder, private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.lettersRegex)]],
      lastname: ['', [Validators.required, Validators.pattern(this.lettersRegex)]],
      id_number: ['', [Validators.required, Validators.pattern(this.numbersRegex)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      cellphone: ['', [Validators.required, Validators.pattern(this.numbersRegex)]],
      age: ['', [Validators.pattern(this.numbersRegex)]],
      occupation: ['', Validators.pattern(this.lettersRegex)],
      city: ['', [Validators.pattern(this.lettersRegex)]],
      address: ['']                    
    }); 
    this.current_url = this.activatedRoute.snapshot.url.toString();
    this.client_id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.clientFormInit();
  }

  clientFormInit(){
    if(this.client_id !== null){
      this.loadClientInfo();
    }   
  }

  clientFormSubmit(){
    if(this.client_id !== null){
      this.clientUpdate();
    } else {
      this.clientRegister();
    }
  }

  loadClientInfo(){
    if(this.client_id !== null){
      this.clientService.getClientById(this.client_id).subscribe(data =>{
        let clientData: Client = data;
        if(clientData !== null || clientData !== undefined){
          this.clientForm.setValue({
            name: clientData.name,
            lastname: clientData.lastname,
            id_number: clientData.id_number,
            email: clientData.email,
            cellphone: clientData.cellphone,
            age: clientData.age,
            occupation: clientData.occupation,
            city: clientData.city,   
            address: clientData.address    
          });        
        } 
      }, error =>{
        console.log(error)
        this.router.navigate(['/client-create']);   
      });
    }    
  }

  clientRegister(){
    const clientData: Client = {
      name: this.clientForm.get('name')?.value,
      lastname: this.clientForm.get('lastname')?.value,     
      id_number: this.clientForm.get('id_number')?.value,
      email: this.clientForm.get('email')?.value,
      cellphone: this.clientForm.get('cellphone')?.value,
      age: this.clientForm.get('age')?.value,
      occupation: this.clientForm.get('occupation')?.value,
      city: this.clientForm.get('city')?.value,
      address: this.clientForm.get('address')?.value  
    }

    this.clientService.postClient(clientData).subscribe(data =>{      
      if(this.current_url === "for-you"){
        this.router.navigate(['/']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Genial!',
          text: 'Gracias por registrate',
          showConfirmButton: false,
          timer: 3000
        });        
      }else{
        this.router.navigate(['/admin-dashboard/clients']);
        Swal.fire({
          position: 'center',
          icon: 'success',        
          text: 'Cliente registrado correctamente',
          showConfirmButton: true,
          timer: 3000
        });
      }
      
      console.log("cliente añadido");
      console.log(clientData);
      console.log(this.current_url);  
          
    },error =>{
      console.log(error);
    });     
  }

  clientUpdate(){
    const clientData: Client = {
      name: this.clientForm.get('name')?.value,
      lastname: this.clientForm.get('lastname')?.value,     
      id_number: this.clientForm.get('id_number')?.value,
      email: this.clientForm.get('email')?.value,
      cellphone: this.clientForm.get('cellphone')?.value,
      age: this.clientForm.get('age')?.value,
      occupation: this.clientForm.get('occupation')?.value,
      city: this.clientForm.get('city')?.value,
      address: this.clientForm.get('address')?.value  
    }
    if (this.client_id !== null){
      this.clientService.putClient(this.client_id,clientData).subscribe( 
        data =>{
          this.router.navigate(['/admin-dashboard/clients']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actualización de CLIENTE exitosa',           
            showConfirmButton: false,
            timer: 1500
          }); 
        }
        , error =>{
          console.log(error)
        }
      );
    }      
  }
}
