/**
 * compare version, support x.y.z, x.y, x
 *
 * return 1 if version1 > version2
 *
 * return -1 if version1 < version2
 *
 * return 0 if version1 === version2
 */
export declare function compareVersion(version1: string, version2: string): 0 | 1 | -1;
