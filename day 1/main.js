var sequence = "R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2";

var direction = {x:0, y: 1};
var position = {x:0, y: 0};
var footprints = [];
var firstRevisitedFootprint; 

function rotateLeft(currentDir){
    return {x: -currentDir.y, y: currentDir.x};
}

function rotateRight(currentDir){
    return {x: currentDir.y, y: -currentDir.x};
}

sequence.split(', ').forEach(function(s){
    var turnDir = s[0];
    var steps = s.substring(1);
    direction = turnDir === 'R' ? rotateRight(direction) : rotateLeft(direction);

    for(var i = 0; i < steps; ++i){
        position.x += direction.x;
        position.y += direction.y;

        if(!firstRevisitedFootprint) {
            var footprint = position.x+","+position.y; 
            if(footprints.indexOf(footprint) != -1){
                firstRevisitedFootprint = {x:position.x, y:position.y};
            }else{
                footprints.push(footprint);
            }
        }
        
    }
    
});

var distanceToFinish = Math.abs(position.x) + Math.abs(position.y);
var distanceToFirstRevisitedFootprint = Math.abs(firstRevisitedFootprint.x) + Math.abs(firstRevisitedFootprint.y);
console.log("Distance to finish", distanceToFinish);
console.log("Distance to first revisited footprint", distanceToFirstRevisitedFootprint);