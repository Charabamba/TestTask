<?php

function getDay($day, $month){
    $months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    if($day < 1 || $day > 31){
        echo "Неправильная дата";
        return;
    }
    if($month === 2 && $day > 29){
        echo "Неправильная дата";
        return;
    };
    if(($month === 4 || $month === 6 || $month === 9 || $month === 11) && $day > 30){
        echo "Неправильная дата";
        return;
    }
    
    $result = "{$day} {$months[$month-1]}";
    return $result;
}