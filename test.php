<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode(array('status' => 'success', 'message' => 'POST request received.'));
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Only POST requests are allowed.'));
}
?>
