import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../guard/auth.service';

@Directive({
  selector: '[appBanner]',
})
export class BannerDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
    if (this.authService.getAuthIsLoggedIn()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
