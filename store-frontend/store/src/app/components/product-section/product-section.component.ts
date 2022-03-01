import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  products_list: Product[];
  sectionTitle: String;
  current_url: String;
  

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    
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
      if(this.current_url === "woman"){
        this.products_list = this.products_list.filter(product => product.category !== "RM");
      } 
      if (this.current_url === "men"){
        this.products_list = this.products_list.filter(product => product.category !== "RF");
      }
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
      this.router.navigate(['/']);
    });
  }

}
