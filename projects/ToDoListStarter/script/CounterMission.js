class CounterMission {

    static showCounterMissionArray() {
        MissionDataBase.divElement.innerHTML = '';
        for (let i = 0; i < counterMissionArray.length; i++) {
            MissionDataBase.divElement.innerHTML += `${i + 1}.  ${counterMissionArray[i]} <br>`;
            const deleteElement = document.createElement('span');
            deleteElement.textContent = `X`;
            MissionDataBase.divElement.appendChild(deleteElement);

            deleteElement.style.position = "absolute";
            deleteElement.style.left = "10px";
            deleteElement.style.marginTop = "-40px";
            deleteElement.style.color = "black";
            deleteElement.style.width = "30px";
            deleteElement.style.textAlign = "center";
            deleteElement.style.cursor = "pointer";
            deleteElement.className = "hoverDeleteRow";
            deleteElement.setAttribute('onclick', `methodOnMissions.deleteMission(${i})`);

            const editElement = document.createElement('span');
            editElement.innerHTML = '&#x270D';
            MissionDataBase.divElement.appendChild(editElement);

            editElement.style.position = "absolute";
            editElement.style.left = "60px";
            editElement.style.marginTop = "-48px";
            editElement.style.color = "red";
            editElement.style.width = "30px";
            editElement.style.textAlign = "center";
            editElement.style.cursor = "pointer";
            editElement.className = "hoverDeleteRow";
            editElement.setAttribute('onclick', `methodOnMissions.editToMission(${i})`);
            MissionDataBase.divElement.setAttribute('id', `editId${i}`);
        }
    }
}