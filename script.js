


$('.first').click(()=>{
    if ($('p').length<1){
        $('div').append('<p>Yeah you clicked me...so what now?</p>')
        console.log('yeah you clicked me')
        $('div').append('<button class="second"> randomize</button>')
    } // if

    $('.second').click(()=>{
        $('p').text('Ooh, feeling brave, are we?');

        $('.second').click(()=>{
            $('p').text('what about now?');
            if ($('.color').length<1){
             
             $('div').append('<button class="color"> MaGiC </button>');
            }
            $('.color').click(()=>{
                $('.first').css('background', 'lime');
                $('div').append('<img src="./megusmirk.jpg"></img>')
            })
        }) //$ .second


    }) //$ .second

  

})//$ . first

document.getElementById('color').value = ""

function getVal()
{

    var color = document.getElementById('color').value
   // alert(color);
    console.log(color);
    $('main').text(' your choosen color is:' + color )
    $('h1').css('background', color)
}
/*
let szin = 'lime'
$('h1').css('background', color)*/