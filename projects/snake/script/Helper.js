function createMobilesArrows(nId, nUrl, nAlt) {
    return `
        <div id="${nId}" onclick="Move.moveByMobile(this)">
            <img src="${nUrl}" alt="${nAlt}">
        </div>

    `
}