import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddToCartPage } from '../pages/add-to-cart/add-to-cart.page';
import { CartService } from '../services/cart/cart.service';
import { ProductsService } from '../services/products/products.service';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // set app banner slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  };

  bannerImages: any = []
  products: any = []
  filteredProducts: any =[]

  constructor(
    public productService : ProductsService,
    public routerOutlet : IonRouterOutlet,
    public modalCtrl : ModalController,
    public cart : CartService,
    private router: Router,
    public utility: UtilityService
  ) {
    this.bannerImages = this.productService.bannerImages;
    this.products = this.productService.products;
    this.filteredProducts = this.products
  }

  async addToCartModal(item) {
    let isAdded = this.cart.isAddedToCart(item.id);

    if ( !isAdded ) {
      this.cart.placeItem(item);
      const modal = await this.modalCtrl.create({
        component: AddToCartPage,
        cssClass: 'add-to-cart-modal',
        presentingElement: this.routerOutlet.nativeEl
      });

      await modal.present();

      await modal.onWillDismiss().then((result) => {
        console.log('result :>> ', result);
      }).catch((err) => {
        console.log('err :>> ', err);
      });

    } else {
      this.router.navigate(['/tabs/tab2']);
    }

  }

   /**
 * Handles input event of searchbar
 * @param event
 */
    doSearch(searchText: string) {
      if (searchText.length > 0 && searchText.trim() != "") {
        this.filteredProducts = this.products.filter((item) => {
          return (
            item?.name?.toLowerCase().includes(searchText.toLowerCase())
          )
        })
      }
    }

    /** Shows the data again when backspace key is pressed to clear search text
     * @param event
     */
    onSearchTextChanged(event: any) {
      const searchText = event.target.value
      if (searchText.length == 0) {
        this.filteredProducts = this.products
      } else {
        this.doSearch(searchText)
      }
    }

    /**
     * Handles cancel event of searchbar
     */
    onSearchCancel(_event: any) {
      this.filteredProducts = this.products
    }

   /**
    * sorts products based on selected category
    */
    sort(event: any){
     this.filteredProducts = this.products.filter((item)=>{
       return event?.detail?.value == item?.category
      })
      if(event?.detail?.value == 'all') this.filteredProducts = this.products
    }

    notification(){
      this.utility.showToast("No new notifications","bottom")
    }

}
