const circleSymbol = 'O';
const crossSymbol = 'X';

let field = ["e","e","e","e","e","e","e","e","e"];
let isGameRunning = true;
let winCount = 0;

function handleClick( fieldId )
{
    if(isGameRunning)
    {
        if( field[parseInt(fieldId)] == "e" )
        {
            field[parseInt(fieldId)] = "x";
            document.getElementById(fieldId).innerHTML = crossSymbol;

            if( checkForWinner() )
            {
                return;
            }

            setCircle();
        }
    }
}

function setCircle()
{
    let fieldId = Math.round( Math.random() * 8  );

    if( field[parseInt(fieldId)] == "e" )
    {
        field[parseInt(fieldId)] = "O";
        document.getElementById(fieldId).innerHTML = circleSymbol;

        if( checkForWinner() )
        {
            return;
        }
    }
    else
    {
        setCircle();
    }
}

function checkForWinner()
{
    if(  field[0] == "x" && field[1] == "x" && field[2] == "x" )
    {
        setWinner( "x", [0,1,2]);
        return true;
    }
    else if( field[0] == "O" && field[1] == "O" && field[2] == "O")
    {
        setWinner( "O", [0,1,2]);
        return true;
    }

    else if(  field[3] == "x" && field[4] == "x" && field[5] == "x" )
    {
        setWinner( "x", [3,4,5]);
        return true;
    }
    else if( field[3] == "O" && field[4] == "O" && field[5] == "O")
    {
        setWinner( "O", [3,4,5]);
        return true;
    }

    else if(  field[6] == "x" && field[7] == "x" && field[8] == "x" )
    {
        setWinner( "x", [6,7,8]);
        return true;
    }
    else if( field[6] == "O" && field[7] == "O" && field[8] == "O")
    {
        setWinner( "O", [6,7,8]);
        return true;
    }

    else if(  field[0] == "x" && field[3] == "x" && field[6] == "x" )
    {
        setWinner( "x", [0,3,6]);
        return true;
    }
    else if( field[0] == "O" && field[3] == "O" && field[6] == "O")
    {
        setWinner( "O", [0,3,6]);
        return true;
    }

    else if(  field[1] == "x" && field[4] == "x" && field[7] == "x" )
    {
        setWinner( "x", [1,4,7]);
        return true;
    }
    else if( field[1] == "O" && field[4] == "O" && field[7] == "O")
    {
        setWinner( "O", [1,4,7]);
        return true;
    }

    else if(  field[2] == "x" && field[5] == "x" && field[8] == "x" )
    {
        setWinner( "x", [2,5,8]);
        return true;
    }
    else if( field[2] == "O" && field[5] == "O" && field[8] == "O")
    {
        setWinner( "O", [2,5,8]);
        return true;
    }

    else if(  field[0] == "x" && field[4] == "x" && field[8] == "x" )
    {
        setWinner( "x", [0,4,8]);
        return true;
    }
    else if( field[0] == "O" && field[4] == "O" && field[8] == "O")
    {
        setWinner( "O", [0,4,8]);
        return true;
    }

    else if(  field[2] == "x" && field[4] == "x" && field[6] == "x" )
    {
        setWinner( "x", [2,4,6]);
        return true;
    }
    else if( field[2] == "O" && field[4] == "O" && field[6] == "O")
    {
        setWinner( "O", [2,4,6]);
        return true;
    }
    else if( field[0] != "e" && field[1] != "e" && field[2] != "e" && field[3] != "e" && field[4] != "e" && field[5] != "e" && field[6] != "e" && field[7] != "e" && field[8] != "e")
    {
        setWinner( "d");
        return true;
    }
}

function setWinner( winner, winningLine  )
{
    isGameRunning = false;
    if( winner == "x")
    {
        wincount += 1;

        document.getElementById("status").innerHTML = 'Du hast gewonnen!';
    }

    else if( winner == "O")
    {
        document.getElementById("status").innerHTML = 'Du hast verloren!';
    }
}