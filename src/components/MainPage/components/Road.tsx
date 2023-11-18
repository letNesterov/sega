import { FC, memo, useEffect, useRef } from "react";

import { IMAGE_ID } from "../MainPage";
import { IRoadProps } from "../model";
import { CanvasStyled, RoadWrapper } from "../styled";

const STROKE_INACCURACY = 10;
const MID_X = 40;
const MID_Y = 100;

export const Road: FC<IRoadProps> = memo(
  ({ id, startX, startY, positions }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      if (canvasRef.current) {
        const nextElement = document.getElementById(`${IMAGE_ID}${id + 1}`);

        if (nextElement) {
          const ctx = canvasRef.current.getContext("2d")!;

          const nextElementFromTop = nextElement.offsetTop;
          const nextElementFromLeft =
            nextElement.offsetLeft +
            nextElement.offsetWidth / 2 -
            STROKE_INACCURACY;

          ctx.canvas.height = nextElementFromTop + nextElement.offsetWidth;
          ctx.canvas.width = nextElement.parentElement!.offsetWidth;
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
          const midX = startX + MID_X;
          const midY = startY + MID_Y;

          ctx.beginPath();
          ctx.moveTo(startX, startY - STROKE_INACCURACY);
          ctx.quadraticCurveTo(
            midX,
            midY,
            nextElementFromLeft,
            nextElementFromTop + STROKE_INACCURACY
          );
          ctx.stroke();
        }
      }
    }, [startX, startY, id, positions]);

    if (id === positions.length - 1) {
      return null;
    }

    return (
      <RoadWrapper>
        <CanvasStyled ref={canvasRef}></CanvasStyled>
      </RoadWrapper>
    );
  }
);
