const DrawerInitiator = {
    init({ button, drawer }) {
        button.addEventListener('click', (event) => {
            this._openDrawer(event, button, drawer);
        });
    },

    _openDrawer(event, button, drawer) {
        event.stopPropagation();
        button.classList.toggle('active');
        drawer.classList.toggle('active');
    },
};


export default DrawerInitiator;