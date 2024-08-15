import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { ShowProviderImagesDialogComponent } from '../show-provider-images-dialog/show-provider-images-dialog.component';
import { Provider } from '../_model/provider.model';
import { ProviderService } from '../_services/provider.service';

@Component({
  selector: 'app-show-provider-details',
  templateUrl: './show-provider-details.component.html',
  styleUrls: ['./show-provider-details.component.css']
})
export class ShowProviderDetailsComponent implements OnInit {

  showLoadMoreProviderButton = false;
  showTable = false;
  pageNumber: number = 0;
  providerDetails: Provider[] = [];
  displayedColumns: string[] = ['Id', 'Provider Name', 'description', 'Provider API URL', 'Actions'];

  constructor(private providerService: ProviderService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProviders();
  }

  searchByKeyword(searchkeyword) {
    console.log(searchkeyword);
    this.pageNumber = 0;
    this.providerDetails = [];
    this.getAllProviders(searchkeyword);
  }

  public getAllProviders(searchKeyword: string = "") {
    this.showTable = false;
    this.providerService.getAllProviders(this.pageNumber, searchKeyword)
    .pipe(
      map((x: Provider[], i) => x.map((provider: Provider) => this.imageProcessingService.createImages(provider)))
    )
    .subscribe(
      (resp: Provider[]) => {
        // console.log(resp);
        resp.forEach(provider => this.providerDetails.push(provider));
        console.log('msg', this.providerDetails);
        this.showTable = true;

        if(resp.length == 12) {
          this.showLoadMoreProviderButton = true;
        } else {
          this.showLoadMoreProviderButton = false;
        }

        // this.providerDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  loadMoreProvider() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllProviders();
  }

  deleteProvider(providerId) {
    this.providerService.deleteProvider(providerId).subscribe(
      (resp) => {
        this.getAllProviders();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  showImages(provider: Provider) {
    console.log(provider);
    this.imagesDialog.open(ShowProviderImagesDialogComponent, {
      data: {
        images: provider.providerImages
      },
      height: '500px',
      width: '800px'
    });
  }

  editProviderDetails(providerId) {
    this.router.navigate(['/addNewProvider', {providerId: providerId}]);
  }
}
