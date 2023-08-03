
class methodOnMissions {
    
    static deleteMission(index) {
        counterMissionArray.splice(index, 1);
        CounterMission.showCounterMissionArray();
        saveAllMision()
    }
    
    static editToMission(index) {
        let editText = prompt("עריכת משימה", counterMissionArray[index]);
        counterMissionArray[index] = editText;
        CounterMission.showCounterMissionArray();
    }
    
    static clearAllMissions() { 
        MissionDataBase.divContainer.innerHTML = '';
        
        while (counterMissionArray.length > 0) {
            counterMissionArray.pop();
        }
        this.saveAllMision()
    }
    
    static saveAllMision() {
        localStorage.setItem('allMission', JSON.stringify(counterMissionArray));
    }
    
    
}