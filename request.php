<?php
header('Content-type: text/xml');
?>
<Response>
    <Dial callerId="+12345622133"><?php echo $_POST['To'];?></Dial>
</Response>