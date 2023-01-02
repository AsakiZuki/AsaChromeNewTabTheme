var asaSearchAPI = JSON.parse(localStorage.getItem("asaSearchQuerySection"));
var asaDeleteArray = [];

document.getElementById("close_button").onclick = () => {
    searchQuerys();
}

searchQuerys = () => {
    asaSearchAPI = JSON.parse(localStorage.getItem("asaSearchQuerySection"));
    asaDeleteArray = [];
    document.getElementById("asaCustomSearchQueryTextbox").innerHTML = '';
    for (let index = 0; index < asaSearchAPI.length; index++) {
        asaDeleteArray[index] = index;
        document.getElementById("asaCustomSearchQueryTextbox").innerHTML += `<div id="earhcQueryDiv-${index}" class="textboxUrlPanel">
            <input value="${asaSearchAPI[index].api}" id="searchQueryValue-${index}" autocomplete="off" class="setting_textbox_url" style="width: calc(100% - 74px - 59px); height: 30px; margin-left: 1px; top: 4px;" placeholder="Enter search query">
            <input value="${asaSearchAPI[index].name}" id="searchQueryName-${index}" autocomplete="off" class="setting_textbox_url" style="width: 70px; left: calc(100% - 71px - 58px); height: 30px; top: 4px;" placeholder="Name">
            <button id="deleteSearhcQuery-${index}" style="position: absolute; left: calc(100% - 56px); width: 55px; margin-top: 4px;" class="asaButton" ;"><a>Remove</a></button>
        </div>`
    }

    for (let index = 0; index < asaSearchAPI.length; index++) {
        document.getElementById(`deleteSearhcQuery-${index}`).onclick = () => {
            document.getElementById(`earhcQueryDiv-${index}`).remove();
            for (let indexb = index; indexb < asaSearchAPI.length; indexb++) {
                asaDeleteArray[indexb]--;
            }
            asaSearchAPI.splice(asaDeleteArray[index], 1);
        }
    }
}

searchQuerys();

document.getElementById("addSearchQuery").onclick = () => {
    let searchLength = asaSearchAPI.length;

    if ((document.getElementById("searchAPIinput").value === '') && document.getElementById("searchNameInput").value === '') { return };
    if (document.getElementById("searchAPIinput").value === '') { return };
    if (document.getElementById("searchNameInput").value === '') { return };
    let asaInputSearchLength = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div').length;
    let searchValueAPI = document.getElementById("searchAPIinput").value;
    for (let index = 0; index < asaInputSearchLength; index++) {
        let asaInputSearchValue = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
        if (asaInputSearchValue === searchValueAPI) { return }
    }

    asaSearchAPI[searchLength] = {
        api: document.getElementById("searchAPIinput").value,
        name: document.getElementById("searchNameInput").value
    }

    document.getElementById("asaCustomSearchQueryTextbox").innerHTML += `<div id="earhcQueryDiv-${searchLength}" class="textboxUrlPanel">
        <input value="${asaSearchAPI[searchLength].api}" id="searchQueryValue-${searchLength}" autocomplete="off" class="setting_textbox_url" style="width: calc(100% - 74px - 59px); height: 30px; margin-left: 1px; top: 4px;" placeholder="Enter search query">
        <input value="${asaSearchAPI[searchLength].name}" id="searchQueryName-${searchLength}" autocomplete="off" class="setting_textbox_url" style="width: 70px; left: calc(100% - 71px - 58px); height: 30px; top: 4px;" placeholder="Name">
        <button id="deleteSearhcQuery-${searchLength}" style="position: absolute; left: calc(100% - 56px); width: 55px; margin-top: 4px;" class="asaButton" ;"><a>Remove</a></button>
     </div>`;

    for (let index = 0; index <= searchLength; index++) {
        if (!(asaDeleteArray[index] === -1)) {
            document.getElementById(`deleteSearhcQuery-${index}`).onclick = () => {
                document.getElementById(`earhcQueryDiv-${index}`).remove();
                for (let indexb = index; indexb < searchLength + 1; indexb++) {
                    asaDeleteArray[indexb]--;
                };
                asaSearchAPI.splice(asaDeleteArray[index], 1);
            }
        };
    }

    document.getElementById("searchAPIinput").value = '';
    document.getElementById("searchNameInput").value = '';
    asaDeleteArray[searchLength] = Math.max(...asaDeleteArray) + 1;

    searchValue();
}

document.getElementById("searchTextBox").onclick = () => {
    searchValue();
}

searchValue = () => {
    let asaInputSearchLength = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div').length;

    let searchValueAPI = document.getElementById("searchAPIinput").value;
    let searchValueName = document.getElementById("searchNameInput").value;

    for (let index = 0; index < asaInputSearchLength; index++) {
        let asaInputSearchValue = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
        let asaInputNameValue = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div')[index].getElementsByTagName('input')[1].value;
        let ElementDocument = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div')[index];

        if (((asaInputSearchValue.toLowerCase().search(searchValueAPI.toLowerCase())) === -1) || ((asaInputNameValue.toLowerCase().search(searchValueName.toLowerCase())) === -1)) {
            ElementDocument.style.display = 'none'
        } else (
            ElementDocument.style.display = 'block'
        )
    }
}

document.getElementById("save_and_close").onclick = () => {
    let asaInputSearchLength = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div').length;

    for (let index = 0; index < asaInputSearchLength; index++) {
        let asaInputSearchValue = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
        let asaInputNameValue = document.getElementById("asaCustomSearchQueryTextbox").getElementsByTagName('div')[index].getElementsByTagName('input')[1].value;

        asaSearchAPI[index] = {
            api: asaInputSearchValue,
            name: asaInputNameValue
        }
    }

    localStorage.setItem("asaSearchQuerySection", JSON.stringify(asaSearchAPI))

    let array = [];
    for (let index = 0; index < document.getElementById("asaCustomShortcutStack").getElementsByTagName('div').length; index++) {
        let asaValue = document.getElementById("asaCustomShortcutStack").getElementsByTagName('div')[index].getElementsByTagName('input')[0].value;
        array[index] = asaValue;
    }


    localStorage.setItem("asaShorcutRealtime", JSON.stringify(array));
}