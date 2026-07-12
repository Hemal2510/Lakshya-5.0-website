import ShapeGrid from "./ShapeGrid";
import SparksBackground from "./SparksBackground";

export default function Background({
  fixed = true,
}: {
  fixed?: boolean;
}) {
  return (
    <div className={fixed ? "fixed inset-0 -z-10" : "absolute inset-0"}>
      <ShapeGrid
        speed={0.5}
        squareSize={23}
        direction="up"
        borderColor="#600707"
        hoverFillColor="#c3621f"
        shape="hexagon"
        hoverTrailAmount={2}
        showGradient={fixed}
      />

    </div>
  );
}