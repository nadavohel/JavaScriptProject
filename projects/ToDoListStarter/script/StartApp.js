class StartApp {
    static getMyMissionBackArray = [];
    static getMyMissionBack;
    static startMision() {
        this.getMyMissionBack = localStorage.getItem('allMission');

        if (this.getMyMissionBack != null) {
            this.getMyMissionBackArray = JSON.parse(this.getMyMissionBack);
        }

        for (let i = 0; i < this.getMyMissionBackArray.length; i++) {
            counterMissionArray.push(this.getMyMissionBackArray[i]);
        }

        MissionDataBase.divContainer.appendChild(MissionDataBase.divElement);
        MissionDataBase.textBox.value = '';
        CounterMission.showCounterMissionArray();
    }

    static writeMissionOnScreen(eventDataFromBrowser) {

        if (eventDataFromBrowser.keyCode == '13') {

            counterMissionArray.push((MissionDataBase.textBox.value))
            MissionDataBase.divContainer.appendChild(MissionDataBase.divElement);
            MissionDataBase.textBox.value = '';
            CounterMission.showCounterMissionArray();
        }
    }
}

StartApp.startMision(); 