import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  constructor(){}
  ngOnInit(){
    console.log("Seller Auth");
  }
  signUp(data:object){
    console.warn(data)
  }

}