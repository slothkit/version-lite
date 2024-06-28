![NPM Version](https://img.shields.io/npm/v/%40slothkit%2Fversion-lite)
![GitHub last commit](https://img.shields.io/github/last-commit/slothkit/version-lite)
![NPM Downloads](https://img.shields.io/npm/d18m/%40slothkit%2Fversion-lite)

# Version Lite

Version Lite 是一个轻量级的 JavaScript 库，旨在轻松验证和比较版本号。它提供了一些简单直观的 API，有效地处理版本字符串。

## 特性

- **版本验证**：检查版本字符串是否有效。
- **版本比较**：比较两个版本字符串以确定它们的顺序。
- **实例方法**：方便的方法来比较版本实例与另一个版本字符串。

## 安装

你可以通过 npm 安装 Version Lite：

```bash
npm install @slothkit/version-lite
```

## 使用

### 导入库

```javascript
import Version, { version } from '@slothkit/version-lite';
```

### 创建版本实例

```javascript
const v1 = version('1.2.3');
const v2 = new Version('4.5.6');
```

### 验证版本

```javascript
console.log(Version.valid('1.2.3')); // true
console.log(Version.valid('1.2')); // true
console.log(Version.valid('1.2.3.4')); // false
```

### 比较版本

```javascript
console.log(Version.compare('1.2.3', '4.5.6')); // -1
console.log(Version.compare('1.2.3', '1.2.3')); // 0
console.log(Version.compare('4.5.6', '1.2.3')); // 1
```

### 使用静态比较方法

```javascript
console.log(Version.isLt('1.2.3', '4.5.6')); // true
console.log(Version.isLte('1.2.3', '4.5.6')); // true
console.log(Version.isGt('4.5.6', '1.2.3')); // true
console.log(Version.isGte('4.5.6', '1.2.3')); // true
console.log(Version.isEq('1.2.3', '1.2.3')); // true
```

### 使用实例比较方法

```javascript
const v1 = version('1.2.3');
console.log(v1.lt('4.5.6')); // true
console.log(v1.lte('4.5.6')); // true
console.log(v1.gt('4.5.6')); // false
console.log(v1.gte('4.5.6')); // false
console.log(v1.eq('1.2.3')); // true
```

## API 文档

### `Version` 类

- **构造函数**：`new Version(v: string)`
  - 使用给定的版本字符串创建一个新的 `Version` 实例。

- **静态方法**：
  - `valid(v: string): boolean`
    - 检查提供的版本字符串是否有效。
  - `compare(v1: string, v2: string): number`
    - 比较两个版本字符串。如果 `v1` 小于 `v2`，返回 `-1`；如果它们相等，返回 `0`；如果 `v1` 大于 `v2`，返回 `1`。
  - `isLt(v1: string, v2: string): boolean`
    - 检查 `v1` 是否小于 `v2`。
  - `isLte(v1: string, v2: string): boolean`
    - 检查 `v1` 是否小于或等于 `v2`。
  - `isGt(v1: string, v2: string): boolean`
    - 检查 `v1` 是否大于 `v2`。
  - `isGte(v1: string, v2: string): boolean`
    - 检查 `v1` 是否大于或等于 `v2`。
  - `isEq(v1: string, v2: string): boolean`
    - 检查 `v1` 是否等于 `v2`。

- **实例方法**：
  - `lt(v: string): boolean`
    - 检查实例版本是否小于 `v`。
  - `lte(v: string): boolean`
    - 检查实例版本是否小于或等于 `v`。
  - `gt(v: string): boolean`
    - 检查实例版本是否大于 `v`。
  - `gte(v: string): boolean`
    - 检查实例版本是否大于或等于 `v`。
  - `eq(v: string): boolean`
    - 检查实例版本是否等于 `v`。

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。
