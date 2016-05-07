<?php
/**
 * Created by PhpStorm.
 * User: cash
 * Date: 5/7/16
 * Time: 11:14 AM
 */

namespace Cash;

class View {

    public function __construct($title) {
        $this->title = $title;
    }

    /**
     * Create the HTML for the contents of the head tag
     * @return string HTML for the page head
     */
    public function head() {
        return <<<HTML
<meta charset="utf-8">
<title>$this->title</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="cash.css">
HTML;
    }

    private $title;

}