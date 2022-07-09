import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../services/auth.service';
import { ICompany } from '../../../interfaces/company.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICampus } from '../../../interfaces/campus.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  company$?: Subscription;
  campus$?: Subscription;

  companies: ICompany[] = [];
  campus: ICampus[] = [];

  selectedCar = null;

  frmlogin: FormGroup = new FormGroup({});

  companyloading = false;
  campusloading = false;

  constructor(private _router: Router, private _authsvc: AuthService, private _frmbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.onGetCompanies();
    this.onBuildFrm();
  }

  onBuildFrm() {

    this.frmlogin = this._frmbuilder.group({
      company: [null, [Validators.required]],
      campus: [null, [Validators.required]],
    });

  }

  onGetCompanies() {

    this.companyloading = true;
    this.company$ = this._authsvc.companies()
    .subscribe((res) => {
      this.company$?.unsubscribe();
      this.companyloading = false;

        let { total, data } = res;

        this.companies = data;

      } );
  }

  onGetCampus() {

    this.campusloading = true;

    let {company } = this.values;

    console.log('company ===', company);

    this.campus$ = this._authsvc.campus( company )
    .subscribe((res) => {
      this.campus$?.unsubscribe();
      this.campusloading = false;

        let { total, data } = res;

        this.campus = data;

      } );
  }

  get values(): { company: string } {
    return this.frmlogin.value;
  }

  onLogin() {
    this._router.navigateByUrl('/admin/quotes');
  }

  ngOnDestroy(): void {
    this.company$?.unsubscribe();
  }
}
