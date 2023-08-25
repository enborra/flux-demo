const Widget = Object.create({
    create(demoId) {
        const wdg = document.createElement("div");

        wdg.classList.add("demo-box");
        wdg.innerHTML = `<h2>Dynamic demo widget: ${ demoId }</h2>`;
        // Load your chat data into UI
        return wdg;
    }
});

// const myWidgetInstance = Widget.create("chat-123456");

// const id = `chat-${ Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }`;
// document.write(`<div id="${ id }"></div>`);
// document.getElementById(id).appendChild(myWidgetInstance);




const initWhenReady = () => {
    removeEventListener("DOMContentLoaded", initWhenReady);
    
    // Array.prototype.forEach.call(document.querySelectorAll(".demo-box"), ele => {
    //     const myWidgetInstance = Widget.create(ele.dataset.chatid);
    //     ele.appendChild(myWidgetInstance);
    // });

    const myWidgetInstance = Widget.create("demo-123456");

    const id = `demo-box-dynamic`;
    // document.write(`<div id="${ id }"></div>`);
    document.getElementById(id).appendChild(myWidgetInstance);

    var scriptElement = document.getElementById('demo-box-dyn-src');
    var loc = scriptElement.src;
    console.log( loc.substring(0, loc.lastIndexOf("/")) );

    $('#test-block').load('//flux-app-p5g3r.ondigitalocean.app/widgets/dynamic/index.html');
};

addEventListener('DOMContentLoaded', initWhenReady);