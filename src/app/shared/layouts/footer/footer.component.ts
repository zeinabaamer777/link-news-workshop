import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public user = { email: '' };

  subscForm: NgForm;
  constructor(
    private translate: TranslateService,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  subscribe(subscForm: NgForm) {
    debugger
    if (subscForm.valid) {
      this.toaster.success(this.translate.instant('COMMON.subsc_txt'))
    }
    subscForm.form.reset();
  }
}
