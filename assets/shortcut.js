if (localStorage.getItem("asaShorcutRealtime") === null) {
    localStorage.setItem("asaShorcutRealtime", JSON.stringify([
        "https://youtube.com",
        "https://facebook.com",
        "https://twitter.com"
    ]))
}

let asaShortcutURL = JSON.parse(localStorage.getItem("asaShorcutRealtime"));
let asaCount = [];

let moveObjIsActive = 0;
let asaMoveObj = [];

asaDataLoad = () => {
    asaShortcutURL = JSON.parse(localStorage.getItem("asaShorcutRealtime"));
    asaCount = [];
}

asaSearchShortcut = (asaSearchValue) => {
    for (let index = 0; index < document.getElementById("asaCustomShortcutStack").getElementsByTagName('div').length; index++) {
        let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
        if (asaFocus.toLowerCase().search(asaSearchValue) === -1) {
            document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[index].style.display = 'none'
        } else {
            document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[index].style.display = 'block'
        }
    }
}

asaAddShortcut = () => {
    document.getElementById("shortcutNoticationSection").style.animation = '';
    document.getElementById("asaCustomShortcutStack").innerHTML = '';
    for (let index = 0; index < asaShortcutURL.length; index++) {
        asaCount[index] = index;
        document.getElementById("asaCustomShortcutStack").innerHTML += `<div id="asaShortcutPanel-${index}" class="textboxUrlPanel">
            <input value="${asaShortcutURL[index]}" id="ShortcutURL-${index}" autocomplete="off" class="setting_textbox_url" style="width: calc(100% - 62px); height: 30px; margin-left: 1px; top: 4px;" placeholder="Enter website URL">
            <button id="removeURLShortcut-${index}" style="position: absolute; left: calc(100% - 57px); width: 55px; margin-top: 4px;" class="asaButton" ;"><a>Remove</a></button>

            <button class="moveSelecter" id="moveShortcut-${index}">
                <span class="fa fa-sort"></span>
            </button>
        </div>`
    }

    for (let index = 0; index < asaShortcutURL.length; index++) {
        document.getElementById(`removeURLShortcut-${index}`).onclick = () => {
            replaceSortIconReset();
            document.getElementById(`asaShortcutPanel-${index}`).remove();
            asaShortcutURL.splice(asaCount[index], 1);
            moveObjIsActive = 0;
            for (let indexx = index; indexx < asaCount.length; indexx++) {
                asaCount[indexx]--;
            }
        }

        document.getElementById(`moveShortcut-${index}`).onclick = () => {
            setTimeout(runAnimation, 1);
            document.getElementById("shortcutNoticationSection").style.animation = '';
            if (moveObjIsActive === 0) {
                let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaCount[index]].getElementsByTagName('input')[0].value;
                asaMoveObj[0] = {
                    value: asaFocus,
                    index: asaCount[index]
                };
                document.getElementById("shortcutNoticationLabel").innerHTML = `You are moving the URL <a style="color: #FF0">${asaMoveObj[0].value}</a>`;
                document.getElementById("shortcutNoticationSection").classList.add("addHeightShortcutNotication");
                document.getElementById("cancelMoveShortcut").style.display = 'block';
                replaceSortIcon();
                moveObjIsActive = 1;
            } else if (moveObjIsActive === 1) {
                document.getElementById("shortcutNoticationSection").classList.remove("addHeightShortcutNotication");
                document.getElementById("cancelMoveShortcut").style.display = 'none';
                let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaCount[index]].getElementsByTagName('input')[0].value;
                asaMoveObj[1] = {
                    value: asaFocus,
                    index: asaCount[index]
                };
                replaceSortIcon();
                if (asaMoveObj[1].value === asaMoveObj[0].value) { document.getElementById("shortcutNoticationLabel").innerHTML = `Unable to move URL <a style="color: #FF0">${asaMoveObj[0].value}</a> to original position!`; moveObjIsActive = 0;; return };
                document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaMoveObj[0].index].getElementsByTagName('input')[0].value = asaMoveObj[1].value;
                document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaMoveObj[1].index].getElementsByTagName('input')[0].value = asaMoveObj[0].value;
                document.getElementById("shortcutNoticationLabel").innerHTML = `Successfully swapped URL <a style="color: #FF0">${asaMoveObj[0].value}</a> with URL <a style="color: #FF0">${asaMoveObj[1].value}</a>`
                moveObjIsActive = 0;
            };
        }
    }
}

replaceSortIcon = () => {
    let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div');
    if (moveObjIsActive === 0) {
        for (let index = 0; index < asaFocus.length; index++) {
            asaFocus[index].getElementsByTagName('button')[1].getElementsByTagName('span')[0].classList.value = 'fa fa-hand-o-left';
            asaFocus[index].getElementsByTagName('input')[0].disabled = true;
        }

        for (let index = 0; index < asaFocus.length; index++) {
            asaFocus[index].classList.value = 'textboxUrlPanel asaHoverSelected'
        }

        asaFocus[asaMoveObj[0].index].style.outline = '2px solid #0F0';
        asaFocus[asaMoveObj[0].index].getElementsByTagName('button')[1].getElementsByTagName('span')[0].classList.value = 'fa fa-ban';
    } else if (moveObjIsActive === 1) {
        for (let index = 0; index < asaFocus.length; index++) {
            asaFocus[index].getElementsByTagName('input')[0].disabled = false;
            asaFocus[index].getElementsByTagName('button')[1].getElementsByTagName('span')[0].classList.value = 'fa fa-sort';
        };

        for (let index = 0; index < asaFocus.length; index++) {
            asaFocus[index].classList.value = 'textboxUrlPanel';
        }
        asaFocus[asaMoveObj[0].index].style.outline = '';
    }
}

replaceSortIconReset = () => {
    let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div');
    for (let index = 0; index < asaFocus.length; index++) {
        asaFocus[index].classList.value = 'textboxUrlPanel';
        asaFocus[index].style.outline = '';
        asaFocus[index].getElementsByTagName('button')[1].getElementsByTagName('span')[0].classList.value = 'fa fa-sort';
    }
}

runAnimation = () => {
    document.getElementById("shortcutNoticationSection").style.animation = `shortcutNotication 5s`;
}

document.getElementById("addShortcut").onclick = () => {
    asaSearchShortcut('');
    if (document.getElementById("shortcutURLInput").value === '') { return };
    document.getElementById("shortcutNoticationLabel").innerHTML = '';
    for (let index = 0; index < document.getElementById("asaCustomShortcutStack").getElementsByTagName('div').length; index++) {
        let asaValue = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
        if (asaValue === document.getElementById("shortcutURLInput").value) { return }
    }

    let asaindex = asaCount.length;
    asaCount[asaindex] = Math.max(...asaCount) + 1;
    document.getElementById("asaCustomShortcutStack").innerHTML += `<div id="asaShortcutPanel-${asaindex}" class="textboxUrlPanel">
        <input value="${document.getElementById("shortcutURLInput").value}" id="ShortcutURL-${asaindex}" autocomplete="off" class="setting_textbox_url" style="width: calc(100% - 62px); height: 30px; margin-left: 1px; top: 4px;" placeholder="Enter website URL">
        <button id="removeURLShortcut-${asaindex}" style="position: absolute; left: calc(100% - 57px); width: 55px; margin-top: 4px;" class="asaButton" ;"><a>Remove</a></button>

        <button class="moveSelecter" id="moveShortcut-${asaindex}">
            <span class="fa fa-sort"></span>
        </button>
    </div>`

    if (asaCount[0] === 0) {
        document.getElementById(`removeURLShortcut-0`).onclick = () => {
            replaceSortIconReset();
            document.getElementById(`asaShortcutPanel-0`).remove();
            asaShortcutURL.splice(asaCount[0], 1);
            for (let indexx = 0; indexx < asaCount.length; indexx++) {
                asaCount[indexx]--;
            }
        }

        document.getElementById(`moveShortcut-0`).onclick = () => {
            setTimeout(runAnimation, 1);
            document.getElementById("shortcutNoticationSection").style.animation = '';
            if (moveObjIsActive === 0) {
                let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;
                asaMoveObj[0] = {
                    value: asaFocus,
                    index: asaCount[0]
                };
                document.getElementById("shortcutNoticationLabel").innerHTML = `You are moving the URL <a style="color: #FF0">${asaMoveObj[0].value}</a>`;
                document.getElementById("shortcutNoticationSection").classList.add("addHeightShortcutNotication");
                document.getElementById("cancelMoveShortcut").style.display = 'block';
                replaceSortIcon();
                moveObjIsActive = 1;
            } else if (moveObjIsActive === 1) {
                replaceSortIcon();
                let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;
                asaMoveObj[1] = {
                    value: asaFocus,
                    index: asaCount[0]
                };
                document.getElementById("shortcutNoticationSection").classList.remove("addHeightShortcutNotication");
                document.getElementById("cancelMoveShortcut").style.display = 'none';
                if (asaMoveObj[1].value === asaMoveObj[0].value) { document.getElementById("shortcutNoticationLabel").innerHTML = `Unable to move URL <a style="color: #FF0">${asaMoveObj[0].value}</a> to original position!`; moveObjIsActive = 0;; return }
                document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaMoveObj[0].index].getElementsByTagName('input')[0].value = asaMoveObj[1].value;
                document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaMoveObj[1].index].getElementsByTagName('input')[0].value = asaMoveObj[0].value;
                document.getElementById("shortcutNoticationLabel").innerHTML = `Successfully swapped URL <a style="color: #FF0">${asaMoveObj[0].value}</a> with URL <a style="color: #FF0">${asaMoveObj[1].value}</a>`
                moveObjIsActive = 0;
            }
        }
    }
    for (let index = 0; index <= asaindex; index++) {
        if (asaCount[index - 1] < asaCount[index]) {
            document.getElementById(`removeURLShortcut-${index}`).onclick = () => {
                replaceSortIconReset();
                document.getElementById(`asaShortcutPanel-${index}`).remove();
                asaShortcutURL.splice(asaCount[index], 1);
                for (let indexx = index; indexx < asaCount.length; indexx++) {
                    asaCount[indexx]--;
                }
            }

            document.getElementById(`moveShortcut-${index}`).onclick = () => {
                setTimeout(runAnimation, 1);
                document.getElementById("shortcutNoticationSection").style.animation = '';
                if (moveObjIsActive === 0) {
                    let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaCount[index]].getElementsByTagName('input')[0].value;
                    asaMoveObj[0] = {
                        value: asaFocus,
                        index: asaCount[index]
                    };
                    replaceSortIcon();
                    document.getElementById("shortcutNoticationLabel").innerHTML = `You are moving the URL <a style="color: #FF0">${asaMoveObj[0].value}</a>`;
                    document.getElementById("shortcutNoticationSection").classList.add("addHeightShortcutNotication");
                    document.getElementById("cancelMoveShortcut").style.display = 'block';
                    moveObjIsActive = 1;
                } else if (moveObjIsActive === 1) {
                    let asaFocus = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaCount[index]].getElementsByTagName('input')[0].value;
                    asaMoveObj[1] = {
                        value: asaFocus,
                        index: asaCount[index]
                    };
                    replaceSortIcon();
                    document.getElementById("shortcutNoticationSection").classList.remove("addHeightShortcutNotication");
                    document.getElementById("cancelMoveShortcut").style.display = 'none';
                    if (asaMoveObj[1].value === asaMoveObj[0].value) { document.getElementById("shortcutNoticationLabel").innerHTML = `Unable to move URL <a style="color: #FF0">${asaMoveObj[0].value}</a> to original position!`; moveObjIsActive = 0;; return }
                    document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaMoveObj[0].index].getElementsByTagName('input')[0].value = asaMoveObj[1].value;
                    document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[asaMoveObj[1].index].getElementsByTagName('input')[0].value = asaMoveObj[0].value;
                    document.getElementById("shortcutNoticationLabel").innerHTML = `Successfully swapped URL <a style="color: #FF0">${asaMoveObj[0].value}</a> with URL <a style="color: #FF0">${asaMoveObj[1].value}</a>`
                    moveObjIsActive = 0;
                }
            }
        }
    }

    document.getElementById("shortcutNoticationSection").style.animation = '';
    document.getElementById("shortcutURLInput").value = ''
}

asaAddShortcut();

document.getElementById("cancelMoveShortcut").onclick = () => {
    setTimeout(runAnimation, 1);
    document.getElementById("shortcutNoticationSection").style.animation = '';
    document.getElementById("shortcutNoticationSection").classList.remove("addHeightShortcutNotication");
    document.getElementById("cancelMoveShortcut").style.display = 'none';
    document.getElementById("shortcutNoticationLabel").innerHTML = `Canceled shortcut position swap`;
    moveObjIsActive = 0;
    replaceSortIconReset();
}

//Window Checked
window.addEventListener("resize", () => {
    asaScrollBarChecked()
})

asaScrollBarChecked = () => {
    let asaDivScroll = document.getElementById("shortcutScollbar");
    let scrollChecked = (asaDivScroll.scrollHeight === asaDivScroll.clientHeight);
    if (scrollChecked === true) {
        document.getElementById("asaScrollItem").style.width = '100%'
    } else {
        document.getElementById("asaScrollItem").style.width = 'calc(100% - 1px)'
    }
}

document.getElementById("asa_website_shortcut").onclick = () => {
    asaShortcutTableTest();
    document.getElementById("searchShortcutItem").value = '';
    asaSearchBar();
}

let asaOnHide = 1;

document.getElementById("shortcutScreenTableBackground").onmouseleave = () => {
    asaShortcutTableTest();
    return;
}

asaShortcutTableTest = () => {
    if (asaOnHide === 1) {
        document.getElementById("shortcutScreenTableBackground").style.display = 'none';
        asaOnHide = 0;
    } else {
        document.getElementById("shortcutScreenTableBackground").style.display = 'block';
        asaOnHide = 1;
    }
}

window.addEventListener("load", () => {
    asaShortcutTableTest();
})

setTimeout(asaScrollBarChecked, 10)

for (let index = 0; index < asaShortcutURL.length; index++) {
    document.getElementById("asaScrollItem").innerHTML += `
    <div class="asaShortcutDiv">
        <button id="openShortcutWebsite-${index}" class="OpenURLButton">
            <img draggable="false" src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=${asaShortcutURL[index]}">
            <div class="URLTextPanel">
                <a>${asaShortcutURL[index]}</a>
            </div>
        </button>
    </div>`
}

for (let index = 0; index < asaShortcutURL.length; index++) {
    document.getElementById(`openShortcutWebsite-${index}`).onclick = () => {
        window.open(asaShortcutURL[index], '_self').focus;
    }
}

document.getElementById("clearSearchShortcutBtn").onclick = () => {
    document.getElementById("searchShortcutItem").value = '';
    asaSearchBar();
}

document.getElementById("searchShortcutItem").oninput = () => {
    asaSearchBar();
}

asaSearchBar = () => {
    for (let index = 0; index < asaShortcutURL.length; index++) {
        let asaFocus = document.getElementById("asaScrollItem").getElementsByTagName('button')[index].getElementsByTagName('div')[0].getElementsByTagName('a')[0].innerHTML;
        let asaSearchValue = document.getElementById("searchShortcutItem").value;

        if (asaFocus.toLowerCase().search(asaSearchValue.toLowerCase()) === -1) {
            document.getElementById("asaScrollItem").getElementsByTagName('button')[index].style.display = 'none'
        } else {
            document.getElementById("asaScrollItem").getElementsByTagName('button')[index].style.display = 'block'
        }
    }
}

document.getElementById("searchShorcutTextBox").onclick = () => {
    asaSearchShortcut(document.getElementById("shortcutURLInput").value.toLowerCase());
}