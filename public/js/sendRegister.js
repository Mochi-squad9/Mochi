function registerForm(event){

  preventDefault()

  $form = {
      guardian_name : $("#guardian_name").val() ,
      guardian_lastname : $("#guardian_lastname").val() ,
      cpf : $("#cpf").val(),
      phone : $("#phone").val(),
      state : $("#state").val(),
      cep :  $("#cep").val(),
      city : $("#city").val(),
      street : $("#street").val(),
      number : $("#number").val(),
      //school_state :  $("#school_state").val(),
      school_city : $("#city_id").val(),
      school_name : $("#school_name").val(),
      std_name : $("#std_name").val(),
      std_nickname : $("#std_nickname").val(),
      std_age : $("#std_age").val(),
      std_grade : $("#std_grade option:selected").text().trim(),
      school_id : "183016",
      city_id : "2309",
      products_list : allChecked(),
  };

  $.ajax({
    type: "POST",
    url: "/cadastro",
    data: JSON.stringify($form),
    contentType: "application/json",
    success: window.location.reload()
   });
}

function allChecked(){
    $n = [];
    $('input:checkbox').each(function () {
        if (this.checked){
          $data = $(this).attr("name")
          $n.push($data);
        }
    });
  return $n;
}
