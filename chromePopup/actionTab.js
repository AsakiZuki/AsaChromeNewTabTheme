let asa = Array(localStorage.getItem("URLSave"));
if (asa[0] === null) { localStorage.setItem("URLSave", '') }

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //Get Current Website URL
    let url = tabs[0].url;
    let title = tabs[0].title;
    let asaGetQR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    let asaURLProtocol = new URL(url).protocol;
    document.getElementById("currentWebsiteTitle").value = title;
    document.getElementById("currentWebsiteURL").value = url;

    document.getElementById("generateQRCodeFromInput").onclick = () => {

        url = document.getElementById("currentWebsiteURL").value;
        title = document.getElementById("currentWebsiteTitle").value;
        asaGetQR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;

        let asaURLProtocol2 = new URL(url).protocol;
        if ((asaURLProtocol2 === 'https:') || asaURLProtocol2 === 'http:') {
            document.getElementById("QRGenerateTab").innerHTML = `<a>Generate QR Code Tab</a>
            <div id="QRCodeGenerate">
            </div>`;
            document.getElementById("QRCodeGenerate").innerHTML = `<img draggable="false" src="${asaGetQR}">`;
            document.getElementById("QRGenerateTab").innerHTML += `<button style="cursor: pointer" id="DownloadQRCode">Download</button></a>`;
        } else {
            document.getElementById("QRGenerateTab").innerHTML = `<a>Generate QR Code Tab</a>
            <div id="QRCodeGenerate">
                <div
                    style="background-color: rgb(65, 65, 65);; padding: 8px; outline: 2px solid #000; border-top: 5px solid rgb(36, 36, 36);">
                    Oh no, that's not a website URL :(
                </div>
            </div>`;
        }

        document.getElementById("DownloadQRCode").onclick = async () => {
            const image = await fetch(asaGetQR);
            const imageBlog = await image.blob();
            const imageURL = URL.createObjectURL(imageBlog);

            const link = document.createElement('a');
            link.href = imageURL;
            link.download = `asaChromeQR.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        if (((asaURLProtocol === 'chrome:') || (asaURLProtocol === 'chrome-extension:')) && ((asaURLProtocol !== 'http') || (asaURLProtocol !== 'https'))) {
            return;
        }

        if ((asa[0] === null) || (asa[0] === '')) {
            let asaArrayGet = [{
                "url": url,
                "title": title
            }]
            localStorage.setItem("URLSave", JSON.stringify(asaArrayGet))
        } else {
            let asaArrayGet = JSON.parse(localStorage.getItem("URLSave"));
            for (let index = 0; index < asaArrayGet.length; index++) {
                if (asaArrayGet[index].url === url) { return };
            }
            asaArrayGet[asaArrayGet.length] = {
                "url": url,
                "title": title
            };
            localStorage.setItem("URLSave", JSON.stringify(asaArrayGet))
        }
    }
});

let asaAnimationIsReset = 0;

if (localStorage.getItem("asaShorcutRealtime") === null) {
    localStorage.setItem("asaShorcutRealtime", JSON.stringify([
        "https://youtube.com",
        "https://facebook.com",
        "https://twitter.com"
    ]))
}

document.getElementById("addCurrentWebsiteToShortcut").onclick = () => {
    let currentWebsiteURL = document.getElementById("currentWebsiteURL").value;
    let currentWebsiteURLProtocol = new URL(currentWebsiteURL).protocol;

    if (!((currentWebsiteURLProtocol === 'http:') || (currentWebsiteURLProtocol === 'https:'))) {
        document.getElementById("shortcutNotication").style.animationName = 'shortcutNotication';
        document.getElementById("shortcutNotication").style.animationDuration = '3.5s';
        if (asaAnimationIsReset === 0) {
            setTimeout(asaResetAnims, 3500);
        }
        asaAnimationIsReset = 1;
        return;
    }

    let asaArray = JSON.parse(localStorage.getItem("asaShorcutRealtime"));
    let scanWWW = new URL(currentWebsiteURL).host.search('www.');
    let asaURL = new URL(currentWebsiteURL).host;
    if (scanWWW === 0) { asaURL = asaURL.replace('www.', '') };
    for (let asaIndex = 0; asaIndex < asaArray.length; asaIndex++) {
        let asaURLIndex = new URL(asaArray[asaIndex]).host;
        if (asaURLIndex.search('www') === 0) { asaURLIndex = asaURLIndex.replace('www.', '') }
        if (asaURLIndex === asaURL) {
            return;
        }
    }

    let finalURL = `${new URL(currentWebsiteURL).protocol}//${asaURL}`;
    asaArray[asaArray.length] = finalURL;
    let asaAddToArray = JSON.stringify(asaArray);
    localStorage.setItem("asaShorcutRealtime", asaAddToArray)
}
asaResetAnims = () => {
    document.getElementById("shortcutNotication").style.animationName = '';
    document.getElementById("shortcutNotication").style.animationDuration = '';
    asaAnimationIsReset = 0
}
document.getElementById("getURLHistory").onclick = () => {
    window.open('urlHistory.html', '_blank').focus()
}
//tab section
let asaTabActive = 0;
asaActiveTab = () => {
    if (asaTabActive === 0) {
        document.getElementById("TabManageScreen").style.display = 'block'
    } else {
        document.getElementById("TabManageScreen").style.display = 'none'
    }

    if (asaTabActive === 1) {
        document.getElementById("QRGenerateScreen").style.display = 'block'
    } else {
        document.getElementById("QRGenerateScreen").style.display = 'none'
    }
}
asaActiveTab();
document.getElementById("TabManageSection").onclick = () => {
    asaTabActive = 0;
    asaActiveTab();
}
document.getElementById("QRManageSection").onclick = () => {
    asaTabActive = 1;
    asaActiveTab();
}
let asaActionTabChecked = [];
let asaTabId = []

chrome.tabs.query({}, tabs => {
    asaCheckedCount(tabs);
    for (let indexB = 0; indexB < asaWebsiteListOpenOce.length; indexB++) {
        document.getElementById('manageTabStack').innerHTML += `
        <div id="sectionButton-${indexB}" class="sectionButton">
            <div id="asaActionTabs-${indexB}" class="asaTabManage">
            <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://${asaWebsiteListOpenOce[indexB]}">
            <a class="url">${asaWebsiteListOpenOce[indexB]}</a>
            <span class="fa fa-chevron-left"></span>
            <a class="count" id="websiteCounter-${indexB}">0</a>
            </div>

            <button id="massDeleteTabs-${indexB}" class="massDeleteTabs">
                <span class="fa fa-times" style="font-size: 20px; transform: translateX(0px); top: 22%;"></span>
            </button>
        </div>
        `
        asaActionTabChecked[indexB] = 0;
        document.getElementById(`massDeleteTabs-${indexB}`).onclick = () => {
            console.log(012)
        };
        document.getElementById('manageTabStack').innerHTML += `<div id="manageIndex-${indexB}" style="display: none;" class="manageTabs"></div>`;
        asaTabId[indexB] = idList = [];
        let asaCount = 0;
        for (let index = 0; index < tabs.length; index++) {
            if ((new URL(tabs[index].url).host) === asaWebsiteListOpenOce[indexB]) {
                let asaWebPageIcon = tabs[index].favIconUrl;
                let asaWebPageURL = tabs[index].url;
                let asaWebPageTitle = tabs[index].title;
                document.getElementById(`manageIndex-${indexB}`).innerHTML += `<div id="tabIndex-${index}" class="tabElement">
                <div id="openTabSectionDiv-${index}" class="openTab"></div>
                <button class="removeTabButton" id="closeWebsite-${index}"> <span style="font-size: 20px;" class="fa fa-times"></span> </button>
                <button class="removeTabButton" id="mutedTabs-${index}" style="right: 46px"> <span style="font-size: 20px;" class="fa fa-volume-off"></span> </button>
                <div class="webPageURL">
                <a style="position: absolute; left: 51.5px; font-family: cursive; top: calc(50% - 8px); transform: translateY(-50%);">${asaWebPageTitle}</a>
                </div>
                <div class="webPageURL">
                <a style="position: absolute; left: 51.5px; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; top: calc(50% + 7px); transform: translateY(-50%);">${asaWebPageURL}</a>
                </div>
                <img style="position: absolute; width: 32px; height: 32px; top: 50%; transform: translateY(-50%); left: 6.5px;; padding-right: 6.5; border-right: 1px solid #FFF;"
                    draggable="false"
                    src="${asaWebPageIcon}">
                </div>
                `

                asaTabId[indexB][asaCount] = tabs[index].id;
                asaCount++;

                chrome.windows.getCurrent(asaCurrent => {
                    if ((tabs[index].active === true) && (tabs[index].windowId === asaCurrent.id)) { document.getElementById(`tabIndex-${index}`).style.outline = `2px solid #0F0` };
                    if (!(tabs[index].windowId === asaCurrent.id)) { document.getElementById(`tabIndex-${index}`).style.outline = `2px solid #F00` };
                })
            }
        }

        document.getElementById(`websiteCounter-${indexB}`).innerHTML = asaTabId[indexB].length;
    }
    for (let index = 0; index < asaWebsiteListOpenOce.length; index++) {
        document.getElementById(`asaActionTabs-${index}`).onclick = () => {
            if (asaActionTabChecked[index] === 0) {
                document.getElementById(`asaActionTabs-${index}`).classList = 'asaTabManage asaTabManageActive';
                document.getElementById(`manageIndex-${index}`).style.display = 'block';
                asaActionTabChecked[index] = 1;
            } else {
                document.getElementById(`asaActionTabs-${index}`).classList = 'asaTabManage';
                document.getElementById(`manageIndex-${index}`).style.display = 'none';
                asaActionTabChecked[index] = 0;
            }
        }

        document.getElementById(`manageIndex-${index}`).onclick = () => {
            let asaElementLength = document.getElementById(`manageIndex-${index}`).getElementsByTagName('div').length;
            if (asaElementLength === 0) {
                document.getElementById(`manageIndex-${index}`).remove();
                document.getElementById(`asaActionTabs-${index}`).remove();
                document.getElementById(`sectionButton-${index}`).remove();
                document.getElementById(`massDeleteTabs-${index}`).remove();
            }
        }

        document.getElementById(`massDeleteTabs-${index}`).onclick = () => {
            for (let indexx = 0; indexx < asaTabId[index].length; indexx++) {
                setTimeout(() => { asaDeleteTabs(asaTabId[index][indexx]) }, 10);
            };
            document.getElementById(`manageIndex-${index}`).remove();
            document.getElementById(`asaActionTabs-${index}`).remove();
            document.getElementById(`sectionButton-${index}`).remove();
            document.getElementById(`massDeleteTabs-${index}`).remove();
        }
    }

    for (let index = 0; index < tabs.length; index++) {
        document.getElementById(`closeWebsite-${index}`).onclick = () => {
            document.getElementById(`tabIndex-${index}`).remove();
            setTimeout(() => { asaDeleteTabs(tabs[index].id) }, 10);
        };
        document.getElementById(`openTabSectionDiv-${index}`).onclick = () => {
            setTimeout(() => { openTabSection(tabs[index].id) }, 10);
        };

        document.getElementById(`mutedTabs-${index}`).onclick = () => {
            setTimeout(() => { mutedTabSelection(tabs[index].id, index) }, 10);
        };

        if (tabs[index].mutedInfo.muted === false) {
            document.getElementById(`mutedTabs-${index}`).getElementsByTagName('span')[0].classList = 'fa fa-volume-up'
        } else {
            document.getElementById(`mutedTabs-${index}`).getElementsByTagName('span')[0].classList = 'fa fa-volume-off'
        }
    };
});

chrome.tabs.onRemoved.addListener(tabs => {
    for (let index = 0; index < asaTabId.length; index++) {
        for (let indexx = 0; indexx < asaTabId[index].length; indexx++) {
            if (asaTabId[index][indexx] === tabs) {
                asaTabId[index].splice(indexx, 1);
                document.getElementById(`websiteCounter-${indexx}`).innerHTML = asaTabId[indexx].length;
            }
        }
    }
})

let asaWebsiteList = [];
let asaWebsiteListOpenOce = [];
asaCheckedCount = (websiteURL) => {
    for (let index = 0; index < websiteURL.length; index++) {
        asaWebsiteList[index] = new URL(websiteURL[index].url).host;
        asaCheckedOce(asaWebsiteList[index]);
    };
}
asaCheckedOce = (websiteURLOce) => {
    for (let index = 0; index < asaWebsiteListOpenOce.length; index++) {
        if (asaWebsiteListOpenOce[index] === websiteURLOce) { return }
    };
    asaWebsiteListOpenOce[asaWebsiteListOpenOce.length] = websiteURLOce;
}
asaDeleteTabs = async (asaTabId) => {
    await chrome.tabs.remove(asaTabId);
}
openTabSection = async (asaTabId) => {
    const tab = await chrome.tabs.get(asaTabId);
    const active = tab.active = true;
    await chrome.tabs.update(asaTabId, { active });
}
mutedTabSelection = async (asaTabId, asaElementIndex) => {
    const tab = await chrome.tabs.get(asaTabId);

    if (tab.mutedInfo.muted === true) {
        document.getElementById(`mutedTabs-${asaElementIndex}`).getElementsByTagName('span')[0].classList = 'fa fa-volume-up'
    } else {
        document.getElementById(`mutedTabs-${asaElementIndex}`).getElementsByTagName('span')[0].classList = 'fa fa-volume-off'
    }

    const muted = !tab.mutedInfo.muted;
    await chrome.tabs.update(asaTabId, { muted });
}