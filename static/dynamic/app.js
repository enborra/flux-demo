


const Widget = Object.create({
    create(demoId) {
        const wdg = document.createElement("div");
        wdg.classList.add("demo-box");
        $(wdg).attr('id', 'demo-'+demoId);
        return wdg;
    }
});



const initWhenReady = () => {
    removeEventListener("DOMContentLoaded", initWhenReady);

    const myWidgetInstance = Widget.create("123456");
    const id = `demo-box-dynamic`;

    // Get the current live url based on the origin script embed's tag id

    var scriptElement = document.getElementById('demo-box-dyn-src');
    var loc = scriptElement.src;
    currDir = loc.substring(0, loc.lastIndexOf("/")) + '/';

    // Load an html file from origin, based on that url

    $(myWidgetInstance).load( currDir+'index.html' );

    // Add the widget to the dom, based on a parent div with a pre-set id

    document.getElementById(id).appendChild(myWidgetInstance);
};

addEventListener('DOMContentLoaded', initWhenReady);