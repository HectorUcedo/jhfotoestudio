import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
 


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {
    // el Promise adentro tienen un callback
    // resolve y el reject cuando se hace mal
    return new Promise<void>( ( resolve, reject ) => {
     
      this.http.get('https://base-jh-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        this.productos = resp;
        this.cargando = false; //Loading
        resolve();
        
        /*setTimeout(() => {
          this.cargando = false; 
        }, 2000);*/
        
      });
      
    });
  }


  getProducto( id: string ) {
    return this.http.get(`https://base-jh-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }

  buscarProducto( termino: string ){

    if( this.productos.length === 0 ){
      // cargar productos
      this.cargarProductos().then( ()=>{
      // Después de tener los productos
      // Aplicar filtro
      this.filtrarProductos( termino );
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos( termino: string ){

    //console.log(this.productos);
    //purgar
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod =>{

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }

    });

  }

}
