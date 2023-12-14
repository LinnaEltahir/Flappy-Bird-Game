let move_speed = 3, gravity = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('.bird-1');

let bird_props = bird.getBoundingClientRect();

let backgorund = document.querySelector('.background').getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && game_state != 'Play'){
        document.querySelectorAll('pipe_sprite').forEach((e) => {
            e.remove();
        });
        img.style.display = 'block';
        bird.style.top = '40vh';
        game_state = 'Play';
        message.innerHTML = '';
        score_title.innerHTML = 'Score : ';
        score_val.innerHTML = '0';
        message.classList.remove('messageStyle');
        play()
    } 
});

function play(){
    if(game_state != 'Play') return;

    let pipe_sprite = document.querySelectorAll('.pipe_sprite');
    pipe_sprite.forEach((element) => {
        let pipe_sprite_props = element.getBoundingClientRect();
        bird_props = bird.getBoundingClientRect();

        if(pipe_sprite_props.right <= 0){
            element.remove();
        }else{
            if(bird_props.left < pipe_sprite_props.left + pipe_sprite_props. 
                width && bird_props.left + bird_props.width > pipe_sprite_props.
                left && bird_props.top < pipe_sprite_props.top + pipe_sprite_props.top +
                pipe_sprite_props.height && bird_props.top + pipe_sprite_props.height > pipe_sprite_props.top){
                    game_state = 'End';
                    message.innerHTML = 'Game Over' .fontcolor('red') + '<br>Press Enter Ro Restart';
                    img.style.display = 'none';
                    return;
                }else{
                    if(pipe_sprite_props.right < bird_props.left && 
                        element.increase_score == '1'){
                            score_val.innerHTML =+ score_val.innerHTML + 1;
                        }
                        element.style.left = pipe_sprite_props.left - move_speed + 'px';

                       
                    }
                }
        });
        requestAnimationFrame(move);
    }
    requestAnimationFrame(move)

    let bird_dy = 0;
    function apply_gravity(){
        if(game_state != 'Play') return;
        bird_dy = bird_dy+ gravity;
        document.addEventListener('keydown', (e) => {
            if(e.key == 'ArrowUp' || e.key == ' '){
                img.src = 'Bird-2.png';
                bird_dy = -7.6;
            }
        });
        document.addEventListener('keyup', (e) => {
            if(e.key == 'ArrowUp'|| e.key == ' '){
                img src = 'Bird.png';
            }
        });

        if(bird_props.top <= 0 || bird_props.bottom >= backgorund.bottom){
            game_state = 'End';
            message.style.left = '28vw';
            window.location.reload();
            message.classList.remove('messageStyle');
            return;
        }

    bird.style.top = bird_props.top + bird_dy + 'px';
     bird_props = bird.getBoundingClientRect();
     requestAnimationFrame(apply_gravity);

     let pipe_separation = 0;
     let pipe_gap = 35;

     function create_pipe(){
        if(game_state != 'Play') return;

        if(pipe_separation > 115){
            pipe_separation = 0;
            let pipe_posi = Math.floor(Math.random() * 43) + 8;
            let pipe
        }
     }
 }

}   