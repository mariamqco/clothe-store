import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  products_list: Product[];
  sectionTitle: String;
  current_url: String;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    
    this.products_list = [];
    this.sectionTitle = "";
    this.current_url = this.activatedRoute.snapshot.url.toString();
   }

  ngOnInit(): void {

    this.setTitle();
    this.getProducts();
    
  }

  setTitle(){    
    console.log(this.current_url);
      if(this.current_url ===  "woman"){
        this.sectionTitle = "MUJER";
      }else{
        this.sectionTitle = "HOMBRE";
      }
    
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products_list = data;  
      this.products_list = this.products_list.sort(()=> Math.random() - 0.5);    
      console.log(this.products_list)
    }, error => {
      console.log(error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Lo sentimos',
        text: 'Hubo un error. Comunícate con soporte',
        showConfirmButton: false,
        timer: 5000
      });
    });
  }

}
