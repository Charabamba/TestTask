<?php 

$items = '<li class="catalog-item">Товар</li>
<li class="catalog-item">Товар</li>
<li class="catalog-item">Товар</li>
<li class="catalog-item">Товар</li>';
         
echo json_encode([
        'result' => 'success',
        'html' => $items]);