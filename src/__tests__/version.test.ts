import Version, { version } from '../version'

describe('Version', () => {
  describe('constructor', () => {
    test('should set the value correctly', () => {
      const v = new Version('1.0.0')
      expect(v.value).toBe('1.0.0')
    })

    test('version function should return an instance of Version', () => {
      const v = version('1.0.0')
      expect(v).toBeInstanceOf(Version)
    })
  })

  describe('value', () => {
    test('should get the value correctly', () => {
      const v = new Version('1.0.0')
      expect(v.value).toBe('1.0.0')
    })

    test('should set the value correctly', () => {
      const v = new Version('1.0.0')
      v.value = '2.0.0'
      expect(v.value).toBe('2.0.0')
    })
  })

  describe('valid', () => {
    test('should return true for valid versions', () => {
      expect(Version.valid('1.0.0')).toBe(true)
      expect(Version.valid('1.0')).toBe(true)
      expect(Version.valid('1')).toBe(true)
    })

    test('should return false for invalid versions', () => {
      expect(Version.valid('1.0.0.0')).toBe(false)
      expect(Version.valid('1.0.0.0.0')).toBe(false)
      expect(Version.valid('1.0.0.0a')).toBe(false)
    })
  })

  describe('compare', () => {
    test('should return the correct comparison result', () => {
      expect(Version.compare('1.0.0', '1.0.0')).toBe(0)
      expect(Version.compare('1.0.1', '1.0.0')).toBe(1)
      expect(Version.compare('1.0', '1.0.1')).toBe(-1)
    })
  })

  describe('isLt', () => {
    test('should return true if v1 is less than v2', () => {
      expect(Version.isLt('1.0.0', '1.0.1')).toBe(true)
    })

    test('should return false if v1 is greater than or equal to v2', () => {
      expect(Version.isLt('1.0.0', '1.0.0')).toBe(false)
      expect(Version.isLt('1.0.1', '1.0.0')).toBe(false)
    })
  })

  describe('isLte', () => {
    test('should return true if v1 is less than or equal to v2', () => {
      expect(Version.isLte('1.0.0', '1.0.1')).toBe(true)
      expect(Version.isLte('1.0.0', '1.0.0')).toBe(true)
    })

    test('should return false if v1 is greater than v2', () => {
      expect(Version.isLte('1.0.1', '1.0.0')).toBe(false)
    })
  })

  describe('isGt', () => {
    test('should return true if v1 is greater than v2', () => {
      expect(Version.isGt('1.0.1', '1.0.0')).toBe(true)
    })

    test('should return false if v1 is less than or equal to v2', () => {
      expect(Version.isGt('1.0.0', '1.0.0')).toBe(false)
      expect(Version.isGt('1.0.0', '1.0.1')).toBe(false)
    })
  })

  describe('isGte', () => {
    test('should return true if v1 is greater than or equal to v2', () => {
      expect(Version.isGte('1.0.1', '1.0.0')).toBe(true)
      expect(Version.isGte('1.0.0', '1.0.0')).toBe(true)
    })

    test('should return false if v1 is less than v2', () => {
      expect(Version.isGte('1.0.0', '1.0.1')).toBe(false)
    })
  })

  describe('isEq', () => {
    test('should return true if v1 is equal to v2', () => {
      expect(Version.isEq('1.0.0', '1.0.0')).toBe(true)
    })

    test('should return false if v1 is not equal to v2', () => {
      expect(Version.isEq('1.0.0', '1.0.1')).toBe(false)
    })
  })

  describe('lt', () => {
    test('should return true if the instance value is less than the given version', () => {
      const v = new Version('1.0.0')
      expect(v.lt('1.0.1')).toBe(true)
    })

    test('should return false if the instance value is greater than or equal to the given version', () => {
      const v = new Version('1.0.0')
      expect(v.lt('1.0.0')).toBe(false)
      expect(v.lt('0.9.9')).toBe(false)
    })
  })

  describe('lte', () => {
    test('should return true if the instance value is less than or equal to the given version', () => {
      const v = new Version('1.0.0')
      expect(v.lte('1.0.1')).toBe(true)
      expect(v.lte('1.0.0')).toBe(true)
    })

    test('should return false if the instance value is greater than the given version', () => {
      const v = new Version('1.0.0')
      expect(v.lte('0.9.9')).toBe(false)
    })
  })

  describe('gt', () => {
    test('should return true if the instance value is greater than the given version', () => {
      const v = new Version('1.0.1')
      expect(v.gt('1.0.0')).toBe(true)
    })

    test('should return false if the instance value is less than or equal to the given version', () => {
      const v = new Version('1.0.0')
      expect(v.gt('1.0.0')).toBe(false)
      expect(v.gt('1.0.1')).toBe(false)
    })
  })

  describe('gte', () => {
    test('should return true if the instance value is greater than or equal to the given version', () => {
      const v = new Version('1.0.1')
      expect(v.gte('1.0.0')).toBe(true)
      expect(v.gte('1.0.1')).toBe(true)
    })

    test('should return false if the instance value is less than the given version', () => {
      const v = new Version('1.0.0')
      expect(v.gte('1.0.1')).toBe(false)
    })
  })

  describe('eq', () => {
    test('should return true if the instance value is equal to the given version', () => {
      const v = new Version('1.0.0')
      expect(v.eq('1.0.0')).toBe(true)
    })

    test('should return false if the instance value is not equal to the given version', () => {
      const v = new Version('1.0.0')
      expect(v.eq('1.0.1')).toBe(false)
    })
  })
})