import { compareVersion } from './functions'

class Version {
  private _v: string
  constructor(public v: string) {
    this._v = v
  }

  set value(v: string) {
    this._v = v
  }

  get value() {
    return this._v
  }

  static valid(v: string): boolean {
    return /^\d+(\.\d+){0,2}$/.test(v)
  }

  static compare(v1: string, v2: string) {
    return compareVersion(v1, v2)
  }

  /**
   * is v1 < v2
   */
  static isLt(v1: string, v2: string): boolean {
    return this.compare(v1, v2) === -1
  }

  /**
   * is v1 <= v2
   */
  static isLte(v1: string, v2: string): boolean {
    return this.compare(v1, v2) !== 1
  }

  /**
   * is v1 > v2
   */
  static isGt(v1: string, v2: string): boolean {
    return this.compare(v1, v2) === 1
  }

  /**
   * is v1 >= v2
   */
  static isGte(v1: string, v2: string): boolean {
    return this.compare(v1, v2) !== -1
  }

  /**
   * is v1 === v2
   */
  static isEq(v1: string, v2: string): boolean {
    return this.compare(v1, v2) === 0
  }

  lt(v: string): boolean {
    return compareVersion(this._v, v) === -1
  }

  lte(v: string): boolean {
    return compareVersion(this._v, v) !== 1
  }

  gt(v: string): boolean {
    return compareVersion(this._v, v) === 1
  }

  gte(v: string): boolean {
    return compareVersion(this._v, v) !== -1
  }

  eq(v: string): boolean {
    return compareVersion(this._v, v) === 0
  }
}

export function version(v: string) {
  return new Version(v)
}

export default Version
