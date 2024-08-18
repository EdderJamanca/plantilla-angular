import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})
export class RecoveryComponent {
  showPassword = signal(false);

  toogleShowPassword(){
    this.showPassword.update(preState=>!preState);
  }

  showPasswordConfirmar = signal(false);
  toggleShowPasswordConfirmar(){
    this.showPasswordConfirmar.update(preState=>!preState);
  }

}
