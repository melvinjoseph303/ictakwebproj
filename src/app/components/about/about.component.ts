import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  
// industry partner data
industryPartnersArray:any =[
  {
    imgName:"https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/isro.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/EY.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/Speridian.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/Gtech.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/isro.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/TATAelxsi.jpg?resize=150%2C150&ssl=1"
  }
]


// knowledge patner data
knwdgPartnersArray:any =[
  {
    imgName:"https://i2.wp.com/ictkerala.org/wp-content/uploads/2018/12/KSITM-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/01/Ui-path.png?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/KSITl-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/KSUM-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/Kdisc-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/SCERT-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2018/12/KTU-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/01/Untitled-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/ASAP-1.jpg?resize=150%2C150&ssl=1"
  },
  {
    imgName:"https://i1.wp.com/ictkerala.org/wp-content/uploads/2018/12/ICFOSS-1.jpg?resize=150%2C150&ssl=1"
  }
]


  ngOnInit(): void {
  }

  // owl carosel options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

}
