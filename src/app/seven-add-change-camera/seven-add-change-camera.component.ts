import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './seven-add-change-camera.component.html',
  styleUrls: ['./seven-add-change-camera.component.css']
})
export class SevenAddChangeCameraComponent implements OnInit {
  myRadio : String;
  showError = false;
  showSuccess = false;
  Camid : any;
  availableCars = [
    {
      name : 'Lorem1',
      camera : 'Cam1',
      id : 989898,
      img: '../../assets/cam1.jpeg',
    },
    {
      name : 'Lorem2',
      camera : 'Cam2',
      id : 989898,
      img: '../../assets/cam2.jpeg',
    },
    {
      name : 'Lorem3',
      camera : 'Cam3',
      id : 989898,
      img: '../../assets/cam3.jpg',
    },
    {
      name : 'Lorem4',
      camera : 'Cam4',
      id : 98999,
      img: '../../assets/cam1.jpeg',
    }
  ];
  selectedCars:any;

  draggedCar: any;

  constructor() { }

  ngOnInit() {
    this.selectedCars = [];
   
  }
//   drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     console.log(JSON.stringify(ev));
//   }

//   allowDrop(ev) {
//     ev.preventDefault();
//   }

//   drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//     console.log(JSON.stringify(ev));
//   }


// startDrag(x){
//   alert(1);
// console.log(JSON.stringify(x));
// this.draggedCar = x;
// }

// dragEnd(){
//   alert(2);
// }

add(){
  if(this.myRadio && this.draggedCar){
    console.log(this.myRadio );
    console.log(this.draggedCar.name );
    console.log(this.draggedCar.camera );
    console.log(this.draggedCar.id );
    this.showError = false;
    this.showSuccess = true;
    this.Camid= this.draggedCar.id;
    console.log(this.Camid);
  }
  else{
    this.showError = true;
    this.showSuccess = false;
  }

}

dragStart(car) {
  this.draggedCar = car;
  console.log(JSON.stringify(this.draggedCar));
}

drop(event) {
  if(this.draggedCar) {
      let draggedCarIndex = this.findIndex(this.draggedCar);
      this.selectedCars = [this.selectedCars, this.draggedCar];
      this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
      // this.draggedCar = null;
      let vala = Object.values(this.draggedCar);
      console.log('dragged '+vala);
      console.log('selected'+  this.selectedCars);
  }
 
}

dragEnd() {
  // this.draggedCar = null;
}

findIndex(car) {
  let index = -1;
  for(let i = 0; i < this.availableCars.length; i++) {
      if(car.name === this.availableCars[i].name) {
          index = i;
          break;
      }
  }
  return index;
}

}
