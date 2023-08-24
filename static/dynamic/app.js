const Widget = Object.create({
    create(demoId) {
        const wdg = document.createElement("div");

        wdg.classList.add("demo-box");
        wdg.innerHTML = `<h2>Dynamic demo widget: ${ demoId }</h2>`;
        // Load your chat data into UI
        return wdg;
    }
});

const myWidgetInstance = Widget.create("chat-123456");

const id = `chat-${ Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }`;
document.write(`<div id="${ id }"></div>`);
document.getElementById(id).appendChild(myWidgetInstance);