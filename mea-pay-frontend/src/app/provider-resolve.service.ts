import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Provider } from './_model/provider.model';
import { ProviderService } from './_services/provider.service';
import { ImageProcessingService } from './image-processing.service'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class ProviderResolveService implements Resolve<Provider> {
  constructor(private providerService: ProviderService,
    private imageProcessingService: ImageProcessingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Provider> {
    const id = route.paramMap.get("providerId");

    if (id) {
      //then we have to fetch details from backend
       return this.providerService.getProviderDetailsById(id)
              .pipe(
                map(p => this.imageProcessingService.createImages(p))
              );
    } else {
      // return empty provider observable.
      return of(this.getProviderDetails());
    }
  }

  getProviderDetails() {
    return {
      providerId:null,
      providerName: "",
      providerDescription: "",
      providerAPIURL: "https://",
      providerAPILogin: "",
      providerAPIPass: "",
      providerAPIMethod: "",
      providerAPIFormat: "",
      providerImages: [],
    };
  }
}
