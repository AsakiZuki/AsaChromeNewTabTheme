document.getElementById("asafliter_setting_screen").addEventListener("click", asa_open_fliter_setting)
function asa_open_fliter_setting() {
    document.getElementById("clock_panel").style.display = 'none'
    document.getElementById("asa_search_panel").style.display = 'none'
    document.getElementById("asa_date_panel").style.display = 'none'
    document.getElementById("asa_setting_panel").style.display = 'none'
    document.getElementById("asa_website_shortcut").style.display = 'none'
    document.getElementById("setting_screen").style.display = 'none'
    document.getElementById("weather_panel").style.display = 'none'

    document.getElementById("background_fliter_screen").style.display = 'block'
}

document.getElementById("close_fliter_screen_bottom_left").addEventListener("click", asa_close_fliter_setting)
function asa_close_fliter_setting() {
    document.getElementById("clock_panel").style.display = 'block'
    document.getElementById("asa_search_panel").style.display = 'block'
    document.getElementById("asa_date_panel").style.display = 'block'
    document.getElementById("asa_setting_panel").style.display = 'block'
    document.getElementById("asa_website_shortcut").style.display = 'block'
    document.getElementById("weather_panel").style.display = 'block'
    document.getElementById("setting_screen").style.display = 'block'

    document.getElementById("background_fliter_screen").style.display = 'none'

    localStorage.setItem("get_brightness_slider_value", document.getElementById("get_brightness_slider_value").value)
    localStorage.setItem("get_blur_slider_value", document.getElementById("get_blur_slider_value").value)
    localStorage.setItem("get_contrast_slider_value", document.getElementById("get_contrast_slider_value").value)
    localStorage.setItem("get_grayscale_slider_value", document.getElementById("get_grayscale_slider_value").value)
    localStorage.setItem("get_hue_slider_value", document.getElementById("get_hue_slider_value").value)
    localStorage.setItem("get_invert_slider_value", document.getElementById("get_invert_slider_value").value)
    localStorage.setItem("get_saturate_slider_value", document.getElementById("get_saturate_slider_value").value)
    localStorage.setItem("get_sepia_slider_value", document.getElementById("get_sepia_slider_value").value)
}

function asa_load_filter_setting() {
    const get_brightness_slider_value = localStorage.getItem("get_brightness_slider_value");
    const get_blur_slider_value = localStorage.getItem("get_blur_slider_value");
    const get_contrast_slider_value = localStorage.getItem("get_contrast_slider_value");
    const get_grayscale_slider_value = localStorage.getItem("get_grayscale_slider_value");
    const get_hue_slider_value = localStorage.getItem("get_hue_slider_value");
    const get_invert_slider_value = localStorage.getItem("get_invert_slider_value");
    const get_saturate_slider_value = localStorage.getItem("get_saturate_slider_value");
    const get_sepia_slider_value = localStorage.getItem("get_sepia_slider_value");

    document.getElementById("image_background").style.filter = `brightness(${get_brightness_slider_value}%) blur(${(get_blur_slider_value / 50)}px) contrast(${get_contrast_slider_value}%) grayscale(${get_grayscale_slider_value}%) hue-rotate(${get_hue_slider_value}deg) invert(${get_invert_slider_value}%) saturate(${get_saturate_slider_value}%) sepia(${get_sepia_slider_value}%)`
    document.getElementById("asa_display_live_wallpaper").style.filter = `brightness(${get_brightness_slider_value}%) blur(${(get_blur_slider_value / 50)}px) contrast(${get_contrast_slider_value}%) grayscale(${get_grayscale_slider_value}%) hue-rotate(${get_hue_slider_value}deg) invert(${get_invert_slider_value}%) saturate(${get_saturate_slider_value}%) sepia(${get_sepia_slider_value}%)`

    document.getElementById("get_brightness_slider_value").value = localStorage.getItem("get_brightness_slider_value")
    document.getElementById("get_blur_slider_value").value = localStorage.getItem("get_blur_slider_value")
    document.getElementById("get_contrast_slider_value").value = localStorage.getItem("get_contrast_slider_value")
    document.getElementById("get_grayscale_slider_value").value = localStorage.getItem("get_grayscale_slider_value")
    document.getElementById("get_hue_slider_value").value = localStorage.getItem("get_hue_slider_value")
    document.getElementById("get_invert_slider_value").value = localStorage.getItem("get_invert_slider_value")
    document.getElementById("get_saturate_slider_value").value = localStorage.getItem("get_saturate_slider_value")
    document.getElementById("get_sepia_slider_value").value = localStorage.getItem("get_sepia_slider_value")

    document.getElementById("view_brightness_value").innerHTML = localStorage.getItem("get_brightness_slider_value") + '%'
    document.getElementById("view_blur_value").innerHTML = localStorage.getItem("get_blur_slider_value") + '%'
    document.getElementById("view_contrast_value").innerHTML = localStorage.getItem("get_contrast_slider_value") + '%'
    document.getElementById("view_grayscale_value").innerHTML = localStorage.getItem("get_grayscale_slider_value") + '%'
    document.getElementById("view_hue_value").innerHTML = localStorage.getItem("get_hue_slider_value") + '°'
    document.getElementById("view_invert_value").innerHTML = localStorage.getItem("get_invert_slider_value") + '%'
    document.getElementById("view_saturate_value").innerHTML = localStorage.getItem("get_saturate_slider_value") + '%'
    document.getElementById("view_sepia_value").innerHTML = localStorage.getItem("get_sepia_slider_value") + '%'

    document.getElementById("get_brightness_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_brightness_slider_value") / 2) + '%,#fff ' + (localStorage.getItem("get_brightness_slider_value") / 2) + '%,#fff 100%)'
    document.getElementById("get_blur_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_blur_slider_value") / 1) + '%,#fff ' + (localStorage.getItem("get_blur_slider_value") / 1) + '%,#fff 100%)'
    document.getElementById("get_contrast_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_contrast_slider_value") - 100) + '%,#fff ' + (localStorage.getItem("get_contrast_slider_value") - 100) + '%,#fff 100%)'
    document.getElementById("get_grayscale_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_grayscale_slider_value") / 1) + '%,#fff ' + (localStorage.getItem("get_grayscale_slider_value") / 1) + '%,#fff 100%)'
    document.getElementById("get_hue_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_hue_slider_value") / 180 * 100) + '%,#fff ' + (localStorage.getItem("get_hue_slider_value") / 180 * 100) + '%,#fff 100%)'
    document.getElementById("get_invert_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_invert_slider_value") / 1) + '%,#fff ' + (localStorage.getItem("get_invert_slider_value") / 1) + '%,#fff 100%)'
    document.getElementById("get_saturate_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_saturate_slider_value") / 2) + '%,#fff ' + (localStorage.getItem("get_saturate_slider_value") / 2) + '%,#fff 100%)'
    document.getElementById("get_sepia_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (localStorage.getItem("get_sepia_slider_value") / 1) + '%,#fff ' + (localStorage.getItem("get_sepia_slider_value") / 1) + '%,#fff 100%)'

    if (get_brightness_slider_value == null) {
        default_filter_setting();
    }
}

document.getElementById("get_brightness_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_brightness_value").innerHTML = document.getElementById("get_brightness_slider_value").value + '%';
    document.getElementById("get_brightness_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_brightness_slider_value").value / 2) + '%,#fff ' + (document.getElementById("get_brightness_slider_value").value / 2) + '%,#fff 100%)'
}
document.getElementById("get_blur_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_blur_value").innerHTML = document.getElementById("get_blur_slider_value").value + '%'
    document.getElementById("get_blur_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_blur_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_blur_slider_value").value / 1) + '%,#fff 100%)'
}
document.getElementById("get_contrast_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_contrast_value").innerHTML = document.getElementById("get_contrast_slider_value").value + '%'
    document.getElementById("get_contrast_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_contrast_slider_value").value - 100) + '%,#fff ' + (document.getElementById("get_contrast_slider_value").value - 100) + '%,#fff 100%)'
}
document.getElementById("get_grayscale_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_grayscale_value").innerHTML = document.getElementById("get_grayscale_slider_value").value + '%'
    document.getElementById("get_grayscale_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_grayscale_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_grayscale_slider_value").value / 1) + '%,#fff 100%)'
}
document.getElementById("get_hue_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_hue_value").innerHTML = document.getElementById("get_hue_slider_value").value + '°'
    document.getElementById("get_hue_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_hue_slider_value").value / 180 * 100) + '%,#fff ' + (document.getElementById("get_hue_slider_value").value / 180 * 100) + '%,#fff 100%)'
}
document.getElementById("get_invert_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_invert_value").innerHTML = document.getElementById("get_invert_slider_value").value + '%'
    document.getElementById("get_invert_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_invert_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_invert_slider_value").value / 1) + '%,#fff 100%)'
}
document.getElementById("get_saturate_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_saturate_value").innerHTML = document.getElementById("get_saturate_slider_value").value + '%'
    document.getElementById("get_saturate_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_saturate_slider_value").value / 2) + '%,#fff ' + (document.getElementById("get_saturate_slider_value").value / 2) + '%,#fff 100%)'
}
document.getElementById("get_sepia_slider_value").oninput = function () {
    asa_load_preview_filter_setting();
    document.getElementById("view_sepia_value").innerHTML = document.getElementById("get_sepia_slider_value").value + '%'
    document.getElementById("get_sepia_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_sepia_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_sepia_slider_value").value / 1) + '%,#fff 100%)'
}

document.getElementById("reset_to_default_fliter_screen_bottom_left").onclick = function () {
    default_filter_setting()
}

function default_filter_setting() {
    document.getElementById("get_brightness_slider_value").value = 100
    document.getElementById("get_blur_slider_value").value = 0
    document.getElementById("get_contrast_slider_value").value = 100
    document.getElementById("get_grayscale_slider_value").value = 0
    document.getElementById("get_hue_slider_value").value = 0
    document.getElementById("get_invert_slider_value").value = 0
    document.getElementById("get_saturate_slider_value").value = 100
    document.getElementById("get_sepia_slider_value").value = 0

    document.getElementById("view_brightness_value").innerHTML = document.getElementById("get_brightness_slider_value").value + '%';
    document.getElementById("get_brightness_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_brightness_slider_value").value / 2) + '%,#fff ' + (document.getElementById("get_brightness_slider_value").value / 2) + '%,#fff 100%)'
    document.getElementById("view_blur_value").innerHTML = document.getElementById("get_blur_slider_value").value + '%'
    document.getElementById("get_blur_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_blur_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_blur_slider_value").value / 1) + '%,#fff 100%)'
    document.getElementById("view_contrast_value").innerHTML = document.getElementById("get_contrast_slider_value").value + '%'
    document.getElementById("get_contrast_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_contrast_slider_value").value - 100) + '%,#fff ' + (document.getElementById("get_contrast_slider_value").value - 100) + '%,#fff 100%)'
    document.getElementById("view_grayscale_value").innerHTML = document.getElementById("get_grayscale_slider_value").value + '%'
    document.getElementById("get_grayscale_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_grayscale_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_grayscale_slider_value").value / 1) + '%,#fff 100%)'
    document.getElementById("view_hue_value").innerHTML = document.getElementById("get_hue_slider_value").value + '°'
    document.getElementById("get_hue_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_hue_slider_value").value / 180 * 100) + '%,#fff ' + (document.getElementById("get_hue_slider_value").value / 180 * 100) + '%,#fff 100%)'
    document.getElementById("view_invert_value").innerHTML = document.getElementById("get_invert_slider_value").value + '%'
    document.getElementById("get_invert_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_invert_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_invert_slider_value").value / 1) + '%,#fff 100%)'
    document.getElementById("view_saturate_value").innerHTML = document.getElementById("get_saturate_slider_value").value + '%'
    document.getElementById("get_saturate_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_saturate_slider_value").value / 2) + '%,#fff ' + (document.getElementById("get_saturate_slider_value").value / 2) + '%,#fff 100%)'
    document.getElementById("view_sepia_value").innerHTML = document.getElementById("get_sepia_slider_value").value + '%'
    document.getElementById("get_sepia_slider_value").style.background = 'linear-gradient(to right,var(--main-color,#0095FF)0%,var(--main-color,#0095FF)' + (document.getElementById("get_sepia_slider_value").value / 1) + '%,#fff ' + (document.getElementById("get_sepia_slider_value").value / 1) + '%,#fff 100%)'

    asa_load_preview_filter_setting()
}

function asa_load_preview_filter_setting() {
    const get_brightness_slider_value = document.getElementById("get_brightness_slider_value").value;
    const get_blur_slider_value = document.getElementById("get_blur_slider_value").value / 50;
    const get_contrast_slider_value = document.getElementById("get_contrast_slider_value").value;
    const get_grayscale_slider_value = document.getElementById("get_grayscale_slider_value").value;
    const get_hue_slider_value = document.getElementById("get_hue_slider_value").value;
    const get_invert_slider_value = document.getElementById("get_invert_slider_value").value;
    const get_saturate_slider_value = document.getElementById("get_saturate_slider_value").value;
    const get_sepia_slider_value = document.getElementById("get_sepia_slider_value").value;
    document.getElementById("image_background").style.filter = `brightness(${get_brightness_slider_value}%) blur(${get_blur_slider_value}px) contrast(${get_contrast_slider_value}%) grayscale(${get_grayscale_slider_value}%) hue-rotate(${get_hue_slider_value}deg) invert(${get_invert_slider_value}%) saturate(${get_saturate_slider_value}%) sepia(${get_sepia_slider_value}%)`
    document.getElementById("asa_display_live_wallpaper").style.filter = `brightness(${get_brightness_slider_value}%) blur(${get_blur_slider_value}px) contrast(${get_contrast_slider_value}%) grayscale(${get_grayscale_slider_value}%) hue-rotate(${get_hue_slider_value}deg) invert(${get_invert_slider_value}%) saturate(${get_saturate_slider_value}%) sepia(${get_sepia_slider_value}%)`
}