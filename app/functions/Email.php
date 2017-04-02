<?php

require '../../vendor/autoload.php';

class Email
{
    private $_post;
    
    public function __construct($post)
    {
        $this->_post = $post;
    }
    
    public function send()
    {
        $request_body = json_decode('{
          "personalizations": [
            {
              "to": [
                {
                  "email": "rubenbertpingol14@gmail.com"
                }
              ],
              "subject": "Hello World from the SendGrid PHP Library!"
            }
          ],
          "from": {
            "email": "appworkmatrix@gmail.com"
          },
          "content": [
            {
              "type": "text/plain",
              "value": "Hello, Email!"
            }
          ]
        }');

        // $apiKey = getenv('SENDGRID_API_KEY');
        $apiKey = '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';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($request_body);
        
        echo json_encode($response);
    }
}

if ($_SERVER) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        if (array_key_exists('form_send_email', $_POST)) {
            
            $email = new Email($_POST);
            $email->send();
        }
    }
}