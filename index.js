
/*this function work as follow : i generate every click a four random numbers and one for the cases , to walk based on 4 cases
in every case i will make one fixed and the another change based on the random number.
the random numbers ranges based on the image size , at the top and buttom the ball will walk always in the line of the stadium.
at the left and right will exceed the line a little bit to make us can score a random goals ! */
function welcome(){
let firstName = prompt('Enter your first name :');
let lastName = prompt('Enter your last name :');
alert('you are welcome ' + firstName + ' ' + lastName + ' Now You Can Start By clicking OK ! Good Luck !');
document.getElementsByClassName('slopeicon')[0].style.display = 'block';
}
function move(){

  
  let cases = Math.random() * 4;
  cases = Math.floor(cases);

  let case0 = Math.random() * 1331; // 1331 maximum left can go 
  case0 = Math.floor(case0);
  case0 = case0 + 'px';


  let case1 = Math.random() * 701; //maximum top or the buttom of stadium
  case1 = Math.floor(case1);
  case1 = case1 +'px';


  let case2 = Math.random() * 1331;
  case2 = Math.floor(case2);
  case2 = case2 + 'px';


  let case3 = Math.random() * 701;
  case3 = Math.floor(case3);
  case3 = case3 + 'px';
  switch(cases)
  {
   case 0:
      document.getElementsByTagName('img')[0].style.paddingTop = '22px';
      document.getElementsByTagName('img')[0].style.paddingLeft = case0;
      break;
     
   
  case 1:
      document.getElementsByTagName('img')[0].style.paddingTop = case1; 
      document.getElementsByTagName('img')[0].style.paddingLeft = '0px';
      break;

  case 2:
      document.getElementsByTagName('img')[0].style.paddingTop = '741px'; 
      document.getElementsByTagName('img')[0].style.paddingLeft = case2;
      break;

  case 3:
      document.getElementsByTagName('img')[0].style.paddingTop = case3; 
      document.getElementsByTagName('img')[0].style.paddingLeft = '1370px';
      break;    

  default:
    alert('welcome!');

  }
  alert('move on ! dont be mad if you still not score any goal');

}
