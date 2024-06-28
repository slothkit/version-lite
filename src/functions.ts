/**
 * compare version, support x.y.z, x.y, x
 *
 * return 1 if version1 > version2
 *
 * return -1 if version1 < version2
 *
 * return 0 if version1 === version2
 */
export function compareVersion(version1: string, version2: string) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10)
    const num2 = parseInt(v2[i], 10)
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}
