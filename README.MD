![NPM Version](https://img.shields.io/npm/v/%40slothkit%2Fversion-lite)
![GitHub last commit](https://img.shields.io/github/last-commit/slothkit/version-lite)
![NPM Downloads](https://img.shields.io/npm/d18m/%40slothkit%2Fversion-lite)

# Version Lite

Version Lite is a lightweight JavaScript library designed for easy version validation and comparison. It provides a simple and intuitive API to handle version strings effectively.

## Features

- **Version Validation**: Check if a version string is valid.
- **Version Comparison**: Compare two version strings to determine their order.
- **Instance Methods**: Convenient methods to compare the version instance with another version string.

## Installation

You can install Version Lite via npm:

```bash
npm install @slothkit/version-lite
```

## Usage

### Importing the Library

```javascript
import Version, { version } from '@slothkit/version-lite';
```

### Creating a Version Instance

```javascript
const v1 = version('1.2.3');
const v2 = new Version('4.5.6');
```

### Validating a Version

```javascript
console.log(Version.valid('1.2.3')); // true
console.log(Version.valid('1.2')); // true
console.log(Version.valid('1.2.3.4')); // false
```

### Comparing Versions

```javascript
console.log(Version.compare('1.2.3', '4.5.6')); // -1
console.log(Version.compare('1.2.3', '1.2.3')); // 0
console.log(Version.compare('4.5.6', '1.2.3')); // 1
```

### Using Static Comparison Methods

```javascript
console.log(Version.isLt('1.2.3', '4.5.6')); // true
console.log(Version.isLte('1.2.3', '4.5.6')); // true
console.log(Version.isGt('4.5.6', '1.2.3')); // true
console.log(Version.isGte('4.5.6', '1.2.3')); // true
console.log(Version.isEq('1.2.3', '1.2.3')); // true
```

### Using Instance Comparison Methods

```javascript
const v1 = version('1.2.3');
console.log(v1.lt('4.5.6')); // true
console.log(v1.lte('4.5.6')); // true
console.log(v1.gt('4.5.6')); // false
console.log(v1.gte('4.5.6')); // false
console.log(v1.eq('1.2.3')); // true
```

## API Documentation

### `Version` Class

- **Constructor**: `new Version(v: string)`
  - Creates a new `Version` instance with the given version string.

- **Static Methods**:
  - `valid(v: string): boolean`
    - Checks if the provided version string is valid.
  - `compare(v1: string, v2: string): number`
    - Compares two version strings. Returns `-1` if `v1` is less than `v2`, `0` if they are equal, and `1` if `v1` is greater than `v2`.
  - `isLt(v1: string, v2: string): boolean`
    - Checks if `v1` is less than `v2`.
  - `isLte(v1: string, v2: string): boolean`
    - Checks if `v1` is less than or equal to `v2`.
  - `isGt(v1: string, v2: string): boolean`
    - Checks if `v1` is greater than `v2`.
  - `isGte(v1: string, v2: string): boolean`
    - Checks if `v1` is greater than or equal to `v2`.
  - `isEq(v1: string, v2: string): boolean`
    - Checks if `v1` is equal to `v2`.

- **Instance Methods**:
  - `lt(v: string): boolean`
    - Checks if the instance version is less than `v`.
  - `lte(v: string): boolean`
    - Checks if the instance version is less than or equal to `v`.
  - `gt(v: string): boolean`
    - Checks if the instance version is greater than `v`.
  - `gte(v: string): boolean`
    - Checks if the instance version is greater than or equal to `v`.
  - `eq(v: string): boolean`
    - Checks if the instance version is equal to `v`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
