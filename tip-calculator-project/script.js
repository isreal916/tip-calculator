
const button_1 =$("#but-1").val();
const button_2 =$('#but-2').val();
const button_3 =$("#but-3").val();
const button_4 =$("#but-4").val();
const button_5 =$("#but-5").val();
const custom = $("#custom");

const num_people = $('#num-people');
const bill= $("#bill");
$('#but-3').click(()=>{
    const amount = bill.val()*( 1 + button_3)/100;
  
    const per =  amount/num_people.val();
    $('#total').html(` $${per.toFixed(2)}`);
    const per_person= bill.val() * button_3/100 /num_people.val();
    $('#price').html(`$${per_person.toFixed(2)}`)
   
});
$('#but-1').click(()=>{
    const amount = bill.val()*( 1 + button_1)/100;
  
    const per =  amount/num_people.val();
    $('#total').html(` $${per.toFixed(2)}`);
    const per_person= bill.val() * button_1/100 /num_people.val();
    $('#price').html(`$${per_person.toFixed(2)}`)
    
});$('#but-2').click(()=>{
    const amount = bill.val()*( 1 + button_2)/100;
  
    const per =  amount/num_people.val();
    $('#total').html(` $${per.toFixed(2)}`);
    const per_person= bill.val() * button_2/100 /num_people.val();
    $('#price').html(`$${per_person.toFixed(2)}`)
   
});$('#but-4').click(()=>{
    const amount = bill.val()*( 1 + button_4)/100;
  
    const per =  amount/num_people.val();
    $('#total').html(` $${per.toFixed(2)}`);
    const per_person= bill.val() * button_4/100 /num_people.val();
    $('#price').html(`$${per_person.toFixed(2)}`)
    
});$('#but-5').click(()=>{
    const amount = bill.val()*( 1 + button_5)/100;
  
    const per =  amount/num_people.val();
    $('#total').html(` $${per.toFixed(2)}`);
    const per_person= bill.val() * button_5/100 /num_people.val();
    $('#price').html(`$${per_person.toFixed(2)}`)
    
});


$("#but-1,#but-2,#but-3,#but-4,#but-5,#custom").click(()=>{
    if (num_people.val() <= 0) {
        $("#error").css('display','block')
        $(num_people).css('border','1px solid red');
        setTimeout(() => {
            $("#error").css('display','none');
            $(num_people).css('border','none');
        }, 3000);
    }
})
$('#custom').change(()=>{
    const amount = bill.val()*( 1 + custom.val())/100;
 
    const per =  amount/num_people.val();
    $('#total').html(` $${per.toFixed(2)}`);
    const per_person= bill.val() * custom.val()/100 /num_people.val();
    $('#price').html(`$${per_person.toFixed(2)}`)
    
})
$("#reset").click(()=>{
    $("#price").html(`$0.00`);
    $("#total").html(`$0.00`);
    bill.val(``);
    num_people.val(``);
    custom.val(``)
})

