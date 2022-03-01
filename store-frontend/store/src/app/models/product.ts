export class Product {
    _id?: any;
    name:String;
    reference:String;
    brand:String;    
    unit_price:Number;
    image_url:String;
    in_stock:Number;
    description:String;
    category: String;
    
    constructor(name:String, reference:String,brand:String,unit_price:Number, image_url:String,in_stock:Number ,description:String,category: String,){
        this.name = name;
        this.reference = reference;
        this.brand = brand;    
        this.unit_price = unit_price;
        this.image_url = image_url;
        this.in_stock = in_stock;
        this.description = description;
        this.category = category;
    }

}

