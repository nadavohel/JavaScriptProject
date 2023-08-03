function createMobilesArrows(nId, nUrl, nAlt) {
    return `
        <div id="${nId}" onclick="moveByMobile(this)">
            <img src="${nUrl}" alt="${nAlt}">
        </div>

    `
}