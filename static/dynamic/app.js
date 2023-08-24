const Widget = Object.create({
    create(chatId) {
        const wdg = document.createElement("div");
        wdg.classList.add("chat-box");
        wdg.innerHTML = `<h1>Chat: ${ chatId }</h1>`;
        // Load your chat data into UI
        return wdg;
    }
});

const myWidgetInstance = Widget.create("chat-12345");
const id = `chat-${ Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) }`;
document.write(`<div id="${ id }"></div>`);
document.getElementById(id).appendChild(myWidgetInstance);