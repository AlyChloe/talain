const pagePrototype = {

};

export const create = function () {
    const state = Object.create(pagePrototype);

    return state;
}
