class Pluck {
    _object;

    constructor(data) {
        this._object = data;
    }

    static load(data) {
        return new Pluck(data);
    }

    /**
     * Pick data by key.
     * - If no key is specified, this will return all objects.
     * @param {string} key 
     * @returns
     */
    get(key = null) {
        if (!key)
            return this._object;

        const keys = String(key).split('.');
        var value;
        for (const k of keys) {
            value = !value ? this._object[k] : value[k];
            if (value === undefined)
                break;
        }
        return value;
    }

    /**
     * Pick data by multiple keys.
     * @param  {...string} keys 
     * @returns 
     */
    getMultiple(...keys) {
        return keys.map(key => this.get(key));
    }
}

module.exports = Pluck;
