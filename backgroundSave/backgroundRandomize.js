if (JSON.parse(localStorage.getItem("asaBGData") === null)) {
    var asaRandom = [
        ''
    ]
} else {
    var asaRandom = JSON.parse(localStorage.getItem("asaBGData"));
}

let asaDeleteCount = [];
let asaBGoringinCount = asaRandom.length;

asaBackground = () => {
    for (let index = 0; index < asaRandom.length; index++) {
        document.getElementById("backgroundSetting").innerHTML += `<div id="Background${index}" style="padding-top: 2.5px; padding-bottom: 2.5px; border: 0px solid #FFF; width: calc(100% - 5px);">
        <input id="backgroundValue${index}" value="${asaRandom[index]}" placeholder = "Background URL" type = "text" class="asaURLTextBox" >
        <button id="previewBackground${index}" class="buttonStyleIcon"> <span style="transform: translateX(-2.52px)translateY(0px);" class="fa fa-eye"></span> </button>
        <button id="backgroundDelete${index}" class="buttonStyleIcon"> <span style="transform: translateX(-1px)translateY(0px);" class="fa fa-remove"></span> </button>
        
        <div class="imagePreview" style="display: none" id="imagePreview${index}"></div>
        </div>`;

        asaDeleteCount[index] = index;
    }

    for (let index = 0; index < asaRandom.length; index++) {
        document.getElementById(`backgroundDelete${index}`).onclick = () => {
            document.getElementById(`Background${index}`).remove();

            for (let indexb = index; indexb < asaDeleteCount.length; indexb++) {
                asaDeleteCount[indexb]--
            }
            asaRandom.splice(asaDeleteCount[index] + 1, 1);
        };

        document.getElementById(`previewBackground${index}`).onmouseover = () => {
            document.getElementById(`previewBackground${index}`).onclick = () => {
                document.getElementById(`imagePreview${index}`).style.display = 'block'
                document.getElementById(`imagePreview${index}`).innerHTML = `<div style="background-image: url('${document.getElementById(`backgroundValue${index}`).value}'); background-size: cover"></div>`
            }
        }

        document.getElementById(`previewBackground${index}`).onmouseout = () => {
            document.getElementById(`imagePreview${index}`).style.display = 'none'
            document.getElementById(`imagePreview${index}`).innerHTML = ''
        }
    }
}

document.getElementById("addNewBackground").onclick = () => {
    document.getElementById("addURLScreenBG").style.display = 'block';
}

document.getElementById("closeButton").onclick = () => {
    document.getElementById("addURLScreenBG").style.display = 'none';
    document.getElementById("warningToAdd").innerHTML = `Add new background url for more random backgrounds`;
    document.getElementById("warningToAdd").style.color = '#FFF';
    document.getElementById("urlInput").value = '';
}

document.getElementById("addBgButton").onclick = () => {
    for (let index = 0; index < (document.getElementById("backgroundSetting").getElementsByTagName('div').length / 2); index++) {
        let value = document.getElementById("backgroundSetting").getElementsByTagName('div')[index * 2].getElementsByTagName('input')[0].value;
        if (value === document.getElementById("urlInput").value) {
            document.getElementById("warningToAdd").style.color = '#F00';
            document.getElementById("warningToAdd").innerHTML = 'This wallpaper is available!';
            return;
        }
        else if (document.getElementById("urlInput").value === '') {
            document.getElementById("warningToAdd").style.color = '#F00';
            document.getElementById("warningToAdd").innerHTML = `You can't leave the text box empty!`;
            return;
        }
    }

    document.getElementById("addURLScreenBG").style.display = 'none';
    document.getElementById("backgroundSetting").innerHTML += `<div id="Background${asaBGoringinCount}" style="padding-top: 2.5px; padding-bottom: 2.5px; border: 0px solid #FFF; width: calc(100% - 5px);">
    <input id="backgroundValue${asaBGoringinCount}" value="${document.getElementById("urlInput").value}" placeholder = "Background URL" type = "text" class="asaURLTextBox" >
    <button id="previewBackground${asaBGoringinCount}" class="buttonStyleIcon"> <span style="transform: translateX(-2.52px)translateY(0px);" class="fa fa-eye"></span> </button>
    <button id="backgroundDelete${asaBGoringinCount}" class="buttonStyleIcon"> <span style="transform: translateX(-1px)translateY(0px);" class="fa fa-remove"></span> </button>
    <div class="imagePreview" style="display: none" id="imagePreview${asaBGoringinCount}"></div>
    </div>`;

    asaDeleteCount[asaDeleteCount.length] = Math.max(...asaDeleteCount) + 1;

    for (let index = 0; index < asaBGoringinCount + 1; index++) {
        if ((!(asaDeleteCount[index - 1] === asaDeleteCount[index])) && (!(asaDeleteCount[index] === -1))) {
            document.getElementById(`backgroundDelete${index}`).onclick = () => {
                document.getElementById(`Background${index}`).remove();

                for (let indexb = index; indexb < asaDeleteCount.length; indexb++) {
                    asaDeleteCount[indexb]--
                }
                asaRandom.splice(asaDeleteCount[index] + 1, 1);
            };

            document.getElementById(`previewBackground${index}`).onmouseover = () => {
                document.getElementById(`previewBackground${index}`).onclick = () => {
                    document.getElementById(`imagePreview${index}`).style.display = 'block'
                    document.getElementById(`imagePreview${index}`).innerHTML = `<div style="background-image: url('${document.getElementById(`backgroundValue${index}`).value}'); background-size: cover"></div>`
                }
            }

            document.getElementById(`previewBackground${index}`).onmouseout = () => {
                document.getElementById(`imagePreview${index}`).style.display = 'none'
                document.getElementById(`imagePreview${index}`).innerHTML = ''
            }
        }
    }

    asaBGoringinCount++;
    document.getElementById("warningToAdd").innerHTML = `Add new background url for more random backgrounds`;
    document.getElementById("warningToAdd").style.color = '#FFF';
    document.getElementById("urlInput").value = '';
}

let asaBGData = [];
let totalSame = 0;

document.getElementById("saveButton").onclick = () => {
    document.getElementById("saveNotication").style.animation = '';
    let getTextboxLength = document.getElementById("backgroundSetting").getElementsByTagName('div').length / 2;

    //Save data
    for (let index = 0; index < (getTextboxLength); index++) {
        let value = document.getElementById("backgroundSetting").getElementsByTagName('div')[index * 2].getElementsByTagName('input')[0].value;
        asaBGData[index] = value
    }

    document.getElementById("saveNotication").innerHTML = 'Your wallpaper has been saved!'
    setTimeout(savedNotication, 5);
    localStorage.setItem("asaBGData", JSON.stringify(asaBGData))
}

savedNotication = () => {
    document.getElementById("saveNotication").style.animation = 'asaSaved 8s ease-in-out';
}

document.getElementById("searchBackgroundURL").oninput = () => {
    let asaLength = document.getElementById("backgroundSetting").getElementsByTagName('div').length / 2;
    let asaType = document.getElementById("searchBackgroundURL").value;
    for (let index = 0; index < asaLength; index++) {
        let getInputValue = document.getElementById("backgroundSetting").getElementsByTagName('div')[index * 2].getElementsByTagName('input')[0].value;
        if (getInputValue.toLowerCase().search(asaType.toLowerCase()) === -1) {
            document.getElementById("backgroundSetting").getElementsByTagName('div')[index * 2].style.display = 'none'
        } else {
            document.getElementById("backgroundSetting").getElementsByTagName('div')[index * 2].style.display = 'block'
        }
    }
}

asaBackground()