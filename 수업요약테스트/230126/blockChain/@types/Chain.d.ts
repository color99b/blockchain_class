declare interface Iconfig {
  DAI: number;
  averageGenerationTime: number;
}

declare interface IChain {
  //함수도 interface에 추가시킨다,
  getChain: IBlock[];
  lastBlock: IBlock;
  config: Iconfig;
  adjustmentBlock: IBlock;
  addBlock(_data: string[]): IBlock | null;
  add2Chain(_newBlock: IBlock): IBlock | null;
}
