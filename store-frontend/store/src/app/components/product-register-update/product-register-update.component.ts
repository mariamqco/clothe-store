import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-register-update',
  templateUrl: './product-register-update.component.html',
  styleUrls: ['./product-register-update.component.css']
})


export class ProductRegisterUpdateComponent implements OnInit {

  product_title: String;
  product_subtitle: String;
  product_id: String | null;
  submit_name: String; 

  constructor(private activatedRoute: ActivatedRoute) { 
    this.product_title = "PRODUCTOS";
    this.product_subtitle = "Registrar producto nuevo"
    this.submit_name = "REGISTRAR";

    this.product_id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadProductForm();
  }

  loadProductForm(){
    if (this.product_id !== null){
      this.product_subtitle = "Actualizar producto";
      this.submit_name = "ACTUALIZAR";
    }
  }


}
