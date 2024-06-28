/**
 * compare version, support x.y.z, x.y, x
 *
 * return 1 if version1 > version2
 *
 * return -1 if version1 < version2
 *
 * return 0 if version1 === version2
 */
function compareVersion(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i], 10);
        const num2 = parseInt(v2[i], 10);
        if (num1 > num2) {
            return 1;
        }
        else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}

class Version {
    v;
    _v;
    constructor(v) {
        this.v = v;
        this._v = v;
    }
    set value(v) {
        this._v = v;
    }
    get value() {
        return this._v;
    }
    static valid(v) {
        return /^\d+(\.\d+){0,2}$/.test(v);
    }
    static compare(v1, v2) {
        return compareVersion(v1, v2);
    }
    /**
     * is v1 < v2
     */
    static isLt(v1, v2) {
        return this.compare(v1, v2) === -1;
    }
    /**
     * is v1 <= v2
     */
    static isLte(v1, v2) {
        return this.compare(v1, v2) !== 1;
    }
    /**
     * is v1 > v2
     */
    static isGt(v1, v2) {
        return this.compare(v1, v2) === 1;
    }
    /**
     * is v1 >= v2
     */
    static isGte(v1, v2) {
        return this.compare(v1, v2) !== -1;
    }
    /**
     * is v1 === v2
     */
    static isEq(v1, v2) {
        return this.compare(v1, v2) === 0;
    }
    lt(v) {
        return compareVersion(this._v, v) === -1;
    }
    lte(v) {
        return compareVersion(this._v, v) !== 1;
    }
    gt(v) {
        return compareVersion(this._v, v) === 1;
    }
    gte(v) {
        return compareVersion(this._v, v) !== -1;
    }
    eq(v) {
        return compareVersion(this._v, v) === 0;
    }
}
function version(v) {
    return new Version(v);
}

export { Version as default, version };
