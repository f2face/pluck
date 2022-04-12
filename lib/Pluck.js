class Pluck {
    _object;
    _alwaysReturnsPluckObject;

    /**
     * Instantiate `Pluck` object.
     * @param {object | Array} data - JSON object or array.
     * @param {*} alwaysReturnsPluckObject - If set to `true`, method `get` and `getMultiple` will return `Pluck` object.
     */
    constructor(data, alwaysReturnsPluckObject = false) {
        this._object = data;
        this._alwaysReturnsPluckObject = alwaysReturnsPluckObject === true;
    }

    /**
     * Instantiate `Pluck` object.
     * @param {object | Array} data - JSON object or array.
     * @param {*} alwaysReturnsPluckObject - If set to `true`, method `get` and `getMultiple` will return `Pluck` object.
     * @returns {Pluck} `Pluck` object.
     */
    static load(data, alwaysReturnsPluckObject = false) {
        return new Pluck(data, alwaysReturnsPluckObject);
    }

    /**
     * Pick data by key.
     * - Key is `string` with `.` as delimiter.
     * - If no key is specified, this will return all objects.
     * @param {string} key 
     * @returns {Pluck|object}
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

        return this._alwaysReturnsPluckObject ? Pluck.load(value, this._alwaysReturnsPluckObject) : value;
    }

    /**
     * Pick data by multiple keys.
     * @param {...string} keys - List of keys.
     * @returns {Pluck[]|object[]}
     */
    getMultiple(...keys) {
        return keys.map(key => this.get(key));
    }
}

module.exports = Pluck;
