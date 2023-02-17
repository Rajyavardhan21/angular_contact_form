import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private serverUrl = 'http://localhost:3000/contact-form';

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any) {
    return this.http.post(this.serverUrl, formData);
  }
}
