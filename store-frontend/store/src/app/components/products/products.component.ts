import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product_title: String;
  product_subtitle: String;
  products_list: Product[];

  constructor(private productService: ProductService) { 
    this.product_title = "PRODUCTOS"
    this.product_subtitle = "Lista de productos"  
    this.products_list = [];  
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products_list = data;      
      console.log(this.products_list)
    }, error => {
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Lo sentimos',
        text: 'Hubo un error. Comunícate con soporte',
        showConfirmButton: false,
        timer: 5000
      });
    });
  }

  deleteProduct(product_id: String){
    Swal.fire({
      title: '¿Seguro de eliminar el producto?',
      text: "Acción que no se puede borrar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(product_id).subscribe(
          data => {
            Swal.fire({
              title:'Producto eliminado',          
              icon: 'success'
            });
            this.getProducts();
          },
          error =>{
            console.log(error);
            Swal.fire(
              'Operación fallida',          
              'error'
            );
          });
        
      }
    });
    
  }

}
