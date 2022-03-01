import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})

export class ClientRegisterComponent implements OnInit {

  submit_name: String; 
  constructor() { 
    this.submit_name = "REGISTRARME";
  }

  ngOnInit(): void {
  }

}
