


const Widget = Object.create({
    create(demoId) {
        const wdg = document.createElement("div");

        wdg.classList.add("demo-box");
        wdg.innerHTML = `<h2>Dynamic demo widget: ${ demoId }</h2>`;
        // Load your chat data into UI
        return wdg;
    }
});



const initWhenReady = () => {
    removeEventListener("DOMContentLoaded", initWhenReady);

    const myWidgetInstance = Widget.create("demo-123456");

    const id = `demo-box-dynamic`;
    // document.write(`<div id="${ id }"></div>`);
    var scriptElement = document.getElementById('demo-box-dyn-src');
    var loc = scriptElement.src;
    currDir = loc.substring(0, loc.lastIndexOf("/")) + '/';

    // $('#test-block').load(currDir + 'index.html');
    myWidgetInstance.load( currDir+'index.html' );

    document.getElementById(id).appendChild(myWidgetInstance);
};

addEventListener('DOMContentLoaded', initWhenReady);