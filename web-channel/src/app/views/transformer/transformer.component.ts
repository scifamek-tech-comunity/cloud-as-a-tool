import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.scss'],
})
export class TransformerComponent implements OnDestroy {
  convertedImg: any;
  imgToTransform: any;
  private subscription?: Subscription;

  constructor(private http: HttpClient) {}

  /**
   * Envía la solicitud de conversión al servidor
   */
  public convert() {
    const endpoint = 'resize-image-to-square';
    const path = `${environment.server}/${endpoint}`;
    this.subscription?.unsubscribe();
    this.subscription = this.http
      .post<any>(path, {
        image: this.imgToTransform,
      })
      .subscribe((x) => {
        console.log(x);
        
        this.convertedImg = x.converted;
      });
  }

  /**
   * Se usa para eliminar la suscripción si está activa
   */
  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  /**
   * Sube la imagen desde el ordenador
   */
  public uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', (x) => {
      if (input.files) {
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          this.imgToTransform = reader.result;
          console.log(this.imgToTransform);
        };
        reader.readAsDataURL(file);
      }
    });
    input.click();
  }
}
