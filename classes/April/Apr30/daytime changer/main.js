 $( function() {


   $('#dawn').select( function(){
   	      console.log('love');
          $('header').css('color', "white");
   });





    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();


  });





 

