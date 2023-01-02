chrome.tabs.onCreated.addListener(
    () => {
        setTimeout(() => {
            doubleTabChecked();
        }, 100);
    }
)

async function removeNewTab2(tabId) {
    await chrome.tabs.remove(tabId);
}

async function doubleTabChecked() {
    chrome.tabs.query({}, tabs => {
        for (let index = 0; index < tabs.length; index++) {
            if (tabs[index].url === 'chrome://newtab/') {
                if (tabs[index].active === false) {
                    removeNewTab2(tabs[index].id);
                }
            }
        }
    })
}

//Context Menu
chrome.runtime.onInstalled.addListener(function () {
    //Image Selected
    chrome.contextMenus.create(
        {
            title: 'Search image with saucenao',
            id: 'saucenaoSearch',
            contexts: ['image']
        }
    );

    //Text Selected
    chrome.contextMenus.create(
        {
            title: 'Look up "%s" on Wikipedia',
            id: 'lookupWikipedia',
            contexts: ['selection']
        }
    );
    chrome.contextMenus.create(
        {
            title: 'Search "%s" on Google Photo',
            id: 'searchOnGooglePhoto',
            contexts: ['selection']
        }
    );
    chrome.contextMenus.create(
        {
            title: 'Search "%s" on Youtube',
            id: 'searchOnYoutube',
            contexts: ['selection']
        }
    );
    chrome.contextMenus.create(
        {
            title: 'Search "%s" on Pixiv',
            id: 'searchOnPixiv',
            contexts: ['selection']
        }
    );
});

chrome.contextMenus.onClicked.addListener((info, tabs) => {
    let asaURL = '';
    switch (info.menuItemId) {
        case 'saucenaoSearch':
            asaURL = info.srcUrl;
            chrome.tabs.create({
                url: `https://saucenao.com/search.php?db=999&url=${encodeURIComponent(asaURL)}`
            });
            break;

        case 'lookupWikipedia':
            asaURL = info.selectionText;
            chrome.tabs.create({
                url: `https://vi.wikipedia.org/w/index.php?search=${asaURL}`
            });
            break;

        case 'searchOnGooglePhoto':
            asaURL = info.selectionText;
            chrome.tabs.create({
                url: `https://www.google.com/search?tbm=isch&q=${asaURL}`
            });
            break;

        case 'searchOnYoutube':
            asaURL = info.selectionText;
            chrome.tabs.create({
                url: `https://www.youtube.com/results?search_query=${asaURL}`
            });
            break;

        case 'searchOnPixiv':
            asaURL = info.selectionText;
            chrome.tabs.create({
                url: `https://www.pixiv.net/en/tags/${asaURL}`
            });
            break;
    }
})