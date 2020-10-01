import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-course';
  constructor(private toastr: ToastrService,
    private spinner: NgxSpinnerService) {}
 
  ngOnInit(): void {
    this.showSuccess();
    this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Angular core projesine hoşgeldiniz.', 'Giriş başarılı!');
  }
 showSpinner(){
  this.spinner.show();
 
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
 }
  
}
