// multiplacate table
<?php
for($i =1; $i <= 12; $i++){
    echo $i . "*1=" . $i*1 ."<br>";

    // Method 1 :
    for($x=2; $x <= 12; $x++){
        echo $x . "*$i=" . $x*$i . "<br>";
    }

    // Method 2:
    echo $i . "*2=" . $i*2 ."<br>";
    echo $i . "*3=" . $i*3 ."<br>";
    echo $i . "*4=" . $i*4 ."<br>";
    echo $i . "*5=" . $i*5 ."<br>";
    echo $i . "*6=" . $i*6 ."<br>";
    echo $i . "*7=" . $i*7 ."<br>";
    echo $i . "*8=" . $i*8 ."<br>";
    echo $i . "*9=" . $i*9 ."<br>";
    echo $i . "*10=" . $i*10 ."<br>";
    echo $i . "*11=" . $i*11 ."<br>";
    echo $i . "*12=" . $i*12 ."<br>";
}
?>