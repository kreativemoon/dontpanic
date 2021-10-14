import React, { FC } from "react";
import Actor from "../actor";
import useKeyPress from "@hooks/useKeyPress";
import useWalk from "@hooks/use-walk";
interface Props {
  skin: string;
}

const Player: FC<Props> = ({ skin }) => {
    const { dir, step, walk, position } = useWalk(3)
    const data = {
        h: 50,
        w: 50,
      };

    useKeyPress((e) => {
      if (e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowDown") {
        walk(e.key.replace("Arrow", "").toLowerCase());
      }
      else {
        return
      }
        e.preventDefault();
    })
    return <Actor
    sprite={`../../../imgs/${skin}.png`}
    data={ data }
    step={step}
    dir={dir}
    position={position}
    />;
}

export default Player