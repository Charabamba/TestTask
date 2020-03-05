<?php
function calcDeg($hours, $minutes){
    if($hours < 0 || $hours > 12 || $minutes < 0 || $minutes > 60){
        return "На циферблате нет таких цифр";
    }
    $deg = abs($hours*30 - $minutes*6);
    $deg === 360 ? $deg -=360 : $deg;
    return $deg;
}