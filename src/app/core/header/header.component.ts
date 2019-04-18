import {Component, EventEmitter, Output} from '@angular/core';
import {StorageService} from '../../shared/storage.service';
import {HttpResponse} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private storageService: StorageService, private authService: AuthService) {}

  onSaveData() {
    this.storageService.storeCollections().subscribe((response: Response) => {console.log(response); });
  }

  onFetchData() {
    this.storageService.getCollections();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.signoutUser();
  }
}
