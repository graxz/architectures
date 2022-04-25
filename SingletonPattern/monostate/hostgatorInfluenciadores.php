<?php

class HostgatorInfluenciadores {
  private static $members = [];

  private function __constructor () {}

  public function setMembers ( $members ) {
    self::$members = array_merge($this->members, $members)
  }

  public function getMembers () {
    return self::$members
  }
}
