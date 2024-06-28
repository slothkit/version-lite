import { compareVersion } from '../functions'

describe('compareVersion', () => {
  test('should return 0 if versions are equal', () => {
    expect(compareVersion('1.0.0', '1.0.0')).toBe(0)
  })

  test('should return 1 if version1 is greater than version2', () => {
    expect(compareVersion('1.0.1', '1.0.0')).toBe(1)
  })

  test('should return -1 if version1 is less than version2', () => {
    expect(compareVersion('1.0', '1.0.1')).toBe(-1)
  })

  test('should handle versions with different lengths', () => {
    expect(compareVersion('1.0', '1.0.0')).toBe(0)
    expect(compareVersion('1.2', '1.1.5')).toBe(1)
    expect(compareVersion('3.0.0', '3')).toBe(0)
  })
})