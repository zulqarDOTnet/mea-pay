import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { FileHandle } from "../_model/file-handle.model";
import { Provider } from "../_model/provider.model";
import { ProviderService } from "../_services/provider.service";

@Component({
  selector: "app-add-new-provider",
  templateUrl: "./add-new-provider.component.html",
  styleUrls: ["./add-new-provider.component.css"],
})
export class AddNewProviderComponent implements OnInit {
  isNewProvider = true;

  provider: Provider = {
    providerId: null,
    providerName: "",
    providerDescription: "",
    providerAPIURL: "https://",
    providerAPILogin: "",
    providerAPIPass: "",
    providerAPIMethod: "",
    providerAPIFormat: "",
    providerImages: [],
  };

  constructor(
    private providerService: ProviderService,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.provider = this.activatedRoute.snapshot.data['provider'];

    if(this.provider && this.provider.providerId) {
      this.isNewProvider = false;
    }
  }

  addProvider(providerForm: NgForm) {
    const formData = this.prepareFormDataForProvider(this.provider);
    //console.log(providerForm.value);
    this.providerService.addProvider(formData).subscribe(
      (response: Provider) => {
        //providerForm.reset();
        //this.provider.providerImages = [];
        this.router.navigate(['/showProviderDetails']);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormDataForProvider(provider: Provider): FormData {
    const uploadImageData = new FormData();
    uploadImageData.append(
      "provider",
      new Blob([JSON.stringify(provider)], { type: "application/json" })
    );

    for (var i = 0; i < this.provider.providerImages.length; i++) {
      uploadImageData.append(
        "imageFile",
        this.provider.providerImages[i].file,
        this.provider.providerImages[i].file.name
      );
    }
    return uploadImageData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.provider.providerImages.push(fileHandle);
    }
  }

  removeImages(i: number) {
    this.provider.providerImages.splice(i, 1);
  }

  fileDropped(fileHandle: FileHandle) {
    this.provider.providerImages.push(fileHandle);
  }
}
