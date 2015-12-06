<?php
function estimatedSize($string)
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($string, '8bit');
    } else {
        return strlen($string);
    }
}


$result = $resultMin = "";
if (!empty($_POST['fileselector'])) {
    foreach ($_POST['fileselector'] as $selected_file) {
        $dir = __DIR__ . "/src/" . $selected_file;
        if (file_exists($dir) && !is_dir($dir)) {
            $result .= file_get_contents(__DIR__ . "/src/" . $selected_file) . "\n";
        }
    }


}


header('Content-Type: application/json');
header('X-PHP-Response-Code: 200', true, 200);

echo json_encode(
    array(
        'resultText' => $result,
        'resultTextMin' => '',
        'lines_of_text' => substr_count($result, "\n"),
        'file_size' => estimatedSize($result),
        'file_sizeMin' => estimatedSize($resultMin)
    )
);