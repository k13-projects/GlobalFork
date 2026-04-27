import VendorPiazzaWalk from "./VendorPiazzaWalk";
import VendorGrid from "./VendorGrid";

/**
 * Vendors entry point — composes both layouts and lets CSS pick
 * the right one for the viewport:
 *  - desktop (md+): pinned horizontal piazza walk
 *  - mobile: vertical card grid
 *
 * Both render to DOM but only one is visible at a time, so SSR is
 * deterministic and there's no hydration flash.
 */
export default function Vendors() {
  return (
    <>
      <VendorPiazzaWalk />
      <VendorGrid />
    </>
  );
}
