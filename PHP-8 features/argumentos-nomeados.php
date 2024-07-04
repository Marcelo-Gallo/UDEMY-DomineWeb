<?php
    fucntion sendEmail($destinatarios  = "", $cc="", $assunto="", $mensagem=""){
        echo "Destinaários: " . $destinatarios . "<br>";
        echo "CC: ". $cc . "<br>";
        echo "Assunto: " . $assunto . "<br>";
        echo "Mensagem: " . $mensagem . "<br>";
    }

    /* convencional -> respeitando a ordem dos parâmetros*/
    sendEmail{
        "testesgallo@gmail.com",
        "teste@teste.com.br", 
        "Argumentos Nomeados",
        "Dominando a feature de argumentos nomeados do PHP 8"
    };

?>