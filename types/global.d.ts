// 不能写import export，tsc编译器将会把当前文件视为一个模块
declare const wxx: any;

declare module "wx" {
    declare const id: string
    declare function getMsg(id: string): void
}