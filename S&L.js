function startBtn(){
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("rulesBtn").style.display = "none";
    document.getElementById("boardContainer").style.display = "none";
    document.getElementById("game").style.display = "flex";
}
function showRules(){
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("rulesBtn").style.display = "none";
    document.getElementById("boardContainer").style.display = "none";
    document.getElementById("ruleSet").style.display = "flex";
}
function exitRuleSet(){
    document.getElementById("startBtn").style.display = "flex";
    document.getElementById("rulesBtn").style.display = "flex";
    document.getElementById("boardContainer").style.display = "flex";
    document.getElementById("ruleSet").style.display = "none";    
}