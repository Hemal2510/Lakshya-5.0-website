import ShapeGrid from "./ShapeGrid";

export default function Background({
  fixed = true,
}: {
  fixed?: boolean;
}) {
  return (
    <div className={fixed ? "fixed inset-0 -z-10 bg-[#070402]" : "absolute inset-0 bg-[#070402]"}>
      <ShapeGrid
        speed={0.5}
        squareSize={24}
        direction="up"
        borderColor="#7a3212"
        hoverFillColor="#e67e22"
        shape="hexagon"
        hoverTrailAmount={3}
        showGradient={fixed}
        gradientEdgeColor="#070402"
      />
    </div>
  );
}