<?php
header('Content-type: text/xml');
?>
<Response>
    <Dial callerId="+1234562133"><?php echo $_POST['To'];?></Dial>
</Response>