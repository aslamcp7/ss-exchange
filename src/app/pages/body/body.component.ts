import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
})
export class BodyComponent implements OnInit {
  elements: any = [];
  headElements = ["id", "first", "last", "handle", "Aslam"];

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.elements.push({
        id: i,
        first: "User " + i,
        last: "Name " + i,
        handle: "Handle " + i,
        aslam: "aslam " + i,
      });
    }
  }
}
