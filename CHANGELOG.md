# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.6](https://github.com/es-shims/Array.prototype.concat/compare/v1.0.5...v1.0.6) - 2024-03-19

### Commits

- [actions] remove redundant finisher [`a36c200`](https://github.com/es-shims/Array.prototype.concat/commit/a36c200966512806023796cdc81c507016e37236)
- [Deps] update `call-bind`, `es-abstract` [`96556c4`](https://github.com/es-shims/Array.prototype.concat/commit/96556c4aba18fceffa4746a5889eda31c7ca4926)
- [Refactor] use `es-object-atoms`, `es-constants` where possible [`e4732d3`](https://github.com/es-shims/Array.prototype.concat/commit/e4732d3a035e49a74319a988d3a69383e07ff3e7)
- [Dev Deps] update `tape` [`851e12f`](https://github.com/es-shims/Array.prototype.concat/commit/851e12fc99f1ced117b97a3f7904824ac006bb3c)

## [v1.0.5](https://github.com/es-shims/Array.prototype.concat/compare/v1.0.4...v1.0.5) - 2024-02-04

### Commits

- [Deps] update `call-bind`, `define-properties`, `es-abstract`, `get-intrinsic` [`451da2d`](https://github.com/es-shims/Array.prototype.concat/commit/451da2da86c8ce7e2eaf2c5566444a4d86d61a72)
- [Refactor] use `es-errors` where possible, so things that only need those do not need `get-intrinsic` [`baea608`](https://github.com/es-shims/Array.prototype.concat/commit/baea60869e98df4b76248b0a31512bc13cb02e6c)
- [Deps] update `aud`, `npmignore`, `tape` [`d99f9e4`](https://github.com/es-shims/Array.prototype.concat/commit/d99f9e471ee80551bfb550dbc27fee9defa66868)

## [v1.0.4](https://github.com/es-shims/Array.prototype.concat/compare/v1.0.3...v1.0.4) - 2023-09-05

### Commits

- [Deps] update `define-properties`, `es-abstract`, `get-intrinsic` [`7b48041`](https://github.com/es-shims/Array.prototype.concat/commit/7b480417bafd09bd96995af1e611ba90c3e69430)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `tape` [`f02ab9b`](https://github.com/es-shims/Array.prototype.concat/commit/f02ab9b7be299dcd4082408210317d64cc3f24ea)
- [actions] fix permissions [`2223add`](https://github.com/es-shims/Array.prototype.concat/commit/2223add6d24b50d451990dc4537eb34f886d901d)

## [v1.0.3](https://github.com/es-shims/Array.prototype.concat/compare/v1.0.2...v1.0.3) - 2022-11-02

### Commits

- [meta] use `npmignore` to autogenerate an npmignore file [`18587c7`](https://github.com/es-shims/Array.prototype.concat/commit/18587c7b4af44eccabbc25308305d6f6e2924ed1)
- [Deps] update `es-abstract`, `get-intrinsic` [`1b6c0ff`](https://github.com/es-shims/Array.prototype.concat/commit/1b6c0ff922f896b091833c3f9bcdc4678d24ae6d)
- [actions] update rebase action to use reusable workflow [`ef0963c`](https://github.com/es-shims/Array.prototype.concat/commit/ef0963cbd28d7f44ae21bb7c331736ff2f471736)
- [Dev Deps] update `aud`, `tape` [`3a1bd46`](https://github.com/es-shims/Array.prototype.concat/commit/3a1bd469f5ff918c0ef7141801dbd49e48ec8a2b)
- [readme] link to v8 bug [`f62d746`](https://github.com/es-shims/Array.prototype.concat/commit/f62d746bd7377cd2e6dcda1a1ff6d418de5bf34e)

## [v1.0.2](https://github.com/es-shims/Array.prototype.concat/compare/v1.0.1...v1.0.2) - 2022-05-04

### Commits

- [Tests] FF 3 apparently does not support sparse arrays via syntax [`2344e8e`](https://github.com/es-shims/Array.prototype.concat/commit/2344e8e5964b8d057e801304a32e376926d8b525)
- [Fix] set `.prototype` of the implementation to `undefined` [`7f55fb0`](https://github.com/es-shims/Array.prototype.concat/commit/7f55fb0e1810c3b67ba9ef39bf11034940a4e649)
- [Deps] update `define-properties` [`5629a63`](https://github.com/es-shims/Array.prototype.concat/commit/5629a631e883c8fcd2131db61d5c15cb34f31cf8)
- [Dev Deps] update `functions-have-names` [`c1fb579`](https://github.com/es-shims/Array.prototype.concat/commit/c1fb57958ea885a790173bafb35b77fee84620fe)

## [v1.0.1](https://github.com/es-shims/Array.prototype.concat/compare/v1.0.0...v1.0.1) - 2022-05-03

### Commits

- [Fix] node 10.8+ and Chrome 68+ *also* need patching [`b39d8fb`](https://github.com/es-shims/Array.prototype.concat/commit/b39d8fb2e8343c8a6327919e6f5a1bc07e0e47a1)

## v1.0.0 - 2022-05-03

### Commits

- Initial implementation, tests, readme [`3156a82`](https://github.com/es-shims/Array.prototype.concat/commit/3156a82879c336005efc2fddf0c385b6a4b8d7df)
- Initial commit [`5cb1c95`](https://github.com/es-shims/Array.prototype.concat/commit/5cb1c959a8610a99dcc6777509f7c00265ddebee)
- npm init [`bde4095`](https://github.com/es-shims/Array.prototype.concat/commit/bde4095778e8ad03169cb2480b23cdd16e0d8bb5)
- Only apps should have lockfiles [`db3e682`](https://github.com/es-shims/Array.prototype.concat/commit/db3e682922d385535d47ded91bdbfdc0ca41c7f1)
