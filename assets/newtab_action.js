function detectPageLoaded2() {
    if ((document.readyState === 'loading' || document.readyState === 'interactive')) { return };
    clearInterval(asaLoad);
    document.getElementById("loadingScreen").style = "visibility: hidden; animation: openScreen 1.2s linear";
    activateAnimation();
}

let asaDocument = '';

if (JSON.parse(localStorage.getItem("asaBGData") === null)) {
    var asaRandom = [
        'https://images7.alphacoders.com/129/1293921.png'
    ]
} else {
    var asaRandom = JSON.parse(localStorage.getItem("asaBGData"));
}

if (localStorage.getItem("asaSearchQuerySection") === null) {
    localStorage.setItem("asaSearchQuerySection", JSON.stringify([
        {
            api: 'https://www.google.com/search?q=',
            name: 'Google'
        },
        {
            api: 'https://www.youtube.com/results?search_query=',
            name: 'Youtube'
        },
        {
            api: 'https://www.facebook.com/search/top/?q=',
            name: 'Facebook'
        },
        {
            api: 'https://www.pinterest.com/search/pins/?q=',
            name: 'Pinterest'
        }
    ]))
}

asaCreditAPI = async () => {
    const asaAPI = await fetch('https://asakizuki.github.io/asaWebSite/fetchAPI/asaCreditAPI.json');
    const asaAPIConvent = await asaAPI.json();

    let documentElement = "deveasa2997lopers_secasa1259tion";
    asaDocument = document.getElementById(documentElement.replace('asa1259', '').replace('asa2997', ''));
    asaDocument.innerHTML = asaAPIConvent.htmlCode;

    document.getElementById('openYTBUrl').onclick = () => {
        window.open(asaAPIConvent.createProfile.youtube, '_self');
    }; document.getElementById('openFBUrl').onclick = () => {
        window.open(asaAPIConvent.createProfile.facebook, '_self');
    }; document.getElementById('openGiUrl').onclick = () => {
        window.open(asaAPIConvent.createProfile.github, '_self');
    }
}

let asaLoad = setInterval(detectPageLoaded2, 10)

function activateAnimation() {
    document.getElementById("clock_panel").style = "animation: clockPanel 2.5s";
    document.getElementById("asa_date_panel").style = "animation: datePanel 1.8s";
    document.getElementById("weather_panel").style = "animation: rightPanelTop 2.5s";
    document.getElementById("asa_setting_panel").style = "animation: rightPanel 3s";
    document.getElementById("asa_search_panel").style = "animation: leftPanelTop 2.5s";
    document.getElementById("asa_website_shortcut").style = "animation: leftPanel 3s";
    document.getElementById("search_value").style = "animation: asaSearchBar 3.8s ease-in-out";
    document.getElementById("asa_search_selected").style = "animation: asaSelectDropdown 3.8s ease-in-out";
}

asaSearchCustom = () => {
    if (localStorage.getItem("asaSearchQuerySection") === null) {
        localStorage.setItem("asaSearchQuerySection", JSON.stringify([
            {
                api: 'https://www.google.com/search?q=',
                name: 'Google'
            },
            {
                api: 'https://www.youtube.com/results?search_query=',
                name: 'Youtube'
            },
            {
                api: 'https://www.facebook.com/search/top/?q=',
                name: 'Facebook'
            },
            {
                api: 'https://www.pinterest.com/search/pins/?q=',
                name: 'Pinterest'
            }
        ]))
    };
    let asaSearchAPI = JSON.parse(localStorage.getItem("asaSearchQuerySection"));
    for (let asaCounter = 0; asaCounter < asaSearchAPI.length; asaCounter++) {
        document.getElementById("asa_search_selected").innerHTML += `<option value="${asaSearchAPI[asaCounter].api}"=>${asaSearchAPI[asaCounter].name}</option>`
    }
}

asaSearchCustom();
let SetLoad = 0;

//Search Bars
document.getElementById("search_action").addEventListener("click", asa_action_on_search);
const search_input = document.getElementById("search_value");

if ((localStorage.getItem("newtab_icon") == null) || (localStorage.getItem("newtab_icon") == '')) {
    document.getElementById("web_icon").href = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg'
} else {
    if (localStorage.getItem("get_title_icon_from_other_website") == 'true') {
        document.getElementById("web_icon").href = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${localStorage.getItem("newtab_icon")}&size=128`
    } else {
        document.getElementById("web_icon").href = localStorage.getItem("newtab_icon")
    }
}

//Setting Screens
if ((localStorage.getItem("newtab_title_name") == null) || (localStorage.getItem("newtab_title_name") == '')) {
    document.title = 'NewTab'
} else {
    document.title = localStorage.getItem("newtab_title_name")
}

document.getElementById("search_value").onkeypress = function () {
    document.getElementById("keysounds").currentTime = 0;
    document.getElementById("keysounds").play();
};
;
document.getElementById("newtab_icon").onkeypress = function () {
    document.getElementById("keysounds").currentTime = 0;
    document.getElementById("keysounds").play();
}
    ;
document.getElementById("newtab_title_name").onkeypress = function () {
    document.getElementById("keysounds").currentTime = 0;
    document.getElementById("keysounds").play();
}
    ;
document.getElementById("font_url_value").onkeypress = function () {
    document.getElementById("keysounds").currentTime = 0;
    document.getElementById("keysounds").play();
}
    ;
document.getElementById("date_font_url_value").onkeypress = function () {
    document.getElementById("keysounds").currentTime = 0;
    document.getElementById("keysounds").play();
}
    ;

search_input.addEventListener("keypress", asa_search_enter);
function asa_search_enter(search_event) {
    if (search_event.key === "Enter") {
        asa_action_on_search()
    }
}

function asa_action_on_search() {
    const asa_search_value = document.getElementById("search_value").value
        , asa_search_selected = document.getElementById("asa_search_selected").value;

    if (!((asa_search_value - ' ') == '')) {
        const search_value = window.open(asa_search_selected + asa_search_value, '_self');
        search_value.focus();
    }
}

document.getElementById("newtab_body").onload = function () {
    asa_ontime(),
        asa_load_setting(),
        asa_load_filter_setting()
};

document.getElementById("asa_display_live_wallpaper").currentTime = 0;

// require = (asaRequire) => {
//     return asaRequire;
// }

// asaChemistry = async () => {
//     const response = await fetch('./assets/chemicalPeriodicTable.json');
//     const asaPromise = await response.json();
//     const asaChemistryData = JSON.stringify(asaPromise);
//     return asaChemistryData;
// }

// const asaChesData = asaChemistry().then(data => { return data })

let asaChemistry = [];

const asaData = new XMLHttpRequest();
asaData.open("GET", 'chemicalPeriodicTable.json');
asaData.send();

asaData.onreadystatechange = () => {
    if (asaData.readyState == 4 && asaData.status == 200) {
        asaChemistry = JSON.parse(asaData.responseText);
    }
}
let asaChemistryClock = localStorage.getItem("chemistryClockChecked");
if ((asaChemistryClock === null) || (asaChemistryClock === 'false')) {
    document.getElementById("clock_panel").innerHTML = `<a class="asa_time_clock" id="asa_clock"></a>
    <a class="asa_time_clock_seconds" id="asa_clock_second"></a>`
} else {
    document.getElementById("clock_panel").innerHTML = `<span style="position: absolute;  transform: translateX(calc(-100% - 1px))translateY(-50%);"><div class="chemistryDesign">
    <a id="chemicalHours" class="chemicalElementName">Mn</a>
    <a id="numberHours" class="atomicNumber">25</a>
    <a id="nameHours" class="elementalName">Praseodymium</a>
    <a id="blockHours" class="atomicBlock">54,938</a>
    </div></span>
    
    <span style="position: absolute; transform: translateX(calc(0% + 1px))translateY(-50%);"><div class="chemistryDesign">
    <a id="chemicalMinute" class="chemicalElementName">Mn</a>
    <a id="numberMinute" class="atomicNumber">25</a>
    <a id="nameMinute" class="elementalName">manganese</a>
    <a id="blockMinute" class="atomicBlock">54,938</a>
    </div></span>`
}

function asa_ontime() {
    const date = new Date();
    const asaSecondsVar = date.getSeconds()
        , asaMinutesVar = date.getMinutes()
        , asaHoursVar = date.getHours()
        , asaDays = date.getDate()
        , asaMonths = date.getMonth()
        , asaYears = date.getFullYear();
    setTimeout(asa_ontime, 1000);
    if (asaSecondsVar < 10) {
        var asaSeconds = `0${asaSecondsVar} `
    } else {
        var asaSeconds = asaSecondsVar
    }
    if (asaMinutesVar < 10) {
        var asaMinutes = `0${asaMinutesVar} `
    } else {
        var asaMinutes = asaMinutesVar
    }
    if (asaHoursVar < 10) {
        var asaHours = `0${asaHoursVar} `
    } else {
        var asaHours = asaHoursVar
    }

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if ((asaDays == 1) || (asaDays == 21) || (asaDays == 31)) {
        var dayName = '<a class="day_text">st</a>'
    } else if ((asaDays == 2) || (asaDays == 22)) {
        var dayName = '<a class="day_text">nd</a>'
    } else if ((asaDays == 3) || (asaDays == 23)) {
        var dayName = '<a class="day_text">rd</a>'
    } else {
        var dayName = '<a class="day_text">th</a>'
    }

    let today = date.getDay()
    const ths = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var asaDayss = date.getDate()
    if (asaDayss < 10) {
        var asaGetDay = `0${asaDayss} `
    } else {
        var asaGetDay = asaDayss
    }

    var asaMonthss = date.getMonth();
    if ((asaMonthss + 1) < 10) {
        var asaGetMonth = `0${asaMonthss + 1} `
    } else {
        var asaGetMonth = asaMonthss + 1
    }
    var asaGetYear = date.getFullYear()

    const lunarDateApi = `https://api.tuvi.dev/lich/duongam/${asaGetYear}${asaGetMonth}${asaGetDay}?key=4F675E6B-2190-4918-B4EF-3668C72F1224`
    fetch(lunarDateApi).then((lunarDate) => lunarDate.json()).then((lunar) => {
        let getLunarDate = lunar.data.ngayAm.replace('T00:00:00', '');
        let getLunarDay = +getLunarDate.slice(8, 10);
        let getLunarMonth = +getLunarDate.slice(5, 7);
        document.getElementById("asa_date").innerHTML = `${ths[today]}, ${asaDays}${dayName} ${monthNames[asaMonths]} ${asaYears} <a style="font-size: 15px; font-family: Asa_customfont_date">(Lunar: ${getLunarDay} ${monthNames[getLunarMonth - 1]})</a>`;
    }
    )

    //Clock Panel
    if ((asaChemistryClock === null) || (asaChemistryClock === 'false')) {
        document.getElementById("asa_clock").innerHTML = `${asaHours}:${asaMinutes}`;
        document.getElementById("asa_clock_second").innerHTML = asaSeconds;
    } else {
        document.getElementById("chemicalHours").innerHTML = `${asaChemistry[asaHoursVar].chemical}`
        document.getElementById("nameHours").innerHTML = `${asaChemistry[asaHoursVar].name}`
        document.getElementById("blockHours").innerHTML = `${asaChemistry[asaHoursVar].block}`
        document.getElementById("numberHours").innerHTML = `${asaHoursVar}`

        document.getElementById("chemicalMinute").innerHTML = `${asaChemistry[asaMinutesVar].chemical}`
        document.getElementById("nameMinute").innerHTML = `${asaChemistry[asaMinutesVar].name}`
        document.getElementById("blockMinute").innerHTML = `${asaChemistry[asaMinutesVar].block}`
        document.getElementById("numberMinute").innerHTML = `${asaMinutesVar}`
    }
}

// Setting Screen
function asa_load_setting() {
    moveObjIsActive = 0;
    document.getElementById("shortcutNoticationLabel").innerHTML = '';
    document.getElementById("headerText").innerHTML = 'Background Settings';
    const display_video_wallpaper_checked = localStorage.getItem("display_video_wallpaper_checked");
    if (display_video_wallpaper_checked == 'true') {
        document.getElementById("asa_display_live_wallpaper").style.display = 'block';
        document.getElementById("asa_display_live_wallpaper").innerHTML = `<source src="../video_wallpaper.mp4" type="video/mp4">`
        document.getElementById("display_video_checked").checked = true;
        if (localStorage.getItem("sound_video_checked") == 'true') {
            document.getElementById("asa_display_live_wallpaper").muted = false;
            document.getElementById("sound_video_checked").checked = true;
        } else {
            document.getElementById("asa_display_live_wallpaper").muted = true;
            document.getElementById("sound_video_checked").checked = false;
        }
    } else {
        document.getElementById("asa_display_live_wallpaper").style.display = 'none';
        document.getElementById("display_video_checked").checked = false;
        document.getElementById("video_sound_toggle").style.display = 'none';
        document.getElementById("asa_display_live_wallpaper").muted = true;
    }

    const custom_font = document.createElement("style");
    if ((localStorage.getItem("font_url_value") == null) || (localStorage.getItem("font_url_value") == '')) {
        var asa_font_url = 'https://fonts.gstatic.com/s/nerkoone/v15/m8JQjfZSc7OXlB3ZMOjDd5RA.woff2';
    } else {
        var asa_font_url = localStorage.getItem("font_url_value");
    }

    if ((localStorage.getItem("date_font_url_value") == null) || (localStorage.getItem("date_font_url_value") == '')) {
        var asa_date_font_url = 'https://fonts.gstatic.com/s/nerkoone/v15/m8JQjfZSc7OXlB3ZMOjDd5RA.woff2';
    } else {
        var asa_date_font_url = localStorage.getItem("date_font_url_value");
    }

    document.getElementById("font_url_value").value = localStorage.getItem("font_url_value");
    document.getElementById("date_font_url_value").value = localStorage.getItem("date_font_url_value");

    custom_font.innerHTML = `@font-face {
        font-family: Asa_customfont_clock;
        src: url("${asa_font_url}");
    }

    @font-face {
        font-family: Asa_customfont_date;
        src: url("${asa_date_font_url}")
    }`

    document.getElementById("asa_header").appendChild(custom_font)
    if (localStorage.getItem("keyboard_sound_checked") === 'true') {
        document.getElementById("keysounds").innerHTML = `<source src="keypressed.wav" type="audio/wav">`;
        document.getElementById("keyboard_sound_checked").checked = true
    } else {
        document.getElementById("keyboard_sound_checked").checked = false
    }

    if (localStorage.getItem("get_title_icon_from_other_website") == 'true') {
        document.getElementById("get_title_icon_from_other_website").checked = true;
    } else {
        document.getElementById("get_title_icon_from_other_website").checked = false;
    }

    document.getElementById("newtab_icon").value = localStorage.getItem("newtab_icon")
    document.getElementById("newtab_title_name").value = localStorage.getItem("newtab_title_name");

    if ((asaChemistryClock === null) || (asaChemistryClock === 'false')) {
        document.getElementById("chemistryClockChecked").checked = false
    } else {
        document.getElementById("chemistryClockChecked").checked = true
    };

    if (localStorage.getItem("asaWallpapaerVolume") === null) { localStorage.setItem("asaWallpapaerVolume", 50) };
    if (document.getElementById("display_video_checked").checked === true) {
        document.getElementById("WallpaperVolume").value = localStorage.getItem("asaWallpapaerVolume");
        document.getElementById("WallpaperValueLable").innerHTML = `Wallpaper Sound Volume ${localStorage.getItem("asaWallpapaerVolume")}%:`
        document.getElementById("asa_display_live_wallpaper").volume = localStorage.getItem("asaWallpapaerVolume") / 100;
        document.getElementById("WallpaperVolume").oninput = () => {
            let sliderValue = document.getElementById("WallpaperVolume").value;
            document.getElementById("WallpaperValueLable").innerHTML = `Wallpaper Sound Volume ${sliderValue}%:`
            document.getElementById("asa_display_live_wallpaper").volume = sliderValue / 100;
        }
    };

    asaSearchShortcut('');
    asaDataLoad();
    asaAddShortcut();
    detect_toggle();
}

document.getElementById("setting_button").addEventListener("click", asa_open_setting)
function asa_open_setting() {
    document.getElementById("setting_screen").style.display = 'block'
    document.getElementById("setting_screen").style.animationName = 'setting_background'
    document.getElementById("setting_screen").style.animationDuration = '1.5s'

    document.getElementById("setting_screen_panel").style.animationName = 'open_setting'
    document.getElementById("setting_screen_panel").style.animationDuration = '1.5s'
    document.getElementById("setting_screen_panel").style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);'
}
document.getElementById("close_button").addEventListener("click", asa_close_setting)
function asa_close_setting() {
    asaTab = 0;
    selectedTab();
    document.getElementById("setting_screen").style.display = 'none';
    setTimeout(asa_load_setting, 1);
}

document.getElementById("save_and_close").addEventListener("click", asa_save_setting)
function asa_save_setting() {
    localStorage.setItem("display_video_wallpaper_checked", document.getElementById("display_video_checked").checked);
    localStorage.setItem("sound_video_checked", document.getElementById("sound_video_checked").checked);

    localStorage.setItem("font_url_value", document.getElementById("font_url_value").value);
    localStorage.setItem("date_font_url_value", document.getElementById("date_font_url_value").value);

    localStorage.setItem("keyboard_sound_checked", document.getElementById("keyboard_sound_checked").checked);
    localStorage.setItem("get_title_icon_from_other_website", document.getElementById("get_title_icon_from_other_website").checked);
    localStorage.setItem("newtab_icon", document.getElementById("newtab_icon").value);
    localStorage.setItem("newtab_title_name", document.getElementById("newtab_title_name").value);
    localStorage.setItem("chemistryClockChecked", document.getElementById("chemistryClockChecked").checked);
    localStorage.setItem("asaWallpapaerVolume", document.getElementById("WallpaperVolume").value)

    location.reload();
}

document.getElementById("display_video_checked").addEventListener("click", detect_toggle);
document.getElementById("video_sound_toggle").addEventListener("click", detect_toggleVolume);

function detect_toggle() {
    const asa_toggle = document.getElementById("display_video_checked");
    const asa_volume_toggle = document.getElementById("video_sound_toggle");
    if (asa_toggle.checked == true) {
        asa_volume_toggle.style.display = 'block';
    } else {
        asa_volume_toggle.style.display = 'none';
        document.getElementById("WallpaperSliderDiv").style.display = 'none';
        return;
    }
    detect_toggleVolume();
}

function detect_toggleVolume() {
    const asa_toggle = document.getElementById("sound_video_checked");
    const asa_volume_toggle = document.getElementById("WallpaperSliderDiv");
    if (asa_toggle.checked == true) {
        asa_volume_toggle.style.display = 'block';
        document.getElementById("WallpaperVolume").value = localStorage.getItem("asaWallpapaerVolume");
        document.getElementById("WallpaperValueLable").innerHTML = `Wallpaper Sound Volume ${localStorage.getItem("asaWallpapaerVolume")}%:`
        document.getElementById("asa_display_live_wallpaper").volume = localStorage.getItem("asaWallpapaerVolume") / 100;
        document.getElementById("WallpaperVolume").oninput = () => {
            let sliderValue = document.getElementById("WallpaperVolume").value;
            document.getElementById("WallpaperValueLable").innerHTML = `Wallpaper Sound Volume ${sliderValue}%:`
            document.getElementById("asa_display_live_wallpaper").volume = sliderValue / 100;
        }
    } else {
        asa_volume_toggle.style.display = 'none';
    }
}

let asaTab = 0;
selectedTab = () => {
    if (asaTab === 0) {
        document.getElementById("background_section").style.display = 'block';
        document.getElementById("bg_tab").classList.add('button_tab_active');
    } else {
        document.getElementById("background_section").style.display = 'none';
        document.getElementById("bg_tab").classList.remove('button_tab_active');
    }

    if (asaTab === 1) {
        document.getElementById("shortcut_section").style.display = 'block';
        document.getElementById("shortcutNoticationSection").style.display = 'block';
        document.getElementById("shortcut_tab").classList.add('button_tab_active');
        document.getElementById("shortcutNoticationSection").style.animation = '';
    } else {
        document.getElementById("shortcut_section").style.display = 'none';
        document.getElementById("shortcutNoticationSection").style.display = 'none';
        document.getElementById("shortcut_tab").classList.remove('button_tab_active');
    }

    if (asaTab === 2) {
        document.getElementById("general_section").style.display = 'block';
        document.getElementById("general_tab").classList.add('button_tab_active');
    } else {
        document.getElementById("general_section").style.display = 'none'
        document.getElementById("general_tab").classList.remove('button_tab_active');
    }

    if (asaTab === 3) {
        document.getElementById("searchQuerySection").style.display = 'block';
        document.getElementById("searchAPITab").classList.add('button_tab_active');
    } else {
        document.getElementById("searchQuerySection").style.display = 'none'
        document.getElementById("searchAPITab").classList.remove('button_tab_active');
    }

    if (asaTab === 4) {
        document.getElementById("developers_section").style.display = 'block';
        document.getElementById("developers_tab").classList.add('button_tab_active');
    } else {
        document.getElementById("developers_section").style.display = 'none'
        document.getElementById("developers_tab").classList.remove('button_tab_active');
    }
}

selectedTab()
document.getElementById("bg_tab").onclick = () => {
    asaTab = 0;
    document.getElementById("headerText").innerHTML = 'Background Settings'
    selectedTab()
}

document.getElementById("shortcut_tab").onclick = () => {
    asaTab = 1;
    document.getElementById("headerText").innerHTML = 'Custom Shortcut URL'
    selectedTab()
}

document.getElementById("general_tab").onclick = () => {
    asaTab = 2;
    document.getElementById("headerText").innerHTML = 'General Settings'
    selectedTab()
}

document.getElementById("searchAPITab").onclick = () => {
    asaTab = 3;
    document.getElementById("headerText").innerHTML = 'Custom Search Engine'
    selectedTab()
}

document.getElementById("developers_tab").onclick = () => {
    asaTab = 4;
    document.getElementById("headerText").innerHTML = 'Extension Developers'
    selectedTab()
}

document.getElementById("openBGOption").onclick = () => {
    window.open('../backgroundSave/backgroundoption.html')
}

//Wallpaper
if (JSON.parse(localStorage.getItem("asaBGData") === null)) {
    var asaRandom = [
        ''
    ]
} else {
    var asaRandom = JSON.parse(localStorage.getItem("asaBGData"));
}

let randomBGNum = Math.floor((Math.random() * asaRandom.length));

if (asaRandom.length === 0) {
    document.getElementById("image_background").style.backgroundImage = `url("https://pbs.twimg.com/media/FD1MAvjWEAM872U?format=jpg&name=large")`
} else {
    if (asaRandom[randomBGNum].slice(' ') === '') {
        document.getElementById("image_background").style.backgroundImage = `url("https://pbs.twimg.com/media/FD1MAvjWEAM872U?format=jpg&name=large")`
    } else {
        document.getElementById("image_background").style.backgroundImage = `url("${asaRandom[randomBGNum]}")`
    }
}

asaCreditAPI()