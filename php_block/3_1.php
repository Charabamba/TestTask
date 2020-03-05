<?php
function profitCalc($sum, $months, $percent){
	$result = $sum + $sum * $months/12 * $percent/100;
	return $result;
};
