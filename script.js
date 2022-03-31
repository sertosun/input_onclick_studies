

function on() {
    var vorname = document.getElementById("vorname").value;
    var nachname = document.getElementById("nachname").value;
    var alter = document.getElementById("alter").value;
    var result = document.getElementById("result");

    result.innerHTML =
      "Hallo " +
      vorname +
      " " +
      nachname +
      " Sie sind " +
      alter +
      " Jahre alt. ";

         // console.log(
        //   "Hallo " +
        //     vorname +
        //     " " +
        //     nachname +
        //     " Sie sind " +
        //     alter +
        //     " Jahre alt. "
        // );
        // alert(
        //   "Hallo " +
        //     vorname +
        //     " " +
        //     nachname +
        //     " Sie sind " +
        //     alter +
        //     " Jahre alt. "
        // );

}