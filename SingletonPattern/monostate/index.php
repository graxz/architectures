<?php

require_once './hostgatorInfluenciadores.php';
require_once './youtubeChannel.php'

$cdftv = new YoutubeChannel('Codigo Fonte TV', 'codigofontetv');
$akita = new YoutubeChannel('Akita', 'fabioakita');

$hostgatorInfluenciadores = new HostgatorInfluenciadores();
$hostgatorInfluenciadores->setMembers([$cdftv, $akita]);