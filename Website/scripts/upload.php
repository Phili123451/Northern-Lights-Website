<?php
if (isset($_FILES['datei']))
{
    move_uploaded_file($_FILES['datei']['tmp_name'], 'upload/'.$_FILES['datei']['name']);
}
?>
