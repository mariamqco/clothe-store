import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() submitName: any;

  productForm: FormGroup; 
  lettersRegex = /^[A-Za-z\s]+$/
  numbersRegex = /^[0-9]*$/;  
  current_url: String;
  product_id: String | null;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      unit_price: ['0', [Validators.required, Validators.pattern(this.numbersRegex),Validators.min(1)]],
      image_url: ['', [Validators.required]],
      in_stock: ['', [Validators.required,Validators.pattern(this.numbersRegex)]],
      description: ['',],
      category: ['', [Validators.required, Validators.pattern(this.lettersRegex)]],                     
    }); 
    this.current_url = this.activatedRoute.snapshot.url.toString();
    this.product_id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productFormInit();
  }

  productFormInit(){
    if(this.product_id !== null){
      this.loadProductInfo();
    }   
  }

  productFormSubmit(){
    if(this.product_id !== null){
      this.productUpdate();
    } else {
      this.productRegister();
    }
  }

  productRegister(){
    const productData: Product = {      
      name: this.productForm.get('name')?.value,
      reference: this.productForm.get('reference')?.value,     
      brand: this.productForm.get('brand')?.value,
      unit_price: this.productForm.get('unit_price')?.value,
      image_url: this.productForm.get('image_url')?.value,     
      in_stock: this.productForm.get('in_stock')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value
    }

    this.productService.postProduct(productData).subscribe(data =>{      
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
        this.router.navigate(['/admin-dashboard/products']);
        Swal.fire({
          position: 'center',
          icon: 'success',        
          text: 'Producto registrado correctamente',
          showConfirmButton: true,
          timer: 3000
        });
      }      
     
          
    },error =>{
      console.log(error);
      Swal.fire(
        'Hubo un error',
        'Comuníquese con soporte',         
      );
      this.router.navigate(['/']);
    });     
  }

  loadProductInfo(){
    if(this.product_id !== null){
      this.productService.getProductById(this.product_id).subscribe(data =>{
        let productData: Product = data;
        if(productData !== null || productData !== undefined){
          this.productForm.setValue({
            name: productData.name,
            reference: productData.reference,
            brand: productData.brand,
            unit_price: productData.unit_price,
            image_url: productData.image_url,
            in_stock: productData.in_stock,
            description: productData.description,
            category: productData.category,  
              
          });        
        } 
      }, error =>{
        console.log(error)
        Swal.fire(
          'Hubo un error',
          'Comuníquese con soporte',         
        );
        this.router.navigate(['/']);
      });
    }    
  }

  productUpdate(){
    const productData: Product = {
      name: this.productForm.get('name')?.value,
      reference: this.productForm.get('reference')?.value,     
      brand: this.productForm.get('brand')?.value,
      unit_price: this.productForm.get('unit_price')?.value,
      image_url: this.productForm.get('image_url')?.value,     
      in_stock: this.productForm.get('in_stock')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value
    }
    if (this.product_id !== null){
      this.productService.putProduct(this.product_id,productData).subscribe( 
        data =>{
          this.router.navigate(['/admin-dashboard/products']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Actualización de PRODUCTO exitosa',           
            showConfirmButton: false,
            timer: 3000
          }); 
        }
        , error =>{
          console.log(error)
          Swal.fire(
            'Hubo un error',
            'Comuníquese con soporte',         
          );
          this.router.navigate(['/']);
        }
      );
    }  

  }

















}
  

  



