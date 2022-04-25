<?php

require_once './hostgatorInfluenciadores.php';
require_once './youtubeChannel.php'

$cdftv = new YoutubeChannel('Codigo Fonte TV', 'codigofontetv');
$akita = new YoutubeChannel('Akita', 'fabioakita');

$hostgatorInfluenciadores = HostgatorInfluenciadores::getInstance();
$hostgatorInfluenciadores->setMembers([$cdftv, $akita])