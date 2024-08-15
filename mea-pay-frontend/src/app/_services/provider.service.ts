import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '../_model/provider.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  BACKEND_API_URL = 'http://localhost:8393';

  constructor(private httpClient: HttpClient) { }

  public createTransaction(amount) {
    return this.httpClient.get(this.BACKEND_API_URL + "/createTransaction/"+amount);
  }

  public markAsDelivered(orderId) {
      return this.httpClient.get(this.BACKEND_API_URL + "/markOrderAsDelivered/"+orderId)
  }

  public deleteCartItem(cartId) {
    return this.httpClient.delete(this.BACKEND_API_URL + "/deleteCartItem/"+cartId);
  }

  public addProvider(provider: FormData) {
    return this.httpClient.post<Provider>(this.BACKEND_API_URL + "/addNewProvider", provider);
  }

  public getAllProviders(pageNumber, searchKeyword: string = "") {
    return this.httpClient.get<Provider[]>(this.BACKEND_API_URL + "/getAllProviders?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getProviderDetailsById(providerId) {
    return this.httpClient.get<Provider>(this.BACKEND_API_URL + "/getProviderDetailsById/"+providerId);
  }

  public deleteProvider(providerId: number) {
    return this.httpClient.delete(this.BACKEND_API_URL + "/deleteProviderDetails/"+providerId);
  }

  public getProviderDetails(isSingleProductCheckout, providerId) {
    return this.httpClient.get<Provider[]>(this.BACKEND_API_URL + "/"+isSingleProductCheckout+"/"+providerId);
  }
}
