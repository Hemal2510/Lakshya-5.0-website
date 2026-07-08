import ShapeGrid from "./ShapeGrid";
import SparksBackground from "./SparksBackground";

export default function Background() {
    return (
        <div className="fixed  inset-0 -z-10">
            <ShapeGrid
                speed={0.5}
                squareSize={23}
                direction="up"
                borderColor="#600707"
                hoverFillColor="#c3621f"
                shape="hexagon"
                hoverTrailAmount={2}
            />

            <SparksBackground />

            <div className="pointer-events-none absolute inset-0">

            </div>

        </div>
    );
}