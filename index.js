class SokoTouch{
    constructor(){

        this.sokostage = [
            {
                targetArr: [[8,2]],
                boxArr: [[4,5]],
                col: 10,
                playerArr: [[8,6]],
                pathArr: [
                    [1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[2,2],[2,3],[2,4],[2,5],[5,2],[6,2],[7,2],[8,2],[3,2],[3,3],[3,4],[4,3],[5,3],[6,3],[7,3],[8,3],[4,4],[5,4],[6,4],[7,4],[8,4],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[3,5],[4,6],[5,6],[6,6],[7,6],[8,6],[4,6],[5,7],[6,7],[7,7],[8,7]
                         ],
                row: 10,
            },
        ]

        this.declare()
        this.draw()
        
    }

    declare(){
        this.container = document.querySelector('.container')
        this.divColRow = []
        this.stage()
        this.player = document.querySelector('.player')
    }
    draw(){
        this.playerMove()
    }

    playerMove(){
        let $this = this
        this.player.style.left = this.sokostage[0].playerArr[0][1]*40+'px'
        this.player.style.top = this.sokostage[0].playerArr[0][0]*40+'px'
        for(let i=0; i<this.sokostage[0].row; i++){
            for(let j= 0; j<this.sokostage[0].col; j++){
                this.divColRow[i][j].addEventListener('click',function(e){
                    console.log(i,j);
                    if(e.target.classList.contains('path')){
                        $this.player.style.left = j*40+'px'
                        setTimeout(()=>{
                            $this.player.style.top = i*40+'px'
                        },1000)
                    }
                })
            }   
        }
    }

    stage(){
        let kl = this.sokostage[0]
        this.container.style.width = kl.col*40 + 'px'
        this.container.style.height = kl.row*40 + 'px'
        this.container.style.gridTemplateColumns = 'repeat('+ kl.col +',40px)'
        this.container.style.gridTemplateRows = 'repeat('+ kl.row +',40px)'
        this.container.setAttribute('stepY',kl.col)

        for (let i = 0; i < (kl.col*kl.row); i++){
            let allDiv = document.createElement('div')
            allDiv.className = 'allDiv'
            this.container.append(allDiv)
            
        }

        let player = document.createElement('div')
        player.className = 'player'
        this.container.append(player)

        let divs = document.getElementsByClassName('allDiv')
        
        for(let i=0; i<kl.row; i++){
            this.divColRow.push([])
            for(let j= i*kl.col; j<i*kl.col+kl.col; j++){
                this.divColRow[i].push(divs[j])
            }
        }

        for(let i=0; i<this.sokostage[0].pathArr.length; i++){
            for(let j=0; j<2; j++){
                this.divColRow[this.sokostage[0].pathArr[i][0]][this.sokostage[0].pathArr[i][1]].classList.add('path')
            }
        }


        // for(let i=0; i<this.sokostage[0].boxArr.length; i++){
        //     for(let j=0; j<2; j++){
        //         this.divColRow[this.sokostage[0].boxArr[i][0]][this.sokostage[0].boxArr[i][1]].classList.add('box')
        //     }
        // }

    }

}

    let sokoTouch = new SokoTouch()

