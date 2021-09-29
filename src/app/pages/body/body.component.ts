import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  elements: any = [];
  headElements = [
    "Application Name",
    "User Name",
    "Net Balance",
    "Reg. Date ",
    "Status",
    "Balance in Company Currency",
    "Balance",
    "MSA Total Balance",
    "Super Total Balance",
    "Credit",
    "Setting Balance",
    "Deal Currency",
    "Deal Rate",
    "Balance in Deal Currency",
  ];

  ngOnInit() {
    for (let i = 1; i <= 8; i++) {
      this.elements.push({
        ApplicationName: "Mary Dona",
        UserName: "MaryDona",
        NetBalance: "INR",
        RegDate: "30/10/2020",
        Status: "ACTIVE",
        BalanceinCompanyCurrency: "107,41.90",
        Balance: "0.00",
        MSATotalBalance: "0.00",
        SuperTotalBalance: "107,41.90",
        Credit: "0.00",
        SettingBalance: "107,41.90",
        DealCurrency: "INR",
        DealRate: "10%",
        BalanceinDealCurrency: "0.00",
      });
    }
  }
}
