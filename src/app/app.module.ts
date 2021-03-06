import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListBranchesComponent } from './list-branches/list-branches.component';
import { BranchComponent } from './branch/branch.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DepositToBranchFundsComponent } from './deposit-to-branch-funds/deposit-to-branch-funds.component';
import { ChangeInterestComponent } from './change-interest/change-interest.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewAllApprovedLoansComponent } from './view-all-approved-loans/view-all-approved-loans.component';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';
import { ViewInterestPlansComponent } from './view-interest-plans/view-interest-plans.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CustomerComponent,
    HeaderComponent,
    AdminSetupComponent,
    AdminLoginComponent,
    TransactionComponent,
    AdminDashboardComponent,
    ListBranchesComponent,
    BranchComponent,
    ErrorpageComponent,
    DepositToBranchFundsComponent,
    ChangeInterestComponent,
    ViewAccountComponent,
    ViewAllApprovedLoansComponent,
    ViewPendingLoanRequestComponent,
    ViewInterestPlansComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
