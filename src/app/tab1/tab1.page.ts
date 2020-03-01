import { Component } from '@angular/core';
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private sanitizer: DomSanitizer) { }
    photo: any;

    async takePicture() {
        const takePhoto = await Plugins.Camera.getPhoto({
            quality: 90,
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera
        });

        this.photo = this.sanitizer.bypassSecurityTrustUrl(takePhoto && (takePhoto.dataUrl))
    }


}
