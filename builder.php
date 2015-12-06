<?php

?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Δ.js Documentation</title>
    <script type="text/javascript" src="dist/anything.min.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.6/semantic.min.css"/>
    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.6/semantic.min.js"></script>
    <script src="http://semantic-ui.com/javascript/library/tablesort.js"></script>
</head>
<body class="pushable">
<!-- Main Menu -->
<div class="ui fixed inverted menu">
    <a href="index.html" class="header item">
        <img class="logo" src="assets/tb_icon.png">
    </a>
    <a href="index.html" class="item">Home</a>
    <a href="playground.html" class="olive item">Playground</a>
    <a class="active orange item">Package builder</a>
    <a href="documentation.html" class="pink item">Documentation</a>
</div>

<!-- Page Contents -->
<div class="pusher">
    <h1>&nbsp;</h1>

    <h1>&nbsp;</h1>

    <div class="ui container">

        <div id="buiderFormDiv">

            <form id="builderForm" method="post">
                <table class="ui sortable celled table">
                    <thead>
                    <tr>
                        <th class="sorted ascending">Name</th>
                        <th>Filesize</th>
                        <th>
                            <div class="ui fitted slider checkbox">
                                <input checked class="fileSelectorCheckbox" type="checkbox" id="toggleAll">
                                <label></label>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                    $dir = __DIR__ . '/src/';
                    $files_list = array_diff(scandir($dir), array('..', '.'));
                    foreach ($files_list as $filekey => $file): ?>

                        <tr>
                            <td><a href="/src/<?php echo $file; ?>"><?php echo $file; ?></a></td>
                            <td><?php echo filesize(__DIR__ . '/src/'.$file); ?></td>
                            <td class="collapsing">
                                <div class="ui fitted slider checkbox">
                                    <input checked class="fileSelectorCheckbox" type="checkbox"
                                           value="<?php echo $file; ?>" name="fileselector[]">
                                    <label></label>
                                </div>
                            </td>
                        </tr>

                    <?php endforeach; ?>
                    </tbody>
                    <tfoot class="full-width">
                    <tr>
                        <th>
                            <button class="ui small orange labeled icon button">
                                <i class="configure icon"></i> Generate
                            </button>
                        </th>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>
            </form>
        </div>

        <div id="resultDiv" class="ui form" style="display: none;">
            <div class="field">
                <label><h1>anything.js:</h1></label>
                <textarea id="resultText"></textarea>
            </div>
            <button id="changeResult" class="ui small orange labeled icon button">
                <i class="configure icon"></i> Change
            </button>
        </div>

        <h1>&nbsp;</h1>

        <h1>&nbsp;</h1>


    </div>

</div>

<script>
    $(function () {

        $('table').tablesort();

        $('#toggleAll').click (function () {
            var checkedStatus = this.checked;
            $('.fileSelectorCheckbox').each(function () {
                $(this).prop('checked', checkedStatus);
            });
        });

        $('#changeResult').on('click', function () {
            $('#resultText').text("");
            $('#buiderFormDiv').slideDown();
            $('#resultDiv').fadeOut();
        });

        $('#builderForm').on('submit', function (event) {
            event.preventDefault();
            $('#buiderFormDiv').slideUp();
            $.ajax({
                url: 'builderReceiver.php',
                data: $('#builderForm').serialize(),
                method: 'post',
                datatype: 'json'
            }).done(function (response) {
                $('#resultDiv').fadeIn();
                $('#resultText').text(response.resultText);
                $('#resultTextMin').text(response.resultTextMin);
            }).error(function (error) {
                $('#buiderFormDiv').slideDown();
            });
            return false;
        });
    });
</script>

</body>
</html>











