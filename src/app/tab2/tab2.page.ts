import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { CartService } from '../services/cart/cart.service';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public cart : CartService,
    public utility: UtilityService,
    private alertController: AlertController,
    private menu: MenuController,
  ) {}

  ionViewWillEnter() {
    this.cart.unseen = 0;
    this.cart.getCartTotalQty();
    this.cart.totalPrice();
  }

  async presentPlaceOrderDialog() {
    const alert = await this.alertController.create({
      header: "Confirm",
      message: `Are you sure you want to checkout amount ${this.cart?.total_price}?`,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {}
        },
        {
          text: "Yes",
          handler: () => {
            this.menu.close()
            this.placeOrder()
          }
        }
      ]
    })
    alert.present()
  }

  placeOrder() {
    this.utility.showToast("Order placed! Happy shopping...", "bottom", "success")
    this.cart.items = []
  }

}
