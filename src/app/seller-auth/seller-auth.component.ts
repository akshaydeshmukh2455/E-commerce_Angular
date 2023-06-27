import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  constructor(private seller:SellerService,private router:Router){}
  ngOnInit(){
    console.log("Seller Auth");
  }
  signUp(data:object):void{
    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['seller-home'])
      }
      console.warn(result)
    });
  }

}
