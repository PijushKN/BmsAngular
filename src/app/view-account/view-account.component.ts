import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../model/account.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {
  account: Account = new Account();
  constructor(private dataService: DataServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.viewAccountDetails();
  }
  viewAccountDetails() {
    const routeParams = this.route.snapshot.paramMap;
    const accNoFromRoute = Number(routeParams.get('accountNo'));
    this.dataService.getAccountDetails(accNoFromRoute).subscribe(
      response => {
        console.log(response.data);


        this.account = response.data;
      }
    )
  }

  onClickAccount(accNo:number) {
    this.dataService.getAccountDetails(accNo).subscribe(
      response => {
        console.log(response.data);


        this.account = response.data;
      }
    )
  }

}