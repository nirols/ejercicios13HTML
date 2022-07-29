
/*condiciones para hayar
    mayor menor de 4 numeros
 */
    function resolver(){
      var n1= parseFloat(document.resultados2.Numero1.value);  
      var n2= parseFloat(document.resultados2.Numero2.value); 
      var n3= parseFloat(document.resultados2.Numero3.value); 
      var n4= parseFloat(document.resultados2.Numero4.value); 
  
      if(n1==n2 & n2==n3 & n3==n4){
      alert("Todos Son  Numeros iguales") /*Todos son iguales*/
      }
  
      //SEGUNDAS POSIBLIDADES MENORES
  if(n1<=n2 & n1<=n3 & n1<=n4){
      document.resultados2.resulmenor.value= n1; //POSIBLE OPCION
  }
  else if(n2<=n1 & n2<=n3 & n2<=n4){
      document.resultados2.resulmenor.value= n2;   //POSIBLE OPCION
  }
  else if(n3<=n1 & n3<=n2 & n3<=n4){
      document.resultados2.resulmenor.value= n3;   //POSIBLE OPCION
  }
  else if(n4<=n1 & n4<=n2 & n4<=n3){
      document.resultados2.resulmenor.value= n4;  //POSIBLE OPCION
  }
  
   //SEGUNDAS POSIBLIDADES MAYORES
  if(n1>=n2 & n1>=n3 & n1>=n4){
      document.resultados2.resulmayor.value= n1;   //POSIBLE OPCION
  }
  else if(n2>=n1 & n2>=n3 & n2>=n4){
      document.resultados2.resulmayor.value= n2;    //POSIBLE OPCION
  }
  else if(n3>=n4 & n3>=n4 & n3>=n4){
      document.resultados2.resulmayor.value= n3;   //POSIBLE OPCION
  }
  else if(n4>=n1 & n4>=n2 & n4>=n3){
      document.resultados2.resulmayor.value= n4;    //POSIBLE OPCION
  }
  
  //PRUEBAS
   
  if(n1==n3 & n2==n4)
  {
      alert("En esta forma el primero y el tercero son iguales junto--Con el segundo y el cuarto que tambien son iguales ")
  }
  
  else if(n1==n2 & n3==n4)
  {
      alert("En esta forma el primero y el segundo son iguales junto--Con el tercero y el cuarto que tambien son iguales")
  }
  
  else if(n1==n4 & n2==n3)
  {
      alert("En esta forma el primero y el cuarto son iguales junto--Con el segundo y el tercero que tambien son iguales")
  }
  
  //PRUEBAS MAYORES
  if(n1==n2 & n2==n3 & n4>n1)
  {
      alert("Las posiciones primera, segunda y tercera son iguales")
      document.resultados2.numerdiferentes.value= n4;
  
  }
  
  else if(n1==n3 & n2>n1 & n3==n4 )
  {
      alert("Las posiciones primera, tercera y cuarta son iguales")
      document.resultados2.numerdiferentes.value= n2;
  }
  
  else if(n1==n2 & n3>n1 & n4==n2)
  {
      alert("Las posiciones primera, segunda y cuarta son iguales")
      document.resultados2.numerdiferentes.value= n3;
  }
  
  else if(n1>n2 & n3==n2 & n4==n3)
  {
      alert("Las posiciones segunda, tercera y cuarta son iguales")
      document.resultados2.numerdiferentes.value= n1;
  }
  
   //PRUEBAS MENORES
   if(n1==n2 & n2==n3 & n4<n1) 
  {
      alert("Las posiciones primera, segunda y tercera son iguales")
      document.resultados2.numerdiferentes.value= n4;
  }
  
   else if(n1==n3 & n2<n1 & n3==n4)
  {
      alert("Las posiciones primera, tercera y cuarta son iguales")
      document.resultados2.numerdiferentes.value= n2;
  }
  
  else if(n1==n2 & n3<n1 & n4==n2)
  {
      alert("Las posiciones primera, segunda y cuarta son iguales")
      document.resultados2.numerdiferentes.value= n3;
   }
  else if(n1<n2 & n3==n2 & n4==n3)
   {
      alert("Las posiciones segunda, tercera y cuarta son iguales")
      document.resultados2.numerdiferentes.value= n1;
  
  }
  
  //IGUALES
   
  if(n1==n2 & n1==n3 & n1==n2){
  
      alert("Son iguales los numeros")
      document.resultados2.numeriguales.value= n1; //Posible opcion
  
      
  }
   if(n2==n1 & n2==n3 & n2==n4){
      alert("Son iguales los numeros")
      document.resultados2.numeriguales.value= n2; //Posible opcion
      
  }
  
   if(n3==n1 & n3==n2 & n3==n4){
      alert("Son iguales los numeros")
      document.resultados2.numeriguales.value= n3; //Posible opcion
      
  
  }
   if(n4==n1 & n4==n2 & n4==n3){
      alert("Son iguales los numeros")
      document.resultados2.numeriguales.value= n4; //Posible opcion
   
  }
  
  
  
  }
  