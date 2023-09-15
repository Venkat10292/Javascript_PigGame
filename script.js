let buttonRollDice=document.querySelector('.btn--roll');
let newGame=document.querySelector('.btn--new');
let holdGame=document.querySelector('.btn--hold');
let randomNumber=Math.trunc(Math.random()*6)+1;
let changeImage=document.querySelector('.dice');
let score=0;
let scorePlayer1=0;
let scorePlayer2=0;
let hold=0;//Is used to change the player acc to the count.
let b=document.querySelector('.modal');
let c=document.querySelector('.close-modal');
let click=0;
let colorChange=document.querySelector('.player--0');
let colorChange1=document.querySelector('.player--1');

let z=function()
{
    if(hold%2==0)
    {
        document.querySelector('#current--0').textContent=score;
    }
    else
    {
        document.querySelector('#current--1').textContent=score;
    }
}

buttonRollDice.addEventListener('click',function()
{
if(scorePlayer1<=100 && scorePlayer2<=100 )
{
    let randomNumber=Math.trunc(Math.random()*6)+1;
    if(randomNumber===1)
    {
        changeImage.src="dice-1.png";
        hold+=1;
        score=0;
        click=0;
        document.querySelector('#current--0').textContent=score;
        document.querySelector('#current--1').textContent=score;
        colorChange1.classList.toggle('player--active');
        colorChange.classList.toggle('player--active');
    }
    if(randomNumber===2)
    {
        click+=1;
        changeImage.src="dice-2.png";
        score+=2;
        z();
    }
    if(randomNumber===3)
    {
        click+=1;
        changeImage.src="dice-3.png";
        score+=3;
        z();
    }
    if(randomNumber===4)
    {
        click+=1;
        changeImage.src="dice-4.png";
        score+=4;
        z();
    }
    if(randomNumber===5)
    {
        click+=1;
        changeImage.src="dice-5.png";
        score+=5;
        z();
    }
    if(randomNumber===6)
    {
        click+=1;
        changeImage.src="dice-6.png";
        score+=6;
        z();
    }
}
else
{
    b.classList.remove('hidden');
}
});

newGame.addEventListener('click',function()
{
    score=0;
    scorePlayer1=0;
    scorePlayer2=0;
    hold=0;
    document.querySelector('#current--0').textContent=score;
    document.querySelector('#current--1').textContent=score;
    document.querySelector('#score--0').textContent=score;
    document.querySelector('#score--1').textContent=score;
});

holdGame.addEventListener('click',function()
{
    if(hold%2===0 && click>=1)
    {
        console.log(`${click} in %2==0`)
        scorePlayer1+=score;
        document.querySelector('#score--0').textContent=scorePlayer1;
        hold+=1;
        score=0;
        document.querySelector('#current--0').textContent=score;
        zo();
        colorChange.classList.toggle('player--active');
        colorChange1.classList.toggle('player--active');
    }
    else if(hold%2!==0 && click>=1)
    {
        console.log(`${click} in %2!=0`)
        scorePlayer2+=score;
        document.querySelector('#score--1').textContent=scorePlayer2;
        hold+=1;
        score=0;
        document.querySelector('#current--1').textContent=score;
        zo();
        colorChange1.classList.toggle('player--active');
        colorChange.classList.toggle('player--active');
    }
    click=0;
});

c.addEventListener('click',function()
{
    b.classList.add('hidden');   
});

document.addEventListener('keyup',function(e)
{
    console.log(e.key);
    if(e.key==="Escape")
    {
        b.classList.add('hidden');
    }   
});

const zo=function()
{
    if(scorePlayer1>=100)
    {
         document.querySelector('.winner_indication').textContent="Player 1 Wins";
    }
    if(scorePlayer2>=100)
    {
         document.querySelector('.winner_indication').textContent="Player 2 Wins";
    }
};
