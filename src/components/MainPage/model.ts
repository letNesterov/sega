export interface IRoadMapBlockProps {
  id: number;
  photo: string;
  onOpenModal: (index: number) => void;
}

export interface IPositionState {
  startX: number;
  startY: number;
}

export interface IRoadProps extends IPositionState {
  id: number;
  positions: IPositionState[];
}

export interface IPhotoData {
  image: string;
  text: string;
  id: number;
}
