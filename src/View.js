const View = {
    render({minutes, seconds}) {
        document.body.innerHTML = `            
            <p>MEU BIG OVO</p>
            <span>${minutes}:${seconds}</span>
        `;
    }
}

export { View };