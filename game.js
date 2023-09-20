let tog = 1



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            rollback = p1sum%100;
            p1sum = 100;
            p1sum = p1sum - rollback;
            console.log("You rolled back!");

            // sum = p1sum
        }

        if (p1sum == 3) {
            p1sum = 22
            console.log("stepped on a ladder");
        }
        if (p1sum == 7) {
            p1sum = 28
            console.log("stepped on a ladder");
        }
        if (p1sum == 13) {
            p1sum = 8
            console.log("stepped on a snake");
        }
        if (p1sum == 15) {
            p1sum = 61
            console.log("stepped on a ladder");
        }
        if (p1sum == 7) {
            p1sum = 28
            console.log("stepped on a ladder");
        }
        if (p1sum == 25) {
            p1sum = 17
            console.log("stepped on a snake");
        }
        if (p1sum == 35) {
            p1sum = 45
            console.log("stepped on a ladder");
        }
        if (p1sum == 49) {
            p1sum = 45
            console.log("stepped on a snake");
        }
        if (p1sum == 52) {
            p1sum = 71
            console.log("stepped on a ladder");
        }
        if (p1sum == 57) {
            p1sum = 64
            console.log("stepped on a ladder");
        }
        if (p1sum == 66) {
            p1sum = 23
            console.log("stepped on a snake");
        }
        if (p1sum == 68) {
            p1sum = 75
            console.log("stepped on a ladder");
        }
        if (p1sum == 78) {
            p1sum = 84
            console.log("stepped on a ladder");
        }
        if (p1sum == 88) {
            p1sum = 77
            console.log("stepped on a snake");
        }
        if (p1sum == 94) {
            p1sum = 71
            console.log("stepped on a snake");
        }
        if (p1sum == 96) {
            p1sum = 74
            console.log("stepped on a snake");
        }
        if (p1sum == 99) {
            p1sum = 83
            console.log("stepped on a snake");
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            rollback = p2sum%100;
            p2sum = 100;
            p2sum = p2sum - rollback;
            console.log("You rolled back!");
            // sum = p1sum
        }
        

        if (p2sum == 3) {
            p2sum = 22
            console.log("stepped on a ladder");
        }
        if (p2sum == 7) {
            p2sum = 28
            console.log("stepped on a ladder");
        }
        if (p2sum == 13) {
            p2sum = 8
            console.log("stepped on a snake");
        }
        if (p2sum == 15) {
            p2sum = 61
            console.log("stepped on a ladder");
        }
        if (p2sum == 7) {
            p2sum = 28
            console.log("stepped on a ladder");
        }
        if (p2sum == 25) {
            p2sum = 17
            console.log("stepped on a snake");
        }
        if (p2sum == 35) {
            p2sum = 45
            console.log("stepped on a ladder");
        }
        if (p2sum == 49) {
            p2sum = 45
            console.log("stepped on a snake");
        }
        if (p2sum == 52) {
            p2sum = 71
            console.log("stepped on a ladder");
        }
        if (p2sum == 57) {
            p2sum = 64
            console.log("stepped on a ladder");
        }
        if (p2sum == 66) {
            p2sum = 23
            console.log("stepped on a snake");
        }
        if (p2sum == 68) {
            p2sum = 75
            console.log("stepped on a ladder");
        }
        if (p2sum == 78) {
            p2sum = 84
            console.log("stepped on a ladder");
        }
        if (p2sum == 88) {
            p2sum = 77
            console.log("stepped on a snake");
        }
        if (p2sum == 94) {
            p2sum = 71
            console.log("stepped on a snake");
        }
        if (p2sum == 96) {
            p2sum = 74
            console.log("stepped on a snake");
        }
        if (p2sum == 99) {
            p2sum = 83
            console.log("stepped on a snake");
        }

        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 63.8}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 67.5 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 63.8}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 67.5 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 63.8}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 67.5 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 63.8}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 67.5 - correction}px`
            }

        }



    }
}

document.getElementById("diceBtn").addEventListener("click", function () {
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', -20, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 35, num)

    }

    tog = tog + 1

    console.log("p1 position: "+p1sum);
    console.log("p2 position: "+p2sum);


})

/*
This script was taken from: 
https://www.youtube.com/watch?v=dcRqXrl5804
Youtube Channel: Techy Web Dev
https://github.com/jahid28/Games/blob/main/SnakesAndLadder/game.js
Github: jahid28

Modified to better suit my own board arrangement and follow the roll back ruleset where pieces have to roll backwards
upon exceeding the 100th tile of the board based on the remaining amount of steps left after rolling
*/