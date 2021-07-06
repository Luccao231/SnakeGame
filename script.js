window.onload = function(){
 
    let stage = document.getElementById('stage');
    let ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 150);

    const vel = 1;

    let vx = vy = 0;
    let px = py = 10;
    let tp = 20; // Tamanho da peça
    let qp = 20; // Tamnho do tabuleiro
    let ax=ay=15; // Nascimento da cobra

    let trail = [];
    tail = 5;

    function game(){
        px += vx;
        py += vy;
        if (px <0) {
            px = qp-1;
        }
        if (px > qp-1) {
            px = 0;
        }
        if (py < 0) {
            py = qp-1;
        }
        if (py > qp-1) {
            py = 0;
        }

        ctx.fillStyle = "green";
        ctx.fillRect(0,0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        ctx.fillStyle = "black";
        for (let i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
            if (trail[i].x == px && trail[i].y == py)
            {
                vx = vy=0;
                tail =5;
            }
        }

        trail.push({x:px,y:py })
        while (trail.length > tail) {
            trail.shift();
        }

        if (ax==px && ay==py){
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
        }

    }

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38: // Cima
                vx = 0;
                vy = -vel;
                break;
            case 39: // Direita
                vx = vel;
                vy = 0;
                break;
            case 40: // Baixo
                vx = 0;
                vy = vel;
                break;          
            default:
                
                break;
        }


    }

}