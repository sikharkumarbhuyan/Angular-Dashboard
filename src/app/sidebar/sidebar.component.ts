import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Name: string = "BUVUD";
  logo: string ="https://www.cxk.org/wp-content/uploads/2018/12/adult-beard-boy-220453-200x300.jpg";
  profilepic: string  ="https://www.cxk.org/wp-content/uploads/2018/12/adult-beard-boy-220453-200x300.jpg";
  Username: string = "Jack Williams";
  side: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    if( this.side == true){
      document.getElementById('sidebar').style.right="80%";
      document.getElementById('sidebar').style.height="4em";
      this.side = false;
    }
    else if( this.side == false){
      document.getElementById('sidebar').style.right="0";
      document.getElementById('sidebar').style.height="80em";
      this.side = true;
    }
    
  }

}
