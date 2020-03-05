<?php

$left_num = filter_input(INPUT_GET, 'left');
$right_num = filter_input(INPUT_GET, 'right');
$operator = filter_input(INPUT_GET, 'operators');


switch($operator){
    case 1: echo "$left_num + $right_num = ".($left_num + $right_num );
        break;
    case 2: echo "$left_num - $right_num = ".($left_num - $right_num ); 
        break;
    case 3: echo "$left_num / $right_num = ".($left_num / $right_num );
        break;
    case 4: echo "$left_num * $right_num = ".($left_num * $right_num );
        break;
}
