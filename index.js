const ball = document.getElementById('ball');

function move(){

  alert('worked');  
  let str 

  let cases = Math.random() * 4;
  cases = Math.floor(cases);
  switch(cases)
  {
   case 0:
      document.getElementsByTagName('img')[0].style.paddingTop = '0px';
       
      document.getElementsByTagName('img')[0].style.paddingLeft = '0px';
      break;
     
   
  case 1:
      document.getElementsByTagName('img')[0].style.paddingTop = '700px'; // 0 
      document.getElementsByTagName('img')[0].style.paddingLeft = '0px';
      break;

  case 2:
      document.getElementsByTagName('img')[0].style.paddingTop = '0px'; // 0 
      document.getElementsByTagName('img')[0].style.paddingLeft = '1330px';
      break;

  case 3:
      document.getElementsByTagName('img')[0].style.paddingTop = '700px'; // 0 
      document.getElementsByTagName('img')[0].style.paddingLeft = '1320px';
      break;    

  default:
    alert('welcome!');

  }
  alert(cases);
  // document.getElementsByTagName('img')[0].style.paddingLeft = '0px';


  //  {
  //   position: absolute;
  //   top: 8px;
  //   left: 16px;
  //   font-size: 18px;
  
  // }

}
