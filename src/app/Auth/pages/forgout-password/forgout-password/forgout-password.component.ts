import {Component, signal} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-forgout-password',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './forgout-password.component.html',
  styleUrl: './forgout-password.component.scss'
})
export class ForgoutPasswordComponent {

  showPassword = signal(false);
  showPasswordConfirm = signal(false);

  toggleShowPasswordConfirm(){
    this.showPasswordConfirm.update(preState=>!preState);
  }


  toggleShowPassword(){
    this.showPassword.update(preState=>!preState);
  }

}
