let asa = JSON.parse(localStorage.getItem("URLSave"));
if (asa[0] === null) { localStorage.setItem("URLSave", '') }

let asaArray = [];

asaLoadHistory = () => {
    if ((asa[0] === null) || asa[0] === '') { return; }

    let asaArrayNumberMinus = [];

    for (let index = 0; index < asa.length; index++) {
        asaArrayNumberMinus[index] = index;
    }

    for (let index = 0; index < asa.length; index++) {
        let asaUpToDown = (asa.length - 1) - index;

        document.getElementById("historyPanel").innerHTML += `
        <li id="box${asaUpToDown}" style="width: 100%; height: 32px; margin-bottom: 50px;">
            <div
                style="overflow: hidden; margin-top: 2px; border-top: 5px solid rgb(33, 33, 33); outline: 1px solid rgb(0, 0, 0); width: calc(75% - 25px); position: relative; top: 19px; transform: translateY(-50%); background-color: rgb(67, 67, 67); padding: 7.5px; height: 20px; font-size: 10px">
                <div class="textBoxURL">${asa[asaUpToDown].url}</div>
            </div>
            <div
                style="overflow: hidden; margin-top: 2px; border-top: 5px solid rgb(33, 33, 33); outline: 1px solid rgb(0, 0, 0); width: calc(25% - 26px); position: absolute; left: calc(75% + 5px); transform: translateY(-43px)translateX(-20px); background-color: rgb(67, 67, 67); padding: 7.5px; height: 20px;  font-size: 10px">
                <div class="textBoxURL">${asa[asaUpToDown].title}</div>
            </div>
            <button style="margin-top: 2px;" id="downloadQRCode${asaUpToDown}" class="buttonStyle">
                <div>Download QR Code</div>
            </button> <button id="openQRCodeImage${asaUpToDown}" class="buttonStyle">
                <div>View QR
                    Code</div>
            </button>
            <button id="copyToClipboard${asaUpToDown}" class="buttonStyle">
                <div>Copy URL to Clipboard</div>
            </button> <button id="openURLinNewTab${asaUpToDown}" class="buttonStyle">
                <div>Open URL in
                    newtab</div>
            </button> <button id="removeArray${asaUpToDown}" class="buttonStyle">
                <div>Delete URL</div>
            </button>
        </li>`;
    };

    for (let index = 0; index < asa.length; index++) {
        asaArray[index] = asa[index];
        document.getElementById(`removeArray${index}`).onclick = () => {
            document.getElementById(`box${index}`).remove();
            asaArray.splice(asaArrayNumberMinus[index], 1)
            for (let indexb = index; indexb < asa.length; indexb++) {
                asaArrayNumberMinus[indexb] = asaArrayNumberMinus[indexb] - 1;
            };
            localStorage.setItem("URLSave", JSON.stringify(asaArray))
        };

        document.getElementById(`openURLinNewTab${index}`).onclick = () => {
            window.open(asaArray[asaArrayNumberMinus[index]].url, '_blank').focus()
        };

        document.getElementById(`copyToClipboard${index}`).onclick = () => {
            navigator.clipboard.writeText(asaArray[asaArrayNumberMinus[index]].url)
        };

        document.getElementById(`openQRCodeImage${index}`).onclick = () => {
            window.open(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${asaArray[asaArrayNumberMinus[index]].url}`, '_blank').focus()
        };

        document.getElementById(`downloadQRCode${index}`).onclick = async () => {
            const image = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${asaArray[asaArrayNumberMinus[index]].url}`);
            const imageBlog = await image.blob();
            const imageURL = URL.createObjectURL(imageBlog);

            const link = document.createElement('a');
            link.href = imageURL;
            link.download = `asaChromeQR.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        let searchMode = 'title';

        document.getElementById("searchMode").onclick = () => {
            if (searchMode === 'url') {
                document.getElementById("searchMode").innerHTML = 'Title Search';
                searchMode = 'title'
            } else {
                document.getElementById("searchMode").innerHTML = 'URL Search';
                searchMode = 'url'
            }
            asaSearch();
        }

        document.getElementById("urlSearchBarInput").oninput = () => { asaSearch(); };
        asaSearch = () => {
            let inputValue = document.getElementById("urlSearchBarInput").value.toLowerCase();
            for (let index = 0; index <= Math.max(...asaArrayNumberMinus); index++) {
                if (searchMode === 'url') { var documentValue = document.getElementById("historyPanel").getElementsByTagName('li')[index].getElementsByTagName('div')[0].getElementsByTagName('div')[0].innerHTML.toLowerCase(); }
                else {
                    var documentValue = document.getElementById("historyPanel").getElementsByTagName('li')[index].getElementsByTagName('div')[3].innerHTML.toLowerCase();
                }
                if (documentValue.search(inputValue) === -1) {
                    document.getElementById("historyPanel").getElementsByTagName('li')[index].style.display = 'none'
                } else if (inputValue === '') {
                    document.getElementById("historyPanel").getElementsByTagName('li')[index].style.display = 'block'
                } else {
                    document.getElementById("historyPanel").getElementsByTagName('li')[index].style.display = 'block'
                }
            }
        }
    }
};

asaLoadHistory();