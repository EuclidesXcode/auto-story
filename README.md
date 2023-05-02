# auto-story
automatic web story creation

## Inserir no arquivi functions.php do site pai essa função

```function send_post_to_api_auto_story( $post_id, $post) {
    if ( wp_is_post_revision( $post_id )) {
        return;
    }
    $url = "https://auto-story-api.herokuapp.com/story/insert"; // inserir o host e endpoint da API
    $data = array(
        'title' => $post->post_title,
        'excerpt' => $post->post_excerpt,
        'url_post' => get_permalink( $post_id )
    );
    $body = wp_json_encode( $data );
    $response = wp_remote_post( $url, array(
        'headers' => array(
            'Content-Type' => 'application/json',
        ),
        'body' => $body,
    ));
    if( is_wp_error( $response )) {
        error_log('Erro on send payload to API: ' . $response->get_error_message() );
    }
}
add_action('save_post', 'send_post_to_api_auto_story', 10, 2);``

e add as variaveis de ambiente do site transportador do storie