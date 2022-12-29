// Get The URL
const site = window.location.hostname

// alert("Injector - The JavaScript has been injected to: " + site + " 🤖")

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

// JS Codes For youtube.com
if (site.includes("youtube.com")) {
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Raleway");

        * {
            font-family: "Raleway" !important;
            //color: #6830C9 !important;
        }

        ytd-channel-about-metadata-renderer {
            zoom: 1.6;
        }

        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.3;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    // Create_Custom_Element(
    //     "div",
    //     "class",
    //     "js-custom-element",
    //     "My Custom JS Element 2"
    // )
}

// JS Codes For google.com
if (site.includes("google.com")) {
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Raleway");

        * {
            font-family: "Raleway" !important;
            //color: #6830C9 !important;
        }

        ytd-channel-about-metadata-renderer {
            zoom: 1.6;
        }

        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.3;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    // Create_Custom_Element(
    //     "div",
    //     "class",
    //     "js-custom-element",
    //     "My Custom JS Element 2"
    // )
}

// JS Codes For microsoft.com
if (site.includes("microsoft.com")) {
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Tauri");

        * {
            font-family: "Tauri" !important;
            color: #363636 !important;
        }

        ytd-channel-about-metadata-renderer {
            zoom: 1.6;
        }

        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.3;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    // Create_Custom_Element(
    //     "div",
    //     "class",
    //     "js-custom-element",
    //     "My Custom JS Element 2"
    // )
}
//Javascript for Roblox
if (site.includes("roblox.com")) {
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Nokora");

        * {
            font-family: "Nokora" !important;
            //color: #474747 !important;
        }

        ytd-channel-about-metadata-renderer {
            zoom: 1.6;
        }

        #meta.ytd-c4-tabbed-header-renderer {
            zoom: 1.3;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    // Create_Custom_Element(
    //     "div",
    //     "class",
    //     "js-custom-element",
    //     "My Custom JS Element 2"
    // )
}
