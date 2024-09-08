<?php
function Assets_NFT_response_getABI ($params) {
	Q_Valid::nonce(true);

	$request = array_merge($_REQUEST, $params);
	$pathABI = Q::ifset($request, 'pathABI', "Assets/templates/R1/NFT/contract");

	$ABI = Users_Web3::getABI($pathABI);

	return $ABI;
}