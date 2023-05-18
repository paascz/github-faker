const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git')

const FILE_PATH = './data.json';


// Code to select specific place to commit (starting from top left corner.)
// X, Y are points in the Cartesian plane (to the right and down).


const makeCommit = (x,y) => {
    const DATE = moment().subtract(1, 'y').add(1, 'd')
                    .add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE
    }

    // Here where's the commit magic happen
    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}).push();
    });
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
function loop() {
    x = randomIntFromInterval(1,51)
    y = randomIntFromInterval(4,10)
    makeCommit(x, y)
    console.log("Commit success! X = " + x + " & Y = " + y)
    setTimeout(loopComTempo, 200);
    
  }
  
  loop();
  