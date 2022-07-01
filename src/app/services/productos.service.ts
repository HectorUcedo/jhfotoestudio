import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
 


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    this.http.get('https://base-jh-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: any) => {
      //console.log(resp);
      this.productos = resp;
      this.cargando = false; //Loading
      
      /*setTimeout(() => {
        this.cargando = false; 
      }, 2000);*/

        });

  }

  getProducto( id: string ) {
    return this.http.get(`https://base-jh-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }

}
